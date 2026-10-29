/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertCircle, FileText, ExternalLink, ArrowRight, Flag, Calendar, ShieldCheck } from 'lucide-react';

interface BreakingNewsTrackerProps {
  onOpenReportModal: () => void;
  onOpenBillAnalysisModal: () => void;
}

export const BreakingNewsTracker: React.FC<BreakingNewsTrackerProps> = ({
  onOpenReportModal,
  onOpenBillAnalysisModal,
}) => {
  return (
    <section id="tracker" className="py-20 bg-[#121212] text-white border-b border-neutral-800 scroll-mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF4D4D] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF4D4D]"></span>
              <span>Legislative Intelligence</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Urgent Legislative Tracker & Campaign Updates
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-2xl">
              Real-time monitoring of parliamentary proceedings, civil society mobilization, and critical legal clauses threatening food sovereignty in Africa.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBillAnalysisModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold transition-colors border border-neutral-700 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#FF4D4D]" />
              <span>Full HB 2659 Risk Analysis</span>
            </button>
          </div>
        </div>

        {/* 2 Featured News Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Featured News Card 1 */}
          <article className="rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src="/src/assets/images/nigeria_assembly_tracker_1793281880745.jpg"
                alt="Nigeria National Assembly House chamber where HB 2659 is undergoing debate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#FF4D4D] text-white text-xs font-bold tracking-wide uppercase">
                  ACTIVE BILL
                </span>
                <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-neutral-200 text-xs font-mono">
                  HB 2659
                </span>
              </div>

              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>House of Representatives, Abuja</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF4D4D] transition-colors leading-snug">
                  Nigeria’s National Assembly Pushes HB 2659
                </h3>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  The House of Representatives advances HB 2659 (The Nutritionists Registration Council of Nigeria Bill). Critics and civil rights organizations warn it criminalizes unregistered food advice, risks imposing fines on traditional practitioners, and opens doors to foreign influence over indigenous diets.
                </p>

                {/* Key Danger Points */}
                <div className="mt-5 space-y-2 border-t border-neutral-800/80 pt-4">
                  <div className="text-xs text-neutral-400 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Section 16:</strong> Restricts nutritional guidance strictly to registered council holders under threat of fine.</span>
                  </div>
                  <div className="text-xs text-neutral-400 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Exclusion of Heritage:</strong> No seat for indigenous herbal healers, farmers, or traditional postpartum caregivers.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Status: Committee Review Stage</span>
                <button
                  onClick={onOpenBillAnalysisModal}
                  className="text-xs sm:text-sm font-semibold text-[#FF4D4D] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Examine Specific Clauses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Featured News Card 2 */}
          <article className="rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src="/src/assets/images/civic_action_petition_1793281880877.jpg"
                alt="Civil society coalition advocates and citizens organizing petition submission"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-white text-neutral-900 text-xs font-bold tracking-wide uppercase">
                  CIVIL COALITION
                </span>
                <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-neutral-200 text-xs font-mono">
                  HURIWA & ALLIES
                </span>
              </div>

              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>Civil Coalition Dispatch</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF4D4D] transition-colors leading-snug">
                  Over 2,100+ Petition Reps & HURIWA Demands Immediate Withdrawal
                </h3>
                <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Human rights advocates and civil society groups unite to protect family-based nutritional knowledge and demand an inclusive redrafting of health legislation. The coalition warns that criminalizing grassroots advice will disproportionately harm rural mothers and informal food artisans.
                </p>

                {/* Key Points */}
                <div className="mt-5 space-y-2 border-t border-neutral-800/80 pt-4">
                  <div className="text-xs text-neutral-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Constitutional Challenge:</strong> Invokes rights to cultural freedom, freedom of expression, and heritage preservation.</span>
                  </div>
                  <div className="text-xs text-neutral-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-200">Diaspora Backing:</strong> African diaspora medical and nutritional scholars join demand for full withdrawal.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Signatures Delivered: 2,100+ to Lawmakers</span>
                <a
                  href="#petition"
                  className="text-xs sm:text-sm font-semibold text-[#FF4D4D] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Add Your Signature</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

        </div>

        {/* Pan-African Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#1F1111] border border-[#FF4D4D]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-[#FF4D4D]/20 text-[#FF4D4D] shrink-0">
              <Flag className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Is your country introducing similar food regulation laws?
              </h4>
              <p className="mt-1 text-sm text-neutral-300">
                Special interest groups are pushing standardized food bills across ECOWAS, EAC, and SADC parliaments. Help our legal research team track and expose them.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReportModal}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white font-bold text-sm transition-all duration-200 red-glow-subtle red-glow-hover shrink-0 cursor-pointer active:scale-95 text-center"
          >
            Report a Bill Here
          </button>
        </div>

      </div>
    </section>
  );
};
