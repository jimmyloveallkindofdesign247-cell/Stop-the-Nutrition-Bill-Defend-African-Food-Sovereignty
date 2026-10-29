/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Copy, Check, Share2, Sparkles, ExternalLink } from 'lucide-react';
import { CAMPAIGN_HASHTAGS, PRIMARY_HASHTAG, CAMPAIGN_URL } from '../utils/campaign';

interface SharePostModalProps {
  platformName: string | null;
  onClose: () => void;
}

export const SharePostModal: React.FC<SharePostModalProps> = ({
  platformName,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!platformName) return null;

  const defaultCaption = `Say NO to HB 2659! Stand for African Food Sovereignty, protect our indigenous recipes, and defend traditional healers from criminalization. Sign the official petition: ${CAMPAIGN_URL} ${CAMPAIGN_HASHTAGS.join(' ')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
          <div className="p-2.5 rounded-xl bg-[#FF4D4D]/20 text-[#FF4D4D]">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              Share to {platformName}
            </h3>
            <p className="text-xs text-neutral-400">
              One-click advocacy caption with official hashtags.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono">
            {defaultCaption}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleCopy}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white font-bold text-xs sm:text-sm transition-all red-glow flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Caption Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Caption for {platformName}</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-xs text-neutral-300 space-y-1">
            <p className="font-semibold text-white">Pro Tip for {platformName}:</p>
            <p className="text-neutral-400">
              Paste this caption onto your photo, video, or story and tag fellow advocates. Every post brings more eyes to HB 2659.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
