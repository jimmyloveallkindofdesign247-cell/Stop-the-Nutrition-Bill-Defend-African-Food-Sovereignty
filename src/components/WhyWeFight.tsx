/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Building2, CheckCircle2, XCircle, Sparkles, Scale } from 'lucide-react';

export const WhyWeFight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'comparison'>('cards');

  return (
    <section id="dangers" className="py-24 bg-gradient-to-b from-[#121212] via-[#F4F4F5] to-[#FAFAFA] text-[#1A1A1A] scroll-mt-18 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D4D]/10 text-[#FF3344] text-xs font-bold tracking-wider uppercase mb-3">
            <span>Critical Threat Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-neutral-900">
            Why We Fight: The Key Dangers of the Bill
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            HB 2659 is not a neutral regulatory standard. It establishes a centralized monopoly that threatens ancestral wisdom, penalizes informal caregivers, and hands dietary sovereignty to foreign corporate interests.
          </p>

          {/* Toggle between 3-Column Grid and Detailed Comparison */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-neutral-200/80 border border-neutral-300">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              3 Core Dangers
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Heritage vs. Corporate Mandate
            </button>
          </div>
        </div>

        {activeTab === 'cards' ? (
          /* 3-Column Visual Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Danger 1: Threat to Indigenous Knowledge */}
            <div className="rounded-2xl bg-white p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-[#FF4D4D]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#FF4D4D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#FF4D4D] mb-1">
                  Danger 01
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  Threat to Indigenous Knowledge
                </h3>
                <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Regulates traditional recipes, family nutritional guidance, and cultural practices out of existence. For centuries, African mothers, elder herbalists, and village nutritionists sustained communities with native grains, fermentation, and therapeutic roots.
                </p>
                
                <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 space-y-2">
                  <p className="font-semibold text-neutral-900">What’s At Risk:</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600">
                    <li>Postpartum healing soups (Ofe Nsala, Pepper Soup)</li>
                    <li>Fermented millet, sorghum, and locust bean wisdom</li>
                    <li>Traditional pediatric feeding and herbal remedies</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                <span>Threat Level: Severe</span>
                <span className="text-[#FF4D4D]">Cultural Erasure</span>
              </div>
            </div>

            {/* Danger 2: Over-Criminalization */}
            <div className="rounded-2xl bg-white p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-[#FF4D4D]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#FF4D4D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#FF4D4D] mb-1">
                  Danger 02
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  Over-Criminalization of Citizens
                </h3>
                <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Imposes fines and penalties on unregistered community guidance and informal practitioners. Anyone without a license issued by a centralized council—including health bloggers, community health workers, and elders—could face prosecution for giving dietary advice.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 space-y-2">
                  <p className="font-semibold text-neutral-900">Legal Ramifications:</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600">
                    <li>Fines up to hundreds of thousands of Naira or jail time</li>
                    <li>Silencing wellness educators and herbal researchers</li>
                    <li>Hostile inspections targeting informal market food makers</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                <span>Threat Level: High</span>
                <span className="text-[#FF4D4D]">Civil Liberties</span>
              </div>
            </div>

            {/* Danger 3: Foreign & Corporate Control */}
            <div className="rounded-2xl bg-white p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-[#FF4D4D]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#FF4D4D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#FF4D4D] mb-1">
                  Danger 03
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  Foreign & Corporate Control
                </h3>
                <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Allows centralized councils to prioritize foreign curricula and unchecked corporate influence over native crops. Bill provisions pave the way for multinational agribusiness to dictate dietary standards, favoring ultra-processed fortified products over real African foods.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 space-y-2">
                  <p className="font-semibold text-neutral-900">Commercial Subordination:</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600">
                    <li>Displacement of heirloom fonio, teff, yam, and moringa</li>
                    <li>Curricula sponsored by global food conglomerates</li>
                    <li>Import-dependent nutritional dogma forced on schools</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                <span>Threat Level: Extreme</span>
                <span className="text-[#FF4D4D]">Sovereignty Risk</span>
              </div>
            </div>

          </div>
        ) : (
          /* Side-by-Side Comparison Matrix */
          <div className="rounded-2xl bg-white border border-neutral-200 shadow-md overflow-hidden">
            <div className="p-6 bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Indigenous Food Sovereignty vs. Centralized Corporate Mandates</h3>
                <p className="text-xs sm:text-sm text-neutral-300">Comparing African community wisdom with the proposed legislative restrictions</p>
              </div>
              <span className="px-3 py-1 rounded bg-[#FF4D4D] text-xs font-bold uppercase self-start sm:self-auto">
                Legislative Impact
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="py-4 px-6 font-semibold text-neutral-700 w-1/4">Key Dimension</th>
                    <th className="py-4 px-6 font-semibold text-emerald-800 bg-emerald-50/50 w-3/8">
                      African Heritage & Indigenous Sovereignty
                    </th>
                    <th className="py-4 px-6 font-semibold text-red-900 bg-red-50/50 w-3/8">
                      Proposed Bill HB 2659 Centralized Council
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Dietary Authority</td>
                    <td className="py-4 px-6 bg-emerald-50/30">
                      Decentralized, passed through generations, family recipes, and local agro-ecological knowledge.
                    </td>
                    <td className="py-4 px-6 bg-red-50/30 font-medium text-red-950">
                      Concentrated in a single government-appointed council dominated by urban elites and corporate lobbies.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Community Advice</td>
                    <td className="py-4 px-6 bg-emerald-50/30">
                      Mothers, midwives, community health workers, and elders freely counsel families on nutrition.
                    </td>
                    <td className="py-4 px-6 bg-red-50/30 font-medium text-red-950">
                      Unregistered advice is criminalized with heavy fines and potential incarceration under Section 16.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Native Crop Support</td>
                    <td className="py-4 px-6 bg-emerald-50/30">
                      Prioritizes resilient, nutrient-dense heirloom grains (millet, sorghum, fonio, cowpea, baobab).
                    </td>
                    <td className="py-4 px-6 bg-red-50/30 font-medium text-red-950">
                      Prioritizes foreign institutional guidelines that push imported fortified powders and synthetic supplements.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Economic Access</td>
                    <td className="py-4 px-6 bg-emerald-50/30">
                      Affordable, locally grown, market-accessible wholesome food prepared in every household.
                    </td>
                    <td className="py-4 px-6 bg-red-50/30 font-medium text-red-950">
                      Creates expensive licensing barriers that shut out grassroots practitioners and enrich credentialing bodies.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Visual Proof Spotlight: Traditional Wisdom & Community Dignity */}
        <div className="mt-16 rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src="/src/assets/images/danger_traditional_food_1793281880155.jpg"
              alt="Traditional African culinary kitchen with heirloom mortar, dried herbs, and spices"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
            <span className="absolute bottom-4 left-4 lg:hidden text-xs text-white font-medium bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
              Ancestral Culinary Medicine
            </span>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF4D4D] mb-3">
                <Scale className="w-4 h-4" />
                <span>Voices From The Frontlines</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display">
                "Our food is our medicine, our culture, and our identity. We will not be regulated out of our heritage."
              </h3>
              <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                When a mother in Ibadan, Kumasi, or Kisumu boils moringa leaves or blends tiger nuts and dates for her malnourished child, she is practicing sacred public health proven over centuries. HB 2659 treats this ancestral wisdom as an unauthorized offense. We demand the bill be withdrawn immediately.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-bold text-neutral-900 text-sm">Alhaja Fatima Alabi & Civil Society Alliance</p>
                <p className="text-xs text-neutral-500">Indigenous Herbalist & Women Food Farmers Network</p>
              </div>

              <a
                href="#petition"
                className="px-5 py-2.5 rounded-lg bg-[#FF4D4D] hover:bg-[#FF3344] text-white text-xs sm:text-sm font-bold transition-all red-glow-subtle"
              >
                Stand With Our Healers
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
