"use client";

import Sidebar from "@/components/legal/Sidebar";

const ContactUsPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="mb-8 border-b pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              📞 Contact Us Policy
            </h1>
            <p className="text-gray-600">Version 1.0</p>
            <p className="text-gray-600">Last Updated: 15 October 2025</p>
          </header>

          {/* Introduction */}
          <section className="mb-10 text-gray-700 space-y-4">
            <p>
              At <strong>Upraise Learning</strong> (a sub-brand of{" "}
              <strong>Anotech India Solutions Pvt. Ltd.</strong>), we value
              every learner, educator, and partner who interacts with our
              platform. This Contact Us Policy explains how you can reach us,
              what types of queries we handle, and how we manage communications
              to ensure quick and effective resolutions.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
            <p className="mb-3">
              The purpose of this policy is to provide clarity on how users can
              communicate with the Upraise Learning team regarding:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>General inquiries about our courses, programs, or partnerships</li>
              <li>Technical support or account assistance</li>
              <li>Payment or billing-related queries</li>
              <li>Feedback, suggestions, or complaints</li>
              <li>Privacy, legal, or policy-related concerns</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Contact Channels</h2>
            <p className="mb-4">
              You can reach us through the following official channels only:
            </p>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">📧 Email</h3>
                <p>
                  <a
                    href="mailto:info@upraiselearning.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@upraiselearning.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  For: General queries, technical issues, course support, and
                  billing inquiries.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">📩 Support Portal (if applicable)</h3>
                <p>
                  <a
                    href="https://www.upraiselearning.com/support"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.upraiselearning.com/support
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  For: Reporting issues, submitting support tickets, or tracking
                  complaint status.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">🏢 Registered Office</h3>
                <p>
                  Upraise Learning (Anotech India Solutions Pvt. Ltd.) <br />
                  Unit-471, 3rd Floor, Sentrum Mall, Srishtinagar, Asansol, <br />
                  District – Paschim Bardhaman, State – West Bengal, India – 713304
                </p>
              </div>

              <div>
                <h3 className="font-semibold">👤 Grievance Officer</h3>
                <p>
                  <strong>Name:</strong> Shivam Kumar <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@upraiselearning.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@upraiselearning.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  For: Legal notices, data protection, or privacy-related
                  complaints.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Response Timeline</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>24–48 business hours for general and support inquiries</li>
              <li>Up to 7 working days for billing, legal, or privacy-related matters</li>
              <li>
                If your query requires additional verification or involves
                third-party platforms (e.g., payment gateways), resolution
                timelines may vary accordingly.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="mb-3">To help us resolve your query efficiently, please ensure:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>
                You provide accurate details (name, registered email, contact
                number, transaction ID, etc.)
              </li>
              <li>Your communication is respectful, concise, and specific</li>
              <li>
                You avoid sharing sensitive personal information (like passwords,
                OTPs, or payment details) over email or chat
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Data & Communication Records</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>
                All communications with Upraise Learning (email, chat, or phone)
                may be logged and stored securely for quality, training, and
                legal compliance purposes.
              </li>
              <li>
                Communications may be used for verification or investigation in
                case of any dispute or grievance.
              </li>
              <li>
                We handle all personal information in compliance with our{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              6. Unofficial Communication Disclaimer
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>
                We do not entertain or acknowledge queries or promises made
                through unverified social media profiles, personal numbers, or
                WhatsApp chats.
              </li>
              <li>
                Individuals claiming to represent Upraise Learning without
                formal authorization are not recognized.
              </li>
              <li>
                Always communicate through our official email or registered
                address to ensure authenticity and resolution.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              7. Policy Review & Updates
            </h2>
            <p className="text-gray-700">
              This policy may be updated periodically to reflect improvements in
              our communication process. Any changes will be published on our
              official website, and the “Last Updated” date will be revised
              accordingly.
            </p>
          </section>

          {/* Summary */}
          <section className="border-t pt-6 mt-10 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">🧩 Summary</h2>
            <p>
              By contacting us, you agree that all communication will be handled
              as per this Contact Us Policy, and that Upraise Learning reserves
              the right to verify identity and maintain necessary records for
              compliance and support quality.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ContactUsPolicy;