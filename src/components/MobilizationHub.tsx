/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Copy,
  Check,
  Share2,
  ExternalLink,
  MessageCircle,
  Globe,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import { CAMPAIGN_HASHTAGS, PRIMARY_HASHTAG, CAMPAIGN_URL, SAMPLE_TWEETS, generateSocialShareUrl } from '../utils/campaign';

interface MobilizationHubProps {
  onOpenShareModal: (platformName: string) => void;
}

export const MobilizationHub: React.FC<MobilizationHubProps> = ({ onOpenShareModal }) => {
  const [copiedHashtags, setCopiedHashtags] = useState(false);
  const [copiedKitIndex, setCopiedKitIndex] = useState<number | null>(null);

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(`${CAMPAIGN_HASHTAGS.join(' ')}`);
    setCopiedHashtags(true);
    setTimeout(() => setCopiedHashtags(false), 2200);
  };

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedKitIndex(index);
    setTimeout(() => setCopiedKitIndex(null), 2200);
  };

  // 12 Global Platforms with authentic brand styling and SVGs
  const platforms = [
    {
      id: 'x',
      name: 'X (Twitter)',
      bg: 'hover:bg-neutral-800 hover:text-white',
      border: 'border-neutral-700',
      action: () => {
        window.open(generateSocialShareUrl('x'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      bg: 'hover:bg-emerald-950 hover:text-emerald-400',
      border: 'border-emerald-900/60',
      action: () => {
        window.open(generateSocialShareUrl('whatsapp'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.276-.1-.476-.15-.676.15-.2.301-.776.977-.951 1.177-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.3-.501.101-.2.051-.376-.025-.526-.076-.15-.676-1.63-.926-2.231-.243-.585-.49-.506-.676-.515-.175-.01-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.078 2.909 1.228 3.109.15.2 2.121 3.238 5.138 4.542.718.311 1.278.497 1.716.636.721.229 1.378.197 1.897.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.94.55 3.75 1.51 5.29L2 22l4.83-1.49c1.48.88 3.2 1.39 5.03 1.39 5.53 0 10.02-4.49 10.02-10.02C21.88 6.49 17.39 2 12.04 2z" />
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      bg: 'hover:bg-blue-950 hover:text-blue-400',
      border: 'border-blue-900/60',
      action: () => {
        window.open(generateSocialShareUrl('facebook'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: 'telegram',
      name: 'Telegram',
      bg: 'hover:bg-sky-950 hover:text-sky-400',
      border: 'border-sky-900/60',
      action: () => {
        window.open(generateSocialShareUrl('telegram'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
    },
    {
      id: 'reddit',
      name: 'Reddit',
      bg: 'hover:bg-orange-950 hover:text-orange-400',
      border: 'border-orange-900/60',
      action: () => {
        window.open(generateSocialShareUrl('reddit'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.702z" />
        </svg>
      ),
    },
    {
      id: 'threads',
      name: 'Threads',
      bg: 'hover:bg-neutral-800 hover:text-white',
      border: 'border-neutral-700',
      action: () => {
        window.open(generateSocialShareUrl('threads'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      bg: 'hover:bg-pink-950 hover:text-pink-400',
      border: 'border-pink-900/60',
      action: () => onOpenShareModal('Instagram'),
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      bg: 'hover:bg-neutral-800 hover:text-cyan-400',
      border: 'border-neutral-700',
      action: () => onOpenShareModal('TikTok'),
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      id: 'wechat',
      name: 'WeChat',
      bg: 'hover:bg-emerald-950 hover:text-emerald-400',
      border: 'border-emerald-900/60',
      action: () => onOpenShareModal('WeChat'),
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.858-2.554.43-5.37 3.04-6.495 1.046-.452 2.18-.636 3.303-.553-.872-4.32-4.28-7.588-6.147-7.588zm-2.404 4.093c.61 0 1.107.497 1.107 1.108 0 .61-.497 1.107-1.107 1.107-.611 0-1.108-.497-1.108-1.107 0-.611.497-1.108 1.108-1.108zm5.539 0c.611 0 1.108.497 1.108 1.108 0 .61-.497 1.107-1.108 1.107-.61 0-1.107-.497-1.107-1.107 0-.611.497-1.108 1.107-1.108zm4.498 3.84c-3.998 0-7.242 2.74-7.242 6.12 0 1.848.977 3.513 2.508 4.638.13.096.2.25.178.408l-.326 1.238a.249.249 0 0 0 .242.31c.046 0 .092-.014.132-.04l1.59-1.002a.723.723 0 0 1 .6-.082 8.49 8.49 0 0 0 2.318.33c3.998 0 7.242-2.74 7.242-6.12 0-3.38-3.244-6.12-7.242-6.12zm-2.008 3.421c.509 0 .922.414.922.923a.923.923 0 0 1-.922.923.923.923 0 0 1-.923-.923c0-.51.414-.923.923-.923zm4.615 0c.51 0 .923.414.923.923a.923.923 0 0 1-.923.923.923.923 0 0 1-.923-.923c0-.51.413-.923.923-.923z" />
        </svg>
      ),
    },
    {
      id: 'line',
      name: 'LINE',
      bg: 'hover:bg-emerald-950 hover:text-emerald-400',
      border: 'border-emerald-900/60',
      action: () => {
        window.open(generateSocialShareUrl('line'), '_blank', 'noopener,noreferrer');
      },
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.365 9.864c0-4.043-4.195-7.324-9.365-7.324s-9.365 3.281-9.365 7.324c0 3.623 3.228 6.664 7.6 7.218.296.064.698.196.8.448.092.228.06.586.03.816l-.13 1.144c-.04.346-.184 1.352 1.186.738 1.37-.614 7.4-4.358 10.098-7.464 1.7-1.954 1.946-3.804 1.946-5.466zM7.228 12.016H5.212a.662.662 0 0 1-.662-.662V8.34a.662.662 0 0 1 .662-.662h2.016a.662.662 0 1 1 0 1.324H5.874v1.028h1.354a.662.662 0 1 1 0 1.324H5.874v1.028h1.354a.662.662 0 1 1 0 1.324zm2.84 0a.662.662 0 0 1-.662-.662V8.34a.662.662 0 1 1 1.324 0v3.014a.662.662 0 0 1-.662.662zm4.336 0a.662.662 0 0 1-.58-.337l-1.96-2.738v2.413a.662.662 0 1 1-1.324 0V8.34a.662.662 0 0 1 .58-.337.66.66 0 0 1 .58.337l1.96 2.738V8.665a.662.662 0 1 1 1.324 0v3.014a.662.662 0 0 1-.58.337zm3.176-2.028a.662.662 0 0 1 0-1.324h1.354V8.34a.662.662 0 1 1 1.324 0v3.014a.662.662 0 0 1-.662.662h-2.016z" />
        </svg>
      ),
    },
    {
      id: 'bilibili',
      name: 'Bilibili',
      bg: 'hover:bg-sky-950 hover:text-sky-400',
      border: 'border-sky-900/60',
      action: () => onOpenShareModal('Bilibili'),
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.813 4.653h.854c1.51 0 2.733 1.224 2.733 2.734v10.514c0 1.51-1.224 2.734-2.733 2.734H5.333C3.823 20.635 2.6 19.41 2.6 17.901V7.387c0-1.51 1.223-2.734 2.733-2.734h.854L4.85 2.915a.75.75 0 0 1 1.06-1.06l2.383 2.383h7.414l2.383-2.383a.75.75 0 1 1 1.06 1.06L17.813 4.653zm-9.313 5.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm7 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
        </svg>
      ),
    },
    {
      id: 'youtube',
      name: 'YouTube',
      bg: 'hover:bg-red-950 hover:text-red-400',
      border: 'border-red-900/60',
      action: () => onOpenShareModal('YouTube'),
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="mobilize" className="py-24 bg-[#0A0A0A] text-white border-b border-neutral-800 scroll-mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#FF4D4D] text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Digital Resistance Network</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Global Social Media Mobilization Hub
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-neutral-300 font-medium">
            Amplify the Movement. Share on Every Platform.
          </p>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl mx-auto">
            Legislators respond when citizens coordinate across borders. Use our 1-click tools, verified hashtags, and pre-crafted briefings to break corporate silence.
          </p>

          {/* Hashtag Spotlight Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 p-2 sm:p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md">
            {CAMPAIGN_HASHTAGS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl bg-black border border-neutral-700 text-sm sm:text-base font-bold font-mono text-white tracking-wide select-all"
              >
                {tag}
              </span>
            ))}
            <button
              onClick={handleCopyHashtags}
              className="px-4 py-2 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white text-xs sm:text-sm font-semibold transition-all red-glow-subtle flex items-center gap-2 cursor-pointer active:scale-95"
            >
              {copiedHashtags ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Hashtags Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Both Hashtags</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 12-Platform Interactive Grid */}
        <div className="mt-14">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 text-center mb-6">
            Direct 1-Click Platform Broadcast
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={platform.action}
                className={`p-4 rounded-xl bg-neutral-900/80 border ${platform.border} ${platform.bg} text-neutral-200 transition-all duration-200 flex flex-col items-center justify-center gap-2.5 group cursor-pointer hover:scale-102 hover:shadow-lg`}
              >
                <div className="p-2 rounded-lg bg-neutral-950 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                  {platform.name}
                </span>
                <span className="text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                  Share Post →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pre-Crafted Campaign Copy Kit */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF4D4D]" />
                <span>Pre-Crafted Advocacy Posts (Ready to Broadcast)</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Optimized with essential facts and target campaign tags. One click copies to clipboard.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_TWEETS.map((sample, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#FF4D4D] uppercase tracking-wider">
                    {sample.title}
                  </span>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{sample.text}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">
                    Includes #StoptheNutritionBill #FreeAfrica
                  </span>
                  <button
                    onClick={() => handleCopyText(sample.text, idx)}
                    className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedKitIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Post</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
