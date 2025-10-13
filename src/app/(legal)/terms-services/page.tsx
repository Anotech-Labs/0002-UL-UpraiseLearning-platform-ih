import Sidebar from "@/components/legal/Sidebar";

const TermsOfService = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <Sidebar />
                <section className="max-w-4xl mx-auto px-4 py-8">
                    {/* Page Header */}
                    <header className="mb-8 border-b pb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Enhanced Terms of Service
                        </h1>
                        <p className="text-gray-600">Version 1.2</p>
                        <p className="text-gray-600">Last Updated: 27 September 2024</p>
                    </header>

                    {/* Quick Reference Section */}
                    <section className="mb-10 bg-blue-50 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Quick Reference: Key Terms
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Before you use Upraise Learning, here are the most important points:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Age Requirement:</strong> You must be 18+ to create an account (13-17 with parental supervision)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Account Responsibility:</strong> You&apos;re responsible for all activity under your account</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Content Ownership:</strong> You own your content; we get a license to host and display it</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Payment Terms:</strong> Subscriptions auto-renew unless cancelled before renewal</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Usage Rules:</strong> No copying, recording, or commercial use of course content</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Liability Limit:</strong> Our liability is limited to fees you paid in last 3 months</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 mr-2">✅</span>
                                <span><strong>Changes:</strong> We may update these Terms; continued use means acceptance</span>
                            </li>
                        </ul>
                    </section>

                    {/* Table of Contents */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Table of Contents</h2>
                        <div className="grid md:grid-cols-2 gap-2 text-blue-600">
                            {[
                                "About Upraise Learning and Acceptance of Terms",
                                "Platform Services and Our Role",
                                "Account Registration and Security",
                                "Subscription Terms and Access",
                                "Pricing, Payments, and Refunds",
                                "Permitted Use of the Platform",
                                "Content Standards and Conduct Rules",
                                "Communications Preferences",
                                "Privacy and Data Protection",
                                "Intellectual Property Rights",
                                "User Feedback",
                                "Copyright Protection (DMCA-style)",
                                "Content Moderation",
                                "Our Rights and Responsibilities",
                                "Platform Availability",
                                "Account Deletion and Data Retention",
                                "Disclaimer of Warranties",
                                "Limitation of Liability",
                                "Indemnification",
                                "Termination",
                                "International Compliance (OFAC)",
                                "California User Rights",
                                "Dispute Resolution Process",
                                "Governing Law and Jurisdiction",
                                "General Provisions",
                                "Contact Information",
                                "Grievance Redressal"
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#section-${index + 1}`}
                                    className="hover:underline hover:text-blue-800"
                                >
                                    {index + 1}. {item}
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Enhanced Sections */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <section id="section-1" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                1. About Upraise Learning and Acceptance of Terms
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of websites,
                                    mobile applications, and services operated by Anotech India Solutions Pvt. Ltd.,
                                    acting through its sub-brand &quot;Upraise Learning&quot; (&quot;Upraise,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;)
                                    (collectively, the &quot;Platform&quot;).
                                </p>
                                <p>
                                    By using the Platform, you agree to these Terms and all incorporated policies
                                    (<a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>,
                                    <a href="#" className="text-blue-600 hover:underline">Cookie Policy</a>,
                                    <a href="#" className="text-blue-600 hover:underline">Refund Policy</a>).
                                    If you disagree with any part, please do not use the Platform.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id="section-2" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                2. Platform Services and Our Role
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    Upraise is an online learning platform enabling educators/content providers to create
                                    and deliver courses, live/recorded classes, assessments, mentorship, and community forums,
                                    and enabling learners to discover, enroll, and participate in such content (&quot;Services&quot;).
                                </p>
                                <p>
                                    Upraise acts as an intermediary between content providers and learners. Except for
                                    Upraise-owned materials, user-generated content is the responsibility of its uploader.
                                </p>
                                <p>
                                    We may alter, suspend, or discontinue any Service, feature, or content at any time.
                                </p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="section-3" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                3. Account Registration and Security
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Eligibility:</strong> You must meet the digital consent age in your jurisdiction
                                    (generally 18 years in India; 16 in EU; 13 in US/UK with verified parental consent).
                                    Users under 18 may access only under parent/guardian supervision.
                                </p>
                                <p>
                                    <strong>Account Security:</strong> You must:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide accurate, complete registration information</li>
                                    <li>Maintain a strong, unique password</li>
                                    <li>Notify us immediately of unauthorized account use at support@upraiselearning.com</li>
                                    <li>Accept responsibility for all activities under your account</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="section-4" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                4. Subscription Terms and Access
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    Registration is free; some Services require paid subscriptions or purchases (&quot;Subscription(s)&quot;).
                                </p>
                                <p>
                                    Benefits, scope, and Subscription Period vary by plan; please review plan details before purchase.
                                </p>
                                <p>
                                    Subscriptions are personal and may not be resold, transferred, or shared.
                                </p>
                                <p>
                                    Access to live sessions, recordings, and in-app downloads may be time-limited and
                                    subject to device/account restrictions.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section id="section-5" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                5. Pricing, Payments, and Refunds
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Currency:</strong> All prices are listed in Indian Rupees (₹) unless otherwise specified.
                                    International users may incur currency conversion fees.
                                </p>
                                <p>
                                    <strong>Payment Security:</strong> Payments are processed through PCI-DSS compliant third-party
                                    gateways. We do not store your full payment card details.
                                </p>
                                <p>
                                    <strong>Auto-renewal:</strong> You can manage auto-renewal settings in your account dashboard.
                                    Cancellation must occur at least 24 hours before renewal.
                                </p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id="section-6" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                6. Permitted Use of the Platform
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    We grant you a limited, revocable, non-exclusive, non-transferable license to access
                                    the Platform for personal, non-commercial educational purposes.
                                </p>
                                <p>
                                    <strong>Prohibited Activities Include:</strong>
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Recording, streaming, or redistributing course content</li>
                                    <li>Reverse engineering or circumventing security measures</li>
                                    <li>Using automated systems that burden our infrastructure</li>
                                    <li>Commercial use without express written permission</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section id="section-7" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                7. Content Standards and Conduct Rules
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    You are solely responsible for content you submit or publish (&quot;User-Generated Content&quot;).
                                    Do not post anything illegal, infringing, harmful, obscene, defamatory, misleading,
                                    or violative of privacy/children&apos;s safety laws.
                                </p>
                                <p>
                                    No screen-recording, re-streaming, public display, sale, or distribution of course content.
                                </p>
                                <p>
                                    <strong>Academic integrity:</strong> no cheating, plagiarism, or unauthorized sharing
                                    of assessments/answers.
                                </p>
                                <p>
                                    We may remove content or suspend accounts for violations.
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section id="section-8" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                8. Communications Preferences
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    By using the Platform, you consent to receive communications via email/SMS/phone/WhatsApp/in-app
                                    for service, security, and transactional purposes. You may opt out of promotional messages,
                                    but we may still send transactional/legal notices.
                                </p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section id="section-9" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                9. Privacy and Data Protection
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    Our handling of personal data is described in the Privacy Policy (collection, use, legal bases,
                                    sharing, cross-border transfers, rights, and security). The Privacy Policy forms part of these Terms.
                                </p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section id="section-10" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                10. Intellectual Property Rights
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Your Content:</strong> You retain ownership of User-Generated Content. By uploading,
                                    you grant Upraise a worldwide, royalty-free license to host, display, and adapt your content
                                    for Platform operations.
                                </p>
                                <p>
                                    <strong>Our Content:</strong> Platform design, software, trademarks, and original content are
                                    protected by intellectual property laws. No rights are granted except as expressly stated herein.
                                </p>
                                <p>
                                    <strong>Moral Rights Waiver:</strong> To the extent permitted by law, you waive any moral rights
                                    in your User-Generated Content.
                                </p>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section id="section-11" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                11. User Feedback
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    If you submit ideas or suggestions (&quot;Feedback&quot;), you grant Upraise a perpetual, irrevocable,
                                    royalty-free license to use them without obligation or attribution.
                                </p>
                            </div>
                        </section>

                        {/* Section 12 */}
                        <section id="section-12" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                12. Copyright Protection (DMCA-style)
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    To report copyright infringement, email copyright@upraiselearning.com with:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Your contact information and signature</li>
                                    <li>Description of copyrighted work</li>
                                    <li>URL of infringing material</li>
                                    <li>Good faith belief statement</li>
                                    <li>Verification under penalty of perjury</li>
                                </ul>
                                <p>
                                    We respond to valid notices per applicable law.
                                </p>
                            </div>
                        </section>

                        {/* Section 13 */}
                        <section id="section-13" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                13. Content Moderation
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    We do not pre-screen User-Generated Content and are not responsible for it. We may remove or
                                    restrict content that appears unlawful, infringing, or violative of these Terms.
                                </p>
                            </div>
                        </section>

                        {/* Section 14 */}
                        <section id="section-14" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                14. Our Rights and Responsibilities
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>We may, at our discretion:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Modify, suspend, or terminate Services</li>
                                    <li>Remove content or restrict access</li>
                                    <li>Suspend/terminate accounts for violations or legal reasons</li>
                                    <li>Access accounts/content for support, security, legal compliance, or to enforce these Terms</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 15 */}
                        <section id="section-15" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                15. Platform Availability
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    The Platform may be unavailable due to maintenance, upgrades, or outages. We aim to minimize
                                    disruptions but are not liable for downtime or data loss.
                                </p>
                            </div>
                        </section>

                        {/* Section 16 */}
                        <section id="section-16" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                16. Account Deletion and Data Retention
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Deletion Process:</strong> Request via account settings or email to support@upraiselearning.com.
                                    Processing occurs within 30 days.
                                </p>
                                <p>
                                    <strong>Data Retention:</strong> We retain certain records as required by law (e.g., financial
                                    transactions for 7 years, academic records as needed). Public content may be anonymized.
                                </p>
                            </div>
                        </section>

                        {/* Section 17 */}
                        <section id="section-17" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                17. Disclaimer of Warranties
                            </h2>
                            <div className="text-gray-700 space-y-4 bg-red-50 p-4 rounded">
                                <p className="font-semibold">
                                    THE PLATFORM AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                                    EXPRESS OR IMPLIED, INCLUDING ACCURACY, RELIABILITY, AVAILABILITY, NON-INFRINGEMENT, OR FITNESS
                                    FOR A PARTICULAR PURPOSE. YOU USE THE PLATFORM AT YOUR OWN RISK.
                                </p>
                            </div>
                        </section>

                        {/* Section 18 */}
                        <section id="section-18" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                18. Limitation of Liability
                            </h2>
                            <div className="text-gray-700 space-y-4 bg-red-50 p-4 rounded">
                                <p className="font-semibold">
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, ANOTECH INDIA SOLUTIONS PVT. LTD. (SUB-BRAND: UPRAISE LEARNING),
                                    ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                                    CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS; OR SERVICE
                                    INTERRUPTIONS—EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE
                                    SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE SERVICE AT ISSUE IN THE THREE (3) MONTHS
                                    PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                                </p>
                            </div>
                        </section>

                        {/* Section 19 */}
                        <section id="section-19" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                19. Indemnification
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    You agree to defend, indemnify, and hold harmless Upraise/Anotech and its officers, directors, employees,
                                    and agents from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees)
                                    arising out of your: (i) use of the Platform; (ii) violation of these Terms; (iii) infringement or violation
                                    of any law or third-party rights; or (iv) User-Generated Content.
                                </p>
                            </div>
                        </section>

                        {/* Section 20 */}
                        <section id="section-20" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                20. International Compliance (OFAC)
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    You represent you are not subject to sanctions or listed by the U.S. Office of Foreign Assets Control (OFAC)
                                    or similar sanctions regimes and will not use the Platform in violation of such sanctions.
                                </p>
                            </div>
                        </section>

                        {/* Section 21 */}
                        <section id="section-21" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                21. California User Rights
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    California users may contact the Department of Consumer Affairs, Consumer Information Division,
                                    1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or (800) 952-5210 or dca@dca.ca.gov.
                                </p>
                            </div>
                        </section>

                        {/* Section 22 */}
                        <section id="section-22" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                22. Governing Law and Jurisdiction
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    These Terms are governed by the laws of India. You agree to the exclusive jurisdiction of the courts
                                    at Asansol, West Bengal, India for all disputes arising out of or relating to these Terms or the Platform.
                                </p>
                            </div>
                        </section>

                        {/* Section 23 */}
                        <section id="section-23" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                23. Termination
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>We may suspend or terminate your account immediately for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Material breach of these Terms</li>
                                    <li>Illegal or fraudulent activity</li>
                                    <li>Non-payment of fees</li>
                                    <li>Actions that endanger other users or the Platform</li>
                                </ul>
                                <p><strong>Upon termination:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All license rights immediately cease</li>
                                    <li>You must cease all use of the Platform</li>
                                    <li>Provisions that should survive termination will remain in effect</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 24 */}
                        <section id="section-24" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                24. Dispute Resolution Process
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Step 1 – Informal Resolution:</strong> Attempt to resolve disputes informally by contacting
                                    support@upraiselearning.com. Both parties agree to negotiate in good faith for 30 days.
                                </p>
                                <p>
                                    <strong>Step 2 – Formal Proceedings:</strong> If unresolved, you may pursue formal proceedings as per Section 24.
                                </p>
                                <p>
                                    <strong>Class Action Waiver:</strong> You agree to resolve disputes individually, not as class actions
                                    or representative proceedings.
                                </p>
                            </div>
                        </section>

                        {/* Section 25 */}
                        <section id="section-25" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                25. General Provisions
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    <strong>Entire Agreement:</strong> These Terms constitute the complete agreement between you and Upraise
                                    regarding the Platform, superseding all prior agreements.
                                </p>
                                <p>
                                    <strong>Severability:</strong> If any provision is invalid, the remainder remains enforceable.
                                </p>
                                <p>
                                    <strong>Force Majeure:</strong> We&apos;re not liable for delays due to events beyond our reasonable control.
                                </p>
                                <p>
                                    <strong>Assignment:</strong> We may transfer these Terms to affiliates or successors. You may not transfer
                                    without our written consent.
                                </p>
                            </div>
                        </section>

                        {/* Section 26-27 */}
                        <section id="section-26" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                26-27. Contact Information & Grievance Redressal
                            </h2>
                            <div className="text-gray-700 space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Dedicated Contact Channels:</h3>
                                    <ul className="space-y-1">
                                        <li><strong>General Support:</strong> support@upraiselearning.com</li>
                                        <li><strong>Privacy/Legal:</strong> privacy@upraiselearning.com</li>
                                        <li><strong>Copyright Issues:</strong> copyright@upraiselearning.com</li>
                                        <li><strong>Billing/Payments:</strong> billing@upraiselearning.com</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Grievance Officer:</h3>
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p><strong>Shivam Kumar</strong></p>
                                        <p>Email: privacy@upraiselearning.com</p>
                                        <p>Address: Unit-471, 3rd Floor, Sentrum Mall, Srishtinagar, Asansol, West Bengal, India - 713304</p>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Include your registered email and clear issue description for faster resolution.
                                </p>
                            </div>
                        </section>

                        {/* Additional Recommended Sections */}
                        <section id="additional" className="scroll-mt-20">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Additional Recommended Sections
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Educational Specific Disclosures</h3>
                                    <div className="text-gray-700 space-y-3">
                                        <p>
                                            <strong>Certificate Authenticity:</strong> Certificates indicate course completion
                                            but don&apos;t imply accreditation unless specifically stated. We verify certificate
                                            authenticity upon request.
                                        </p>
                                        <p>
                                            <strong>Academic Integrity:</strong> We maintain academic integrity through proctoring,
                                            plagiarism detection, and code of conduct enforcement. Violations may result in
                                            certificate revocation.
                                        </p>
                                        <p>
                                            <strong>Instructor Qualifications:</strong> Instructors are responsible for accurately
                                            representing their qualifications. We verify credentials for Upraise-originated
                                            content only.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TermsOfService;