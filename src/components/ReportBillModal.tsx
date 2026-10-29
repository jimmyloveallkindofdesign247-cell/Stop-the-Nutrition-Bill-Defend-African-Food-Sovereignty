/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Flag, CheckCircle2, ShieldAlert, AlertTriangle } from 'lucide-react';
import { ReportedBill, REGIONS_LIST } from '../utils/campaign';

interface ReportBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReportSubmitted: (bill: ReportedBill) => void;
}

export const ReportBillModal: React.FC<ReportBillModalProps> = ({
  isOpen,
  onClose,
  onReportSubmitted,
}) => {
  const [country, setCountry] = useState('Ghana');
  const [billTitle, setBillTitle] = useState('');
  const [legislativeBody, setLegislativeBody] = useState('');
  const [status, setStatus] = useState('Draft / Early Committee');
  const [summary, setSummary] = useState('');
  const [reporterName, setReporterName] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billTitle.trim() || !summary.trim()) return;

    const newReport: ReportedBill = {
      id: `rep-${Date.now()}`,
      country,
      billTitle: billTitle.trim(),
      legislativeBody: legislativeBody.trim() || 'National Parliament',
      status,
      summary: summary.trim(),
      reporterName: reporterName.trim() || 'Anonymous Advocate',
      reporterEmail: reporterEmail.trim() || 'Confidential',
      dateReported: 'Just now',
    };

    onReportSubmitted(newReport);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setBillTitle('');
    setSummary('');
    setReporterName('');
    setReporterEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display">Intelligence Report Received</h3>
            <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
              Thank you for defending food sovereignty. Our Pan-African legal and research coalition has added your report to the emergency legislative monitoring docket.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 rounded-lg bg-[#FF4D4D] text-white text-sm font-bold hover:bg-[#FF3344] transition-all red-glow"
            >
              Done & Return to Campaign
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
              <div className="p-2.5 rounded-xl bg-[#FF4D4D]/20 text-[#FF4D4D]">
                <Flag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Report a Restrictive Food or Nutrition Bill
                </h3>
                <p className="text-xs text-neutral-400">
                  Alert our Pan-African research team of pending legislation in your country.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Country <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm"
                  >
                    {REGIONS_LIST.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Current Stage
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm"
                  >
                    <option value="First Reading / Introduced">First Reading / Introduced</option>
                    <option value="Second Reading / Committee">Second Reading / Committee</option>
                    <option value="Public Hearing Stage">Public Hearing Stage</option>
                    <option value="Final Passage Approaching">Final Passage Approaching</option>
                    <option value="Proposed Ministerial Regulation">Proposed Ministerial Regulation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Bill Title or Reference Number <span className="text-[#FF4D4D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Food Standards & Nutrition Practice Bill, 2026"
                  value={billTitle}
                  onChange={(e) => setBillTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm focus:ring-1 focus:ring-[#FF4D4D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Legislative Body / Ministry
                </label>
                <input
                  type="text"
                  placeholder="e.g., Parliament of Ghana, National Assembly of Kenya, Ministry of Health"
                  value={legislativeBody}
                  onChange={(e) => setLegislativeBody(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm focus:ring-1 focus:ring-[#FF4D4D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Summary of Threat & Harmful Clauses <span className="text-[#FF4D4D]">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How does this bill penalize traditional herbalists, ban heirloom crops, or centralize dietary advice?"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm focus:ring-1 focus:ring-[#FF4D4D] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Your Name / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Advocate, Farmer, Doctor, etc."
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Your Email (Optional / Confidential)
                  </label>
                  <input
                    type="email"
                    placeholder="For follow-up legal verification"
                    value={reporterEmail}
                    onChange={(e) => setReporterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-sm"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#FF4D4D] hover:bg-[#FF3344] text-white font-bold text-sm transition-all red-glow cursor-pointer"
                >
                  Submit Legislative Intelligence
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
