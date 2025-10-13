import Sidebar from "@/components/legal/Sidebar";

const RefundPolicy = () => {
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
                            Refund & Cancellation Policy
                        </h1>
                        <p className="text-gray-600">Version 1.0</p>
                        <p className="text-gray-600">Last Updated: 27 September 2024</p>
                    </header>

                    {/* Sections */}
                    <div className="space-y-10 text-gray-700">
                        {/* 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">
                                1. Strict No-Refund Policy After Enrollment
                            </h2>
                            <p>
                                At Upraise Learning, we maintain a <strong>strict no-refund policy</strong> once a student
                                enrolls in and accesses any course content. By enrolling, you agree to this policy.
                            </p>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                                <p className="font-medium text-red-700">
                                    &quot;No refunds whatsoever after course enrollment and content access, except in
                                    specific circumstances where Upraise Learning is directly responsible for service
                                    interruption.&quot;
                                </p>
                            </div>
                        </section>

                        {/* 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">2. Limited Refund Scenarios</h2>
                            <ul className="space-y-3">
                                <li>
                                    <strong>Scenario 1: Course Cancellation by Upraise Learning</strong>
                                    <ul className="list-disc list-inside ml-4 text-gray-600">
                                        <li>✅ Full refund if we cancel a course before completion</li>
                                        <li>✅ Pro-rated refund if we discontinue after it has started</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Scenario 2: Technical Failure by Upraise Learning</strong>
                                    <ul className="list-disc list-inside ml-4 text-gray-600">
                                        <li>✅ Full refund if access blocked for 7+ consecutive days</li>
                                        <li>✅ Partial refund if outages significantly disrupt learning</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Scenario 3: Material Misrepresentation</strong>
                                    <ul className="list-disc list-inside ml-4 text-gray-600">
                                        <li>✅ Full refund if course differs significantly from advertised</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        {/* 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">3. Non-Refundable Situations</h2>
                            <p className="mb-3">Absolutely NO refunds for:</p>
                            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside ml-4 text-gray-600">
                                <li>Change of mind after enrollment</li>
                                <li>Personal circumstances (time, work, etc.)</li>
                                <li>Dissatisfaction with content/teaching style</li>
                                <li>Failure to complete or achieve outcomes</li>
                                <li>User-side technical issues (internet/device)</li>
                                <li>Partial course completion</li>
                                <li>Similar content found elsewhere</li>
                                <li>Price changes or later promotions</li>
                            </ul>
                        </section>

                        {/* 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">4. Freemium Access (3-Day Cooling-off)</h2>
                            <p>
                                You may preview syllabus and materials for <strong>3 days</strong> before purchase. Once
                                purchased, the no-refund policy immediately applies.
                            </p>
                        </section>

                        {/* 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">5. Course Access & Commitment</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Your Responsibility:</h3>
                                    <ul className="list-disc list-inside ml-4 text-gray-600">
                                        <li>Review course details & prerequisites</li>
                                        <li>Meet technical requirements & internet access</li>
                                        <li>Commit once enrolled</li>
                                        <li>Understand digital content cannot be returned</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Our Commitment:</h3>
                                    <ul className="list-disc list-inside ml-4 text-gray-600">
                                        <li>Accurate descriptions & outcomes</li>
                                        <li>Stable platform & access</li>
                                        <li>Deliver promised content</li>
                                        <li>Technical support from our end</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 6 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">6. How to Request Refund (Eligible Only)</h2>
                            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-600">
                                <li>Verify eligibility (Section 2)</li>
                                <li>
                                    Submit request to &quot; &quot;
                                    <a href="mailto:refunds@upraiselearning.com" className="text-blue-600 hover:underline">
                                        refunds@upraiselearning.com
                                    </a>&quot; &quot;
                                    with:
                                    <ul className="list-disc list-inside ml-6">
                                        <li>Full name & registered email</li>
                                        <li>Course name & enrollment date</li>
                                        <li>Explanation of circumstance</li>
                                        <li>Supporting evidence</li>
                                    </ul>
                                </li>
                                <li>Investigation within 5 business days</li>
                                <li>Approved refunds processed in 10 days (minus fees)</li>
                            </ol>
                        </section>

                        {/* 7 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">7. Subscription Cancellations</h2>
                            <p>
                                <strong>Course Subscriptions:</strong> Cancel anytime to stop renewals. No refunds for current
                                period; access continues until end.
                            </p>
                            <p className="mt-2">
                                <strong>Platform Subscriptions:</strong> Same no-refund rule applies after access.
                            </p>
                        </section>

                        {/* 8 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">8. Technical Issue Resolution</h2>
                            <p>
                                Before refund requests, contact&quot; &quot;
                                <a href="mailto:support@upraiselearning.com" className="text-blue-600 hover:underline">
                                    support@upraiselearning.com
                                </a>&quot; &quot;
                                for assistance. Allow 48 working hours for resolution. Refunds only if platform-side issues remain
                                unresolved.
                            </p>
                        </section>

                        {/* 9 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">9. Legal Compliance</h2>
                            <p>
                                We comply with applicable consumer laws, including India’s&quot; &quot;
                                <strong>Consumer Protection Act, 2019</strong>, while maintaining our no-refund policy.
                            </p>
                        </section>

                        {/* 10 */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">10. Policy Acknowledgement</h2>
                            <p>
                                By enrolling, you confirm that you understand and accept this policy. Chargebacks or disputes for
                                non-refundable cases will not be entertained. Exceptions are at Upraise’s sole discretion.
                            </p>
                        </section>

                        {/* Quick Reference Table */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Quick Reference</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border text-sm text-left border-gray-200">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="px-4 py-2 border">Situation</th>
                                            <th className="px-4 py-2 border">Refund Eligible?</th>
                                            <th className="px-4 py-2 border">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border">Change mind after starting course</td>
                                            <td className="px-4 py-2 border text-red-600">❌ No</td>
                                            <td className="px-4 py-2 border">All sales final</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Course cancelled by Upraise</td>
                                            <td className="px-4 py-2 border text-green-600">✅ Yes</td>
                                            <td className="px-4 py-2 border">Full refund</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Technical issues from our side</td>
                                            <td className="px-4 py-2 border text-green-600">✅ Yes</td>
                                            <td className="px-4 py-2 border">If unresolved for 7+ days</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Personal circumstances</td>
                                            <td className="px-4 py-2 border text-red-600">❌ No</td>
                                            <td className="px-4 py-2 border">Not covered</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">Didn’t like the course</td>
                                            <td className="px-4 py-2 border text-red-600">❌ No</td>
                                            <td className="px-4 py-2 border">Subjective dissatisfaction</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
                            <ul className="space-y-2">
                                <li>
                                    <strong>Refund Requests (Eligible):</strong>&quot; &quot;
                                    <a href="mailto:refunds@upraiselearning.com" className="text-blue-600 hover:underline">
                                        refunds@upraiselearning.com
                                    </a>
                                </li>
                                <li>
                                    <strong>Technical Support:</strong>&quot; &quot;
                                    <a href="mailto:support@upraiselearning.com" className="text-blue-600 hover:underline">
                                        support@upraiselearning.com
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default RefundPolicy;
