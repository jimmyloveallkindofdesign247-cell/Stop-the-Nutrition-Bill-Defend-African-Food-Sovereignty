/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, FileText, AlertOctagon, Scale, ShieldAlert, Download, Share2 } from 'lucide-react';
import { PRIMARY_HASHTAG } from '../utils/campaign';

interface BillAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignClick: () => void;
}

export const BillAnalysisModal: React.FC<BillAnalysisModalProps> = ({
  isOpen,
  onClose,
  onSignClick,
}) => {
  if (!isOpen) return null;

  const downloadBriefing = () => {
    const briefContent = `STOP THE NUTRITION BILL - LEGAL RISK BRIEFING
Target: Nigeria National Assembly HB 2659 (The Nutritionists Registration Council of Nigeria Bill, 2025/2026)

EXECUTIVE SUMMARY:
HB 2659 seeks to establish a centralized Nutritionists Registration Council. While ostensibly framed as professional accreditation, the actual text establishes dangerous statutory monopolies:

KEY DANGERS:
1. Section 16 (Criminalization of Informal Guidance):
   Prohibits individuals not licensed by the Council from dispensing dietary guidance, threatening family members, traditional herbal practitioners, and community health volunteers with criminal sanctions and punitive fines.
2. Section 21 & 22 (Exclusion of Indigenous Culinary Knowledge):
   Accreditation criteria are benchmarked against foreign institutional curricula, completely excluding African indigenous grains, fermentation techniques, and postpartum botanical medicine.
3. Corporate Captivity:
   The Council's proposed advisory structure allows corporate dietary standards to be mandated across schools, maternity wards, and public institutions, undermining food sovereignty.

CAMPAIGN DEMAND:
Immediate withdrawal of HB 2659 from the House of Representatives and a transparent, inclusive Pan-African food rights framework.

Hashtags: #StoptheNutritionBill #FreeAfrica
`;
    const blob = new Blob([briefContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HB-2659-Legislative-Risk-Briefing.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF4D4D]/20 text-[#FF4D4D]">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Legal Analysis: Nigeria HB 2659
              </h3>
              <p className="text-xs text-neutral-400">
                The Nutritionists Registration Council of Nigeria Bill · Legislative Threat Brief
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 space-y-6 text-sm text-neutral-300 pr-2">
          
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 text-red-200">
            <h4 className="font-bold flex items-center gap-2 text-sm text-white">
              <Scale className="w-4 h-4 text-[#FF4D4D]" />
              Core Constitutional & Human Rights Concerns
            </h4>
            <p className="mt-1 text-xs text-red-200/90 leading-relaxed">
              Civil rights coalitions and legal scholars have flagged that HB 2659 infringes on constitutional guarantees of cultural expression, economic livelihood, and public health freedom.
            </p>
          </div>

          {/* Detailed clauses breakdown */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="text-xs font-mono font-bold text-[#FF4D4D] uppercase">
                Clause Analysis · Section 16
              </span>
              <h5 className="font-bold text-white text-base mt-1">
                Criminalization of Community & Family Dietary Advice
              </h5>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                The bill restricts offering nutrition advice to council-certified personnel. This means a grandmother advising on traditional porridge for weaning or a community herbalist recommending bitter leaf for digestion risks heavy fines and police harassment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="text-xs font-mono font-bold text-[#FF4D4D] uppercase">
                Clause Analysis · Section 21 & 22
              </span>
              <h5 className="font-bold text-white text-base mt-1">
                Centralized Corporate Accreditation & Exclusion of Heritage
              </h5>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                The council's training requirements exclude indigenous agricultural knowledge. Instead, it institutionalizes foreign curriculum templates sponsored by ultra-processed food conglomerates, marginalizing native millet, sorghum, and moringa.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="text-xs font-mono font-bold text-[#FF4D4D] uppercase">
                Regional Domino Threat
              </span>
              <h5 className="font-bold text-white text-base mt-1">
                Template for Africa-Wide Legislation
              </h5>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Civil society groups warn that if HB 2659 passes without opposition in Nigeria, it will be replicated as a harmonized model bill across Ghana, Kenya, and other African Union member states.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={downloadBriefing}
            className="px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#FF4D4D]" />
            <span>Download Legal Brief (.txt)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onSignClick();
            }}
            className="px-5 py-2.5 rounded-lg bg-[#FF4D4D] hover:bg-[#FF3344] text-white text-xs sm:text-sm font-bold transition-all red-glow cursor-pointer"
          >
            Sign Petition Against HB 2659
          </button>
        </div>

      </div>
    </div>
  );
};
