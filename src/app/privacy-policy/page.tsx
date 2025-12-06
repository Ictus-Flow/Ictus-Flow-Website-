import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ictus Flow',
  description: 'Privacy Policy for Ictus Flow Consultancy - How we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              Ictus Flow Consultancy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you submit our contact form, we collect:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li>Email address</li>
              <li>Inquiry type (the service you&apos;re interested in)</li>
              <li>Timestamp of submission</li>
              <li>IP address (for security and rate limiting purposes)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
            <p className="text-slate-300 leading-relaxed">
              We may automatically collect certain information about your device, including your browser type,
              operating system, and browsing actions. This information is used for analytics and improving our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send follow-up communications related to your inquiry</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or malicious activity</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Under the General Data Protection Regulation (GDPR), we process your personal data based on:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Consent:</strong> When you submit the contact form, you consent to us processing your data</li>
              <li><strong>Legitimate Interests:</strong> To respond to inquiries and improve our services</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Your Rights Under GDPR</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you are a resident of the European Economic Area (EEA) or United Kingdom, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Right of Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-slate-300 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was
              collected, typically no longer than 2 years from your last interaction with us. After this period,
              your data will be securely deleted unless we are required by law to retain it longer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure hosting,
              and regular security assessments.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              We use essential cookies to remember your cookie preferences. We do not use tracking or advertising
              cookies unless you provide explicit consent. You can manage your cookie preferences at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed">
              We may use third-party services such as email providers and hosting services that may have access
              to your data. These services are bound by contractual obligations to protect your data and only
              process it as instructed by us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. International Transfers</h2>
            <p className="text-slate-300 leading-relaxed">
              If your data is transferred outside the EEA/UK, we ensure appropriate safeguards are in place,
              such as Standard Contractual Clauses approved by the European Commission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your data rights,
              please contact us through our website contact form or by reaching out to our data protection
              point of contact.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">13. Supervisory Authority</h2>
            <p className="text-slate-300 leading-relaxed">
              If you are not satisfied with how we handle your data or your complaint, you have the right to
              lodge a complaint with the Information Commissioner&apos;s Office (ICO) in the United Kingdom or your
              local supervisory authority.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
