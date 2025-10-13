import { Clapperboard } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

const categories = [
  {
    title: "Development",
    count: 23,
    color: "bg-[#E6F7F9]",
    textColor: "text-[#0FA8A3]",
    icon: "/icons/content.svg",
  },
  {
    title: "Business",
    count: 58,
    color: "bg-[#FFF3E0]",
    textColor: "text-[#FF9800]",
    icon: "/icons/briefcase.svg",
  },
  {
    title: "Accounting",
    count: 74,
    color: "bg-[#FFE6EA]",
    textColor: "text-[#E91E63]",
    icon: "/icons/career.svg",
  },
  {
    title: "IT & Software",
    count: 65,
    color: "bg-[#F1F9E6]",
    textColor: "text-[#4CAF50]",
    icon: "/icons/python.svg",
  },
  {
    title: "Art & Design",
    count: 43,
    color: "bg-[#E6F6FF]",
    textColor: "text-[#03A9F4]",
    icon: "/icons/link.svg",
  },
  {
    title: "Marketing",
    count: 82,
    color: "bg-[#F8E6FF]",
    textColor: "text-[#9C27B0]",
    icon: "/icons/speaker.svg",
  },
  {
    title: "Photography",
    count: 25,
    color: "bg-[#FFE6EC]",
    textColor: "text-[#FF4081]",
    icon: "/icons/photo.svg",
  },
  {
    title: "Health & Fitness",
    count: 43,
    color: "bg-[#E6FAF2]",
    textColor: "text-[#43A047]",
    icon: "/icons/health.svg",
  },
  {
    title: "Lifestyle",
    count: 38,
    color: "bg-[#FFF1E6]",
    textColor: "text-[#FF5722]",
    icon: "/icons/yoga.svg",
  },
];

export default function DiscoverCategories() {
  return (
    <section className="bg-[#fdfdfd] py-20 cursor-default">
      <Container>
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Discover Categories
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Browse a Wide Range of Subjects to Start Learning What You Love
        </p>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`${cat.color} rounded-lg px-8 py-10 flex items-center gap-5 transition-transform hover:scale-[1.03] shadow-sm hover:shadow-lg`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                <Image
                  src={cat.icon}
                  alt={cat.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className={`font-bold text-lg ${cat.textColor}`}>
                  {cat.title}
                </h3>
                <p className="text-gray-700 mt-1 flex items-center gap-1">
                  <Clapperboard className="w-5 h-5" />
                  {cat.count} Classes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
