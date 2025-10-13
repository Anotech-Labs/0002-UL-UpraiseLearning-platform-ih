import Sidebar from "@/components/legal/Sidebar";

export default function cookiesPolicy() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <Sidebar />
                <section className="max-w-4xl mx-auto px-4 py-8">
                    {/* Page Header */}
                    <header className="mb-8 border-b pb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Cookie Policy
                        </h1>
                        <p className="text-gray-600">Last Updated: 27 September 2025</p>
                    </header>

                    {/* Introduction Section */}
                    <section id="section-1" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            1. Introduction
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                This Cookie Policy (&quot;Policy&quot;) explains how Anotech India Solutions Pvt. Ltd.
                                operating through its sub-brand &quot;Upraise Learning&quot; (&quot;Upraise&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                                uses cookies and similar tracking technologies on our websites, mobile applications,
                                and related services (collectively, the &quot;Platform&quot;). This Policy should be read
                                alongside our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and
                                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
                            </p>
                            <p>
                                By continuing to use our Platform, you consent to the use of cookies and similar
                                technologies as described in this Policy, unless you disable them through your
                                browser settings or our consent management platform.
                            </p>
                        </div>
                    </section>

                    {/* What Are Cookies Section */}
                    <section id="section-2" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            2. What Are Cookies?
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                Cookies are small text files that are placed on your computer, smartphone, or other
                                device when you visit a website. They are widely used to make websites work efficiently
                                and provide information to the website owners.
                            </p>
                            <div>
                                <h3 className="text-lg font-medium mb-3">Similar Technologies We Use:</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Local Storage:</strong> Stores data locally in your browser for longer periods</li>
                                    <li><strong>Session Storage:</strong> Temporary storage during your browsing session</li>
                                    <li><strong>Pixels/Tags:</strong> Tiny invisible images that track user activity</li>
                                    <li><strong>SDKs:</strong> Software development kits in our mobile apps</li>
                                    <li><strong>Web Beacons:</strong> Electronic files that track browsing behavior</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Types of Cookies Section */}
                    <section id="section-3" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            3. Types of Cookies We Use
                        </h2>

                        {/* Essential Cookies Table */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Essential Cookies (Strictly Necessary)</h3>
                            <p className="text-gray-700 mb-4">
                                These cookies are necessary for the Platform to function and cannot be switched off.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Examples</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Can Be Disabled?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4">User authentication</td>
                                            <td className="py-3 px-4">Session cookies, login security</td>
                                            <td className="py-3 px-4 text-red-600 font-medium">No - required for basic functionality</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Security & fraud prevention</td>
                                            <td className="py-3 px-4">CSRF tokens, security validations</td>
                                            <td className="py-3 px-4 text-red-600 font-medium">No - essential for security</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Shopping cart functionality</td>
                                            <td className="py-3 px-4">Course enrollment, payment processing</td>
                                            <td className="py-3 px-4 text-red-600 font-medium">No - required for transactions</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Privacy preferences</td>
                                            <td className="py-3 px-4">Your cookie consent choices</td>
                                            <td className="py-3 px-4 text-red-600 font-medium">No - needed to remember your settings</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Performance Cookies Table */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Performance Cookies (Analytics)</h3>
                            <p className="text-gray-700 mb-4">
                                These cookies help us understand how visitors interact with our Platform.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Examples</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Providers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4">Website analytics</td>
                                            <td className="py-3 px-4">Page views, bounce rates, traffic sources</td>
                                            <td className="py-3 px-4">Google Analytics, Mixpanel</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Performance monitoring</td>
                                            <td className="py-3 px-4">Load times, error rates, performance issues</td>
                                            <td className="py-3 px-4">New Relic, Sentry</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">A/B testing</td>
                                            <td className="py-3 px-4">Feature testing, user experience optimization</td>
                                            <td className="py-3 px-4">Optimizely, Google Optimize</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Functional Cookies Table */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Functional Cookies</h3>
                            <p className="text-gray-700 mb-4">
                                These cookies enable enhanced functionality and personalization.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Examples</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Can Be Disabled?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4">Personalization</td>
                                            <td className="py-3 px-4">Language preferences, theme settings</td>
                                            <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Remembering choices</td>
                                            <td className="py-3 px-4">Course progress, volume settings</td>
                                            <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Social media integration</td>
                                            <td className="py-3 px-4">Social sharing buttons, embedded content</td>
                                            <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Targeting Cookies Table */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">D. Targeting/Advertising Cookies</h3>
                            <p className="text-gray-700 mb-4">
                                These cookies are used to deliver relevant advertisements and track ad performance.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Examples</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Providers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4">Interest-based advertising</td>
                                            <td className="py-3 px-4">Retargeting, behavioral advertising</td>
                                            <td className="py-3 px-4">Google Ads, Facebook Pixel</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Ad performance measurement</td>
                                            <td className="py-3 px-4">Conversion tracking, campaign analytics</td>
                                            <td className="py-3 px-4">LinkedIn Insight Tag</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Cross-site tracking</td>
                                            <td className="py-3 px-4">User behavior across different websites</td>
                                            <td className="py-3 px-4">Various ad networks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Cookie Duration Section */}
                    <section id="section-4" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            4. Cookie Duration
                        </h2>
                        <div className="text-gray-700 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Session Cookies</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Exist only during your browsing session</li>
                                    <li>Deleted when you close your browser</li>
                                    <li>Used for temporary settings and security</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Persistent Cookies</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Remain on your device for set periods</li>
                                    <li>Duration ranges from 24 hours to 2 years</li>
                                    <li>Used for preferences, analytics, and advertising</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Third-Party Cookies Section */}
                    <section id="section-5" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            5. Third-Party Cookies
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                We work with third-party service providers who may also set cookies when you use our Platform:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Provider</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                            <th className="py-3 px-4 text-left font-medium text-gray-700">Privacy Policy</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Google Analytics</td>
                                            <td className="py-3 px-4">Website analytics</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-blue-600 hover:underline">Google Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Facebook Pixel</td>
                                            <td className="py-3 px-4">Advertising and analytics</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-blue-600 hover:underline">Facebook Data Policy</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">LinkedIn Insight Tag</td>
                                            <td className="py-3 px-4">Professional networking insights</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="text-blue-600 hover:underline">LinkedIn Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Payment Processors</td>
                                            <td className="py-3 px-4">Transaction security</td>
                                            <td className="py-3 px-4">Respective provider policies</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-medium">Customer Support</td>
                                            <td className="py-3 px-4">Service and support functionality</td>
                                            <td className="py-3 px-4">Respective provider policies</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Your Cookie Choices Section */}
                    <section id="section-6" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            6. Your Cookie Choices & Controls
                        </h2>

                        <div className="space-y-8">
                            {/* Browser Controls */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Browser Controls</h3>
                                <p className="text-gray-700 mb-4">
                                    You can control cookies through your web browser settings:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                    <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                    <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                                    <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                                </ul>
                            </div>

                            {/* Mobile App Controls */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Mobile App Controls</h3>
                                <p className="text-gray-700 mb-4">
                                    For our mobile applications, you can manage tracking through:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                    <li><strong>iOS:</strong> Settings → Privacy → Tracking → Allow Apps to Request to Track</li>
                                    <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                                </ul>
                            </div>

                            {/* Specific Opt-Out Links */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Specific Opt-Out Links</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                    <li><strong>Google Analytics:</strong> <a href="#" className="text-blue-600 hover:underline">Google Analytics Opt-Out</a></li>
                                    <li><strong>Facebook:</strong> <a href="#" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
                                    <li><strong>Network Advertising Initiative:</strong> <a href="#" className="text-blue-600 hover:underline">NAI Consumer Opt-Out</a></li>
                                    <li><strong>Digital Advertising Alliance:</strong> <a href="#" className="text-blue-600 hover:underline">DAA Opt-Out</a></li>
                                </ul>
                            </div>

                            {/* Consent Management Platform */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">D. Our Consent Management Platform</h3>
                                <p className="text-gray-700 mb-4">
                                    We provide a cookie consent banner that allows you to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                                    <li>Accept all cookies</li>
                                    <li>Reject non-essential cookies</li>
                                    <li>Customize your preferences by category</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Regional Specific Provisions Section */}
                    <section id="section-7" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            7. Regional Specific Provisions
                        </h2>
                        <div className="text-gray-700 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-2">European Economic Area (EEA) & UK</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>We obtain explicit consent before setting non-essential cookies</li>
                                    <li>You can withdraw consent at any time</li>
                                    <li>We respect &quot;Do Not Track&quot; signals where legally required</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">California, USA</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>We provide notice of cookies used for &quot;cross-context behavioral advertising&quot;</li>
                                    <li>California residents can opt-out of &quot;selling&quot; or &quot;sharing&quot; of personal information</li>
                                    <li>See our Privacy Policy for CCPA/CPRA rights</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">India</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>We comply with the Digital Personal Data Protection Act, 2023</li>
                                    <li>We provide clear information about data processing activities</li>
                                    <li>Users have rights to access, correction, and erasure</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Disable Cookies Section */}
                    <section id="section-8" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            8. What Happens If You Disable Cookies?
                        </h2>
                        <div className="text-gray-700 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Limited functionality if you disable:</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>User login and account access</li>
                                    <li>Course progress saving</li>
                                    <li>Personalized recommendations</li>
                                    <li>Shopping cart and payment processing</li>
                                    <li>Preference remembering</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Fully functional without cookies:</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Browsing course catalogues</li>
                                    <li>Reading blog content</li>
                                    <li>Accessing public information</li>
                                    <li>Contact forms</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Updates Section */}
                    <section id="section-9" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            9. Updates to This Policy
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                We may update this Cookie Policy from time to time. When we make changes, we will:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Update the &quot;Last Updated&quot; date at the top of this Policy</li>
                                <li>Notify users through the Platform or via email for material changes</li>
                                <li>Provide a summary of changes for significant updates</li>
                            </ul>
                            <p>
                                We encourage you to review this Policy periodically to stay informed about our use of cookies.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information Section */}
                    <section id="section-10" className="scroll-mt-20 mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            10. Contact Information
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                            </p>
                            <div className="bg-gray-50 p-4 rounded">
                                <p><strong>Email:</strong> privacy@upraiselearning.com</p>
                                <p><strong>Postal Address:</strong> Anotech India Solutions Pvt. Ltd. (Upraise Learning), Unit-471, 3rd Floor, Sentrum Mall, Srishtinagar, Asansol, West Bengal, India - 713304</p>
                                <p><strong>Attention:</strong> Privacy Officer / Data Protection Officer</p>
                                <p><strong>For general inquiries:</strong> info@upraiselearning.com</p>
                            </div>
                        </div>
                    </section>

                    {/* Quick Reference Section */}
                    <section id="quick-reference" className="scroll-mt-20 mb-10 bg-blue-50 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Quick Reference: Cookie Categories
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-medium text-gray-700">Category</th>
                                        <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                        <th className="py-3 px-4 text-left font-medium text-gray-700">Required?</th>
                                        <th className="py-3 px-4 text-left font-medium text-gray-700">Example</th>
                                        <th className="py-3 px-4 text-left font-medium text-gray-700">Can Block?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-3 px-4 font-medium">Essential</td>
                                        <td className="py-3 px-4">Basic functionality</td>
                                        <td className="py-3 px-4 text-red-600 font-medium">Yes</td>
                                        <td className="py-3 px-4">Login security</td>
                                        <td className="py-3 px-4 text-red-600 font-medium">No</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">Performance</td>
                                        <td className="py-3 px-4">Analytics & improvement</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Optional</td>
                                        <td className="py-3 px-4">Page view tracking</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">Functional</td>
                                        <td className="py-3 px-4">Personalization</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Optional</td>
                                        <td className="py-3 px-4">Language settings</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">Targeting</td>
                                        <td className="py-3 px-4">Advertising</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Optional</td>
                                        <td className="py-3 px-4">Ad retargeting</td>
                                        <td className="py-3 px-4 text-green-600 font-medium">Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Appendix Section */}
                    <section id="appendix" className="scroll-mt-20">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Appendix: Detailed Cookie List
                        </h2>
                        <p className="text-gray-700 mb-6 italic">
                            (Note: This list should be updated regularly as cookies change)
                        </p>

                        <div className="space-y-8">
                            {/* First-Party Cookies */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">First-Party Cookies</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Name</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Duration</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Category</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-3 px-4 font-mono">session_id</td>
                                                <td className="py-3 px-4">User authentication</td>
                                                <td className="py-3 px-4">Session</td>
                                                <td className="py-3 px-4">Essential</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono">user_preferences</td>
                                                <td className="py-3 px-4">UI settings</td>
                                                <td className="py-3 px-4">1 year</td>
                                                <td className="py-3 px-4">Functional</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono">cart_items</td>
                                                <td className="py-3 px-4">Shopping cart</td>
                                                <td className="py-3 px-4">24 hours</td>
                                                <td className="py-3 px-4">Essential</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Cookies</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Name</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Provider</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Purpose</th>
                                                <th className="py-3 px-4 text-left font-medium text-gray-700">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-3 px-4 font-mono">_ga</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Analytics</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono">_gid</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Analytics</td>
                                                <td className="py-3 px-4">24 hours</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono">fr</td>
                                                <td className="py-3 px-4">Facebook Pixel</td>
                                                <td className="py-3 px-4">Advertising</td>
                                                <td className="py-3 px-4">3 months</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono">li_oat</td>
                                                <td className="py-3 px-4">LinkedIn</td>
                                                <td className="py-3 px-4">Analytics</td>
                                                <td className="py-3 px-4">30 days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 mt-6 text-sm">
                            This list is representative and may not include all cookies used. Specific cookies may vary based on your location and feature usage.
                        </p>
                    </section>

                    {/* Footer Note */}
                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            This Cookie Policy is effective as of the last updated date above. Your continued use of the Platform constitutes acceptance of this Policy.
                        </p>
                    </div>
                </section>


            </div>
        </main>
    )
}
