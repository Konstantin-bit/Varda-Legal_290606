/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  Sliders, 
  Plus, 
  X, 
  CheckCircle2,
  Lock,
  Building,
  Menu,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Camera,
  Target,
  Scale,
  GitFork,
  Compass,
  FileText,
  Layers,
  Zap
} from "lucide-react";
import { content, Language, Article } from "./types";
import GruenderstrukturCheck from "./components/GruenderstrukturCheck";
import VardaNavigator from "./components/VardaNavigator";

import contractIntelligenceImage from "./assets/images/contractintelligence2.png"
import contractIntelligenceImageEng from "./assets/images/contractintelligence2eng.png"
import execFigmaImage from "./assets/images/figma.png"

import munichImage from "./assets/images/vardalegal_munich.png"

import konstiArch from "./assets/images/konsti2024_arch.png"
import konstiImage from "./assets/images/konsti.png"
import konstineuImage from "./assets/images/konstineu.png"
import konstiClarity from "./assets/images/konsticlarity.png"

import coffeeImage from "./assets/images/vardalegal_coffeetable.png"
import tokenRecoveryImage from "./assets/images/tokenrecovery.png.png"
import tokenRecoveryImageEng from "./assets/images/tokenrecoveryeng.png"
import unternehmensverkaufImage from "./assets/images/unternehmensverkauf.png"
import unternehmensverkaufImageEng from "./assets/images/unternehmensverkaufeng.png"
import vertraegeImage from "./assets/images/vertraege.png"
import vertraegeImageEng from "./assets/images/vertraegeeng-1.png"
import vertragsanalyseImage from "./assets/images/vertragsanalyse.png"
import vertragsanalyseImageEng from "./assets/images/vertragsanalyseeng-1.png"

// Dedicated environment/variable configuration for recipient email
const CONTACT_FORM_RECIPIENT = import.meta.env.VITE_CONTACT_FORM_RECIPIENT || "info@vardalegal.com";

function DecisionArchitectureBlueprint({ lang }: { lang: Language }) {
  const [activeInput, setActiveInput] = useState<number | null>(null);

  const isDe = lang === "DE";

  const altText = isDe
    ? "Varda bewertet das wirtschaftliche Ziel, die Rechtslage, die wirtschaftlichen Folgen und die realistischen Optionen und leitet daraus eine klare Empfehlung und den nächsten Schritt ab."
    : "Varda assesses the business objective, legal position, commercial consequences and realistic options before providing a clear recommendation and next step.";

  const inputs = isDe
    ? [
        "Wirtschaftliches Ziel",
        "Rechtslage",
        "Wirtschaftliche Folgen",
        "Realistische Optionen"
      ]
    : [
        "Business objective",
        "Legal position",
        "Commercial consequences",
        "Realistic options"
      ];

  const outputs = isDe
    ? ["Klare Empfehlung", "Nächster Schritt"]
    : ["Clear recommendation", "Next step"];

  return (
    <div 
      className="relative w-full h-full bg-[#FAF8F4] border border-charcoal/15 p-6 md:p-8 select-none flex flex-col justify-between group shadow-2xs min-h-[380px]"
      aria-label={altText}
      role="img"
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Blueprint Header */}
      <div className="relative z-10 flex justify-between items-center pb-4 border-b border-charcoal/10 font-mono text-[9px] text-charcoal/50 uppercase tracking-widest font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C0823E]" />
          <span>{isDe ? "VARDA ENTSCHEIDUNGSMETHODIK" : "VARDA ADVISORY METHODOLOGY"}</span>
        </div>
        <div className="text-[#C0823E] font-bold">
          {isDe ? "4 ELEMENTE → 1 ERGEBNIS" : "4 INPUTS → 1 OUTPUT"}
        </div>
      </div>

      {/* Blueprint SVG Canvas */}
      <div className="relative z-10 my-auto py-4 flex items-center justify-center">
        <svg className="w-full h-auto overflow-visible max-w-[560px]" viewBox="0 0 540 220" fill="none">
          {/* LEFT INPUT NODES */}
          {inputs.map((label, idx) => {
            const y = 35 + idx * 48;
            const isActive = activeInput === idx;
            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setActiveInput(idx)}
                onMouseLeave={() => setActiveInput(null)}
              >
                {/* Connecting Line to Center Focal Hub (250, 107) */}
                <path
                  d={`M 165 ${y} C 210 ${y}, 215 107, 250 107`}
                  stroke={isActive ? "#C0823E" : "rgba(44, 44, 44, 0.2)"}
                  strokeWidth={isActive ? "1.8" : "1"}
                  strokeDasharray={isActive ? "none" : "3 3"}
                  className="transition-all duration-300"
                  fill="none"
                />
                
                {/* Input Rect Container */}
                <rect
                  x="10"
                  y={y - 15}
                  width="155"
                  height="30"
                  rx="2"
                  fill="#FAF8F4"
                  stroke={isActive ? "#C0823E" : "rgba(44, 44, 44, 0.25)"}
                  strokeWidth={isActive ? "1.5" : "1"}
                  className="transition-all duration-300"
                />
                <circle cx="22" cy={y} r="2.5" fill={isActive ? "#C0823E" : "rgba(44,44,44,0.4)"} />
                <text
                  x="32"
                  y={y + 3.5}
                  className={`font-sans text-[11px] font-medium transition-colors ${
                    isActive ? "fill-[#C0823E] font-semibold" : "fill-charcoal/85"
                  }`}
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* CENTER DISTILLATION HUB (250, 107) */}
          <g transform="translate(250, 107)">
            <circle cx="0" cy="0" r="22" fill="#FAF8F4" stroke="#C0823E" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="14" fill="#FAF8F4" stroke="rgba(44,44,44,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
            <circle cx="0" cy="0" r="4" fill="#1B2A4A" />
            <text x="0" y="3.5" textAnchor="middle" className="font-mono text-[10px] fill-charcoal/70 font-bold">
              ↓
            </text>
          </g>

          {/* RIGHT VECTOR TO FOCAL OUTPUT */}
          <path
            d="M 272 107 L 360 107"
            stroke="#1B2A4A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="360,103 368,107 360,111" fill="#1B2A4A" />

          {/* RIGHT OUTPUT NODES (Clear recommendation & Next step) */}
          {outputs.map((label, idx) => {
            const y = 80 + idx * 54;
            const isRec = idx === 0;
            return (
              <g key={idx}>
                {/* Branch from focal point (368, 107) to output node */}
                <path
                  d={`M 368 107 C 390 107, 395 ${y}, 410 ${y}`}
                  stroke="#1B2A4A"
                  strokeWidth="1.2"
                  fill="none"
                />
                <rect
                  x="410"
                  y={y - 18}
                  width="125"
                  height="36"
                  rx="2"
                  fill={isRec ? "#1B2A4A" : "#FAF8F4"}
                  stroke={isRec ? "#1B2A4A" : "#C0823E"}
                  strokeWidth="1.2"
                />
                <text
                  x="472"
                  y={y + 3.5}
                  textAnchor="middle"
                  className={`font-sans text-[11px] font-semibold tracking-tight ${
                    isRec ? "fill-white" : "fill-charcoal"
                  }`}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Blueprint Footnote / Accessible Summary Line */}
      <div className="relative z-10 border-t border-charcoal/10 pt-3 flex justify-between items-center font-mono text-[9px] text-charcoal/50">
        <div>{isDe ? "ERGEBNIS: KLARHEIT & UMSETZUNG" : "RESULT: CLARITY & EXECUTION"}</div>
        <div className="text-[#C0823E] font-semibold">{isDe ? "Varda Legal Analyse" : "Varda Legal Analysis"}</div>
      </div>
    </div>
  );
}

function MnaDecisionArchitecture({ lang }: { lang: Language }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const t = (de: string, en: string) => (lang === "DE" ? de : en);

  // Define static data with type safety
  const nodes = {
    s1: {
      id: "s1",
      title: t("Umsatz ist stabil", "Revenue is stable"),
      desc: t("Jährliche Umsätze belegt durch lückenlose betriebswirtschaftliche Auswertungen (BWA) und geprüfte Jahresabschlüsse.", "Annual revenues proven by complete business assessments (BWA) and audited annual accounts."),
      status: "verified"
    },
    s2: {
      id: "s2",
      title: t("Kunden bleiben", "Customers will stay"),
      desc: t("Kundenbasis ist loyal, Verträge wurden in der Vergangenheit jedoch nur mündlich verlängert. Die Werthaltigkeit ist für den Käufer mangels Dokumentation nicht nachweisbar.", "Customer base is loyal, but contracts have historically only been extended verbally. Retention is unprovable to the buyer due to a lack of documentation."),
      status: "broken",
      breakLabel: t("LÜCKENHAFTE BELEGE", "INCOMPLETE RECORDS"),
      breakReason: t("Unterbrochen: Mündliche Absprachen schaffen kein verifizierbares Vertrauen.", "Interrupted: Verbal agreements do not create verifiable trust.")
    },
    s3: {
      id: "s3",
      title: t("IP gehört der Gesellschaft", "IP belongs to the company"),
      desc: t("Software wurde zum Teil durch Freelancer entwickelt, ohne dass die Rechteübertragung jemals schriftlich dokumentiert oder gegengezeichnet wurde.", "Software was partly developed by freelancers without the transfer of rights ever being documented in writing or counter-signed."),
      status: "broken",
      breakLabel: t("UNKLARHEIT RECHTSKETTE", "UNRESOLVED RIGHTS"),
      breakReason: t("Unterbrochen: Dokumentär unklare Rechtekette entwertet das Technologie-Asset.", "Interrupted: Documentarily unclear chain of rights devalues the tech asset.")
    },
    s4: {
      id: "s4",
      title: t("Schlüsselpersonen bleiben", "Key personnel will stay"),
      desc: t("Sämtliche Schlüsselmitarbeiter haben schriftliche, für den Käufer verifizierbare Lock-Up- und Retention-Agreements unterzeichnet.", "All key personnel have signed written lock-up and retention agreements that are verifiable for the buyer."),
      status: "verified"
    },
    t1: {
      id: "t1",
      title: t("weniger Rückfragen", "fewer inquiries"),
      desc: t("Präzise, sofort zugängliche Dokumentation im Datenraum eliminiert zeitaufwendige Q&A-Loops.", "Precise, immediately accessible data room documentation eliminates time-consuming Q&A loops.")
    },
    t2: {
      id: "t2",
      title: t("höhere Transaktionssicherheit", "higher transaction security"),
      desc: t("Vollständig belegbare Behauptungen verringern die Wahrscheinlichkeit eines Deal-Abbruchs im späten Prozessstadium.", "Fully verifiable assertions decrease the probability of transaction termination in late process stages.")
    },
    t3: {
      id: "t3",
      title: t("bessere Verhandlungsposition", "better negotiation position"),
      desc: t("Beseitigung von Unklarheiten verhindert nachträgliche Risikoabschläge oder Kaufpreiseinbehalte durch den Käufer.", "Elimination of ambiguities prevents retroactive risk discounts or purchase price holdbacks by the buyer.")
    },
    t4: {
      id: "t4",
      title: t("schnellerer Prozess", "faster process"),
      desc: t("Eine strukturierte und geprüfte Vorbereitung verkürzt die Due Diligence Phase um wertvolle Wochen.", "Structured and pre-audited preparation shortens the due diligence phase by valuable weeks.")
    }
  };

  return (
    <div className="relative w-full bg-[#FAF8F4] border border-charcoal/10 rounded-sm p-8 select-none flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Background blueprint grid overlay for a warm draft-paper feeling */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,21,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,21,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Top Editorial Labeling & Title */}
      <div className="relative z-10 flex flex-col space-y-2 pb-6 border-b border-charcoal/[0.06] mb-8">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#947444] font-semibold">
          {t("VARDA DECISION ARCHITECTURE NO. 02", "VARDA DECISION ARCHITECTURE NO. 02")}
        </span>
        <h4 className="font-serif text-2xl text-charcoal font-medium tracking-tight">
          {t("Der Unternehmensverkauf", "The Company Sale")}
        </h4>
        <p className="font-sans text-[11px] sm:text-[12px] italic text-charcoal/60 font-light max-w-2xl">
          {t("Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen. Das Modell visualisiert die weichenstellende Funktion der Verifizierbarkeit.",
              "A company sale begins with documents. It ends with trust. The model visualizes the path-defining role of verifiability.")}
        </p>
      </div>

      {/* Main Diagram Canvas Area (Responsive Swipe Container for Mobile UX) */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-thin">
        <div className="min-w-[760px] relative px-2 py-4">
          
          {/* Section Headers for LHS/RHS Columns */}
          <div className="flex justify-between px-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              01 / {t("Aussagen", "Statements")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#947444] font-semibold select-text">
              02 / {t("Zentrum des Vertrauens", "Core of Trust")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              03 / {t("Vertrauen", "Trust Outcomes")}
            </span>
          </div>

          <svg className="w-full h-[360px] overflow-visible" viewBox="0 0 800 360" fill="none">
            <defs>
              <filter id="subtleGlowHub" x="-15%" y="-15%" width="130%" height="130%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- PATHS SECTION (LHS -> HUB -> RHS) --- */}
            
            {/* Path 1: s1 -> Hub (Verified, Solid) */}
            <path
              d="M 230 70 C 310 70, 340 180, 400 180"
              stroke={activeNode === "s1" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 1 */}
            {(activeNode === "s1" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 70 C 310 70, 340 180, 400 180"
                />
              </circle>
            )}

            {/* Path 2: s2 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 140 H 290"
              stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 2: Dashed remainder (faded, broken) */}
            <path
              d="M 290 140 C 330 140, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="135" x2="292" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="135" x2="296" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 2 */}
            <text x="304" y="137" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s2.breakLabel}
            </text>


            {/* Path 3: s3 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 220 H 290"
              stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 3: Dashed remainder (faded, broken) */}
            <path
              d="M 290 220 C 330 220, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="215" x2="292" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="215" x2="296" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 3 */}
            <text x="304" y="217" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s3.breakLabel}
            </text>


            {/* Path 4: s4 -> Hub (Verified, Solid) */}
            <path
              d="M 230 290 C 310 290, 340 180, 400 180"
              stroke={activeNode === "s4" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 4 */}
            {(activeNode === "s4" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 290 C 310 290, 340 180, 400 180"
                />
              </circle>
            )}


            {/* --- Hub OUTWARD Paths (Center -> Trust Outcomes) --- */}
            
            {/* Path Hub -> t1 */}
            <path
              d="M 400 180 C 460 180, 500 70, 570 70"
              stroke={activeNode === "t1" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 70, 570 70"
                />
              </circle>
            )}

            {/* Path Hub -> t2 */}
            <path
              d="M 400 180 C 460 180, 500 140, 570 140"
              stroke={activeNode === "t2" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.2s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 140, 570 140"
                />
              </circle>
            )}

            {/* Path Hub -> t3 */}
            <path
              d="M 400 180 C 460 180, 500 220, 570 220"
              stroke={activeNode === "t3" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.7s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 220, 570 220"
                />
              </circle>
            )}

            {/* Path Hub -> t4 */}
            <path
              d="M 400 180 C 460 180, 500 290, 570 290"
              stroke={activeNode === "t4" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 290, 570 290"
                />
              </circle>
            )}


            {/* --- NODES (LEFT ZONE: STATEMENTS) --- */}
            
            {/* Left Node 1: Umsatz ist stabil */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="74" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s1.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="70" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="70" r="2" fill="#10b981" />
            </g>

            {/* Left Node 2: Kunden bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="144" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s2.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="140" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="140" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 3: IP gehört der Gesellschaft */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="224" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s3.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="220" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="220" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 4: Schlüsselpersonen bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="294" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s4.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="290" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="290" r="2" fill="#10b981" />
            </g>


            {/* --- CENTER HUB: VERIFIZIERBARKEIT --- */}
            
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("center")}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Exterior fine rotating reference circle */}
              <circle
                cx="400"
                cy="180"
                r="64"
                fill="none"
                stroke="rgba(148,116,68,0.15)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                className="animate-[spin_45s_linear_infinite]"
              />
              {/* Inner physical node core */}
              <circle
                cx="400"
                cy="180"
                r="56"
                fill="#FAF8F4"
                stroke={activeNode === "center" ? "#947444" : "rgba(17,17,21,0.22)"}
                strokeWidth={activeNode === "center" ? "2" : "1.2"}
                filter={activeNode === "center" ? "url(#subtleGlowHub)" : undefined}
                className="transition-all duration-300"
              />
              {/* Grid marks on hub for technical/precision blueprint style */}
              <line x1="400" y1="116" x2="400" y2="122" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="400" y1="238" x2="400" y2="244" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="336" y1="180" x2="342" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="458" y1="180" x2="464" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />

              {/* Inscriptions */}
              <text x="400" y="171" textAnchor="middle" className="font-sans text-[10px] font-bold tracking-[0.16em] fill-charcoal">
                {t("VERIFIZIERBARKEIT", "VERIFIABILITY")}
              </text>
              <text x="400" y="196" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("Kann die Aussage", "Can the statement")}
              </text>
              <text x="400" y="206" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("belegt werden?", "be verified?")}
              </text>
            </g>


            {/* --- NODES (RIGHT ZONE: TRUST OUTCOMES) --- */}
            
            {/* Right Node 1: weniger Rückfragen */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="74" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t1.title}
              </text>
            </g>

            {/* Right Node 2: höhere Transaktionssicherheit */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t2" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="144" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t2.title}
              </text>
            </g>

            {/* Right Node 3: bessere Verhandlungsposition */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t3" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="224" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t3.title}
              </text>
            </g>

            {/* Right Node 4: schnellerer Prozess */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="294" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t4.title}
              </text>
            </g>

          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card at the Bottom of the Widget to provide strategy-firm depth */}
      <div className="relative z-10 mt-6 p-5 bg-[#FAF8F4] border border-charcoal/10 rounded-sm min-h-[100px] flex flex-col justify-center transition-all duration-300">
        {activeNode ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#947444] font-semibold">
                {activeNode.startsWith("s") 
                  ? t("Aussage / Verifikation", "Statement / Verification State") 
                  : activeNode === "center" 
                    ? t("Zentrale Verifikation", "Central Verification Hub") 
                    : t("Effekt auf den Prozess", "Impact on Process")}
              </span>
              
              {activeNode.startsWith("s") && (
                <span className={`px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider ${
                  activeNode === "s1" || activeNode === "s4"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-100/50" 
                    : "bg-amber-50 text-amber-800 border border-amber-100/50"
                }`}>
                  {activeNode === "s1" || activeNode === "s4"
                    ? t("Belegbar / Solide", "Verifiable / Sound") 
                    : t("Unterbrochen / Risiko", "Interrupted / Risk Factor")}
                </span>
              )}

              {activeNode.startsWith("t") && (
                <span className="px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider bg-blue-50 text-blue-800 border border-blue-100/50">
                  {t("Resultierender Wert", "Resulting Value")}
                </span>
              )}
            </div>

            <h5 className="font-serif text-sm font-bold text-charcoal">
              {activeNode === "center" ? t("Der Filter der Due Diligence", "The Due Diligence Grid") : (nodes as any)[activeNode]?.title}
            </h5>

            <p className="font-sans text-[12px] text-charcoal/70 leading-relaxed font-light">
              {activeNode === "center" 
                ? t("Das verifiziert vorliegende Dokumentenwerk bildet das unerschütterliche Fundament. Behauptungen, die hier mangels Unterlagen scheitern, zerstören das Vertrauen, bevor Verträge entstehen können.", 
                    "The factual, audited documentation forms an unshakable foundation. Statements that fail here due to lack of records dissolve trust before agreements can be finalized.")
                : activeNode === "s2" 
                  ? t("Die Aussage 'Kunden bleiben' ist dealkritisch, bricht jedoch ab. Ohne schriftlich fixierte, übertragbare Verträge wertet der Käufer die Kundenbasis als ungesichertes Risiko und fordert massive Abschläge auf den Kaufpreis.", 
                      "The assertion 'Customers will stay' is critical, but fails here. Without written, transferable customer agreements, the buyer reviews the revenues as unsecured risk and demands substantial discounts.")
                  : activeNode === "s3"
                    ? t("Software-Assets ohne saubere, ununterbrochene Rechtekette durch schriftliche Vereinbarungen mit allen Freelancern und Entwicklern stellen eine existenzielle Rechtsunsicherheit dar. Die Verifikation bricht ab.", 
                        "Software assets without a clear, unbroken chain of title by written agreements with all freelancers and developers pose an existential legal liability. Verification fails.")
                    : (nodes as any)[activeNode]?.desc}
            </p>
          </div>
        ) : (
          <div className="text-center py-2 text-charcoal/40 italic font-serif text-[12px]">
            {t("Bewegen Sie den Cursor über ein Architekturelement, um die verfahrensrechtlichen Zusammenhänge zu analysieren.", 
               "Hover over any architectural node to analyze the strategic and structural outcomes.")}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [currentView, setCurrentView] = useState<"website" | "navigator">("website");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isKompendiumOpen, setIsKompendiumOpen] = useState(false);
  
  // Interactive Simulator State
  const [preMoney, setPreMoney] = useState<number>(3000000);
  const [newInvestment, setNewInvestment] = useState<number>(500000);
  const [optionPool, setOptionPool] = useState<number>(10); // in %

  // Fee calculation state
  const [selectedFeeAddons, setSelectedFeeAddons] = useState<string[]>([]);
  
  const handleNavigateToConsult = (_msg: string) => {
    document.getElementById("letsgo")?.scrollIntoView({ behavior: "smooth" });
  };

  // Unique layout states requested by USER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeLegalModal, setActiveLegalModal] = useState<"impressum" | "datenschutz" | null>(null);
  const [showShortProfile, setShowShortProfile] = useState(false);
  const [activeClause, setActiveClause] = useState<string | null>(null);

  // Simulated ProRes Living Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoTime, setVideoTime] = useState(2.4);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showMetadataHud, setShowMetadataHud] = useState(true);

  // Interactive Typewriter state under the Fokus (Expertise) section
  const [fokusCodeText, setFokusCodeText] = useState("");
  const [fokusSuccessVisible, setFokusSuccessVisible] = useState(false);
  const targetCodeString = "company sale: structure founder exit & lock-up phase";

  useEffect(() => {
    let typeIndex = 0;
    let timer: any;
    
    const runTypingLoop = () => {
      setFokusSuccessVisible(false);
      setFokusCodeText("");
      typeIndex = 0;
      
      const typeNextChar = () => {
        if (typeIndex < targetCodeString.length) {
          setFokusCodeText(targetCodeString.slice(0, typeIndex + 1));
          typeIndex++;
          timer = setTimeout(typeNextChar, 70); 
        } else {
          timer = setTimeout(() => {
            setFokusSuccessVisible(true);
          }, 800);
          
          timer = setTimeout(runTypingLoop, 14000); // loops every 14s
        }
      };
      
      timer = setTimeout(typeNextChar, 1200);
    };

    runTypingLoop();
    return () => clearTimeout(timer);
  }, []);

  // Dynamic ticker for the Simulated Video progress playhead (Loops over 12 seconds)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePlayhead = () => {
      const now = performance.now();
      if (isVideoPlaying) {
        const delta = (now - lastTime) / 1000;
        setVideoTime((prevTime) => {
          let nextTime = prevTime + delta;
          if (nextTime >= 12.0) {
            return 0.0; // Loop exactly after 12 seconds
          }
          return nextTime;
        });
      }
      lastTime = now;
      animationFrameId = requestAnimationFrame(updatePlayhead);
    };

    animationFrameId = requestAnimationFrame(updatePlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVideoPlaying]);

  // Animation state for the 17-second custom structural video under Firm Follows Function
  const [fffAnimTime, setFffAnimTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const updateFffPlayhead = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      setFffAnimTime((prevTime) => {
        let nextTime = prevTime + delta;
        if (nextTime >= 17.0) {
          return 0.0; // Loop exactly after 17 seconds
        }
        return nextTime;
      });
      lastTime = now;
      animationFrameId = requestAnimationFrame(updateFffPlayhead);
    };

    animationFrameId = requestAnimationFrame(updateFffPlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Automatic transition for text Carousel on Left (6 seconds interval)
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(carouselTimer);
  }, []);

  // Standalone linkability and language sync routing for "Gründerstruktur Check" and Varda Legal Navigator
  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (hash === "#navigator") {
        setCurrentView("navigator");
        setLang("DE");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#en/navigator" || hash === "#navigator/en" || hash === "#en-navigator") {
        setCurrentView("navigator");
        setLang("EN");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#founder-structure-check" || path.includes("/en")) {
        setLang("EN");
        setCurrentView("website");
        setTimeout(() => {
          const element = document.getElementById("founder-structure-check");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else if (hash === "#gruenderstruktur-check") {
        setLang("DE");
        setCurrentView("website");
        setTimeout(() => {
          const element = document.getElementById("gruenderstruktur-check");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else {
        const anchors = [
          "#home", 
          "#fokus", 
          "#methode", 
          "#beispiel-output", 
          "#wir", 
          "#letsgo",
          "#ma",
          "#transaktion",
          "#selected-deal",
          "#selected-experience",
          "#erfahrung",
          "#experience",
          "#startups-scaleups",
          "#mandate",
          "#so-arbeitet-varda",
          "#manifest",
          "#konstantin",
          "#kontakt"
        ];
        if (anchors.includes(hash)) {
          setCurrentView("website");
          setTimeout(() => {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 150);
        }
      }
    };

    // Run on initial mount
    handleRouting();

    // Listen to hash/history changes for shared links or navigation
    window.addEventListener("hashchange", handleRouting);
    return () => window.removeEventListener("hashchange", handleRouting);
  }, []);

  // Enforce correct HTML browser title & Meta / Open Graph / Canonical & JSON-LD schema injection dynamically for GEO/AEO optimization
  useEffect(() => {
    // 1. Determine active page content parameters
    const origin = typeof window !== "undefined" ? window.location.origin : "https://www.vardalegal.com";
    const canonicalUrl = typeof window !== "undefined"
      ? ("https://www.vardalegal.com" + window.location.pathname + (window.location.hash ? window.location.hash : ""))
      : "https://www.vardalegal.com";

    let pageTitle = lang === "DE" 
      ? "Varda Legal | Corporate & M&A für Gründer und Wachstumsunternehmen"
      : "Varda Legal | Corporate & M&A for Founders and Growth Companies";
    let pageDescription = lang === "DE"
      ? "Varda Legal berät Gründer, Startups, Scale-ups und Gesellschafter bei Corporate-Themen, Finanzierungen, Unternehmenskäufen und Unternehmensverkäufen."
      : "Varda Legal advises founders, startups, scale-ups and shareholders on corporate matters, financing, company acquisitions and company sales.";
    let pageImage = `${origin}${execFigmaImage}`;
    let pageType = "website";

    if (currentView === "navigator") {
      pageTitle = lang === "DE" ? "Varda Legal Navigator | Executive Checks" : "Varda Legal Navigator | Executive Checks";
      pageDescription = lang === "DE"
        ? "Unser interaktives Kanzlei-Prüfungs-Toolkit bietet unmittelbare Orientierung für Corporate- und Handelsrecht. Executive Checks für Gesellschaftsstrukturen und Commercial-Risk-Faktoren."
        : "Our interactive legal assessment toolkit brings immediate governance precision to your browser. Checks for share structures, corporate compliance and commercial contracts.";
      pageImage = `${origin}${execFigmaImage}`;
    } else if (selectedArticle) {
      pageTitle = `${selectedArticle.title} | Varda Legal`;
      pageDescription = selectedArticle.abstract || selectedArticle.excerpt || pageDescription;
      pageType = "article";
    }

    // 2. Set title isomorphically
    document.title = pageTitle;

    // 3. Dynamic Canonical Link injection
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Set Standard and Open Graph meta-tags
    const updateMetaTag = (attrName: "name" | "property", attrVal: string, contentVal: string) => {
      let tag = document.querySelector(`meta[${attrName}='${attrVal}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", contentVal);
    };

    updateMetaTag("name", "title", pageTitle);
    updateMetaTag("name", "description", pageDescription);
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", pageDescription);
    updateMetaTag("property", "og:image", pageImage);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:type", pageType);
    updateMetaTag("property", "og:site_name", "Varda Legal");
    updateMetaTag("property", "twitter:card", "summary_large_image");
    updateMetaTag("property", "twitter:title", pageTitle);
    updateMetaTag("property", "twitter:description", pageDescription);

    // 5. Build structured JSON-LD data
    const graph: any[] = [
      {
        "@type": "WebSite",
        "@id": "https://www.vardalegal.com/#website",
        "url": "https://www.vardalegal.com",
        "name": "Varda Legal",
        "alternateName": "Varda",
        "inLanguage": "de-DE"
      },
      {
        "@type": "LegalService",
        "@id": "https://www.vardalegal.com/#legalservice",
        "name": "Varda Legal",
        "url": "https://www.vardalegal.com",
        "description": lang === "DE"
          ? "Varda Legal berät Gründer, Startups, Scale-ups und Gesellschafter bei Corporate-Themen, Finanzierungen, Unternehmenskäufen und Unternehmensverkäufen."
          : "Varda Legal advises founders, startups, scale-ups and shareholders on corporate matters, financing, company acquisitions and company sales.",
        "areaServed": "DE",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "München",
          "addressCountry": "DE"
        },
        "founder": {
          "@type": "Person",
          "name": "Dr. Konstantin Filbinger",
          "jobTitle": "Rechtsanwalt",
          "description": lang === "DE"
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
              "credentialCategory": "Lehrauftrag",
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
          "Gesellschaftervereinbarungen"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": "Gründer, Startups, Scale-ups, Gesellschafter und Wachstumsunternehmen"
        }
      }
    ];

    // If on Varda Navigator view, inject WebPage and Service JSON-LD schemas
    if (currentView === "navigator") {
      graph.push({
        "@type": "WebPage",
        "@id": "https://www.vardalegal.com/#navigator-page",
        "name": "Varda Legal Navigator",
        "description": "Interactive Executive Assessment tools for Corporate, Shareholders, Share structures and Commercial issues.",
        "url": "https://www.vardalegal.com/#navigator"
      });
      graph.push({
        "@type": "Service",
        "@id": "https://www.vardalegal.com/#navigator-service",
        "name": "Varda Legal Navigator",
        "serviceType": "Legal Checkup and Interactive Analysis",
        "provider": {
          "@id": "https://www.vardalegal.com/#legalservice"
        },
        "description": "Structured digital assessment tools providing decision support for founder agreements, corporate risk, and financial preparations."
      });
    }

    // If reading an article, inject BlogPosting and FAQPage if FAQ questions exist
    if (selectedArticle) {
      graph.push({
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#entry`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "headline": selectedArticle.title,
        "datePublished": selectedArticle.date,
        "description": selectedArticle.excerpt || selectedArticle.abstract,
        "author": {
          "@type": "Person",
          "name": "Dr. Konstantin Filbinger"
        },
        "publisher": {
          "@id": "https://www.vardalegal.com/#legalservice"
        }
      });

      if (selectedArticle.faq && selectedArticle.faq.length > 0) {
        graph.push({
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": selectedArticle.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        });
      }
    }

    // Add blogs schema to keep reference of standard content
    graph.push({
      "@type": "Blog",
      "@id": "https://www.vardalegal.com/#blog",
      "name": "Denkwerk",
      "publisher": {
        "@id": "https://www.vardalegal.com/#legalservice"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Die Series A-Runde in Deutschland: Anatomie des Term Sheets",
          "datePublished": "2026-05-14",
          "abstract": "Liquidationspräferenzen, Vesting-Klauseln und Anti-Dilution: Ein pragmatischer Navigator durch die wichtigsten Deal-Terms deutscher VCs im Jahr 2026."
        },
        {
          "@type": "BlogPosting",
          "headline": "VSOP vs. ESOP: Was bringt Schlüsselmitarbeiter wirklich zum Bleiben?",
          "datePublished": "2026-04-03",
          "abstract": "Virtuelle Mitarbeiterbeteiligungsprogramme (VSOP) sind der deutsche Standard. Doch wie gestaltet man sie steuerlich optimal und motivationsfördernd?"
        },
        {
          "@type": "BlogPosting",
          "headline": "Fintech & BaFin: Lizenzierungsgrenzen klug navigieren",
          "datePublished": "2026-03-12",
          "abstract": "Wann greift das KWG oder ZAG? Wie junge Fintech-Scaleups regulatorische Fallstricke umgehen und Partnerschaften rechtssicher strukturieren."
        }
      ]
    });

    const consolidatedSchema = {
      "@context": "https://schema.org",
      "@graph": graph
    };

    // Remove any previously injected script
    const existingScript = document.getElementById("ld-json-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Inject the final consolidated script
    const script = document.createElement("script");
    script.id = "ld-json-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(consolidatedSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("ld-json-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [lang, currentView, selectedArticle]);

  // Calculate simulated cap table percentages
  const postMoney = preMoney + newInvestment;
  const investorShare = (newInvestment / postMoney) * 100;
  const optionPoolShare = optionPool;
  const founderShare = 100 - investorShare - optionPoolShare;

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "wir", "fokus", "denkwerk", "verguetung", "letsgo"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = content[lang];

  const toggleFeeAddon = (addonKey: string) => {
    if (selectedFeeAddons.includes(addonKey)) {
      setSelectedFeeAddons(selectedFeeAddons.filter(a => a !== addonKey));
    } else {
      setSelectedFeeAddons([...selectedFeeAddons, addonKey]);
    }
  };

  const getAddonPrice = (key: string) => {
    switch (key) {
      case "esop": return 1500;
      case "convertible": return 950;
      case "saas": return 1200;
      case "gdpr": return 850;
      default: return 0;
    }
  };

  // Luxury Wendelstein Editorial slide definitions (Language aware)
  const heroSlides = [
    {
      index: "01",
      tag: lang === "DE" ? "EXECUTION EXCELLENCE" : "EXECUTION EXCELLENCE",
      headline: lang === "DE" 
        ? "Ausgezeichnete Beratung, Mut zu klaren Aussagen. Persönlich. Präzise. Pragmatisch." 
        : "Excellent advice, courage to speak clearly. Personal. Precise. Pragmatic.",
      paragraph: lang === "DE" 
        ? "Mut zu Klarheit. Short and simple statt long and complicated. Risikobewertung und konkrete Handlungsempfehlung statt langen Texten ohne Aussage."
        : "Courage to be clear. Short and simple instead of long and complicated. Risk assessment and concrete recommended action instead of long texts with no substance."
    },
    {
      index: "02",
      tag: lang === "DE" ? "UNTERNEHMERISCHES VERSTÄNDNIS" : "ENTREPRENEURIAL INSIGHT",
      headline: lang === "DE" 
        ? "Leidenschaft und radikale Entschlossenheit. Für unsere Mandanten." 
        : "Passion and radical determination. For our clients.",
      paragraph: lang === "DE" 
        ? "Wachstum braucht sichere Leitplanken statt starrer juristischer Hindernisse. Wir analysieren rechtliche Risiken im echten ökonomischen Kontext und liefern einen gangbaren Weg zu Ihrem Ziel."
        : "Scaling mandates durable protections, not bureaucratic speedbumps. We evaluate legal risks relative to micro-economic opportunities and deliver an executable path directly to your next milestone."
    },
    {
      index: "03",
      tag: lang === "DE" ? "FORM FOLLOWS FUNCTION" : "FORM FOLLOWS FUNCTION",
      headline: lang === "DE" 
        ? "Vollständig integrierte Beratung. Ihre agile Rechtsabteilung." 
        : "Radically streamlined delivery. Your outsourced general counsel.",
      paragraph: lang === "DE" 
        ? "Wir arbeiten digital auf Ihren Kanälen, passen uns Ihren Entwicklungs-Zyklen nahtlos an und bieten transparente Flat-Pauschalen ohne versteckte Honorarfallen."
        : "We operate digitally within your own communication toolchains, seamlessly integrated into funding rounds, with clear upfront modules."
    }
  ];

  // Over-the-shoulder watchmaking simulation coordinates
  // Phase 1 (0.0s to 5.5s): Hand sets the chunkier bronze gear
  // Phase 2 (5.5s to 11.0s): Hand sets the tiny silver gear with tweezers
  // Phase 3 (11.0s to 12.0s): System spins harmoniously together

  // Chunky gear: target place is (330, 315), starting at hover (190, 150)
  let chunkyX = 190;
  let chunkyY = 150;
  let chunkyOpacity = 0.2;
  let handChunkyX = 120;
  let handChunkyY = 100;
  let chunkyScale = 0.85;

  if (videoTime < 5.0) {
    const t = videoTime / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    chunkyX = 190 + (330 - 190) * ease;
    chunkyY = 150 + (315 - 150) * ease;
    chunkyOpacity = 1.0;
    chunkyScale = 0.85 + (0.15 * ease); // scales up as it goes into focal range
    handChunkyX = chunkyX - 45;
    handChunkyY = chunkyY - 55;
  } else {
    chunkyX = 330;
    chunkyY = 315;
    chunkyOpacity = 1.0;
    chunkyScale = 1.0;
    // hand withdraws gracefully
    const t2 = Math.min(1.0, (videoTime - 5.0) / 1.5);
    const ease2 = t2 * t2;
    handChunkyX = (330 - 45) - (200 * ease2);
    handChunkyY = (315 - 55) - (180 * ease2);
  }

  // Tiny gear: target place is (387, 345), starting at hover (440, 210)
  let tinyX = 440;
  let tinyY = 210;
  let tinyOpacity = 0.0;
  let tweezersX = 500;
  let tweezersY = 120;
  let tweezersRot = -20;

  if (videoTime >= 5.5 && videoTime < 10.5) {
    const t = (videoTime - 5.5) / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    tinyX = 440 + (387 - 440) * ease;
    tinyY = 210 + (345 - 210) * ease;
    tinyOpacity = 1.0;
    tweezersX = tinyX;
    tweezersY = tinyY;
    tweezersRot = -20 + (10 * ease); // straightens slightly as it aims
  } else if (videoTime >= 10.5) {
    tinyX = 387;
    tinyY = 345;
    tinyOpacity = 1.0;
    // tweezers withdraw gracefully
    const t2 = Math.min(1.0, (videoTime - 10.5) / 1.5);
    const ease2 = t2 * t2;
    tweezersX = 387 + (220 * ease2);
    tweezersY = 345 - (200 * ease2);
    tweezersRot = -10 + (15 * ease2);
  }

  // Speed and Rotation angles of all gears in the clockwork engine
  let bigGearRotation = 0;
  let chunkyGearRotation = 0;
  let tinyGearRotation = 0;
  let secondaryGear1Rotation = 0;
  let secondaryGear2Rotation = 0;

  if (videoTime >= 11.0) {
    const rotTime = videoTime - 11.0;
    bigGearRotation = rotTime * 360; // spins
    chunkyGearRotation = -rotTime * 480; // interlocks and spins fast opposite direction
    tinyGearRotation = rotTime * 960; // interlocks and spins super fast
    secondaryGear1Rotation = rotTime * 720;
    secondaryGear2Rotation = -rotTime * 640;
  }

  return (
    <div className="relative min-h-screen bg-paper-light text-charcoal selection:bg-brand-red selection:text-white">
      {/* Structural Varda Grid Lines - Background overlay (Subtle margins/columns mimic) */}
      <div className="pointer-events-none fixed inset-y-0 left-1/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-2/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-3/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-charcoal/10 bg-paper-light/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
          {/* Logo Stacked in Premium Sans-Serif */}
          <a 
            href="#home" 
            onClick={() => {
              setCurrentView("website");
              window.location.hash = "#home";
            }}
            className="flex flex-col select-none leading-none group shrink-0"
          >
            <span className="font-display text-lg font-bold tracking-[0.22em] text-charcoal leading-none">VARDA</span>
            <span className="font-sans text-[10px] font-semibold tracking-[0.42em] text-charcoal/70 leading-none mt-1">LEGAL</span>
          </a>

          {/* Desktop Visible Editorial Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-xs uppercase tracking-widest text-charcoal/80">
            <a 
              href="#ma" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              M&A
            </a>
            <a 
              href="#startups-scaleups" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {lang === "DE" ? "STARTUPS & SCALE-UPS" : "STARTUPS & SCALE-UPS"}
            </a>
            <a 
              href="#so-arbeitet-varda" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {lang === "DE" ? "SO ARBEITET VARDA" : "HOW VARDA WORKS"}
            </a>
            <a 
              href="#konstantin" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              KONSTANTIN
            </a>
            <a 
              href="#letsgo" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {lang === "DE" ? "KONTAKT" : "CONTACT"}
            </a>
          </nav>

          {/* Top Right Controls (Language Switch, Primary CTA, Circular Menu Button) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Switch */}
            <div className="flex items-center border border-charcoal/15 px-2.5 py-1 font-mono text-[10px] tracking-wider bg-white/60 shadow-2xs">
              <button
                id="lang-de-btn"
                onClick={() => setLang("DE")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  lang === "DE" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                DE
              </button>
              <span className="text-charcoal/25 px-1 select-none">|</span>
              <button
                id="lang-en-btn"
                onClick={() => setLang("EN")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  lang === "EN" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA Button */}
            <a
              href="#letsgo"
              onClick={() => setCurrentView("website")}
              className="bg-charcoal text-white hover:bg-[#C0823E] text-[11px] font-mono uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 transition-colors duration-300 font-bold shrink-0 inline-flex items-center"
            >
              {d.nav.cta}
            </a>

            {/* Circular Editorial Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-charcoal/25 hover:border-charcoal flex flex-col items-center justify-center gap-1 hover:bg-charcoal hover:text-white transition-all duration-300 focus:outline-none shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="h-[1.5px] w-4 bg-current block" />
              <span className="h-[1.5px] w-4 bg-current block" />
            </button>
          </div>
        </div>
      </header>

      {/* LUXURIOUS SLIDE-DOWN DRAWER OVERLAY MENU (Inspired by premium European boutique law firms & blueprint aesthetics) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#FAF8F4] text-charcoal flex flex-col overflow-y-auto border-b border-charcoal/15"
          >
            {/* Elegant micro-grid & abstract strategic legal blueprint overlay in background + Fine Archival Paper Grain Filter */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.22] transition-opacity duration-1000 z-0">
              <svg width="100%" height="100%" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="varda-paper-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" />
                  </filter>
                  <pattern id="menu-grid-arch" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2C2C2C" strokeWidth="0.4" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                {/* Apply Tactile Paper Grain Noise */}
                <rect width="100%" height="100%" filter="url(#varda-paper-grain)" />
                {/* Blueprint Elements styled in matching Ivory/Charcoal hue */}
                <rect width="100%" height="100%" fill="url(#menu-grid-arch)" />
                <circle cx="75%" cy="45%" r="280" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="4 8" strokeOpacity="0.05" />
                <circle cx="75%" cy="45%" r="180" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.04" />
                <circle cx="75%" cy="45%" r="80" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeOpacity="0.07" />
                <path d="M 120 220 L 420 220 L 520 320 L 920 320" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="3 3" strokeOpacity="0.05" />
                <path d="M 320 120 L 320 570" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <path d="M 520 270 L 520 720" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <text x="140" y="200" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">STRATEGIC CAPITAL STRUCTURE LAYER_A</text>
                <text x="540" y="300" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">CORPORATE ENTITY REORGANIZATION PROTOCOL : V.L_GEN_04</text>
                <text x="740" y="405" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">MUC_HQ / 48.1351 N | 11.5820 E</text>
                <path d="M 30 30 L 60 30 M 30 30 L 30 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
                <path d="M 97% 30 L 94% 30 M 97% 30 L 97% 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
              </svg>
            </div>

            {/* Inner frame containing elegant alignments */}
            <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 flex-1 flex flex-col justify-between relative z-10">
              
              {/* Header inside the dropdown */}
              <div className="flex justify-between items-center pb-8 border-b border-charcoal/10">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 font-display text-lg font-bold tracking-widest text-[#2C2C2C]">
                  <span>VARDA</span>
                  <span className="text-brand-red font-sans text-xl font-black">•</span>
                  <span className="font-serif italic font-normal tracking-normal text-base text-charcoal/85">Legal</span>
                </a>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center space-x-3 text-charcoal/60 hover:text-[#C0823E] font-mono text-xs uppercase tracking-widest cursor-pointer transition-all duration-300"
                >
                  <span className="font-mono font-medium">{lang === "DE" ? "SCHLIESSEN" : "CLOSE"}</span>
                  <div className="w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center bg-transparent group-hover:border-[#C0823E] transition-all duration-300">
                    <X className="h-3.5 w-3.5 text-charcoal/70 group-hover:text-[#C0823E] transition-colors duration-300" />
                  </div>
                </button>
              </div>

              {/* Menu content - Architectural layout splits (Left Column Directory Index | Right Column Core Strategic Navigation) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-12 md:py-16 flex-1 items-center">
                
                {/* Left Column: Premium Bureau Directory Archive Index */}
                <div className="lg:col-span-4 lg:border-r border-charcoal/10 lg:pr-12 flex flex-col justify-between h-auto lg:h-[480px]">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="font-mono text-[9px] tracking-widest text-[#C0823E] uppercase">[ INTEGRATED COUNSEL ]</div>
                      <h4 className="font-serif text-2xl font-light text-charcoal tracking-tight leading-snug">
                        {lang === "DE" ? "Präzision & Diskrete Kompetenz." : "Precision & Pure Discretion."}
                      </h4>
                    </div>
                    <p className="text-charcoal/70 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
                      {lang === "DE" 
                        ? "Varda Legal steht für die Synthese von intellektuellem Anspruch, unternehmerischem Pragmatismus und zeitloser Unabhängigkeit."
                        : "Varda Legal stands for the ultimate synthesis of intellectual rigour, entrepreneurial pragmatism, and timeless independence."}
                    </p>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-charcoal/10 font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mt-8 lg:mt-0">
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ GRÜNDER / PARTNER ]</span>
                      <span className="text-charcoal/85 text-right font-medium">Dr. Konstantin Filbinger</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ HAUPTSITZ / HQ ]</span>
                      <span className="text-charcoal/85 text-right font-medium">München • Germany</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ SPEZIALISIERUNG ]</span>
                      <span className="text-charcoal/85 text-right font-medium">{lang === "DE" ? "Transaktionen • Strategische Verträge • Governance" : "Transactions • Strategic Contracts • Governance"}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#C0823E]/70">[ BERATUNGSSTIL ]</span>
                      <span className="text-charcoal/85 text-right font-medium">{lang === "DE" ? "Entscheidungsorientiert • Radikal Funktional" : "Decision-led • Radically Functional"}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural, calm and understated navigation anchors */}
                <div className="lg:col-span-8 flex flex-col justify-center w-full">
                  <div className="space-y-3 md:space-y-4 w-full">
                    {[
                      { 
                        label: "M&A", 
                        target: "#ma", 
                        subtitle: lang === "DE" ? "01 / Transaktionen" : "01 / Transactions",
                        sec: "01",
                        desc: lang === "DE" ? "Unternehmensverkauf & M&A-Transaktionen" : "Company sales & M&A transactions"
                      },
                      { 
                        label: lang === "DE" ? "Startups & Scale-ups" : "Startups & Scale-ups", 
                        target: "#startups-scaleups", 
                        subtitle: lang === "DE" ? "02 / Mandate" : "02 / Mandates",
                        sec: "02",
                        desc: lang === "DE" ? "Gründung, Wachstum & operative Verträge" : "Formation, growth & commercial agreements"
                      },
                      { 
                        label: lang === "DE" ? "So arbeitet Varda" : "How Varda Works", 
                        target: "#so-arbeitet-varda", 
                        subtitle: lang === "DE" ? "03 / Methode" : "03 / Methodology",
                        sec: "03",
                        desc: lang === "DE" ? "Vier-Schritte-Methode & klare Handlungsempfehlung" : "Four-step methodology & actionable recommendations"
                      },
                      { 
                        label: "Konstantin", 
                        target: "#konstantin", 
                        subtitle: lang === "DE" ? "04 / Profil" : "04 / Profile",
                        sec: "04",
                        desc: lang === "DE" ? "Dr. Konstantin Filbinger · Hintergrund & Prinzipien" : "Dr. Konstantin Filbinger · Background & principles"
                      },
                      { 
                        label: lang === "DE" ? "Kontakt" : "Contact", 
                        target: "#letsgo", 
                        subtitle: lang === "DE" ? "05 / Erstgespräch" : "05 / Consultation",
                        sec: "05",
                        desc: lang === "DE" ? "Direkter Kontakt & Terminvereinbarung" : "Direct contact & consultation"
                      }
                    ].map((menuItem, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 6 }}
                        className="border-b border-charcoal/10 pb-2.5 group transition-all duration-300"
                      >
                        <a
                          href={menuItem.target}
                          onClick={() => {
                            setIsMenuOpen(false);
                            if (menuItem.target.includes("navigator")) {
                              setCurrentView("navigator");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                              setCurrentView("website");
                            }
                          }}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1"
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className="font-mono text-[10px] text-charcoal/40 tracking-wider select-none font-medium">
                              {menuItem.sec}
                            </span>
                            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-charcoal/90 group-hover:text-[#C0823E] transition-colors duration-200">
                              {menuItem.label}
                            </span>
                          </div>
                          <div className="flex flex-col items-start sm:items-end pt-0.5 sm:pt-0">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] group-hover:text-charcoal font-bold transition-colors">
                              {menuItem.subtitle}
                            </span>
                            <span className="text-[10px] text-charcoal/50 font-sans mt-0.5 group-hover:text-charcoal/70 transition-colors hidden sm:block">
                              {menuItem.desc}
                            </span>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom footer index */}
              <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-mono text-charcoal/40 gap-4">
                <div className="tracking-wide">© 2026 DR. KONSTANTIN FILBINGER • VARDA LEGAL • MUNICH</div>
                <div className="flex space-x-6 text-[10px]">
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("impressum"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
                  >
                    IMPRESSUM
                  </button>
                  <span>•</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("datenschutz"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
                  >
                    DATENSCHUTZ
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        
        {currentView === "navigator" ? (
          <VardaNavigator 
            lang={lang} 
            onNavigateToConsult={(data) => {
              // Smooth scroll to the scheduler section #letsgo
              setCurrentView("website");
              const el = document.getElementById("letsgo");
              if (el) {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }} 
            onGoBack={() => {
              setCurrentView("website");
              window.location.hash = "#home";
            }}
          />
        ) : (
          <>
            {/* SECTION 1: HOMEPAGE (HERO REFINEMENT) */}
            <section id="home" className="py-12 md:py-20 border-b border-charcoal/10 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Category, Headline, Supporting Copy, Direct Work, CTAs, Trust Cue */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category Line */}
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C0823E] uppercase font-bold">
                    <span className="w-1.5 h-1.5 bg-[#C0823E]" />
                    <span>{d.hero.badge}</span>
                  </div>

                  {/* Headline (H1 Anchor) */}
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.08] tracking-tight select-none">
                    {d.hero.title}
                  </h1>

                  {/* Emotional Promise / Supporting Copy */}
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal/85 font-normal tracking-wide">
                    {d.hero.subtitle}
                  </p>

                  {/* Direct-work Sentence */}
                  {d.hero.directSentence && (
                    <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-[540px] pt-1 border-t border-charcoal/10">
                      {d.hero.directSentence}
                    </p>
                  )}

                  {/* Action CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-3">
                    <a
                      href="#letsgo"
                      className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-[#C0823E] text-xs font-mono uppercase tracking-widest px-7 py-4 transition-colors duration-300 font-bold shadow-2xs"
                    >
                      <span>{d.hero.cta}</span>
                    </a>
                    
                    <a
                      href="#so-arbeitet-varda"
                      className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.15em] font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 py-3 transition-colors"
                    >
                      <span>{d.hero.secCta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Discreet Trust Cue */}
                  {d.hero.trustCue && (
                    <div className="pt-2">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C0823E]" />
                        <span>{d.hero.trustCue}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Konstantin Filbinger Portrait Card (Primary Trust Element) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  {/* Founder / Portrait Card */}
                  <div className="w-full max-w-sm bg-[#FAF8F4] border border-charcoal/15 p-5 sm:p-6 flex flex-col justify-between group shadow-2xs">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-100 border border-charcoal/15 overflow-hidden">
                      <img
                        src={konstineuImage}
                        alt="Dr. Konstantin Filbinger"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 space-y-1">
                      <div className="font-mono text-[9px] text-[#C0823E] uppercase tracking-widest font-bold">
                        {lang === "DE" ? "GRÜNDER · RECHTSANWALT" : "FOUNDER · LAWYER"}
                      </div>
                      <div className="font-serif text-lg font-medium tracking-wide text-charcoal">
                        {lang === "DE" ? "Dr. Konstantin Filbinger" : "Dr Konstantin Filbinger"}
                      </div>
                      <p className="font-sans text-xs text-charcoal/70 pt-0.5 leading-normal">
                        {lang === "DE"
                          ? "Direkte Beratung, wirtschaftliches Urteilsvermögen und persönliche Verantwortung."
                          : "Direct advice, commercial judgment and personal responsibility."}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

        {/* =========================================================================
            SECTION 2 — SELECTED TRANSACTION / SOCIAL PROOF
            ========================================================================= */}
        <section id="transaktion" aria-labelledby="selected-transaction-heading" className="py-16 md:py-24 border-b border-charcoal/10 relative">
          <div id="selected-deal" className="scroll-mt-24" />
          <div id="ma" className="scroll-mt-24" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left / Secondary Column (lg:col-span-5): Deal Label, Headline, Description & Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Deal Label / Context */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                  <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#C0823E] font-semibold">{lang === "DE" ? "Transaktion" : "Transaction"}</span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
                  01 / {lang === "DE" ? "AUSGEWÄHLTE TRANSAKTION" : "SELECTED TRANSACTION"}
                </span>
              </div>

              {/* Transaction as Headline & Concise Description */}
              <div className="space-y-4">
                <h2 id="selected-transaction-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
                  klima&so <span className="text-[#C0823E] font-sans font-light mx-1 md:mx-2" aria-hidden="true">→</span> PYURE
                </h2>
                <p className="font-sans text-charcoal/85 text-base sm:text-lg leading-relaxed pt-1">
                  {lang === "DE"
                    ? "Varda hat die Gesellschafter von klima&so beim Verkauf des Unternehmens an PYURE beraten."
                    : "Varda advised the shareholders of klima&so on the sale of the company to PYURE."}
                </p>
              </div>

              {/* Editorial Deal Credential Facts */}
              <div className="border border-charcoal/15 bg-white p-5 sm:p-6 space-y-3 shadow-2xs">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                  [ {lang === "DE" ? "TRANSAKTIONSDETAILS" : "TRANSACTION DETAILS"} ]
                </span>

                <div className="space-y-2 pt-1 text-xs font-mono text-charcoal/75">
                  <div className="flex justify-between py-1.5 border-b border-charcoal/10">
                    <span className="text-charcoal/40 uppercase tracking-widest">{lang === "DE" ? "Mandat" : "Mandate"}</span>
                    <span className="font-semibold text-charcoal">{lang === "DE" ? "Gesellschafterberatung" : "Shareholder Advisory"}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-charcoal/10">
                    <span className="text-charcoal/40 uppercase tracking-widest">{lang === "DE" ? "Bereich" : "Area"}</span>
                    <span className="font-semibold text-charcoal">Corporate / M&A</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-charcoal/40 uppercase tracking-widest">{lang === "DE" ? "Rolle" : "Role"}</span>
                    <span className="font-semibold text-[#C0823E]">Lead Legal Counsel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right / Main Column (lg:col-span-7): Full Authentic Editorial Testimonial */}
            <div className="lg:col-span-7 space-y-6 lg:pt-2">
              <div className="border-l-2 border-[#C0823E] pl-6 sm:pl-8 lg:pl-10 space-y-6">
                <blockquote className="space-y-5 sm:space-y-6 font-serif text-lg sm:text-xl lg:text-[21px] text-charcoal/90 leading-[1.65] font-normal tracking-tight max-w-2xl">
                  <p>
                    {lang === "DE"
                      ? "„Wir haben unser erstes Unternehmen verkauft. Heißt: Vertragsentwurf der Gegenseite auf dem Tisch, jede Menge Paragrafen und eine ziemlich klare Ahnung davon, dass wir nicht wissen, was wir da eigentlich lesen."
                      : "“We sold our first company. That means: draft contract from the other side on the table, countless clauses, and a fairly clear sense that we didn't really know what we were reading."}
                  </p>
                  <p>
                    {lang === "DE"
                      ? "Konstantin war ab dem ersten Call der Co-Pilot, den man in so einer Situation braucht. Er hat den Entwurf komplett überarbeitet zurückgegeben, verhandlungsfertig, statt uns eine Liste mit Anmerkungen zu schicken. Er hat uns vor Dingen gewarnt, auf die wir von allein nie gekommen wären. Und er hat seine Linie offengelegt, bevor er losgelaufen ist, so dass wir sie bestätigen (oder eben ändern) konnten."
                      : "Konstantin was the co-pilot you need in such a situation right from the very first call. He returned the draft completely revised and negotiation-ready, rather than just sending us a list of comments. He warned us about things we would never have thought of on our own. And he laid out his strategy before proceeding, so that we could confirm (or adjust) it."}
                  </p>
                  <p>
                    {lang === "DE"
                      ? "Was mich am meisten überzeugt hat: Er hat auch die weichen und emotionalen Punkte ernst genommen und in klare Klauseln im Vertrag statt als Randnotiz verstanden."
                      : "What convinced me most: He took the soft and emotional points seriously too, translating them into clear clauses in the contract rather than treating them as side notes."}
                  </p>
                  <p>
                    {lang === "DE"
                      ? "Bei den entscheidenden Punkten wussten wir immer, welche Optionen wir haben und was Konstantin uns empfiehlt. Entschieden haben am Ende wir, aber eben informiert statt geraten. Das hat die Verhandlungen für uns deutlich einfacher gemacht."
                      : "When it came to the critical decisions, we always knew our options and what Konstantin recommended. In the end, we were the ones who decided, but informed rather than guessing. That made the negotiations significantly easier for us."}
                  </p>
                  <p>
                    {lang === "DE"
                      ? "Ich hatte während des ganzen Prozesses nie das Gefühl, allein im Cockpit zu sitzen. Und wir sind sauber gelandet.“"
                      : "Throughout the entire process, I never felt like I was sitting alone in the cockpit. And we landed cleanly.”"}
                  </p>
                </blockquote>

                {/* Attribution Area with Structural Placeholder */}
                <div className="pt-4 border-t border-charcoal/10 space-y-1">
                  <cite className="not-italic font-mono text-xs uppercase tracking-widest text-charcoal/70 font-semibold block">
                    — {lang === "DE" ? "Gesellschafter, klima&so" : "Shareholders, klima&so"}
                  </cite>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2B — SELECTED EXPERIENCE / AUSGEWÄHLTE ERFAHRUNG
            ========================================================================= */}
        <section id="selected-experience" aria-labelledby="selected-experience-heading" className="py-16 md:py-24 border-b border-charcoal/10 bg-[#FAF8F4] relative">
          <div id="erfahrung" className="scroll-mt-24" />
          <div id="experience" className="scroll-mt-24" />

          {/* Section Header */}
          <div className="space-y-4 mb-12 md:mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">
                {lang === "DE" ? "Ausgewählte Erfahrung" : "Selected Experience"}
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
              {lang === "DE" ? "02 / AUSGEWÄHLTE ERFAHRUNG" : "02 / SELECTED EXPERIENCE"}
            </span>
            <h2 id="selected-experience-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE" ? (
                <>
                  Varda ist eine junge Kanzlei.
                  <br className="hidden sm:inline" /> Die Erfahrung dahinter ist es nicht.
                </>
              ) : (
                <>
                  Varda is a young firm.
                  <br className="hidden sm:inline" /> The experience behind it isn’t.
                </>
              )}
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-3xl pt-1">
              {lang === "DE"
                ? "Vor der Gründung von Varda hat Konstantin als Teil internationaler Kanzleiteams an komplexen M&A-Transaktionen und strategischen Technologieprojekten beraten. Die nachstehenden Mandate zeigen eine Auswahl dieser früheren Erfahrung."
                : "Before founding Varda, Konstantin advised on complex M&A transactions and strategic technology projects as part of international law firm teams. The matters below are a selection of that prior experience."}
            </p>
          </div>

          {/* 2 x 2 Editorial Grid on Desktop, Stacked Vertically on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-12 items-stretch">
            
            {/* CASE 01: Siemens Energy -> Triton */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-7 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between border-b border-charcoal/10 pb-3 gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#C0823E] tracking-widest uppercase">
                    {lang === "DE" ? "01 / FRÜHERE ERFAHRUNG" : "01 / PRIOR EXPERIENCE"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">
                    SELL-SIDE · CORPORATE / M&A
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug pt-0.5">
                  Siemens Energy <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Triton
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Veräußerung des BIC- / Trench-Geschäfts"
                    : "Sale of the BIC / Trench business"}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-charcoal/10">
                <p className="font-mono text-xs text-charcoal/65 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
                    : "Advised as part of the Ashurst Corporate/M&A team before founding Varda."}
                </p>
              </div>
            </div>

            {/* CASE 02: Siemens Energy -> Mutares */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-7 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between border-b border-charcoal/10 pb-3 gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#C0823E] tracking-widest uppercase">
                    {lang === "DE" ? "02 / FRÜHERE ERFAHRUNG" : "02 / PRIOR EXPERIENCE"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">
                    SELL-SIDE · CORPORATE / M&A
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug pt-0.5">
                  Siemens Energy <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Mutares
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Veräußerung des Geschäftsbereichs Heat Transfer Technology"
                    : "Sale of the Heat Transfer Technology business"}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-charcoal/10">
                <p className="font-mono text-xs text-charcoal/65 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
                    : "Advised as part of the Ashurst Corporate/M&A team before founding Varda."}
                </p>
              </div>
            </div>

            {/* CASE 03: FNZ -> Fondsdepot Bank */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-7 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between border-b border-charcoal/10 pb-3 gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#C0823E] tracking-widest uppercase">
                    {lang === "DE" ? "03 / FRÜHERE ERFAHRUNG" : "03 / PRIOR EXPERIENCE"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">
                    BUY-SIDE · CORPORATE / M&A · FINANCIAL SERVICES
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug pt-0.5">
                  FNZ <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Fondsdepot Bank
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Erwerb der Fondsdepot Bank"
                    : "Acquisition of Fondsdepot Bank"}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-charcoal/10">
                <p className="font-mono text-xs text-charcoal/65 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst vor Gründung von Varda."
                    : "Advised as part of the Ashurst Corporate/M&A team before founding Varda."}
                </p>
              </div>
            </div>

            {/* CASE 04: Catena-X Automotive Network */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-7 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between border-b border-charcoal/10 pb-3 gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#C0823E] tracking-widest uppercase">
                    {lang === "DE" ? "04 / FRÜHERE ERFAHRUNG" : "04 / PRIOR EXPERIENCE"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">
                    {lang === "DE"
                      ? "TECHNOLOGIE · DATA GOVERNANCE · DIGITAL CONTRACTING"
                      : "TECHNOLOGY · DATA GOVERNANCE · DIGITAL CONTRACTING"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug pt-0.5">
                  Catena-X Automotive Network
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Governance- und Vertragsrahmen für das Datenökosystem der Automobilindustrie"
                    : "Governance and contractual framework for the automotive data ecosystem"}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-charcoal/10">
                <p className="font-mono text-xs text-charcoal/65 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Beratung als Mitglied des Ashurst-Teams vor Gründung von Varda."
                    : "Advised as part of the Ashurst team before founding Varda."}
                </p>
              </div>
            </div>

          </div>

          {/* Subtle Selection Clarification & Link to Konstantin Section */}
          <div className="mt-12 pt-6 border-t border-charcoal/15 space-y-3">
            <p className="font-sans text-xs sm:text-sm text-charcoal/60 leading-relaxed">
              {lang === "DE"
                ? "Ausgewählte frühere Mandatserfahrung von Dr. Konstantin Filbinger vor Gründung von Varda Legal."
                : "Selected prior experience of Dr Konstantin Filbinger before founding Varda Legal."}
            </p>
            <div>
              <a
                href="#konstantin"
                className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 transition-colors inline-flex items-center"
              >
                <span>{lang === "DE" ? "MEHR ÜBER KONSTANTIN →" : "MORE ABOUT KONSTANTIN →"}</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3 — THREE MANDATE WORLDS
            ========================================================================= */}
        <section id="mandate" aria-labelledby="mandate-heading" className="py-16 md:py-24 border-b border-charcoal/10 bg-[#FAF8F4] relative">
          <div id="startups-scaleups" className="scroll-mt-24" />
          <div id="beratungsbereiche" className="scroll-mt-24" />
          <div id="fokus" className="scroll-mt-24" />

          {/* Section Header */}
          <div className="space-y-3 mb-12 md:mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">{lang === "DE" ? "Mandate" : "Mandates"}</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
              03 / {lang === "DE" ? "MANDATSWELTEN" : "MANDATE WORLDS"}
            </span>
            <h2 id="mandate-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE" ? "Wobei Varda unterstützt." : "Where Varda supports."}
            </h2>
          </div>

          {/* 3 Mandate Worlds Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            
            {/* MANDATE WORLD 01: STARTUPS */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-8 flex flex-col justify-between group transition-colors">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-3">
                  <span className="font-mono text-xs font-bold text-[#C0823E] tracking-widest">
                    01
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-medium">
                    Startups
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug">
                  Startups
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Am Anfang geht es darum, die richtigen Dinge sauber zu regeln, ohne das Unternehmen mit Recht zu überfrachten. Varda berät Gründer und Startups bei Gesellschaftsstruktur, Founder Agreements, Finanzierungsrunden, Mitarbeiterbeteiligung und laufenden Gesellschafterfragen."
                    : "In the early stages, it is about setting the right things up cleanly without overburdening the business with legal complexity. Varda advises founders and startups on corporate structure, founder agreements, financing rounds, employee participation and ongoing shareholder matters."}
                </p>
              </div>

              {/* Service Line */}
              <div className="pt-6 mt-8 border-t border-charcoal/15">
                <p className="font-mono text-xs text-charcoal/70 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Gründung · Founder Agreements · Finanzierung · VSOP / ESOP · Corporate & Governance"
                    : "Formation · Founder Agreements · Financing · VSOP / ESOP · Corporate & Governance"}
                </p>
              </div>
            </div>

            {/* MANDATE WORLD 02: SCALE-UPS */}
            <div className="border-t border-charcoal/25 pt-6 sm:pt-8 flex flex-col justify-between group transition-colors">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-3">
                  <span className="font-mono text-xs font-bold text-[#C0823E] tracking-widest">
                    02
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-medium">
                    Scale-ups
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-snug">
                  Scale-ups
                </h3>

                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  {lang === "DE"
                    ? "Mit dem Wachstum werden Gesellschafterstrukturen, Governance und Verträge anspruchsvoller. Varda unterstützt bei Finanzierungen, Beteiligungs- und Holdingstrukturen, strategischen Verträgen und Transaktionen."
                    : "With growth, shareholder structures, governance and contracts become more demanding. Varda supports in financing, shareholding and holding structures, strategic agreements and transactions."}
                </p>
              </div>

              {/* Service Line */}
              <div className="pt-6 mt-8 border-t border-charcoal/15">
                <p className="font-mono text-xs text-charcoal/70 tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Corporate & Governance · Finanzierung · Beteiligungsstrukturen · Strategische Verträge · Transaktionen"
                    : "Corporate & Governance · Financing · Shareholding Structures · Strategic Agreements · Transactions"}
                </p>
              </div>
            </div>

            {/* MANDATE WORLD 03: M&A / UNTERNEHMENSVERKAUF (Restrained Elevated Prominence) */}
            <div className="border-t-2 border-[#C0823E] pt-6 sm:pt-8 flex flex-col justify-between relative group transition-colors">
              <div id="unternehmensverkauf" className="scroll-mt-24" />
              <div id="ma-mandat" className="scroll-mt-24" />
              <div id="m-a" className="scroll-mt-24" />

              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#C0823E]/20 pb-3">
                  <span className="font-mono text-xs font-bold text-[#C0823E] tracking-widest">
                    03
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-semibold">
                    [ {lang === "DE" ? "KERNBEREICH" : "CORE FOCUS"} ]
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-medium text-charcoal leading-snug">
                  {lang === "DE" ? "M&A / Unternehmensverkauf" : "M&A / Company Sale"}
                </h3>

                <p className="font-sans text-base text-charcoal/90 leading-relaxed">
                  {lang === "DE"
                    ? "Wenn Sie ein Unternehmen kaufen oder verkaufen, sollten Sie bei den entscheidenden Punkten wissen, welche Optionen Sie haben und was wir empfehlen. Varda begleitet Gründer, Gesellschafter und Unternehmen von der Vorbereitung über Due Diligence und Vertragsverhandlung bis zu Signing und Closing."
                    : "When buying or selling a company, you should know your options and what we recommend on the critical points. Varda guides founders, shareholders and companies from preparation through due diligence and contract negotiation to signing and closing."}
                </p>
              </div>

              {/* Service Line */}
              <div className="pt-6 mt-8 border-t border-[#C0823E]/30">
                <p className="font-mono text-xs text-charcoal/85 font-medium tracking-wide leading-relaxed">
                  {lang === "DE"
                    ? "Unternehmensverkauf · Unternehmenskauf · Founder Exit · Small Cap M&A"
                    : "Company Sale · Company Acquisition · Founder Exit · Small Cap M&A"}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CONSOLIDATED METHODOLOGY / SO ARBEITET VARDA
            ========================================================================= */}
        <section id="so-arbeitet-varda" aria-labelledby="methodology-heading" className="py-16 md:py-20 border-b border-charcoal/10 bg-white relative">
          <div id="methode" className="scroll-mt-24" />
          <div id="how-varda-works" className="scroll-mt-24" />
          <div id="arbeitsweise" className="scroll-mt-24" />
          <div id="beispiel-output" className="scroll-mt-24" />
          <div id="what-you-get" className="scroll-mt-24" />

          {/* Section Header */}
          <div className="space-y-4 mb-12 md:mb-14 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">{lang === "DE" ? "Arbeitsweise" : "How Varda Works"}</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
              04 / {lang === "DE" ? "SO ARBEITET VARDA" : "HOW VARDA WORKS"}
            </span>
            <h2 id="methodology-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE" ? "So arbeitet Varda." : "How Varda works."}
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-3xl pt-1">
              {lang === "DE"
                ? "Klare Rechtsberatung beginnt mit dem Verständnis der unternehmerischen Entscheidung. Erst dann geht es um die Rechtslage."
                : "Clear legal advice begins with understanding the commercial decision. Only then does it turn to the legal framework."}
            </p>
          </div>

          {/* Four Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
            {[
              {
                num: "01",
                title: lang === "DE" ? "Das Ziel verstehen" : "Understand the objective",
                body: lang === "DE"
                  ? "Was soll am Ende erreicht sein? Welche wirtschaftlichen, strategischen oder persönlichen Punkte sind dabei wichtig?"
                  : "What should be achieved in the end? Which commercial, strategic or personal priorities matter?"
              },
              {
                num: "02",
                title: lang === "DE" ? "Rechtslage und Kontext bewerten" : "Assess legal framework and context",
                body: lang === "DE"
                  ? "Welche rechtlichen Themen sind für die Entscheidung tatsächlich relevant? Und welche nicht?"
                  : "Which legal topics are genuinely relevant to the decision? And which are not?"
              },
              {
                num: "03",
                title: lang === "DE" ? "Realistische Optionen entwickeln" : "Develop realistic options",
                body: lang === "DE"
                  ? "Welche Wege gibt es? Wo liegen die Unterschiede bei Risiko, Aufwand und Ergebnis?"
                  : "What paths are available? Where do the differences lie in risk, effort and outcome?"
              },
              {
                num: "04",
                title: lang === "DE" ? "Den nächsten Schritt empfehlen" : "Recommend the next step",
                body: lang === "DE"
                  ? "Sie sollten wissen, was wir empfehlen, warum wir es empfehlen und was als Nächstes zu tun ist."
                  : "You should know what we recommend, why we recommend it and what to do next."
              }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="border-t border-charcoal/25 pt-6 flex flex-col justify-start space-y-3.5 group hover:border-[#C0823E] transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C0823E] tracking-widest uppercase">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] text-charcoal/80 leading-relaxed pt-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: MANIFESTO / RECHT IST KEINE RAKETENWISSENSCHAFT
            ========================================================================= */}
        <section id="manifest" aria-labelledby="manifesto-heading" className="py-16 md:py-24 border-b border-charcoal/10 bg-[#FAF8F4] relative">
          <div id="philosophie" className="scroll-mt-24" />
          <div id="haltung" className="scroll-mt-24" />
          <div id="point-of-view" className="scroll-mt-24" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Headline & Breadcrumb / Categorization (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
                <span>/</span>
                <span className="text-[#C0823E] font-semibold">
                  {lang === "DE" ? "Manifest" : "Manifesto"}
                </span>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
                05 / {lang === "DE" ? "HALTUNG" : "POINT OF VIEW"}
              </span>
              <h2 id="manifesto-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.14]">
                {lang === "DE"
                  ? "Recht ist keine Raketenwissenschaft. Tun wir nicht so, als wäre es eine."
                  : "Law is not rocket science. Let's not pretend it is."}
              </h2>
            </div>

            {/* Right Column: Editorial Manifesto Text (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed lg:pt-8">
              <p>
                {lang === "DE"
                  ? "Sie haben ein Ziel. Ein rechtliches Thema macht den Weg dorthin komplizierter."
                  : "You have a goal. A legal issue makes the path there more complicated."}
              </p>
              <p>
                {lang === "DE"
                  ? "Gute Rechtsberatung sollte diese Komplexität reduzieren, nicht vergrößern. Sie sollte Ihnen helfen, eine fundierte Entscheidung zu treffen und weiterzumachen – ohne unnötiges Zögern, „es kommt darauf an“-Vorbehalte oder juristischen Chichi."
                  : "Good legal advice should reduce that complexity, not increase it. It should help you make an informed decision and move forward – without unnecessary hesitation, \"it depends\" caveats or legalese."}
              </p>
              <p className="pt-4 border-t border-charcoal/10 text-charcoal font-medium">
                {lang === "DE"
                  ? "Rechtsberatung funktioniert für uns nur dann, wenn sie den wirtschaftlichen, operativen und strategischen Kontext mitdenkt. Sonst sind es nur Worte."
                  : "For us, legal advice only works when it takes the commercial, operational and strategic context into account. Otherwise, it is just words."}
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ABOUT DR. KONSTANTIN FILBINGER
            ========================================================================= */}
        <section id="konstantin" aria-labelledby="konstantin-heading" className="py-16 md:py-24 border-b border-charcoal/10 bg-white relative">
          <div id="wir" className="scroll-mt-24" />
          <div id="uber-varda" className="scroll-mt-24" />
          <div id="about" className="scroll-mt-24" />

          {/* Asymmetrical Editorial Grid: Left Portrait (lg:col-span-5), Right Content (lg:col-span-7) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Natural, approachable portrait (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="bg-[#FAF8F4] border border-charcoal/15 p-2 sm:p-3 overflow-hidden">
                <div className="relative w-full aspect-[3/4] bg-stone-100 overflow-hidden">
                  <img
                    src={konstiClarity}
                    alt="Dr. Konstantin Filbinger"
                    className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 flex items-center justify-between pt-1 px-1">
                <span>Dr. Konstantin Filbinger</span>
                <span>Munich, Germany</span>
              </div>
            </div>

            {/* Right Column: Editorial Biography & Credentials (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Elements */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                  <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#C0823E] font-semibold">
                    {lang === "DE" ? "Über Konstantin" : "About Konstantin"}
                  </span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
                  06 / KONSTANTIN
                </span>
                <h2 id="konstantin-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
                  Dr. Konstantin Filbinger
                </h2>
              </div>

              {/* Exact Body Copy */}
              <div className="space-y-4 font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed pt-1">
                <p>
                  {lang === "DE"
                    ? "Vor der Gründung von Varda habe ich in internationalen Wirtschaftskanzleien an komplexen gesellschaftsrechtlichen Mandaten und M&A-Transaktionen gearbeitet – darunter Transaktionen für Siemens Energy und FNZ sowie die Entwicklung von Teilen des Governance- und Vertragsrahmens für Catena-X."
                    : "Before founding Varda, I worked on complex corporate and M&A matters in international law firms, including transactions for Siemens Energy and FNZ and the development of elements of the governance and contractual framework for Catena-X."}
                </p>
                <p>
                  {lang === "DE"
                    ? "Heute berate ich mit Varda Gründer, Gesellschafter und Unternehmen direkt – von Strukturierung und Finanzierung bis zum Kauf oder Verkauf von Unternehmen."
                    : "Today, through Varda, I advise founders, shareholders and companies directly – from structuring and financing to company purchases and sales."}
                </p>
                <p>
                  {lang === "DE"
                    ? "Bei Varda arbeite ich unmittelbar mit meinen Mandanten. Bei den entscheidenden Punkten sollen Sie wissen, welche Optionen Sie haben, wie ich sie bewerte und was ich empfehle. Die Entscheidung bleibt Ihre – aber sie sollte nicht auf Annahmen beruhen."
                    : "At Varda, I work directly with my clients. On the critical points, you should know what options you have, how I assess them and what I recommend. The decision remains yours – but you should not have to make it based on assumptions."}
                </p>
              </div>

              {/* Fine Divider */}
              <div className="w-full h-[1px] bg-charcoal/10 my-4" />

              {/* Selected Experience Module (Before Teaching) */}
              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    {lang === "DE" ? "AUSGEWÄHLTE ERFAHRUNG" : "SELECTED EXPERIENCE"}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-charcoal leading-snug">
                    {lang === "DE"
                      ? "Komplexe Mandate. Vor und mit Varda."
                      : "Complex matters. Before and at Varda."}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
                    {lang === "DE"
                      ? "Eine Auswahl von Transaktionen und strategischen Projekten aus der Zeit vor und nach der Gründung von Varda."
                      : "A selection of transactions and strategic projects advised on before and after founding Varda."}
                  </p>
                </div>

                {/* 2 x 2 Editorial Transaction Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2">
                  
                  {/* MATTER A — CURRENT VARDA: klima&so -> PYURE */}
                  <div className="border-t-2 border-[#C0823E] pt-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                        {lang === "DE" ? "AKTUELL / VARDA · SELL-SIDE M&A" : "CURRENT / VARDA · SELL-SIDE M&A"}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug pt-0.5">
                        klima&so <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> PYURE
                      </h4>
                      <p className="font-sans text-sm font-medium text-charcoal/90 leading-snug">
                        {lang === "DE" ? "Unternehmensverkauf" : "Company sale"}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        {lang === "DE"
                          ? "Federführende rechtliche Beratung der Gesellschafter."
                          : "Lead legal counsel to the shareholders."}
                      </p>
                    </div>
                  </div>

                  {/* MATTER B — PRIOR EXPERIENCE: Siemens Energy -> Triton */}
                  <div className="border-t border-charcoal/25 pt-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/55 font-semibold block">
                        {lang === "DE" ? "FRÜHERE ERFAHRUNG · SELL-SIDE M&A" : "PRIOR EXPERIENCE · SELL-SIDE M&A"}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug pt-0.5">
                        Siemens Energy <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Triton
                      </h4>
                      <p className="font-sans text-sm font-medium text-charcoal/90 leading-snug">
                        {lang === "DE"
                          ? "Veräußerung des BIC- / Trench-Geschäfts"
                          : "Sale of the BIC / Trench business"}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        {lang === "DE"
                          ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst."
                          : "Advised as part of the Ashurst Corporate/M&A team."}
                      </p>
                    </div>
                  </div>

                  {/* MATTER C — PRIOR EXPERIENCE: Siemens Energy -> Mutares */}
                  <div className="border-t border-charcoal/25 pt-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/55 font-semibold block">
                        {lang === "DE" ? "FRÜHERE ERFAHRUNG · SELL-SIDE M&A" : "PRIOR EXPERIENCE · SELL-SIDE M&A"}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug pt-0.5">
                        Siemens Energy <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Mutares
                      </h4>
                      <p className="font-sans text-sm font-medium text-charcoal/90 leading-snug">
                        {lang === "DE"
                          ? "Veräußerung des Geschäftsbereichs Heat Transfer Technology"
                          : "Sale of the Heat Transfer Technology business"}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        {lang === "DE"
                          ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst."
                          : "Advised as part of the Ashurst Corporate/M&A team."}
                      </p>
                    </div>
                  </div>

                  {/* MATTER D — PRIOR EXPERIENCE: FNZ -> Fondsdepot Bank */}
                  <div className="border-t border-charcoal/25 pt-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/55 font-semibold block">
                        {lang === "DE" ? "FRÜHERE ERFAHRUNG · BUY-SIDE M&A" : "PRIOR EXPERIENCE · BUY-SIDE M&A"}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug pt-0.5">
                        FNZ <span className="text-[#C0823E] font-sans font-light mx-1" aria-hidden="true">→</span> Fondsdepot Bank
                      </h4>
                      <p className="font-sans text-sm font-medium text-charcoal/90 leading-snug">
                        {lang === "DE"
                          ? "Erwerb der Fondsdepot Bank"
                          : "Acquisition of Fondsdepot Bank"}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                        {lang === "DE"
                          ? "Beratung als Mitglied des Corporate/M&A-Teams von Ashurst."
                          : "Advised as part of the Ashurst Corporate/M&A team."}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Distinct Strategic-Project Feature: Catena-X Automotive Network */}
                <div className="border-t border-charcoal/20 pt-5 mt-2 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/55 font-semibold block">
                    {lang === "DE"
                      ? "FRÜHERE ERFAHRUNG · TECHNOLOGIE / GOVERNANCE"
                      : "PRIOR EXPERIENCE · TECHNOLOGY / GOVERNANCE"}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug">
                      Catena-X Automotive Network
                    </h4>
                    <span className="font-sans text-sm font-medium text-charcoal/85">
                      {lang === "DE"
                        ? "Datenökosystem der Automobilindustrie"
                        : "Automotive data ecosystem"}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-2xl">
                    {lang === "DE"
                      ? "Beratung zu Teilen des Governance Frameworks, Use-Case-Frameworks und der vertraglichen Architektur für den Datenaustausch als Mitglied des Ashurst-Teams."
                      : "Advised on elements of the governance framework, use-case frameworks and contractual architecture for data exchange as part of the Ashurst team."}
                  </p>
                </div>
              </div>

              {/* Fine Divider */}
              <div className="w-full h-[1px] bg-charcoal/10 my-4" />

              {/* Teaching Credential - Restrained Credibility Signal */}
              <div className="border-l-2 border-[#C0823E] pl-4 py-2 bg-[#FAF8F4]/80 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                  [ {lang === "DE" ? "LEHRAUFTRAG" : "TEACHING"} ]
                </span>
                <p className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed font-medium">
                  {lang === "DE"
                    ? "Ich unterrichte am Berlin College of Business and Technology International Corporate and Tax Law und Private Law."
                    : "I teach International Corporate and Tax Law and Private Law at the Berlin College of Business and Technology."}
                </p>
              </div>

              {/* Compact Core Credentials */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-bold block">
                  [ {lang === "DE" ? "FOKUS & QUALIFIKATION" : "FOCUS & CREDENTIALS"} ]
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-charcoal/75 uppercase tracking-wider">
                  <span>Rechtsanwalt (Germany)</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Founder, Varda Legal</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Corporate & M&A</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Based in Munich</span>
                </div>
              </div>

              {/* Calm Invitation / Direct Consultation */}
              <div className="pt-6 border-t border-charcoal/15 space-y-4">
                <p className="font-serif text-lg sm:text-xl text-charcoal">
                  {lang === "DE"
                    ? "Wenn Sie vor einer wichtigen unternehmerischen Entscheidung stehen, lassen Sie uns darüber sprechen."
                    : "If you are facing an important business decision, let's discuss it."}
                </p>
                <div>
                  <button
                    onClick={() => handleNavigateToConsult(lang === "DE" ? "Erstgespräch vereinbaren" : "Book a conversation")}
                    className="px-6 py-3.5 bg-[#1C1B19] text-[#FAF8F4] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#C0823E] transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{lang === "DE" ? "Erstgespräch vereinbaren" : "Book a conversation"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: CONTACT */}
        <section id="letsgo" className="py-16 md:py-24">
          <div id="kontakt" className="scroll-mt-24" />
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">07 / {d.letsgo.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.letsgo.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Approachable Founder Contact Card */}
            <div className="border border-charcoal/15 bg-white p-5 md:p-6 space-y-4 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative w-full aspect-square bg-[#FAF8F4] overflow-hidden border border-charcoal/10">
                  <img
                    src={konstiImage}
                    alt="Dr. Konstantin Filbinger - Direct Contact"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C0823E] font-bold">
                    {lang === "DE" ? "DIREKTER KONTAKT" : "DIRECT DIAL"}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Dr. Konstantin Filbinger
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    {lang === "DE" 
                      ? "Mandatsanfragen prüfe ich immer persönlich. Lassen Sie uns unkompliziert über Ihr Vorhaben sprechen."
                      : "I review all inbound inquiries personally. Let's arrange a straightforward call to map out the next steps for your project."}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Munich HQ Station */}
            <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-brand-red text-xs font-mono">
                  <MapPin className="h-4" />
                  <span className="uppercase tracking-widest">{d.letsgo.addressTitle}</span>
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-charcoal leading-tight">
                  Auenstraße 21<br />
                  80469 München<br />
                  Deutschland
                </h4>
              </div>
            </div>

            {/* Direct coordinates */}
            <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4 font-mono text-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-brand-red text-xs font-mono">
                  <Mail className="h-4" />
                  <span className="uppercase tracking-widest">{d.letsgo.emailTitle}</span>
                </div>
                
                <div className="space-y-2">
                  <a 
                    href="mailto:info@vardalegal.com"
                    className="font-serif text-xl sm:text-2xl font-bold text-charcoal hover:text-brand-red transition-colors block break-all"
                  >
                    info[at]vardalegal.com
                  </a>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed pt-2">
                    {lang === "DE"
                      ? "Senden Sie uns Ihre Anfrage direkt per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden."
                      : "Send us your inquiry directly via email. We typically respond within 24 hours."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-charcoal/15 bg-white py-12 text-charcoal/80">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Branding col */}
            <div className="space-y-3">
              <div className="font-display font-bold text-sm tracking-wider uppercase text-charcoal">VARDA LEGAL</div>
              <p className="text-xs text-charcoal/65 leading-relaxed font-sans">
                {lang === "DE" 
                  ? "Rechtsanwalt Dr. Konstantin Filbinger · Corporate & M&A für Gründer und Wachstumsunternehmen." 
                  : "Dr. Konstantin Filbinger · Corporate & M&A for founders and growth companies."}
              </p>
              {/* Languages switch */}
              <div className="pt-2 flex items-center space-x-3 font-mono text-xs">
                <span className="text-charcoal/40 text-[10px] uppercase font-bold">{lang === "DE" ? "Sprache:" : "Language:"}</span>
                <button 
                  onClick={() => setLang("DE")}
                  className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${lang === "DE" ? "text-brand-red border-b border-brand-red" : "text-charcoal/50 hover:text-charcoal"}`}
                >
                  DE
                </button>
                <span className="text-charcoal/20">•</span>
                <button 
                  onClick={() => setLang("EN")}
                  className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${lang === "EN" ? "text-brand-red border-b border-brand-red" : "text-charcoal/50 hover:text-charcoal"}`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Navigation" : "Navigation"}
              </div>
              <ul className="space-y-2 font-sans text-xs">
                <li><a href="#ma" className="hover:text-brand-red transition-all">M&A</a></li>
                <li><a href="#startups-scaleups" className="hover:text-brand-red transition-all">Startups & Scale-ups</a></li>
                <li><a href="#so-arbeitet-varda" className="hover:text-brand-red transition-all">{lang === "DE" ? "So arbeitet Varda" : "How Varda Works"}</a></li>
                <li><a href="#konstantin" className="hover:text-brand-red transition-all">Konstantin</a></li>
                <li><a href="#letsgo" className="hover:text-brand-red transition-all">{lang === "DE" ? "Kontakt" : "Contact"}</a></li>
                <li><a href={lang === "DE" ? "#navigator" : "#en/navigator"} onClick={() => setCurrentView("navigator")} className="hover:text-brand-red transition-all font-semibold text-[#C0823E]">Navigator</a></li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Kontakt" : "Contact"}
              </div>
              <ul className="space-y-2 font-mono text-xs">
                <li className="font-semibold text-charcoal">info[at]vardalegal.com</li>
                <li className="text-charcoal/70">Auenstraße 21, 80469 München</li>
              </ul>
            </div>

            {/* Legal pages & Disclaimer */}
            <div className="space-y-3 text-xs text-charcoal/60 leading-relaxed font-mono">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Rechtliches" : "Legal"}
              </div>
              <p className="text-[10px] text-charcoal/60">
                {lang === "DE" 
                  ? "Dr. Konstantin Filbinger ist als Rechtsanwalt in der Bundesrepublik Deutschland zugelassen und Mitglied der Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München." 
                  : "Dr. Konstantin Filbinger is admitted to the German bar (Rechtsanwalt, Germany) and is a member of the Munich Bar Association."}
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-charcoal/50">
            <div>
              © 2026 Dr. Konstantin Filbinger. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setActiveLegalModal("impressum")} className="hover:text-brand-red cursor-pointer bg-transparent border-none p-0 text-xs font-mono text-charcoal/60">
                Impressum
              </button>
              <span>•</span>
              <button onClick={() => setActiveLegalModal("datenschutz")} className="hover:text-brand-red cursor-pointer bg-transparent border-none p-0 text-xs font-mono text-charcoal/60">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Elegant, high-fashion legal notices modal */}
      <AnimatePresence>
        {activeLegalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/85 backdrop-blur-md"
            onClick={() => setActiveLegalModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden bg-[#FAF8F4] border border-charcoal/15 shadow-2xl rounded text-charcoal flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-charcoal/10 bg-white">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                  {lang === "DE" ? "Rechtliche Hinweise" : "Legal Declarations"}
                </span>
                <button 
                  onClick={() => setActiveLegalModal(null)}
                  className="p-1 text-charcoal/50 hover:text-charcoal hover:bg-charcoal/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Core Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 select-text">
                {activeLegalModal === "impressum" ? (
                  lang === "DE" ? (
                    // IMPRESSUM DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Impressum</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Angaben gemäß § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Diensteanbieter</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 München
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Kontakt</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">E-Mail:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Berufsbezeichnung und zuständige Kammer</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger ist in der Bundesrepublik Deutschland als Rechtsanwalt zugelassen und Mitglied der zuständigen Aufsichtsbehörde:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 München<br />
                            Tel: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Berufsrechtliche Regelungen</h3>
                          <p className="mt-1">
                            Für in Deutschland zugelassene Rechtsanwälte gelten die folgenden maßgeblichen berufsrechtlichen Vorschriften:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Diese Regelungen können auf der Website der Bundesrechtsanwaltskammer unter <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> im Bereich „Berufsrecht“ eingesehen werden.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Berufshaftpflichtversicherung</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 München
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // IMPRESSUM ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Legal Information</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Required disclosures according to § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Service Provider</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 Munich, Germany
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Contact</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">Email:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Admission & Competent Bar Association</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger is admitted as a German Attorney-at-Law (Rechtsanwalt) under the laws of the Federal Republic of Germany and is a member of the competent regulatory bar association:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Munich Bar Association (Rechtsanwaltskammer München)</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 Munich, Germany<br />
                            Phone: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Professional Regulations</h3>
                          <p className="mt-1">
                            German Attorneys-at-Law are governed by the following relevant regulations:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>CCBE Code of Conduct (for lawyers in the EU)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Access to these legislative acts is available on the website of the German Federal Bar (Bundesrechtsanwaltskammer) at <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> under the category "Berufsrecht".
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Professional Liability Insurance</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Person Responsible for Content pursuant to § 18 (2) MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 Munich, Germany
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  lang === "DE" ? (
                    // DATENSCHUTZENERKLÄRUNG DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Datenschutzerklärung</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Datenschutz & Verarbeitung personenbezogener Daten nach DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Verantwortliche Stelle</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 München, E-Mail: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Erfassung and Speicherung personenbezogener Daten beim Besuch der Website</h3>
                          <p className="mt-1">
                            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät genutzten Webbrowser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Daten werden dabei erfasst und bis zur automatisierten Löschung gespeichert:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP-Adresse des anfragenden Rechners,</li>
                            <li>Datum und Uhrzeit des Zugriffs,</li>
                            <li>Name und URL der abgerufenen Datei,</li>
                            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.</li>
                          </ul>
                          <p className="mt-2">
                            Die Verarbeitung dieser Daten erfolgt auf Basis von Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den Zwecken der Gewährleistung eines reibungslosen Verbindungsaufbaus, der Systemsicherheit und der technischen Stabilität der Website.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Nutzung unseres Online-Schedulers & Kontaktformulars</h3>
                          <p className="mt-1">
                            Bei Anfragen über das Online-Terminbuchungssystem (Scheduler) oder das Kontaktformular erheben wir Ihren Namen, Ihre E-Mail-Adresse, den Namen Ihres Unternehmens sowie Ihre optionale Nachricht. Die Erfassung dient dazu, die Anfrage dem anfragenden Akteur zuzuordnen, Termine festzulegen und die Anbahnung einer professionellen Beratung ordnungsgemäß zu steuern.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO (vertragliche oder vorvertragliche Maßnahmen auf Anfrage der betroffenen Person).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Weitergabe von Daten an Dritte</h3>
                          <p className="mt-1">
                            Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt ausschließlich zur Erbringung unserer kanzleieigenen IT-Dienstleistungen (z.B. Hosting-Anbieter) im Rahmen einer Auftragsverarbeitungsvereinbarung (Art. 28 DSGVO) oder bei Vorliegen einer gesetzlichen Verpflichtung. Ein Verkauf oder eine unbefugte Weitergabe Ihrer Daten findet zu keinem Zeitpunkt statt.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Ihre Rechte als betroffene Person</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            Gemäß der Datenschutz-Grundverordnung stehen Ihnen umfangreiche Rechte zu:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer Daten verlangen.</li>
                            <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre bereitgestellten Daten in einem strukturierten, gängigen Format erhalten.</li>
                            <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung aus Gründen einer besonderen Situation widersprechen.</li>
                          </ul>
                          <p className="mt-2">
                            Zur Ausübung dieser Rechte genügt eine einfache E-Mail an <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. Sie haben zudem das Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO).
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // DATENSCHUTZENERKLÄRUNG ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Privacy Policy</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Data Protection & Privacy compliance under GDPR / DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Responsible Entity</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 Munich, Germany, Email: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Collection and Storage of Personal Data when visiting this website</h3>
                          <p className="mt-1">
                            When calling up our website, the web browser used on your system transmits technical connection properties to our servers. These are temporarily logged in server log files, and include:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP address of the requesting terminal,</li>
                            <li>Date and time of retrieval,</li>
                            <li>Filename and URL of the requested web file,</li>
                            <li>Browser type and your computer's operating system.</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Legal base of this processing is Art. 6 (1) (f) GDPR. Our legitimate interest results from the goal to guarantee safe connection stability, technical system security, and correct operation.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Usage of our Contact and Meeting Scheduler System</h3>
                          <p className="mt-1">
                            If you schedule an appointment or submit an inquiry using our scheduling modules, we collect your name, email, company, and optional description. We do this to allocate the consultation slots correctly, coordinate transactions or projects, and steer professional communication.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Legal base for this data processing is Art. 6 (1) (b) GDPR (steps prior to entering into a contract).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Information Sharing and Third Parties</h3>
                          <p className="mt-1">
                            Your personal data is solely shared with standard external hosting partners that operate under a signed Data Processing Agreement (DPA) to host this web service (Art. 28 GDPR). Your personal information is never sold, licensed, or shared with third parties for promotional purposes.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Your Data Protection Rights under GDPR</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            In accordance with GDPR, you hold the following rights:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Right of Access (Art. 15 GDPR):</strong> Request clear summaries of your stored personal details.</li>
                            <li><strong>Right to Rectification (Art. 16 GDPR):</strong> Request prompt correction of inaccuracies.</li>
                            <li><strong>Right to Erasure (Art. 17 GDPR):</strong> Request permanent deletion of details if no retention obligations exist.</li>
                            <li><strong>Right to Restriction (Art. 18 GDPR):</strong> Request suspension of active computational processing.</li>
                            <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> Request export of data in portable structures.</li>
                            <li><strong>Right to Object (Art. 21 GDPR):</strong> Object to processing based on legitimate interest under specific conditions.</li>
                          </ul>
                          <p className="mt-2">
                            To execute any of these rights, simply email us at <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. You also have the right to lodge a complaint with a competent regulatory supervisory authority (Art. 77 GDPR).
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-charcoal/10 bg-white flex justify-end font-mono text-[9px] uppercase tracking-widest text-[#002f6c]/60">
                <span>Varda Legal Office • Munich</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

