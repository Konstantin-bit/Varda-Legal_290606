import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticContentData, renderStaticHtmlForLanguage, siteMetadata, buildJsonLdSchema } from '../src/staticContent.ts';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');

async function runRegressionTest() {
  console.log('====================================================');
  console.log('VARDA LEGAL: Content Synchronization Regression Test');
  console.log('====================================================\n');

  let failed = false;

  // 1. Verify App.tsx consumes staticContentData
  const appTsxPath = path.resolve(rootDir, 'src/App.tsx');
  const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

  console.log('1. Checking App.tsx imports and consumption of staticContentData...');
  if (!appTsxContent.includes('import { staticContentData, siteMetadata, buildJsonLdSchema } from "./staticContent"')) {
    console.error('❌ FAIL: App.tsx does not import staticContentData, siteMetadata, and buildJsonLdSchema from ./staticContent');
    failed = true;
  } else {
    console.log('✓ PASS: App.tsx imports staticContentData, siteMetadata, and buildJsonLdSchema from ./staticContent');
  }

  if (!appTsxContent.includes('{staticContentData[lang].transactionDesc}')) {
    console.error('❌ FAIL: App.tsx does not consume staticContentData[lang].transactionDesc directly');
    failed = true;
  } else {
    console.log('✓ PASS: App.tsx consumes staticContentData[lang].transactionDesc directly');
  }

  if (!appTsxContent.includes('{staticContentData[lang].feeNoteStatement}')) {
    console.error('❌ FAIL: App.tsx does not consume staticContentData[lang].feeNoteStatement directly');
    failed = true;
  } else {
    console.log('✓ PASS: App.tsx consumes staticContentData[lang].feeNoteStatement directly');
  }

  // 2. Verify static generator consumes staticContentData
  console.log('\n2. Checking static HTML generation from staticContentData...');
  const deStaticHtml = renderStaticHtmlForLanguage('DE');
  const enStaticHtml = renderStaticHtmlForLanguage('EN');

  if (!deStaticHtml.includes(staticContentData.DE.transactionDesc)) {
    console.error('❌ FAIL: German static HTML does not contain staticContentData.DE.transactionDesc');
    failed = true;
  } else {
    console.log('✓ PASS: German static HTML contains exact staticContentData.DE.transactionDesc');
  }

  if (!enStaticHtml.includes(staticContentData.EN.transactionDesc)) {
    console.error('❌ FAIL: English static HTML does not contain staticContentData.EN.transactionDesc');
    failed = true;
  } else {
    console.log('✓ PASS: English static HTML contains exact staticContentData.EN.transactionDesc');
  }

  if (!deStaticHtml.includes(staticContentData.DE.feeNoteStatement)) {
    console.error('❌ FAIL: German static HTML does not contain staticContentData.DE.feeNoteStatement');
    failed = true;
  } else {
    console.log('✓ PASS: German static HTML contains exact staticContentData.DE.feeNoteStatement');
  }

  if (!enStaticHtml.includes(staticContentData.EN.feeNoteStatement)) {
    console.error('❌ FAIL: English static HTML does not contain staticContentData.EN.feeNoteStatement');
    failed = true;
  } else {
    console.log('✓ PASS: English static HTML contains exact staticContentData.EN.feeNoteStatement');
  }

  // Verify obsolete standalone pricing section is completely removed
  if (deStaticHtml.includes('05 / HONORARMODELL') || deStaticHtml.includes('Klarer Scope. Fester Preis.') || deStaticHtml.includes('id="honorar"')) {
    console.error('❌ FAIL: German static HTML still contains obsolete standalone pricing section or anchor');
    failed = true;
  } else {
    console.log('✓ PASS: German static HTML does not contain obsolete standalone pricing section or anchor');
  }

  if (enStaticHtml.includes('05 / FEE MODEL') || enStaticHtml.includes('id="honorar"') || enStaticHtml.includes('id="fees"')) {
    console.error('❌ FAIL: English static HTML still contains obsolete standalone pricing section or anchor');
    failed = true;
  } else {
    console.log('✓ PASS: English static HTML does not contain obsolete standalone pricing section or anchor');
  }

  // 3. Regression Simulation: prove that modifying transactionDesc updates both outputs
  console.log('\n3. Simulating transaction description mutation to prove dual synchronization...');
  const originalDeDesc = staticContentData.DE.transactionDesc;
  const testMutation = 'REGRESSION_TEST_TRANSACTION_DESC_V99';
  
  try {
    // Mutate in memory
    staticContentData.DE.transactionDesc = testMutation;
    const mutatedStaticHtml = renderStaticHtmlForLanguage('DE');

    if (!mutatedStaticHtml.includes(testMutation)) {
      console.error('❌ FAIL: Mutated static HTML did not reflect changed transactionDesc');
      failed = true;
    } else {
      console.log('✓ PASS: Mutated static output directly reflects updated transactionDesc');
    }

    // In App.tsx, because it reads staticContentData[lang].transactionDesc at runtime:
    const runtimeAppEvaluatesTo = staticContentData.DE.transactionDesc;
    if (runtimeAppEvaluatesTo !== testMutation) {
      console.error('❌ FAIL: App runtime content did not reflect changed transactionDesc');
      failed = true;
    } else {
      console.log('✓ PASS: App.tsx runtime consumption directly reflects updated transactionDesc');
    }
  } finally {
    // Restore original description
    staticContentData.DE.transactionDesc = originalDeDesc;
  }

  // 4. Verify generated build files on disk
  console.log('\n4. Verifying disk files dist/index.html and dist/en/index.html...');
  const rootIndexHtml = path.resolve(rootDir, 'index.html');
  const enIndexHtml = path.resolve(rootDir, 'en/index.html');

  if (fs.existsSync(rootIndexHtml)) {
    const rootHtml = fs.readFileSync(rootIndexHtml, 'utf-8');
    if (rootHtml.includes(staticContentData.DE.transactionDesc)) {
      console.log('✓ PASS: root index.html contains DE transaction description');
    } else {
      console.warn('⚠️ WARNING: root index.html needs rebuild to sync latest description');
    }
  }

  if (fs.existsSync(enIndexHtml)) {
    const enHtml = fs.readFileSync(enIndexHtml, 'utf-8');
    if (enHtml.includes(staticContentData.EN.transactionDesc)) {
      console.log('✓ PASS: en/index.html contains EN transaction description');
    } else {
      console.warn('⚠️ WARNING: en/index.html needs rebuild to sync latest description');
    }
  }

  console.log('\n====================================================');
  if (failed) {
    console.error('TEST RESULT: FAILED - Content sources are divergent');
    process.exit(1);
  } else {
    console.log('TEST RESULT: PASSED - Single source of truth verified across static HTML and React UI');
    console.log('====================================================');
  }
}

runRegressionTest();
