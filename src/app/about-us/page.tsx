import Container from "@/components/Container";
import HeroSection from "@/components/about-us/HeroSection";
import Carousel from "@/components/about-us/Carousel";
import BlogSection from "@/components/about-us/BlogSection";
// import VideoReviews from "@/components/about-us/VideoReviews";

export default function AboutUsPage() {



    return (
        <div className="w-full py-5 relative bg-[#f9f8f6]">
            <Container>
                <HeroSection />
                <Carousel />
                {/* <VideoReviews /> */}
                <BlogSection />
            </Container>
        </div>
    );
}
