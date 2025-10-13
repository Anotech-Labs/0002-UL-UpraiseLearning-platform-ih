import Sidebar from "@/components/legal/Sidebar";

const UserGuidelines = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <section className="max-w-4xl mx-auto px-4 py-8 ">
                    {/* Header */}
                    <header className="mb-8 border-b pb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            User Guidelines
                        </h1>
                        <p className="text-gray-600">Version 1.0</p>
                        <p className="text-gray-600">Last Updated: 27 September 2025</p>
                    </header>

                    {/* Intro */}
                    <section className="mb-10 text-gray-700 space-y-4">
                        <p>
                            We at Upraise Learning strive to ensure that all users—learners, educators, mentors, and community
                            members—enjoy a safe, respectful, and productive environment. Because the Platform is interactive, it
                            is essential that every user helps maintain a space conducive to learning and knowledge-sharing.
                        </p>
                        <p>
                            These Guidelines should be read alongside our Terms of Service and Privacy Policy. Any misuse of the
                            Platform may result in suspension, termination of account, or legal action.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">1. Guidelines for Acts and Content That Are Prohibited</h2>
                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="font-semibold">a) Harmful or Dangerous Content</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Content that promotes violence, self-harm, or dangerous acts is strictly prohibited.</li>
                                    <li>Educational references to sensitive topics are permitted only when they serve a clear learning purpose.</li>
                                    <li>Sale, promotion, or advertisement of illegal/regulated goods is not allowed.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">b) Hateful Content</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>We respect freedom of expression, but hate speech is not tolerated.</li>
                                    <li>
                                        Prohibited content includes inciting hatred against individuals or groups based on race, ethnicity, nationality, caste, religion,
                                        disability, gender, sexual orientation, or age.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">c) Violent and Graphic Content</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>As an educational platform, we do not permit violent, gory, or graphic content except where strictly necessary for academic reference.</li>
                                    <li>Content designed to shock, disturb, or sensationalize is prohibited.</li>
                                    <li>Content promoting terrorism or violent extremism is forbidden.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">d) Harassment and Bullying</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Respect all members of the Platform.</li>
                                    <li>
                                        Harassment includes abusive language, sexual harassment, threats, doxxing (sharing private info), or content intended to humiliate.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">e) Spam and Misuse of Platform</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Posting repetitive, irrelevant, or misleading content is not allowed.</li>
                                    <li>Driving traffic to unauthorized third-party sites, phishing links, or malware distribution is prohibited.</li>
                                    <li>Automated systems (bots, scrapers, spamming tools) must not be used.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">f) Misleading Metadata</h3>
                                <p className="ml-4">Misuse of titles, tags, thumbnails, or descriptions to trick learners is strictly prohibited.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold">g) Scams and Fraud</h3>
                                <p className="ml-4">Any content intended to deceive, extort, or obtain personal/financial information under false pretenses is banned.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold">h) Copyright Violations</h3>
                                <p className="ml-4">
                                    Respect the intellectual property rights of others. Do not upload copyrighted material without permission. See our Copyright
                                    Policy (part of Terms of Service).
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">i) Privacy Violations</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Do not post personal data (yours or others&apos;) without consent.</li>
                                    <li>If you encounter a privacy breach, please report it immediately.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold">j) Impersonation</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Pretending to be another individual, organization, or brand is prohibited.</li>
                                    <li>Misuse of logos, certificates, or credentials is considered impersonation and may also infringe trademark law.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">k) Interactions with Upraise Staff</h3>
                                <p className="ml-4">
                                    We encourage open communication with Upraise employees. However, any abusive, hateful, or sexually suggestive communication with
                                    staff will not be tolerated.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">2. Reporting Tools</h2>
                        <p className="mb-3">We provide in-platform reporting tools to help maintain safety. You may report:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700 mb-3">
                            <li>Inappropriate or prohibited content,</li>
                            <li>Spam or scams,</li>
                            <li>Harassment or bullying,</li>
                            <li>Privacy or IP rights violations.</li>
                        </ul>
                        <p className="mb-2">When reporting, please:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700">
                            <li>Be certain the content violates these Guidelines,</li>
                            <li>Avoid false or malicious complaints,</li>
                            <li>Provide as much detail as possible.</li>
                        </ul>
                        <p className="mt-4">
                            You may also write to&quot; &quot;
                            <a href="mailto:info@upraiselearning.com" className="text-blue-600 hover:underline">
                                info@upraiselearning.com
                            </a>&quot; &quot;
                            for additional support.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Tips: Do&apos;s and Don&apos;ts</h2>
                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="font-semibold">A) Keeping Yourself & Your Account Safe</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Never share your login credentials.</li>
                                    <li>Use strong passwords: at least 8 characters, mix of letters, numbers, and symbols.</li>
                                    <li>Log out of shared/public devices.</li>
                                    <li>Do not share personal details with strangers you meet online.</li>
                                    <li>Users under 18 must have parental/guardian consent to use the Platform.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">B) Reporting Content</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Report impersonation, IP infringement, harassment, or privacy violations.</li>
                                    <li>Trademark/copyright owners may submit formal complaints with supporting evidence.</li>
                                    <li>Before reporting, attempt direct resolution with the other user if safe to do so.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">C) Posting Content</h3>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Ensure all information is factually accurate and does not infringe third-party rights.</li>
                                    <li>Do not disclose personal details in public posts or videos.</li>
                                    <li>Avoid any content that could be construed as harassment, hate speech, or bullying.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default UserGuidelines;
