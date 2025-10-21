"use client";

import Sidebar from "@/components/legal/Sidebar";

const DeliveryPolicyPage = () => {
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
              🚚 Delivery Policy
            </h1>
            <p className="text-gray-600">Version 1.0</p>
            <p className="text-gray-600">Last Updated: 27 September 2025</p>
          </header>

          {/* Introduction */}
          <section className="mb-10 text-gray-700 space-y-4">
            <p>
              At <strong>Upraise Learning</strong> (a sub-brand of{" "}
              <strong>Anotech India Solutions Pvt. Ltd.</strong>), we aim to
              ensure a transparent, reliable, and efficient process for the
              delivery of both our digital and physical products. This Delivery
              Policy outlines how we manage order fulfillment, timelines, and
              user responsibilities.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
            <p className="text-gray-700">
              The purpose of this policy is to clarify how Upraise Learning
              delivers its products and services, including courses, study
              materials, and merchandise, while ensuring fairness and
              transparency in the delivery process.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              2. Physical Deliveries (Shipping Policy)
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">📦 Scope</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Course completion kits (certificates, T-shirts, mugs, etc.)</li>
                  <li>Printed learning materials</li>
                  <li>Official merchandise and promotional items</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">⏱ Processing & Shipping Timeline</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Orders are processed within 7–10 business days of confirmation or eligibility.
                  </li>
                  <li>
                    Delivery typically takes 5–12 business days post dispatch,
                    depending on the destination and courier partner.
                  </li>
                  <li>Tracking details are shared via email or SMS when available.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">💰 Shipping Charges</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Free shipping within India unless otherwise specified.</li>
                  <li>
                    International shipments may attract courier/customs charges
                    communicated prior to dispatch.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">📍 Delivery Area</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Deliveries are available across India via verified couriers.</li>
                  <li>International shipping is subject to feasibility and extra cost.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">🚪 Delivery Attempts & Re-Dispatch</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Couriers usually attempt delivery twice.</li>
                  <li>
                    If returned due to unavailability or incorrect address, re-dispatch
                    charges will apply.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">⚠️ Incorrect Address or Failed Delivery</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Customers must provide complete and accurate delivery details.</li>
                  <li>
                    Upraise Learning is not responsible for loss/delay due to incorrect
                    addresses.
                  </li>
                  <li>Re-delivery may require additional courier charges.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">📸 Damaged or Missing Items</h3>
                <p className="mb-2">
                  Report damaged, defective, or missing items within{" "}
                  <strong>48 hours</strong> of delivery by emailing{" "}
                  <a
                    href="mailto:info@upraiselearning.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@upraiselearning.com
                  </a>{" "}
                  with:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Order ID</li>
                  <li>Clear photos or videos of packaging and items</li>
                </ul>
                <p className="mt-2">
                  After verification, replacements (not refunds) may be issued at our discretion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">📜 Ownership & Risk</h3>
                <p>
                  Ownership and risk transfer to the customer upon confirmed
                  delivery. Upraise Learning is not responsible for theft or loss
                  post-delivery.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              3. Digital Deliveries (Online Products & Services)
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">💻 Scope</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Online courses and recorded sessions</li>
                  <li>Downloadable materials like PDFs and e-books</li>
                  <li>Digital certificates and badges</li>
                  <li>Access to online modules and dashboards</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">🔗 Mode of Delivery</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Through your user dashboard on our platform</li>
                  <li>Email with access links</li>
                  <li>Third-party integrations (if applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">⏳ Delivery Timeline</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access is usually instant after successful payment.</li>
                  <li>In rare cases, it may take 24–48 hours for verification.</li>
                  <li>
                    If not received within 48 hours, email{" "}
                    <a
                      href="mailto:info@upraiselearning.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@upraiselearning.com
                    </a>
                    .
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">🔐 Access Responsibility</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Keep your login credentials confidential.</li>
                  <li>Access is personal and non-transferable.</li>
                  <li>Sharing account details violates our Terms of Service.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">🚫 Failed Delivery or Access Issues</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Invalid or inactive email address</li>
                  <li>Emails marked as spam or blocked</li>
                  <li>Internet or login issues</li>
                </ul>
                <p className="mt-2">
                  Report such cases within <strong>72 hours</strong> for assistance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">💳 Refund Restriction</h3>
                <p>
                  All digital products are <strong>non-refundable</strong> and{" "}
                  <strong>non-cancellable</strong>. Refunds are only processed for
                  verified duplicate payments or technical issues as per our{" "}
                  <a href="/refund-policy" className="text-blue-600 hover:underline">
                    Refund Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold">🧠 Data Protection & Usage Monitoring</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Platform activity may be monitored (IP, device, login) to
                    prevent misuse or piracy.
                  </li>
                  <li>
                    Unauthorized recording, sharing, or reproduction is a violation
                    of our copyright terms.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Contact for Delivery Assistance</h2>
            <p className="text-gray-700">
              <strong>Upraise Learning (Anotech India Solutions Pvt. Ltd.)</strong>
              <br />
              Unit-471, 3rd Floor, Sentrum Mall, Srishtinagar, Asansol, <br />
              District – Paschim Bardhaman, West Bengal, India – 713304
              <br />
              📧{" "}
              <a
                href="mailto:info@upraiselearning.com"
                className="text-blue-600 hover:underline"
              >
                info@upraiselearning.com
              </a>
              <br />
              👤 Grievance Officer: Shivam Kumar
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Policy Review & Updates</h2>
            <p className="text-gray-700">
              This policy may be reviewed and updated periodically to reflect
              operational improvements. Any updates will be posted on our official
              website with a revised “Last Updated” date.
            </p>
          </section>

          {/* Summary */}
          <section className="border-t pt-6 mt-10 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">🧩 Summary</h2>
            <p>
              By purchasing or subscribing through our platform, you agree to the
              terms outlined in this Delivery Policy. Upraise Learning reserves the
              right to verify identity, maintain records, and modify delivery terms
              as required for compliance and service improvement.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
};

export default DeliveryPolicyPage;
