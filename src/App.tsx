/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BreakingNewsTracker } from './components/BreakingNewsTracker';
import { WhyWeFight } from './components/WhyWeFight';
import { MobilizationHub } from './components/MobilizationHub';
import { PetitionSection } from './components/PetitionSection';
import { Footer } from './components/Footer';
import { ReportBillModal } from './components/ReportBillModal';
import { BillAnalysisModal } from './components/BillAnalysisModal';
import { SharePostModal } from './components/SharePostModal';
import {
  PetitionSignature,
  ReportedBill,
  INITIAL_SIGNATURES,
  BASE_SIGNATURE_COUNT,
  STORAGE_KEYS,
} from './utils/campaign';

export default function App() {
  // Signatures State
  const [signatures, setSignatures] = useState<PetitionSignature[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SIGNATURES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_SIGNATURES;
  });

  const [signatureCount, setSignatureCount] = useState<number>(() => {
    return BASE_SIGNATURE_COUNT + (signatures.length - INITIAL_SIGNATURES.length);
  });

  // Modals state
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isBillAnalysisModalOpen, setIsBillAnalysisModalOpen] = useState(false);
  const [sharePlatformModal, setSharePlatformModal] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SIGNATURES, JSON.stringify(signatures));
    } catch {
      // Ignore local storage error in restricted contexts
    }
    setSignatureCount(BASE_SIGNATURE_COUNT + (signatures.length - INITIAL_SIGNATURES.length));
  }, [signatures]);

  const handleAddSignature = (sigData: Omit<PetitionSignature, 'id' | 'timestamp' | 'verified'>) => {
    const newSignature: PetitionSignature = {
      id: `sig-${Date.now()}`,
      ...sigData,
      timestamp: 'Just now',
      verified: true,
    };

    setSignatures((prev) => [newSignature, ...prev]);
  };

  const handleReportSubmitted = (bill: ReportedBill) => {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.REPORTED_BILLS) || '[]');
      localStorage.setItem(STORAGE_KEYS.REPORTED_BILLS, JSON.stringify([bill, ...existing]));
    } catch {
      // ignore
    }
  };

  const scrollToPetition = () => {
    const el = document.getElementById('petition');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMobilize = () => {
    const el = document.getElementById('mobilize');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] flex flex-col font-sans selection:bg-[#FF4D4D] selection:text-white">
      {/* Top Banner Navigation */}
      <Navbar onSignClick={scrollToPetition} />

      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <Hero
          signatureCount={signatureCount}
          onSignClick={scrollToPetition}
          onShareClick={scrollToMobilize}
        />

        {/* SECTION 2: BREAKING NEWS & LEGISLATIVE UPDATES */}
        <BreakingNewsTracker
          onOpenReportModal={() => setIsReportModalOpen(true)}
          onOpenBillAnalysisModal={() => setIsBillAnalysisModalOpen(true)}
        />

        {/* SECTION 3: WHY WE FIGHT */}
        <WhyWeFight />

        {/* SECTION 4: GLOBAL SOCIAL MEDIA MOBILIZATION HUB */}
        <MobilizationHub
          onOpenShareModal={(platform) => setSharePlatformModal(platform)}
        />

        {/* SECTION 5: TAKE ACTION / PETITION SIGN-UP */}
        <PetitionSection
          signatures={signatures}
          signatureCount={signatureCount}
          onAddSignature={handleAddSignature}
          onShareClick={scrollToMobilize}
        />
      </main>

      {/* SECTION 6: FOOTER */}
      <Footer
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenBillAnalysisModal={() => setIsBillAnalysisModalOpen(true)}
      />

      {/* Modals */}
      <ReportBillModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onReportSubmitted={handleReportSubmitted}
      />

      <BillAnalysisModal
        isOpen={isBillAnalysisModalOpen}
        onClose={() => setIsBillAnalysisModalOpen(false)}
        onSignClick={scrollToPetition}
      />

      <SharePostModal
        platformName={sharePlatformModal}
        onClose={() => setSharePlatformModal(null)}
      />
    </div>
  );
}
