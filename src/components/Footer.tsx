"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Phone, Mail, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
    Navigations: [
        { name: "About Us", href: "/about-us" },
        { name: "FAQs Page", href: "/faqs" },
        { name: "Checkout", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Blog", href: "/blogs" },
    ],
    "New Categories": [
        { name: "Designing", href: "#" },
        { name: "Business", href: "#" },
        { name: "Software", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "Photography", href: "#" },
    ],
    "Help & Support": [
        { name: "Privacy policy", href: "/privacy-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "Terms of Service", href: "/terms-services" },
        { name: "Cookies Policy", href: "/cookies-policy" },
        { name: "User Guidelines", href: "/user-guidelines" },
    ],
};

const appLinks = [
    {
        name: "Google Play",
        subtitle: "Coming Soon...",
        icon: "/google.svg",
        href: "#",
    },
    {
        name: "App Store",
        subtitle: "Coming Soon...",
        icon: "/apple.svg",
        href: "#",
    },
];

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/16DQze1ke8/", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@upraiselearning?si=P4v8of05jl01YjKx", label: "Youtube" },
    { icon: Instagram, href: "https://www.instagram.com/upraise_learning?igsh=MW9mMWo2NzJ5ajkwbQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/upraise-learning/", label: "LinkedIn" },
];

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-gray-300 py-12 px-4">
            <Container>
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

                    {/* Company Info */}
                    <div className="space-y-4 lg:col-span-1">
                        <Link href="/" className="flex items-center w-40">
                            <Image
                                src="/UpRaise Logo.png"
                                alt="UpRaise Logo"
                                width={160}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-sm">
                            Sentram Mall, Shristi Nagar Road, Kanyapur, Asansol <br />
                            West Bengal 713305, India
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                                <span className="text-sm">+91 702-993-4287</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                                <a
                                    href="mailto:support@upraiselearning.com"
                                    className="text-sm hover:underline"
                                >
                                    support@upraiselearning.com
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h3 className="text-white font-semibold text-lg mb-4">{section}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* Download Apps */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">Download Apps</h3>
                            <div className="flex flex-row md:flex-col gap-3">
                                {appLinks.map((app) => (
                                    <div
                                        key={app.name}
                                        // href={app.href}
                                        className="flex items-center p-3 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors group flex-1"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center mr-3">
                                            <Image
                                                src={app.icon}
                                                alt={app.name}
                                                width={32}
                                                height={32}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold text-sm">{app.name}</div>
                                            <div className="text-xs text-gray-400">{app.subtitle}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 Upraise Learning.</div>
                    <div className="flex space-x-4">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
