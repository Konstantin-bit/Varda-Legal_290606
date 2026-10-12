import { Language } from './types';

export interface VardaPageMetadata {
  lang: Language;
  htmlLang: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  title: string;
  description: string;
  canonicalUrl: string;
  hreflangDe: string;
  hreflangEn: string;
  hreflangXDefault: string;
}

export const siteMetadata: Record<Language, VardaPageMetadata> = {
  DE: {
    lang: "DE",
    htmlLang: "de",
    ogLocale: "de_DE",
    ogLocaleAlternate: "en_US",
    title: "Varda Legal | Corporate & M&A für Gründer und Wachstumsunternehmen",
    description: "Varda Legal berät Gründer, Startups, Scale-ups und Gesellschafter bei Corporate-Themen, Finanzierungen, Unternehmenskäufen und Unternehmensverkäufen.",
    canonicalUrl: "https://vardalegal.com/",
    hreflangDe: "https://vardalegal.com/",
    hreflangEn: "https://vardalegal.com/en/",
    hreflangXDefault: "https://vardalegal.com/"
  },
  EN: {
    lang: "EN",
    htmlLang: "en",
    ogLocale: "en_US",
    ogLocaleAlternate: "de_DE",
    title: "Varda Legal | Corporate & M&A for Founders and Growth Companies",
    description: "Varda Legal advises founders, startups, scale-ups and shareholders on corporate matters, financing, company acquisitions and company sales.",
    canonicalUrl: "https://vardalegal.com/en/",
    hreflangDe: "https://vardalegal.com/",
    hreflangEn: "https://vardalegal.com/en/",
    hreflangXDefault: "https://vardalegal.com/"
  }
};

export interface StaticPageContent {
  lang: Language;
  navAriaLabel: string;
  navLinks: { href: string; label: string }[];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDirectSentence: string;
  heroCta: string;
  heroSecCta: string;
  transactionSecNum: string;
  transactionTitle: string;
  transactionDesc: string;
  transactionFacts: { label: string; value: string }[];
  testimonialQuotes: string[];
  testimonialAttribution: string;
  experienceSecNum: string;
  experienceTitle: string;
  experienceIntro: string;
  experienceCases: {
    num: string;
    category: string;
    parties: string;
    summary: string;
    attribution: string;
  }[];
  experienceFooter: string;
  experienceMoreKonstantin: string;
  mandatesSecNum: string;
  mandatesTitle: string;
  mandatesList: {
    num: string;
    title: string;
    body: string;
    services: string;
    badge?: string;
  }[];
  methodSecNum: string;
  methodTitle: string;
  methodIntro: string;
  methodSteps: {
    num: string;
    title: string;
    body: string;
  }[];
  manifestSecNum: string;
  manifestTitle: string;
  manifestParagraphs: string[];
  konstantinSecNum: string;
  konstantinTitle: string;
  konstantinBio: string[];
  konstantinTeachingLabel: string;
  konstantinTeachingText: string;
  konstantinRoleFooter: string;
  contactSecNum: string;
  contactTitle: string;
  contactSubtitle: string;
  contactDirectName: string;
  contactDirectNote: string;
  contactAddressTitle: string;
  contactAddressLines: string[];
  contactEmailTitle: string;
  contactEmail: string;
  contactEmailNote: string;
  footerTagline: string;
  footerAddress: string;
  footerBarNote: string;
  footerCopyright: string;
}

export const staticContentData: Record<Language, StaticPageContent> = {
  DE: {
    lang: "DE",
    navAriaLabel: "Hauptnavigation",
    navLinks: [
      { href: "#ma", label: "M&A" },
      { href: "#startups-scaleups", label: "Startups & Scale-ups" },
      { href: "#so-arbeitet-varda", label: "So arbeitet Varda" },
      { href: "#konstantin", label: "Konstantin" },
      { href: "#letsgo", label: "Kontakt" }
    ],
    heroBadge: "CORPORATE & M&A · STARTUPS · SCALE-UPS",
    heroTitle: "Rechtsberatung, die Sie über die Ziellinie bringt.",
    heroSubtitle: "Klarheit. Sicherheit. Ruhe.",
    heroDirectSentence: "Sie arbeiten direkt mit Dr. Konstantin Filbinger. Er bewertet die Rechtslage im wirtschaftlichen Kontext und empfiehlt einen umsetzbaren nächsten Schritt.",
    heroCta: "Anliegen besprechen",
    heroSecCta: "So arbeitet Varda",
    transactionSecNum: "01 / AUSGEWÄHLTE TRANSAKTION",
    transactionTitle: "klima&so → PYURE",
    transactionDesc: "Varda hat die Gesellschafter von klima&so beim Verkauf des Unternehmens an PYURE beraten.",
    transactionFacts: [
      { label: "Mandat", value: "Gesellschafterberatung" },
      { label: "Bereich", value: "Corporate / M&A" },
      { label: "Rolle", value: "Lead Legal Counsel" }
    ],
    testimonialQuotes: [
      "„Wir haben unser erstes Unternehmen verkauft. Heißt: Vertragsentwurf der Gegenseite auf dem Tisch, jede Menge Paragrafen und eine ziemlich klare Ahnung davon, dass wir nicht wissen, was wir da eigentlich lesen.",
      "Konstantin war ab dem ersten Call der Co-Pilot, den man in so einer Situation braucht. Er hat den Entwurf komplett überarbeitet zurückgegeben, verhandlungsfertig, statt uns eine Liste mit Anmerkungen zu schicken. Er hat uns vor Dingen gewarnt, auf die wir von allein nie gekommen wären. Und er hat seine Linie offengelegt, bevor er losgelaufen ist, so dass wir sie bestätigen (oder eben ändern) konnten.",
      "Was mich am meisten überzeugt hat: Er hat auch die weichen und emotionalen Punkte ernst genommen und in klare Klauseln im Vertrag statt als Randnotiz verstanden.",
      "Bei den entscheidenden Punkten wussten wir immer, welche Optionen wir haben und was Konstantin uns empfiehlt. Entschieden haben am Ende wir, aber eben informiert statt geraten. Das hat die Verhandlungen für uns deutlich einfacher gemacht.",
      "Ich hatte während des ganzen Prozesses nie das Gefühl, allein im Cockpit zu sitzen. Und wir sind sauber gelandet.“"
    ],
    testimonialAttribution: "— Gesellschafter, klima&so",
    experienceSecNum: "02 / AUSGEWÄHLTE ERFAHRUNG",
    experienceTitle: "Varda ist eine junge Kanzlei. Die Erfahrung dahinter ist es nicht.",
    experienceIntro: "Vor der Gründung von Varda hat Konstantin als Teil internationaler Kanzleiteams an komplexen M&A-Transaktionen und strategischen Technologieprojekten beraten. Die nachstehenden Mandate zeigen eine Auswahl dieser früheren Erfahrung.",
    experienceCases: [
      {
        num: "01 / FRÜHERE ERFAHRUNG",
        category: "SELL-SIDE · CORPORATE / M&A",
        parties: "Siemens Energy → Triton",
        summary: "Veräußerung des BIC- / Trench-Geschäfts",
        attribution: "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
      },
      {
        num: "02 / FRÜHERE ERFAHRUNG",
        category: "SELL-SIDE · CORPORATE / M&A",
        parties: "Siemens Energy → Mutares",
        summary: "Veräußerung des Geschäftsbereichs Heat Transfer Technology",
        attribution: "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
      },
      {
        num: "03 / FRÜHERE ERFAHRUNG",
        category: "BUY-SIDE · CORPORATE / M&A · FINANCIAL SERVICES",
        parties: "FNZ → Fondsdepot Bank",
        summary: "Erwerb der Fondsdepot Bank",
        attribution: "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
      },
      {
        num: "04 / FRÜHERE ERFAHRUNG",
        category: "TECHNOLOGIE · DATA GOVERNANCE · DIGITAL CONTRACTING",
        parties: "Catena-X Automotive Network",
        summary: "Governance- und Vertragsrahmen für das Datenökosystem der Automobilindustrie",
        attribution: "Beratung als Mitglied des Ashurst-Teams vor Gründung von Varda."
      }
    ],
    experienceFooter: "Ausgewählte frühere Mandatserfahrung von Dr. Konstantin Filbinger vor Gründung von Varda Legal.",
    experienceMoreKonstantin: "MEHR ÜBER KONSTANTIN →",
    mandatesSecNum: "03 / MANDATSWELTEN",
    mandatesTitle: "Wobei Varda unterstützt.",
    mandatesList: [
      {
        num: "01",
        title: "Startups",
        body: "Am Anfang geht es darum, die richtigen Dinge sauber zu regeln, ohne das Unternehmen mit Recht zu überfrachten. Varda berät Gründer und Startups bei Gesellschaftsstruktur, Founder Agreements, Finanzierungsrunden, Mitarbeiterbeteiligung und laufenden Gesellschafterfragen.",
        services: "Gründung · Founder Agreements · Finanzierung · VSOP / ESOP · Corporate & Governance"
      },
      {
        num: "02",
        title: "Scale-ups",
        body: "Mit dem Wachstum werden Gesellschafterstrukturen, Governance und Verträge anspruchsvoller. Varda unterstützt bei Finanzierungen, Beteiligungs- und Holdingstrukturen, strategischen Verträgen und Transaktionen.",
        services: "Corporate & Governance · Finanzierung · Beteiligungsstrukturen · Strategische Verträge · Transaktionen"
      },
      {
        num: "03",
        title: "M&A / Unternehmensverkauf",
        body: "Wenn Sie ein Unternehmen kaufen oder verkaufen, sollten Sie bei den entscheidenden Punkten wissen, welche Optionen Sie haben und was wir empfehlen. Varda begleitet Gründer, Gesellschafter und Unternehmen von der Vorbereitung über Due Diligence und Vertragsverhandlung bis zu Signing und Closing.",
        services: "Unternehmensverkauf · Unternehmenskauf · Founder Exit · Small Cap M&A",
        badge: "[ KERNBEREICH ]"
      }
    ],
    methodSecNum: "04 / SO ARBEITET VARDA",
    methodTitle: "So arbeitet Varda.",
    methodIntro: "Klare Rechtsberatung beginnt mit dem Verständnis der unternehmerischen Entscheidung. Erst dann geht es um die Rechtslage.",
    methodSteps: [
      {
        num: "01",
        title: "Das Ziel verstehen",
        body: "Was soll am Ende erreicht sein? Welche wirtschaftlichen, strategischen oder persönlichen Punkte sind dabei wichtig?"
      },
      {
        num: "02",
        title: "Rechtslage und Kontext bewerten",
        body: "Welche rechtlichen Themen sind für die Entscheidung tatsächlich relevant? Und welche nicht?"
      },
      {
        num: "03",
        title: "Realistische Optionen entwickeln",
        body: "Welche Wege gibt es? Wo liegen die Unterschiede bei Risiko, Aufwand und Ergebnis?"
      },
      {
        num: "04",
        title: "Den nächsten Schritt empfehlen",
        body: "Sie sollten wissen, was wir empfehlen, warum wir es empfehlen und was als Nächstes zu tun ist."
      }
    ],
    manifestSecNum: "05 / HALTUNG",
    manifestTitle: "Recht ist keine Raketenwissenschaft. Tun wir nicht so, als wäre es eine.",
    manifestParagraphs: [
      "Sie haben ein Ziel. Ein rechtliches Thema macht den Weg dorthin komplizierter.",
      "Gute Rechtsberatung sollte diese Komplexität reduzieren, nicht vergrößern. Sie sollte Ihnen helfen, eine fundierte Entscheidung zu treffen und weiterzumachen – ohne unnötiges Zögern, „es kommt darauf an“-Vorbehalte oder juristischen Chichi.",
      "Rechtsberatung funktioniert für uns nur dann, wenn sie den wirtschaftlichen, operativen und strategischen Kontext mitdenkt. Sonst sind es nur Worte."
    ],
    konstantinSecNum: "06 / KONSTANTIN",
    konstantinTitle: "Dr. Konstantin Filbinger",
    konstantinBio: [
      "Vor der Gründung von Varda habe ich in internationalen Wirtschaftskanzleien an komplexen gesellschaftsrechtlichen Mandaten und M&A-Transaktionen gearbeitet – darunter Transaktionen für Siemens Energy und FNZ sowie die Entwicklung von Teilen des Governance- und Vertragsrahmens für Catena-X.",
      "Heute berate ich mit Varda Gründer, Gesellschafter und Unternehmen direkt – von Strukturierung und Finanzierung bis zum Kauf oder Verkauf von Unternehmen.",
      "Bei Varda arbeite ich unmittelbar mit meinen Mandanten. Bei den entscheidenden Punkten sollen Sie wissen, welche Optionen Sie haben, wie ich sie bewerte und was ich empfehle. Die Entscheidung bleibt Ihre – aber sie sollte nicht auf Annahmen beruhen."
    ],
    konstantinTeachingLabel: "[ LEHRAUFTRAG ]",
    konstantinTeachingText: "Ich unterrichte am Berlin College of Business and Technology International Corporate and Tax Law und Private Law.",
    konstantinRoleFooter: "Rechtsanwalt (Deutschland) · Gründer, Varda Legal · Corporate & M&A · München",
    contactSecNum: "07 / KONTAKT",
    contactTitle: "Kontakt",
    contactSubtitle: "Erstgespräch vereinbaren.",
    contactDirectName: "Dr. Konstantin Filbinger",
    contactDirectNote: "Mandatsanfragen prüfe ich immer persönlich. Lassen Sie uns unkompliziert über Ihr Vorhaben sprechen.",
    contactAddressTitle: "KANZLEISITZ",
    contactAddressLines: ["Auenstraße 21", "80469 München", "Deutschland"],
    contactEmailTitle: "DIREKTE E-MAIL",
    contactEmail: "info@vardalegal.com",
    contactEmailNote: "Senden Sie uns Ihre Anfrage direkt per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden.",
    footerTagline: "Rechtsanwalt Dr. Konstantin Filbinger · Corporate & M&A für Gründer und Wachstumsunternehmen.",
    footerAddress: "Auenstraße 21, 80469 München, Deutschland",
    footerBarNote: "Dr. Konstantin Filbinger ist als Rechtsanwalt in der Bundesrepublik Deutschland zugelassen und Mitglied der Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München.",
    footerCopyright: "© 2026 Dr. Konstantin Filbinger. All Rights Reserved."
  },
  EN: {
    lang: "EN",
    navAriaLabel: "Main navigation",
    navLinks: [
      { href: "/en/#ma", label: "M&A" },
      { href: "/en/#startups-scaleups", label: "Startups & Scale-ups" },
      { href: "/en/#so-arbeitet-varda", label: "How Varda Works" },
      { href: "/en/#konstantin", label: "Konstantin" },
      { href: "/en/#letsgo", label: "Contact" }
    ],
    heroBadge: "CORPORATE & M&A · STARTUPS · SCALE-UPS",
    heroTitle: "Legal advice that gets you across the line.",
    heroSubtitle: "Clarity. Confidence. Calm.",
    heroDirectSentence: "You work directly with Dr Konstantin Filbinger, who assesses the legal position in its commercial context and recommends a workable next step.",
    heroCta: "Discuss your matter",
    heroSecCta: "How Varda works",
    transactionSecNum: "01 / SELECTED TRANSACTION",
    transactionTitle: "klima&so → PYURE",
    transactionDesc: "Varda advised the shareholders of klima&so on the sale of the company to PYURE.",
    transactionFacts: [
      { label: "Mandate", value: "Shareholder Advisory" },
      { label: "Area", value: "Corporate / M&A" },
      { label: "Role", value: "Lead Legal Counsel" }
    ],
    testimonialQuotes: [
      "“We sold our first company. That means: draft contract from the other side on the table, countless clauses, and a fairly clear sense that we didn't really know what we were reading.",
      "Konstantin was the co-pilot you need in such a situation right from the very first call. He returned the draft completely revised and negotiation-ready, rather than just sending us a list of comments. He warned us about things we would never have thought of on our own. And he laid out his strategy before proceeding, so that we could confirm (or adjust) it.",
      "What convinced me most: He took the soft and emotional points seriously too, translating them into clear clauses in the contract rather than treating them as side notes.",
      "When it came to the critical decisions, we always knew our options and what Konstantin recommended. In the end, we were the ones who decided, but informed rather than guessing. That made the negotiations significantly easier for us.",
      "Throughout the entire process, I never felt like I was sitting alone in the cockpit. And we landed cleanly.”"
    ],
    testimonialAttribution: "— Shareholders, klima&so",
    experienceSecNum: "02 / SELECTED EXPERIENCE",
    experienceTitle: "Varda is a young firm. The experience behind it isn’t.",
    experienceIntro: "Before founding Varda, Konstantin advised on complex M&A transactions and strategic technology projects as part of international law firm teams. The matters below are a selection of that prior experience.",
    experienceCases: [
      {
        num: "01 / PRIOR EXPERIENCE",
        category: "SELL-SIDE · CORPORATE / M&A",
        parties: "Siemens Energy → Triton",
        summary: "Sale of the BIC / Trench business",
        attribution: "Advised as part of the Ashurst Corporate/M&A team before founding Varda."
      },
      {
        num: "02 / PRIOR EXPERIENCE",
        category: "SELL-SIDE · CORPORATE / M&A",
        parties: "Siemens Energy → Mutares",
        summary: "Sale of the Heat Transfer Technology business",
        attribution: "Advised as part of the Ashurst Corporate/M&A team before founding Varda."
      },
      {
        num: "03 / PRIOR EXPERIENCE",
        category: "BUY-SIDE · CORPORATE / M&A · FINANCIAL SERVICES",
        parties: "FNZ → Fondsdepot Bank",
        summary: "Acquisition of Fondsdepot Bank",
        attribution: "Advised as part of the Ashurst Corporate/M&A team before founding Varda."
      },
      {
        num: "04 / PRIOR EXPERIENCE",
        category: "TECHNOLOGY · DATA GOVERNANCE · DIGITAL CONTRACTING",
        parties: "Catena-X Automotive Network",
        summary: "Governance and contractual framework for the automotive data ecosystem",
        attribution: "Advised as part of the Ashurst team before founding Varda."
      }
    ],
    experienceFooter: "Selected prior experience of Dr Konstantin Filbinger before founding Varda Legal.",
    experienceMoreKonstantin: "MORE ABOUT KONSTANTIN →",
    mandatesSecNum: "03 / MANDATE WORLDS",
    mandatesTitle: "Where Varda supports.",
    mandatesList: [
      {
        num: "01",
        title: "Startups",
        body: "In the early stages, it is about setting the right things up cleanly without overburdening the business with legal complexity. Varda advises founders and startups on corporate structure, founder agreements, financing rounds, employee participation and ongoing shareholder matters.",
        services: "Formation · Founder Agreements · Financing · VSOP / ESOP · Corporate & Governance"
      },
      {
        num: "02",
        title: "Scale-ups",
        body: "With growth, shareholder structures, governance and contracts become more demanding. Varda supports in financing, shareholding and holding structures, strategic agreements and transactions.",
        services: "Corporate & Governance · Financing · Shareholding Structures · Strategic Agreements · Transactions"
      },
      {
        num: "03",
        title: "M&A / Company Sale",
        body: "When buying or selling a company, you should know your options and what we recommend on the critical points. Varda guides founders, shareholders and companies from preparation through due diligence and contract negotiation to signing and closing.",
        services: "Company Sale · Company Acquisition · Founder Exit · Small Cap M&A",
        badge: "[ CORE FOCUS ]"
      }
    ],
    methodSecNum: "04 / HOW VARDA WORKS",
    methodTitle: "How Varda works.",
    methodIntro: "Clear legal advice begins with understanding the commercial decision. Only then does it turn to the legal framework.",
    methodSteps: [
      {
        num: "01",
        title: "Understand the objective",
        body: "What should be achieved in the end? Which commercial, strategic or personal priorities matter?"
      },
      {
        num: "02",
        title: "Assess legal framework and context",
        body: "Which legal topics are genuinely relevant to the decision? And which are not?"
      },
      {
        num: "03",
        title: "Develop realistic options",
        body: "What paths are available? Where do the differences lie in risk, effort and outcome?"
      },
      {
        num: "04",
        title: "Recommend the next step",
        body: "You should know what we recommend, why we recommend it and what to do next."
      }
    ],
    manifestSecNum: "05 / POINT OF VIEW",
    manifestTitle: "Law is not rocket science. Let's not pretend it is.",
    manifestParagraphs: [
      "You have a goal. A legal issue makes the path there more complicated.",
      "Good legal advice should reduce that complexity, not increase it. It should help you make an informed decision and move forward – without unnecessary hesitation, \"it depends\" caveats or legalese.",
      "For us, legal advice only works when it takes the commercial, operational and strategic context into account. Otherwise, it is just words."
    ],
    konstantinSecNum: "06 / KONSTANTIN",
    konstantinTitle: "Dr Konstantin Filbinger",
    konstantinBio: [
      "Before founding Varda, I worked on complex corporate and M&A matters in international law firms, including transactions for Siemens Energy and FNZ and the development of elements of the governance and contractual framework for Catena-X.",
      "Today, through Varda, I advise founders, shareholders and companies directly – from structuring and financing to company purchases and sales.",
      "At Varda, I work directly with my clients. On the critical points, you should know what options you have, how I assess them and what I recommend. The decision remains yours – but you should not have to make it based on assumptions."
    ],
    konstantinTeachingLabel: "[ TEACHING APPOINTMENT ]",
    konstantinTeachingText: "I teach International Corporate and Tax Law and Private Law at the Berlin College of Business and Technology.",
    konstantinRoleFooter: "Attorney-at-Law (Rechtsanwalt, Germany) · Founder, Varda Legal · Corporate & M&A · Munich",
    contactSecNum: "07 / CONTACT",
    contactTitle: "Contact",
    contactSubtitle: "Book an initial consultation.",
    contactDirectName: "Dr Konstantin Filbinger",
    contactDirectNote: "I review all inbound inquiries personally. Let's arrange a straightforward call to map out the next steps for your project.",
    contactAddressTitle: "OFFICE LOCATION",
    contactAddressLines: ["Auenstraße 21", "80469 Munich", "Germany"],
    contactEmailTitle: "DIRECT EMAIL",
    contactEmail: "info@vardalegal.com",
    contactEmailNote: "Send us your inquiry directly via email. We typically respond within 24 hours.",
    footerTagline: "Dr Konstantin Filbinger · Corporate & M&A for founders and growth companies.",
    footerAddress: "Auenstraße 21, 80469 Munich, Germany",
    footerBarNote: "Dr Konstantin Filbinger is admitted to the German bar (Rechtsanwalt, Germany) and is a member of the Munich Bar Association.",
    footerCopyright: "© 2026 Dr. Konstantin Filbinger. All Rights Reserved."
  }
};

export function buildJsonLdSchema(lang: Language): object {
  const isDe = lang === "DE";
  const canonicalUrl = isDe ? "https://vardalegal.com/" : "https://vardalegal.com/en/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://vardalegal.com/#website",
        "url": canonicalUrl,
        "name": "Varda Legal",
        "alternateName": "Varda",
        "inLanguage": isDe ? "de-DE" : "en-US"
      },
      {
        "@type": "LegalService",
        "@id": "https://vardalegal.com/#legalservice",
        "name": "Varda Legal",
        "url": canonicalUrl,
        "description": isDe
          ? "Varda Legal berät Gründer, Startups, Scale-ups und Gesellschafter bei Corporate-Themen, Finanzierungen, Unternehmenskäufen und Unternehmensverkäufen."
          : "Varda Legal advises founders, startups, scale-ups and shareholders on corporate matters, financing, company acquisitions and company sales.",
        "areaServed": "DE",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Auenstraße 21",
          "postalCode": "80469",
          "addressLocality": "München",
          "addressRegion": "Bayern",
          "addressCountry": "DE"
        },
        "telephone": "+49 89 21530930",
        "email": "info@vardalegal.com",
        "founder": {
          "@type": "Person",
          "@id": "https://vardalegal.com/#konstantin-filbinger",
          "name": "Dr. Konstantin Filbinger",
          "jobTitle": isDe ? "Rechtsanwalt" : "German Attorney-at-Law (Rechtsanwalt)",
          "description": isDe
            ? "Rechtsanwalt und Gründer von Varda Legal. Beratung von Gründern, Gesellschaftern und Unternehmen bei Corporate-Themen und M&A (u.a. Verkauf von klima&so an PYURE). Vor der Gründung von Varda Beratung an komplexen gesellschaftsrechtlichen Mandaten, M&A-Transaktionen und strategischen Technologieprojekten in internationalen Wirtschaftskanzleien (u.a. als Mitglied der Ashurst-Teams bei Transaktionen für Siemens Energy und FNZ sowie beim Governance- und Vertragsrahmen für Catena-X)."
            : "German Attorney-at-Law (Rechtsanwalt) and Founder of Varda Legal. Advises founders, shareholders and companies on corporate matters and M&A (including the sale of klima&so to PYURE). Prior to founding Varda, advised on complex corporate matters, M&A transactions and strategic technology projects at international law firms (including as part of Ashurst teams on transactions for Siemens Energy and FNZ and on the governance and contractual framework for Catena-X).",
          "knowsAbout": [
            "Corporate & M&A",
            "Sell-Side M&A",
            "Buy-Side M&A",
            "Corporate Governance",
            "Data Governance & Digital Contracting",
            "International Corporate and Tax Law",
            "Private Law"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": isDe ? "Lehrauftrag" : "Teaching Appointment",
              "recognizedBy": {
                "@type": "CollegeOrUniversity",
                "name": "Berlin College of Business and Technology"
              },
              "about": ["International Corporate and Tax Law", "Private Law"]
            }
          ]
        },
        "knowsAbout": [
          "Corporate & M&A",
          "Gesellschaftsrecht",
          "M&A-Transaktionen",
          "Unternehmenskauf",
          "Unternehmensverkauf",
          "Venture Capital & Finanzierungsrunden",
          "Gesellschaftervereinbarungen",
          "VSOP / ESOP Mitarbeiterbeteiligung"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": isDe
            ? "Gründer, Startups, Scale-ups, Gesellschafter und Wachstumsunternehmen"
            : "Founders, startups, scale-ups, shareholders and growth companies"
        }
      }
    ]
  };
}

export function renderStaticHtmlForLanguage(lang: Language): string {
  const d = staticContentData[lang];
  const isDe = lang === "DE";

  return `
      <header>
        <a href="${isDe ? '/' : '/en/'}">VARDA LEGAL</a>
        <nav aria-label="${d.navAriaLabel}">
          ${d.navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n          ')}
        </nav>
      </header>

      <main>
        <!-- Hero Section -->
        <section id="home">
          <p>${d.heroBadge}</p>
          <h1>${d.heroTitle}</h1>
          <p>${d.heroSubtitle}</p>
          <p>${d.heroDirectSentence}</p>
          <div>
            <a href="${isDe ? '#letsgo' : '/en/#letsgo'}">${d.heroCta}</a>
            <a href="${isDe ? '#so-arbeitet-varda' : '/en/#so-arbeitet-varda'}">${d.heroSecCta}</a>
          </div>
        </section>

        <!-- Selected Transaction -->
        <section id="transaktion" aria-labelledby="selected-transaction-h2">
          <p>${d.transactionSecNum}</p>
          <h2 id="selected-transaction-h2">${d.transactionTitle}</h2>
          <p>${d.transactionDesc}</p>
          <dl>
            ${d.transactionFacts.map(f => `<dt>${f.label}</dt><dd>${f.value}</dd>`).join('\n            ')}
          </dl>
          <blockquote>
            ${d.testimonialQuotes.map(q => `<p>${q}</p>`).join('\n            ')}
            <footer>${d.testimonialAttribution}</footer>
          </blockquote>
        </section>

        <!-- Selected Experience -->
        <section id="selected-experience" aria-labelledby="selected-exp-h2">
          <p>${d.experienceSecNum}</p>
          <h2 id="selected-exp-h2">${d.experienceTitle}</h2>
          <p>${d.experienceIntro}</p>
          
          ${d.experienceCases.map(c => `
          <article>
            <header>
              <p>${c.num} · ${c.category}</p>
              <h3>${c.parties}</h3>
            </header>
            <p>${c.summary}</p>
            <footer>${c.attribution}</footer>
          </article>`).join('')}

          <p>${d.experienceFooter}</p>
        </section>

        <!-- Mandates -->
        <section id="mandate" aria-labelledby="mandate-h2">
          <p>${d.mandatesSecNum}</p>
          <h2 id="mandate-h2">${d.mandatesTitle}</h2>
          
          ${d.mandatesList.map(m => `
          <article>
            <h3>${m.title}</h3>
            <p>${m.body}</p>
            <p>${isDe ? 'Leistungen' : 'Services'}: ${m.services}</p>
          </article>`).join('')}
        </section>

        <!-- How Varda Works -->
        <section id="so-arbeitet-varda" aria-labelledby="method-h2">
          <p>${d.methodSecNum}</p>
          <h2 id="method-h2">${d.methodTitle}</h2>
          <p>${d.methodIntro}</p>
          <ol>
            ${d.methodSteps.map(s => `
            <li>
              <h3>${s.num} / ${s.title}</h3>
              <p>${s.body}</p>
            </li>`).join('')}
          </ol>
        </section>

        <!-- Point of View -->
        <section id="manifest" aria-labelledby="manifest-h2">
          <p>${d.manifestSecNum}</p>
          <h2 id="manifest-h2">${d.manifestTitle}</h2>
          ${d.manifestParagraphs.map(p => `<p>${p}</p>`).join('\n          ')}
        </section>

        <!-- About Konstantin Filbinger -->
        <section id="konstantin" aria-labelledby="konstantin-h2">
          <p>${d.konstantinSecNum}</p>
          <h2 id="konstantin-h2">${d.konstantinTitle}</h2>
          ${d.konstantinBio.map(b => `<p>${b}</p>`).join('\n          ')}
          
          <aside>
            <p>${d.konstantinTeachingLabel}</p>
            <p>${d.konstantinTeachingText}</p>
          </aside>
          
          <p>${d.konstantinRoleFooter}</p>
        </section>

        <!-- Contact Section -->
        <section id="letsgo" aria-labelledby="contact-h2">
          <p>${d.contactSecNum}</p>
          <h2 id="contact-h2">${d.contactSubtitle}</h2>
          <div>
            <h3>${isDe ? 'Direkter Kontakt' : 'Direct Contact'}: ${d.contactDirectName}</h3>
            <p>${d.contactDirectNote}</p>
            <p>${d.contactAddressTitle}: ${d.contactAddressLines.join(', ')}</p>
            <p>E-Mail: <a href="mailto:${d.contactEmail}">${d.contactEmail}</a></p>
          </div>
        </section>
      </main>

      <footer>
        <p>VARDA LEGAL — ${d.footerTagline}</p>
        <p>${d.footerAddress}</p>
        <p>${d.footerBarNote}</p>
        <p>${d.footerCopyright}</p>
      </footer>
  `.trim();
}
