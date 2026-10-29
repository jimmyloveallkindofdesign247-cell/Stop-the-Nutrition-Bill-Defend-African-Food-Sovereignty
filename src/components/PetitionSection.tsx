/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  PenTool,
  CheckCircle2,
  Share2,
  Download,
  ShieldCheck,
  Search,
  Filter,
  Flame,
  Award,
} from 'lucide-react';
import {
  PetitionSignature,
  REGIONS_LIST,
  validateEmail,
  formatNumberWithCommas,
  PRIMARY_HASHTAG,
  generateSocialShareUrl,
} from '../utils/campaign';

interface PetitionSectionProps {
  signatures: PetitionSignature[];
  signatureCount: number;
  onAddSignature: (sig: Omit<PetitionSignature, 'id' | 'timestamp' | 'verified'>) => void;
  onShareClick: () => void;
}

export const PetitionSection: React.FC<PetitionSectionProps> = ({
  signatures,
  signatureCount,
  onAddSignature,
  onShareClick,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [customNote, setCustomNote] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedSignature, setSubmittedSignature] = useState<{
    name: string;
    country: string;
    number: number;
  } | null>(null);

  // Search & filter for verified signatures list
  const [filterCountry, setFilterCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const quickNotes = [
    'Withdraw HB 2659 immediately and protect our indigenous foods.',
    'Traditional recipes and postpartum herbal remedies are not a crime.',
    'Stop foreign corporate control over African agriculture and diets.',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name to sign.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const displayName = isAnonymous
      ? `${fullName.trim().charAt(0)}. ${fullName.trim().split(' ').slice(-1)[0] || ''} (Verified)`
      : fullName.trim();

    onAddSignature({
      fullName: displayName,
      email: email.trim(),
      country,
      region: country,
      note: customNote.trim() || undefined,
    });

    setSubmittedSignature({
      name: displayName,
      country,
      number: signatureCount + 1,
    });

    // Reset form
    setFullName('');
    setEmail('');
    setCustomNote('');
  };

  const filteredSignatures = signatures.filter((sig) => {
    const matchesCountry = filterCountry === 'All' || sig.country.toLowerCase().includes(filterCountry.toLowerCase());
    const matchesSearch =
      sig.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sig.note && sig.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sig.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <section id="petition" className="py-24 bg-[#0A0A0A] text-white border-b border-neutral-800 scroll-mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D4D]/15 border border-[#FF4D4D]/40 text-[#FF4D4D] text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4" />
            <span>Official Pan-African Civic Petition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Take Action: Demand the Immediate Withdrawal of HB 2659
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300">
            Every signature is forwarded directly to the Committee on Healthcare Services in the Nigerian National Assembly and partner regional parliamentary caucuses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Embeddable Petition Form & Success Certificate */}
          <div className="lg:col-span-7">
            {submittedSignature ? (
              /* Success / Certificate View */
              <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border-2 border-[#FF4D4D] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award className="w-48 h-48 text-[#FF4D4D]" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-bold uppercase mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Petition Signed & Recorded</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    Thank You, {submittedSignature.name}!
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-300">
                    You are Citizen <strong className="text-[#FF4D4D] font-mono font-bold">#{formatNumberWithCommas(submittedSignature.number)}</strong> to stand up for African food sovereignty and indigenous knowledge.
                  </p>

                  {/* Citizen Certificate Card */}
                  <div className="mt-6 p-6 rounded-xl bg-black/80 border border-neutral-700 text-left relative">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Citizen Solidarity Certificate
                      </span>
                      <span className="text-xs font-bold text-[#FF4D4D]">#StoptheNutritionBill</span>
                    </div>

                    <p className="text-xs text-neutral-400">Verified Signatory:</p>
                    <p className="text-lg font-bold text-white mt-0.5">{submittedSignature.name}</p>
                    
                    <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                      <span>Region: <strong className="text-neutral-200">{submittedSignature.country}</strong></span>
                      <span>Status: <strong className="text-emerald-400">Recorded In Civic Registry</strong></span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <button
                      onClick={onShareClick}
                      className="px-6 py-3 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white text-sm font-bold transition-all red-glow flex items-center gap-2 cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share Your Stand On Social Media</span>
                    </button>
                    <button
                      onClick={() => setSubmittedSignature(null)}
                      className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
                    >
                      Sign for Another Citizen
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Embeddable Petition Form */
              <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                  <div className="p-2 rounded-lg bg-[#FF4D4D]/20 text-[#FF4D4D]">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Official Citizen Petition</h3>
                    <p className="text-xs text-neutral-400">Takes less than 30 seconds. Protect food freedom.</p>
                  </div>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-700/80 text-red-200 text-xs sm:text-sm">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Full Name <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Ngozi Adeyemi or Dr. John K."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Email Address <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com (Kept strictly private)"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Country / Region <span className="text-[#FF4D4D]">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] focus:border-transparent text-sm transition-all cursor-pointer"
                    >
                      {REGIONS_LIST.map((reg) => (
                        <option key={reg.value} value={reg.value} className="bg-neutral-900 text-white">
                          {reg.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Custom Note to Representatives (Optional)
                      </label>
                      <span className="text-[11px] text-neutral-400">Click a prompt to insert:</span>
                    </div>

                    {/* Quick message suggestions */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {quickNotes.map((noteText, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCustomNote(noteText)}
                          className="px-2.5 py-1 text-[11px] rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer text-left"
                        >
                          + {noteText.substring(0, 32)}...
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={3}
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      placeholder="Why is African food sovereignty important to you and your community?"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] focus:border-transparent text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="anonCheck"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-4 h-4 rounded text-[#FF4D4D] focus:ring-[#FF4D4D] bg-neutral-900 border-neutral-700 cursor-pointer"
                    />
                    <label htmlFor="anonCheck" className="text-xs text-neutral-400 cursor-pointer">
                      Display my name as initials in the public verification feed (e.g., N. Adeyemi)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white font-extrabold text-base transition-all duration-200 red-glow red-glow-hover active:scale-98 cursor-pointer mt-4 flex items-center justify-center gap-2"
                  >
                    <span>Sign & Take a Stand</span>
                    <Flame className="w-5 h-5" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Your data is protected. Never sold or shared with commercial entities.</span>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Live Verified Signatures Ticker / Feed */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex-1 flex flex-col">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] animate-ping"></span>
                    <span>Live Signatures Feed</span>
                  </h4>
                  <p className="text-xs text-neutral-400">
                    <strong className="text-white font-mono">{formatNumberWithCommas(signatureCount)}</strong> citizens standing united
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-[11px] font-mono text-emerald-400">
                  REAL-TIME SYNC
                </span>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="mt-4 space-y-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, region, or note..."
                    className="w-full pl-9 pr-4 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#FF4D4D]"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs text-neutral-400">
                  <span className="shrink-0 text-[11px]">Filter:</span>
                  {['All', 'Nigeria', 'Ghana', 'Kenya', 'Diaspora'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilterCountry(c)}
                      className={`px-2 py-1 rounded text-xs whitespace-nowrap cursor-pointer transition-colors ${
                        filterCountry === c
                          ? 'bg-[#FF4D4D] text-white font-semibold'
                          : 'bg-neutral-800 text-neutral-300 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feed items */}
              <div className="mt-4 space-y-3 overflow-y-auto max-h-[460px] pr-1">
                {filteredSignatures.length === 0 ? (
                  <p className="text-xs text-neutral-500 text-center py-8">
                    No matching signatures found. Be the first from this area!
                  </p>
                ) : (
                  filteredSignatures.map((sig) => (
                    <div
                      key={sig.id}
                      className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{sig.fullName}</span>
                        <span className="text-[11px] text-neutral-400 font-mono">{sig.timestamp}</span>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400">
                        <span className="text-neutral-300 font-medium">{sig.country}</span>
                        <span>·</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Verified Citizen
                        </span>
                      </div>

                      {sig.note && (
                        <p className="mt-2 text-xs text-neutral-300 italic bg-neutral-900/60 p-2 rounded border border-neutral-800/50">
                          "{sig.note}"
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
