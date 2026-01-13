import React from 'react'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div>
      <div
        className="relative min-h-[calc(100vh)] flex items-center justify-center overflow-hidden"
      >

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <Link
          href="/services"
          className="absolute bottom-36 md:bottom-20 lg:bottom-32 left-1/2 -translate-x-1/2"
        >
          <button className="w-[200px] md:w-[250px] h-[44px] md:h-[50px] lg:h-[56px] bg-[#E7E7E7] hover:bg-primary hover:text-white ease-in-out duration-200 transition-all py-3 px-5 md:px-6 rounded-full text-sm md:text-base lg:text-lg font-normal leading-[120%] text-primary">
            Buy Your Data Now
          </button>
        </Link>

      </div>
    </div>
  )
}

export default HeroSection
