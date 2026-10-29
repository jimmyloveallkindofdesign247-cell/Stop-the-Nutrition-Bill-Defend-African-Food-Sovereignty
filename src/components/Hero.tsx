/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Share2, Shield, Users, Landmark, Flame } from 'lucide-react';
import { formatNumberWithCommas } from '../utils/campaign';

interface HeroProps {
  signatureCount: number;
  onSignClick: () => void;
  onShareClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  signatureCount,
  onSignClick,
  onShareClick,
}) => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center bg-[#0A0A0A] border-b border-neutral-800">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_african_harvest_1793281879104.jpg"
          alt="African farmers and community leaders celebrating indigenous harvest and food sovereignty"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,77,77,0.18),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Campaign Hashtag Tracker Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/70 text-xs sm:text-sm font-medium text-neutral-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse"></span>
          <span className="text-[#FF4D4D] font-bold">EMERGENCY CAMPAIGN</span>
          <span className="text-neutral-500">·</span>
          <span>#StoptheNutritionBill</span>
          <span className="text-neutral-500">·</span>
          <span>#FreeAfrica</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl text-balance">
          PROTECT AFRICAN FOOD SOVEREIGNTY.{' '}
          <span className="text-[#FF4D4D] block sm:inline">STOP THE NUTRITION BILL.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal text-balance">
          Say <strong className="text-white font-semibold">NO to HB 2659</strong> and restrictive laws that corporate-regulate our heritage, criminalize traditional knowledge, and threat public health independence across Africa.
        </p>

        {/* Live Ticker Box */}
        <div className="mt-8 p-4 sm:px-6 sm:py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 shadow-2xl backdrop-blur-md flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#FF4D4D]/20 text-[#FF4D4D]">
              <Flame className="w-5 h-5" />
            </span>
            <div className="text-left">
              <span className="text-xs uppercase tracking-wider text-neutral-400 block font-semibold">
                Live Petition Counter
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">
                {formatNumberWithCommas(signatureCount)}+
              </span>
            </div>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-neutral-700" />
          <p className="text-xs sm:text-sm text-neutral-300 font-medium text-center sm:text-left">
            Citizens Have Signed the Petition Across Africa & the Global Diaspora.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onSignClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-[#FF4D4D] hover:bg-[#FF3344] rounded-xl transition-all duration-200 red-glow red-glow-hover flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer shadow-lg shadow-[#FF4D4D]/25"
          >
            <span>Sign the Petition Now</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
          
          <button
            onClick={onShareClick}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-transparent hover:bg-white/10 border-2 border-white/80 hover:border-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-sm"
          >
            <Share2 className="w-5 h-5 text-[#FF4D4D]" />
            <span>Share #StoptheNutritionBill</span>
          </button>
        </div>

        {/* 4-Item Quick Status Strip */}
        <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-neutral-800/80">
          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-left">
            <span className="text-xs text-neutral-400 block">Target Legislation</span>
            <span className="text-sm sm:text-base font-bold text-white block mt-0.5">Nigeria HB 2659</span>
            <span className="text-xs text-[#FF4D4D] mt-1 block">Nutritionists Council Bill</span>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-left">
            <span className="text-xs text-neutral-400 block">Core Movement</span>
            <span className="text-sm sm:text-base font-bold text-white block mt-0.5">Food Sovereignty</span>
            <span className="text-xs text-neutral-400 mt-1 block">Indigenous Heritage Rights</span>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-left">
            <span className="text-xs text-neutral-400 block">Pan-African Scope</span>
            <span className="text-sm sm:text-base font-bold text-white block mt-0.5">14+ Nations Aligned</span>
            <span className="text-xs text-neutral-400 mt-1 block">Civil Rights & Farmers</span>
          </div>

          <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-left">
            <span className="text-xs text-neutral-400 block">Grassroots Power</span>
            <span className="text-sm sm:text-base font-bold text-white block mt-0.5">100% People-Led</span>
            <span className="text-xs text-neutral-400 mt-1 block">Independent Civic Action</span>
          </div>
        </div>

      </div>
    </section>
  );
};
