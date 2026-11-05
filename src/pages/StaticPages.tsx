import React, { useState } from 'react';
import { SITE_NAME, SITE_TAGLINE } from '../config/siteConfig';
import { AdSlot } from '../components/AdSlot';
import { Mail, Shield, Award, Users, CheckCircle, Send, MapPin, Phone } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6 mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600 block mb-1">
          Our Editorial Mission
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
          About {SITE_NAME}
        </h1>
        <p className="mt-3 text-lg text-stone-600 dark:text-stone-300 font-serif italic">
          "{SITE_TAGLINE}"
        </p>
      </div>

      <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          Founded in 2024, <strong>{SITE_NAME}</strong> is an independent international news publication committed to deep investigative reporting, balanced analysis, and rigorous fact-checking. We cover seven core beats: National Policy, International Diplomacy, Frontier Technology, Business Intelligence, Championship Athletics, Cultural Arts, and Distinctive Opinion.
        </p>

        <div id="editorial-standards" className="scroll-mt-28 lg:scroll-mt-16 my-8 grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
          <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center">
            <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h2 className="font-serif font-bold text-stone-900 dark:text-white">
              Editorial Independence
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Zero corporate or political shareholder control over news judgment.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center">
            <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <h2 className="font-serif font-bold text-stone-900 dark:text-white">
              Two-Source Verification
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Every factual assertion is corroborated prior to publication.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h2 className="font-serif font-bold text-stone-900 dark:text-white">
              Global Newsroom
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Correspondents stationed across 18 countries and 4 continents.
            </p>
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white pt-4">
          Advertising Standards & Transparency
        </h2>
        <p>
          To maintain open access for readers worldwide, {SITE_NAME} is funded through non-intrusive display advertising in strict compliance with the Interactive Advertising Bureau (IAB) and FTC disclosure regulations. All sponsored placements are transparently labelled with standardized "Advertisement" indicators. Advertisers exert zero influence over our editorial coverage or investigative assignments.
        </p>

        <AdSlot size="leaderboard" label="Sponsorship Standards" />

        <h2 id="corrections" className="scroll-mt-28 lg:scroll-mt-16 font-serif text-2xl font-bold text-stone-900 dark:text-white pt-4">
          Corrections & Retractions Policy
        </h2>
        <p>
          Accuracy is our paramount standard. When an error occurs, we correct it transparently at the top or bottom of the relevant article, explaining what was altered and when. Readers are invited to report potential inaccuracies directly to our standards editor at corrections@dailypulse.news.
        </p>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'editorial', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6 mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600 block mb-1">
          Newsroom & Inquiries
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
          Contact Us
        </h1>
        <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm">
          Have a breaking news tip, advertising proposal, or feedback for our journalists?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form (7 cols) */}
        <div id="inquiries" className="scroll-mt-28 lg:scroll-mt-16 md:col-span-7 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Cooper"
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@organization.com"
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label htmlFor="inquiry-subject" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Inquiry Department
                </label>
                <select
                  id="inquiry-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="editorial">Confidential News Tip / Pitch</option>
                  <option value="advertising">Display Advertising / Sponsorship</option>
                  <option value="corrections">Fact-Checking & Corrections</option>
                  <option value="press">Press & Media Relations</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  id="inquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide context, references, or verified documentation..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Transmission</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                Message Received
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-2 max-w-sm mx-auto">
                Thank you, {formData.name}. Our assignment desk will review your inquiry within two business hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs text-red-600 hover:underline font-semibold"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* Office Details (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-stone-100 dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 text-xs">
            <h2 className="font-serif font-bold text-base text-stone-900 dark:text-white mb-4">
              Newsroom Bureaus
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-white block">Headquarters:</strong>
                  <span>450 Lexington Avenue, Suite 2100<br />New York, NY 10017</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-white block">Wire Desk:</strong>
                  <span>+1 (212) 555-0199</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-white block">Encrypted Wire:</strong>
                  <span>tips@dailypulse.news (PGP available)</span>
                </div>
              </div>
            </div>
          </div>

          <AdSlot size="rectangle" label="Newsroom Sponsor" />
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6 mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600 block mb-1">
          Transparency & Compliance
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-stone-500 text-xs font-mono">
          Last revised: November 4, 2026 · Effective globally
        </p>
      </div>

      <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          At <strong>{SITE_NAME}</strong>, we respect your fundamental right to digital privacy. This Privacy Policy outlines what minimal information we collect, how it is safeguarded, and how advertising partners operate in compliance with modern data protection standards including the GDPR, CCPA, and CPRA.
        </p>

        <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white pt-2">
          1. Information We Collect
        </h2>
        <p>
          We deliberately minimize telemetry. We do not require account registration to read our journalism. Information collected is limited to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Newsletter Subscriptions:</strong> Your voluntary email address, encrypted in transit.</li>
          <li><strong>Aggregated Diagnostics:</strong> Anonymous pageview metrics to measure server load and article popularity.</li>
          <li><strong>Display Ad Impressions:</strong> Standard non-personally identifiable browser headers required by programmatic ad networks.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white pt-2">
          2. Display Advertising & Cookies
        </h2>
        <p>
          {SITE_NAME} partners with trusted, verified programmatic ad exchanges to deliver contextually relevant advertisements. These networks may utilize pseudonymous cookies or local browser storage to prevent ad fraud and limit frequency. We explicitly prohibit tracking scripts that sell personal identifying information to data brokers.
        </p>

        <AdSlot size="leaderboard" label="Privacy Notice Sponsor" />

        <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white pt-2">
          3. Your Data Rights
        </h2>
        <p>
          Regardless of your physical residency, you possess the right to inspect, download, or permanently purge any newsletter record associated with your email address. You may exercise these rights instantly by emailing privacy@dailypulse.news.
        </p>
      </div>
    </div>
  );
};
