// src/components/home/PricingSection.tsx
"use client";

import { useState } from "react";
import Container from "../Container";
import Image from "next/image";

type Feature = {
    text: string;
    available: boolean;
};

type Plan = {
    title: string;
    monthly: number;
    yearlyMonthly: number; // price per month when billed yearly
    badge?: string;
    badgeVariant?: "primary" | "secondary";
    features: Feature[];
};

const plans: Plan[] = [
    {
        title: "Basic",
        monthly: 99,
        yearlyMonthly: 79, // ₹15/month when billed yearly (₹180/year total)
        badge: "Most popular",
        badgeVariant: "secondary",
        features: [
            { text: "Monthly group workshops", available: true },
            { text: "Community support only", available: true },
            { text: "Mentorship Access", available: false },
            { text: "Resume & Portfolio Review", available: false },
            { text: "Career Counseling", available: false },
        ],
    },
    {
        title: "Standard",
        monthly: 199,
        yearlyMonthly: 159, // ₹79/month when billed yearly (₹948/year total)
        badge: "Recommended",
        badgeVariant: "primary",
        features: [
            { text: "Weekly live sessions with mentors", available: true },
            { text: "Live doubt-clearing hours (group)", available: true },
            { text: "Monthly group mentorship call", available: true },
            { text: "One-time resume review", available: true },
            { text: "Quarterly group counseling", available: true },
            // { text: "Create Projects", available: false },
            // { text: "24/7 dedicated Support", available: false },
        ],
    },
    {
        title: "Professional",
        monthly: 399,
        yearlyMonthly: 299, // ₹119/month when billed yearly (₹1,428/year total)
        badge: "Best Value",
        badgeVariant: "secondary",
        features: [
            { text: "Unlimited access + exclusive expert masterclasses", available: true },
            { text: "One-on-one personalized doubt sessions", available: true },
            { text: "Dedicated one-on-one mentor", available: true },
            { text: "Ongoing resume + LinkedIn optimization & mock interviews", available: true },
            { text: "Personalized career roadmap & goal tracking", available: true },
            // { text: "24/7 dedicated Support", available: true },
        ],
    },
];

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="bg-gray-50 py-16">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Get Membership</h2>
                    <p className="text-gray-600">
                        Connect with Experienced Professionals Who Are Passionate About Teaching
                    </p>

                    {/* Toggle Switch */}
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <span className={!isYearly ? "font-semibold text-gray-900" : "text-gray-500"}>
                            Monthly
                        </span>

                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative inline-flex h-6 w-12 rounded-full transition cursor-pointer ${isYearly ? "bg-[#097aee]" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${isYearly ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>

                        <span className={isYearly ? "font-semibold text-gray-900" : "text-gray-500"}>
                            Yearly
                        </span>

                        {/* Save badge */}
                        <span
                            className={`ml-0 rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${isYearly
                                    ? "bg-blue-100 text-[#097aee]"   // active look
                                    : "bg-gray-200 text-gray-400"   // disabled look
                                }`}
                        >
                            Save 20%
                        </span>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.title}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold">{plan.title}</h3>
                                {plan.badge && (
                                    <span
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${plan.badgeVariant === "primary"
                                            ? "bg-blue-100 text-[#097aee]"
                                            : "bg-gray-900 text-white"
                                            }`}
                                    >
                                        {plan.badge}
                                    </span>
                                )}
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold">
                                    ₹{isYearly ? plan.yearlyMonthly * 12 : plan.monthly}
                                </span>
                                <span className="text-gray-500 ml-1 text-sm">
                                    {isYearly ? "/year" : "/month"}
                                </span>
                                {isYearly && (
                                    <div className="mt-2 text-sm text-gray-600">
                                        ₹{plan.yearlyMonthly} billed monthly
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 flex-1 mb-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        {feature.available ? (
                                            <Image src="/green_tick.svg" alt="tick" width={22} height={22} />

                                        ) : (
                                            <Image src="/red_cross.svg" alt="tick" width={20} height={20} />
                                        )}
                                        <span
                                            className={`${feature.available ? "text-gray-700" : "text-gray-400"
                                                }`}
                                        >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition cursor-pointer ${plan.badgeVariant === "primary"
                                    ? "bg-[#097aee] text-white hover:bg-blue-700"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}