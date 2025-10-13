"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Upraise Learning?",
    answer: "Upraise Learning is an online learning platform offering courses in Python, JavaScript, SQL, Digital Marketing, and Sales. It focuses on hands-on learning and career-ready skills.",
    category: "General"
  },
  {
    id: 2,
    question: "Who can join Upraise Learning courses?",
    answer: "Students, professionals, and beginners can join. Courses are designed for all levels and help learners upskill online for better career opportunities.",
    category: "General"
  },
  {
    id: 3,
    question: "Are Upraise Learning courses beginner-friendly?",
    answer: "Yes, all courses — including Python, JavaScript, SQL, Marketing, and Sales — start from basics and gradually progress to advanced topics.",
    category: "Courses"
  },
  {
    id: 4,
    question: "Do I get a certificate after completing a course?",
    answer: "Yes, every course provides an industry-recognized certificate, which can be added to your resume or LinkedIn profile.",
    category: "Certificates"
  },
  {
    id: 5,
    question: "Are the courses practical or only theoretical?",
    answer: "Courses are project-based and hands-on, ensuring learners gain real-world experience in coding, marketing, or sales.",
    category: "Courses"
  },
  {
    id: 6,
    question: "How long does it take to complete a course?",
    answer: "Most courses are self-paced and can be completed in 4–8 weeks, depending on your learning speed.",
    category: "Courses"
  },
  {
    id: 7,
    question: "Can I learn sales online through Upraise Learning?",
    answer: "Yes, the Sales & Business Development course teaches practical sales strategies, lead generation, and business growth techniques for beginners and professionals.",
    category: "Courses"
  },
  {
    id: 8,
    question: "How can I enroll in Upraise Learning courses?",
    answer: "Visit www.upraiselearning.com, choose your preferred course, and sign up using your email or Google account.",
    category: "Enrollment"
  },
  {
    id: 9,
    question: "Are mentorship and career guidance available?",
    answer: "Yes, learners receive one-on-one mentorship, project guidance, and career support to become job-ready.",
    category: "Support"
  },
  {
    id: 10,
    question: "Can I access courses anytime?",
    answer: "Absolutely! Courses are flexible, offering both live and recorded classes to learn at your convenience.",
    category: "Access"
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 min-h-screen w-full py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, platform, and policies
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === faq.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <a
            // href="/contact"
            className="inline-block bg-[#097aee] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
          >
            Contact Support
          </a>
        </div>
      </Container>
    </section>
  );
}