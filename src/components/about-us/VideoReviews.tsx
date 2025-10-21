"use client"
import { Play } from 'lucide-react';
import { useRouter } from "next/navigation";
import React, { useRef, useState } from 'react';

interface Video {
  src: string;
  id: number;
  name: string;
}

const VideoReviews: React.FC = () => {
  const router = useRouter();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videos: Video[] = [
    { src: "/videos/verticle.mp4", id: 1, name: "Saloni Jain" },
    { src: "/videos/verticle.mp4", id: 2, name: "Shravan Bhati" },
    { src: "/videos/verticle.mp4", id: 3, name: "Ansh Mishra" }
  ];

  const handleVideoClick = (index: number): void => {
    const video = videoRefs.current[index];
    if (!video) return;

    // If this video is already playing unmuted, mute it and blur it
    if (playingIndex === index) {
      video.muted = true;
      setPlayingIndex(null);
    } else {
      // Mute all other videos (but keep them playing)
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.muted = true;
        }
      });

      // Unmute the clicked video (it's already playing)
      video.muted = false;
      setPlayingIndex(index);
    }
  };

const handleClick = () => {
    router.push("/#reviews");
};

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#097aee]">Wall of Love</h2>
          <p className="text-gray-700 text-lg max-w-2xl">
            Loved by Students, Trusted by Professionals. Community says it better than we ever could.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-nowrap"
        >
          View All
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full md:w-1/3 relative group cursor-pointer justify-items-center"
            onClick={() => handleVideoClick(index)}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[550px] max-w-[370px]">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className={`w-full rounded-2xl transition-all duration-300 ${playingIndex === index ? '' : 'blur-sm'
                  }`}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Overlay with name and play button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm backdrop-contrast-100 backdrop-saturate-100 ring-1 ring-gray-400/10 select-none">
                  <h3 className="text-white text-xl font-semibold">{video.name}</h3>
                  <div
                    className={`w-12 h-12 flex items-center justify-center transition-opacity ${playingIndex === index ? 'opacity-0' : 'opacity-100'
                      }`}
                  >
                    <Play fill='white' />
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              {playingIndex !== index && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoReviews;