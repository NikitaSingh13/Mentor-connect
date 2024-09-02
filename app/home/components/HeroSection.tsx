import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming Button is from Shadcn UI

const HeroSection = () => {
  return (
    <section className="relative bg-[#DAD7CD] text-[#344E41] min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <Image/> */}
        <div className="absolute inset-0 bg-[#DAD7CD] opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 typewriter-effect">Connect with Mentors, Grow as Mentees</h1>
        <p className="text-lg mb-8 animate-fade-in animate-delay-500">
          Our platform connects mentors with mentees for personal and career development through chat, video calls, and automated booking features.
        </p>
        <Button className="bg-[#588157] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#3A5A40] transition-transform duration-200 transform hover:scale-105 animate-fade-in animate-delay-1000">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
