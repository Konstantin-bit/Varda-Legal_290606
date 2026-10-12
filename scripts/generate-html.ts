import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { siteMetadata, buildJsonLdSchema, renderStaticHtmlForLanguage } from '../src/staticContent.ts';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');

function generateHtml(lang: 'DE' | 'EN'): string {
  const meta = siteMetadata[lang];
  const schema = buildJsonLdSchema(lang);
  const staticBodyHtml = renderStaticHtmlForLanguage(lang);

  return `<!doctype html>
<html lang="${meta.htmlLang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary SEO Metadata -->
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}" />
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonicalUrl}" />
    <link rel="alternate" hreflang="de" href="${meta.hreflangDe}" />
    <link rel="alternate" hreflang="en" href="${meta.hreflangEn}" />
    <link rel="alternate" hreflang="x-default" href="${meta.hreflangXDefault}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="Varda Legal" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${meta.canonicalUrl}" />
    <meta property="og:locale" content="${meta.ogLocale}" />
    <meta property="og:locale:alternate" content="${meta.ogLocaleAlternate}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />

    <!-- Structured Data (JSON-LD) -->
    <script id="ld-json-schema" type="application/ld+json">
${JSON.stringify(schema, null, 2)}
    </script>
  </head>
  <body>
    <!-- 
      Pre-rendered Semantic Fallback Container for Search Engine Crawlers & Non-JS Clients.
      When React initializes, React mounts into #root and renders the full interactive application.
      This ensures search engine bots (Googlebot, Bingbot), AI indexing crawlers (GPTBot, ClaudeBot, PerplexityBot) 
      and Lynx/curl see full verbatim textual content, headings, and credentials in the initial HTTP response.
    -->
    <div id="root">
      ${staticBodyHtml}
    </div>

    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function build() {
  console.log('Generating pre-rendered bilingual HTML files...');

  // 1. Generate German index.html (root: https://vardalegal.com/)
  const deHtml = generateHtml('DE');
  const rootIndexHtmlPath = path.resolve(rootDir, 'index.html');
  fs.writeFileSync(rootIndexHtmlPath, deHtml, 'utf-8');
  console.log('✓ Generated German index.html at', rootIndexHtmlPath);

  // 2. Generate English en/index.html (subfolder: https://vardalegal.com/en/)
  const enHtml = generateHtml('EN');
  const enDirPath = path.resolve(rootDir, 'en');
  if (!fs.existsSync(enDirPath)) {
    fs.mkdirSync(enDirPath, { recursive: true });
  }
  const enIndexHtmlPath = path.resolve(enDirPath, 'index.html');
  fs.writeFileSync(enIndexHtmlPath, enHtml, 'utf-8');
  console.log('✓ Generated English index.html at', enIndexHtmlPath);
}

build();
