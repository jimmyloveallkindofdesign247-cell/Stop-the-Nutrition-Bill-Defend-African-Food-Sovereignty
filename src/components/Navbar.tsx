/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onSignClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] red-glow-subtle group-hover:scale-125 transition-transform"></span>
            <span className="font-display tracking-wider">STOP THE NUTRITION BILL</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a 
              href="#tracker" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              Legislative Tracker
            </a>
            <a 
              href="#dangers" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              Key Dangers
            </a>
            <a 
              href="#mobilize" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              Mobilization Hub
            </a>
            <a 
              href="#petition" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              Sign Petition
            </a>
            <a 
              href="#faq" 
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
            >
              Campaign FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onSignClick}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#FF4D4D] hover:bg-[#FF3344] rounded-lg transition-all duration-200 red-glow-subtle red-glow-hover whitespace-nowrap shrink-0 active:scale-95"
            >
              Sign the Petition
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-[#0F0F0F] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <a
              href="#tracker"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
            >
              Legislative Tracker
            </a>
            <a
              href="#dangers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
            >
              Key Dangers
            </a>
            <a
              href="#mobilize"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
            >
              Mobilization Hub
            </a>
            <a
              href="#petition"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
            >
              Sign Petition
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors"
            >
              Campaign FAQ
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#FF4D4D] hover:bg-[#FF3344] rounded-lg transition-all red-glow"
            >
              Sign the Petition Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
