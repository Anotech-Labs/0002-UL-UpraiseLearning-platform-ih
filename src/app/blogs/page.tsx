"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ReactMarkdown from "react-markdown";

interface Blog {
  fermionBlogId: string;
  slug: string;
  titleMarkdown: string;
  contentMarkdown: string;
  category: string;
  featuredImageUrl: string;
}

// Skeleton Components
const FeaturedSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4 md:p-8 animate-pulse">
    <div>
      <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-8 bg-gray-300 rounded mb-3 w-3/4"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
      <div className="h-10 w-32 bg-gray-300 rounded"></div>
    </div>
    <div className="relative w-full h-60 sm:h-72 md:h-80 bg-gray-300 rounded-lg"></div>
  </div>
);

const BlogCardSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b pb-10 animate-pulse">
    <div className="relative w-full h-52 sm:h-60 md:h-64 bg-gray-300 rounded-lg"></div>
    <div>
      <div className="h-3 w-20 bg-gray-300 rounded mb-2"></div>
      <div className="h-7 bg-gray-300 rounded mb-3 w-5/6"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 rounded w-3/5"></div>
      </div>
    </div>
  </div>
);

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlog, setFeaturedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interface ApiResponse {
      output?: {
        data?: {
          blogs?: Blog[];
        };
      };
    }

    const fetchBlogs = async (): Promise<void> => {
      try {
        const response = await fetch("https://backend.codedamn.com/api/public/get-all-blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                data: {
                  fermionSchoolId: process.env.NEXT_PUBLIC_FERMION_SCHOOL_ID,
                },
              },
            ],
          }),
        });

        const result = (await response.json()) as unknown as ApiResponse[];
        const blogsData = result?.[0]?.output?.data?.blogs ?? [];

        setBlogs(blogsData);

        const featured =
          blogsData.find((b) => b.category === "Featured") ?? blogsData[0] ?? null;
        setFeaturedBlog(featured);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchBlogs();
  }, []);

  const nonFeaturedBlogs = blogs.filter(
    (blog) => blog.fermionBlogId !== featuredBlog?.fermionBlogId
  );

  return (
    <section className="bg-gray-50 min-h-screen w-full">
      {/* Featured Post */}
      <div className="w-full bg-blue-50 py-8 md:py-12">
        <Container>
          {loading ? (
            <FeaturedSkeleton />
          ) : featuredBlog ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4 md:p-8">
              {/* Text */}
              <div>
                <p className="text-xs uppercase text-gray-500 font-medium mb-2">
                  Featured Post
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {featuredBlog.titleMarkdown}
                </h2>
                <div className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                  <ReactMarkdown>{featuredBlog.contentMarkdown}</ReactMarkdown>
                </div>
                <Link
                  href={`${process.env.NEXT_PUBLIC_SUBDOMAIN_URL}/blog/${featuredBlog.slug}`}
                  className="inline-block bg-[#097aee] hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition"
                >
                  Read More &gt;
                </Link>
              </div>

              {/* Image */}
              <div className="relative w-full h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={featuredBlog.featuredImageUrl}
                  alt={featuredBlog.titleMarkdown}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          ) : null}
        </Container>
      </div>

      {/* All Posts */}
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 my-10">
          All Posts
        </h2>

        <div className="flex flex-col gap-10">
          {loading ? (
            // Show 3 skeleton cards while loading
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : (
            nonFeaturedBlogs.map((blog) => (
              <Link
                key={blog.fermionBlogId}
                href={`${process.env.NEXT_PUBLIC_SUBDOMAIN_URL}/blog/${blog.slug}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b pb-10">
                  {/* Image */}
                  <div className="relative w-full h-52 sm:h-60 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={blog.featuredImageUrl}
                      alt={blog.titleMarkdown}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-600 font-semibold mb-2">
                      {blog.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-purple-600 transition mb-3">
                      {blog.titleMarkdown}
                    </h3>
                    <div className="prose prose-sm md:prose-base text-gray-600 max-w-none line-clamp-3">
                      <ReactMarkdown>{blog.contentMarkdown}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}