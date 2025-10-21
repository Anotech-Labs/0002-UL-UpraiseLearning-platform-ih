"use client"
import React from 'react';
import Container from '../Container';

const VideoSection = () => {
  return (
    <section className="my-6">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <h1 className="text-center text-2xl font-semibold md:text-4xl md:w-1/2">
            Your thoughts shape your reality. Choose positivity, and watch how your life transforms. 😇
          </h1>

          <div className="w-full md:w-1/2 aspect-video">
             <video
              src="/videos/horizontal.mp4"
              className="w-full h-full rounded-lg object-cover"
              controls
              playsInline
              controlsList="nodownload nofullscreen"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
