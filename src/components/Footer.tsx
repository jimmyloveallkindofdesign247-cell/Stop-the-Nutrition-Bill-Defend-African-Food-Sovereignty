/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Globe, Heart, WifiOff, Wifi } from 'lucide-react';
import { CAMPAIGN_HASHTAGS, generateSocialShareUrl } from '../utils/campaign';

interface FooterProps {
  onOpenReportModal: () => void;
  onOpenBillAnalysisModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReportModal,
  onOpenBillAnalysisModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Nigeria’s HB 2659?',
      a: 'HB 2659 is the "Nutritionists Registration Council of Nigeria Bill, 2025/2026", currently under review in the House of Representatives in Abuja. It creates a centralized body with sweeping powers to define, license, and regulate anyone who provides nutrition advice, imposing penalties on uncertified practitioners.',
    },
    {
      q: 'How does this bill criminalize traditional food knowledge?',
      a: 'Section 16 of the bill restricts nutritional guidance strictly to council licensees. Under this wording, community elders, herbalists, traditional midwives, and informal food processors who recommend heritage foods, postpartum broths, or natural herbal remedies can be prosecuted or heavily fined.',
    },
    {
      q: 'Why are other African countries concerned about HB 2659?',
      a: 'Nigeria is Africa’s most populous nation and often sets legislative precedents in ECOWAS and the African Union. Multinational lobbies frequently test restrictive regulatory frameworks in one nation before pushing them across Kenya, Ghana, Uganda, and South Africa.',
    },
    {
      q: 'Who funds and organizes this campaign?',
      a: 'This is a 100% grassroots, independent civic coalition composed of African farmers, agro-ecologists, public health defenders, civil rights organizations (including HURIWA partners), and citizens across the continent and global diaspora.',
    },
  ];

  return (
    <footer id="faq" className="bg-[#050505] text-neutral-400 border-t border-neutral-800 scroll-mt-18">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-900">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D4D]">
            Clarifying the Facts
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#FF4D4D] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#FF4D4D] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Links & Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-white font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]"></span>
              <span>STOP THE NUTRITION BILL</span>
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Uniting citizens across Africa and the global diaspora to demand the immediate withdrawal of HB 2659 and all restrictive food bills that threaten indigenous health independence.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#FF4D4D]">
              {CAMPAIGN_HASHTAGS.map((tag) => (
                <span key={tag} className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Action & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tracker" className="hover:text-white transition-colors">
                  Legislative Tracker
                </a>
              </li>
              <li>
                <a href="#dangers" className="hover:text-white transition-colors">
                  Core Dangers of HB 2659
                </a>
              </li>
              <li>
                <a href="#petition" className="hover:text-white transition-colors">
                  Sign Citizen Petition
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReportModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Report a Bill in Your Country
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBillAnalysisModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Download Legal Risk Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Social Icons Bar */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Share On Major Platforms
            </h4>
            <p className="text-xs text-neutral-400">
              Mobilize your network. One click to sound the alarm on social media.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['x', 'whatsapp', 'facebook', 'telegram', 'reddit'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => window.open(generateSocialShareUrl(platform), '_blank')}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:border-[#FF4D4D] transition-colors cursor-pointer capitalize"
                >
                  {platform === 'x' ? 'X / Twitter' : platform}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
          <p className="text-xs text-neutral-400 leading-relaxed font-medium">
            <strong className="text-neutral-200">Legal Disclaimer:</strong> This is a grassroots civil movement defending African food sovereignty and public health freedom. We exercise our constitutional right to assemble, petition, and protect ancestral culinary heritage.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © 2025–2026 Stop The Nutrition Bill Movement (#FreeAfrica). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Offline-Ready PWA Cached</span>
            </span>
            <span>·</span>
            <span className="text-neutral-400">Privacy & Freedom Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
