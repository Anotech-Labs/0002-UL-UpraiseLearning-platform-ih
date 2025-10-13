"use client";
import { useState } from "react";
import { Heart, Star, Play, BarChart3 } from "lucide-react";
import Image from "next/image";

// TypeScript interface for Course
export interface Course {
  id: string;
  title: string;
  technology: string;
  lectures: number;
  level: string;
  price: number;
  rating: number;
  reviews: string;
  link: string;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

interface CourseCardProps {
  course: Course;
  showInstructor?: boolean;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  showInstructor = true,
  className = "",
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      {/* Course Image */}
      <div className="relative group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
          />

          {/* Heart Icon */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
            />
          </button>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform scale-0 group-hover:scale-100">
              <Play className="w-6 h-6 text-[#097aee] ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
          {course.title}
        </h3>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Play className="w-4 h-4" />
            <span>{course.lectures} Lectures</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gray-800">
            ₹{course.price}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-700">{course.rating}</span>
            <span className="text-gray-500">({course.reviews})</span>
          </div>
        </div>

        {/* Instructor + Enroll Button */}
        {showInstructor && course.instructor && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">
                {course.instructor.name}
              </span>
            </div>
            <span
              // href={course.link}
              className="text-[#097aee] hover:text-blue-700 font-medium text-sm transition-colors cursor-pointer"
            >
              {/* Enroll Now → */}
              Coming Soon...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
