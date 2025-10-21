"use client";

import Sidebar from "@/components/legal/Sidebar";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 py-8">
                    {/* Page Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                        <p className="text-gray-600">Last Updated: 27 September 2024</p>
                    </header>

                    {/* Introduction Section */}
                    <section className="mb-10">
                        <p className="text-gray-700 mb-4">
                            This Privacy Policy (&quot;Policy&quot;) explains how Anotech India Solutions Pvt. Ltd. operating through its sub-brand &quot;Upraise Learning&quot; (&quot;Upraise&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares, and protects your personal information in compliance with applicable data protection laws when you use our websites, mobile apps, and related services (the &quot;Platform&quot;).
                        </p>
                        <p className="text-gray-700">
                            By accessing or using the Platform, or by otherwise indicating consent where presented, you agree to this Policy and our Platform Terms (including our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>, <a href="#" className="text-blue-600 hover:underline">Cookie Policy</a>, and <a href="#" className="text-blue-600 hover:underline">Refund Policy</a>).
                        </p>
                    </section>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {/* Section A */}
                        <section id="section-a">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">A. General Privacy Terms</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    If you disagree with any part of this Policy, please do not use the Platform. You may access, correct, or delete your Personal Information as described in Sections L and M.
                                </p>
                            </div>
                        </section>

                        {/* Section B */}
                        <section id="section-b">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">B. Applicability</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    This Policy applies to all users of the Platform—learners, trainers/content providers, mentors, and visitors. Other brands owned by Anotech may publish their own privacy policies; this Policy applies specifically to Upraise Learning.
                                </p>
                                <p>
                                    We use reasonable and industry-standard safeguards and comply with applicable law to protect Personal Information from unauthorized access, disclosure, alteration, and destruction.
                                </p>
                            </div>
                        </section>

                        {/* Section C */}
                        <section id="section-c">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">C. Access</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    You may browse certain areas of the Platform without creating an account. Some features require registration and submission of Personal Information. We may also maintain records of communications (emails, support calls/chats) to deliver and improve services.
                                </p>
                            </div>
                        </section>

                        {/* Section D */}
                        <section id="section-d">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">D. Use of the Platform/Services by Children (Revised)</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    The Platform is not directed to children under the age of 13. To register, you must meet the age of majority under applicable law (generally 18 years in India). Users between 13-17 years may access the Platform only under a parent/guardian`&apos;s account and supervision, where permitted by local law.
                                </p>
                                <p>
                                    If you believe a child under 13 has provided Personal Information without proper consent, please contact us at <a href="mailto:privacy@upraiselearning.com" className="text-blue-600 hover:underline">privacy@upraiselearning.com</a>; we will promptly delete such data where required by law.
                                </p>
                            </div>
                        </section>

                        {/* Section E */}
                        <section id="section-e">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">E. Data Controller</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    For all processing described in this Policy, the data controller is:
                                </p>
                                <address className="not-italic bg-gray-50 p-4 rounded">
                                    Anotech India Solutions Pvt. Ltd. (operating through its sub-brand &quot;Upraise Learning&quot;)<br />
                                    [Registered Office Address]<br />
                                    [Corporate Identification Number, if desired]
                                </address>
                            </div>
                        </section>

                        {/* Continue with the remaining sections following the same pattern */}

                        {/* Quick Reference Table */}
                        <section id="quick-reference">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Reference Summary Table</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Data Practice</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Our Commitment</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Data Collection</td>
                                            <td className="py-3 px-4">Only what`&apos;s necessary for service delivery and improvement</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Data Sharing</td>
                                            <td className="py-3 px-4">Only with essential service providers; never sold for monetary value</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">International Transfers</td>
                                            <td className="py-3 px-4">With appropriate safeguards where required by law</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Data Retention</td>
                                            <td className="py-3 px-4">Only as long as necessary for legal and business purposes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Your Rights</td>
                                            <td className="py-3 px-4">Access, correction, deletion, portability, and objection rights</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Security</td>
                                            <td className="py-3 px-4">Industry-standard technical and organizational measures</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Children`&apos;s Privacy</td>
                                            <td className="py-3 px-4">Not directed to children under 13; parental consent required for 13-17</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section id="contact">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>For support: <a href="mailto:info@upraiselearning.com" className="text-blue-600 hover:underline">info@upraiselearning.com</a></p>
                                <address className="not-italic bg-gray-50 p-4 rounded">
                                    Anotech India Solutions Pvt. Ltd. (Upraise Learning)<br />
                                    Unit-471, 3rd Floor, Sentrum Mall, Srishtinagar, Asansol<br />
                                    West Bengal, India - 713304
                                </address>
                                <p>We strive to respond to all privacy inquiries within 3-5 business days.</p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </main>
    );
}
