import Image from 'next/image';
import React from 'react';

const BannerPage = () => {
  return (
  <div className="relative w-full h-auto overflow-hidden">
  <Image
    src="/Bnner.png"
    alt="Website Banner" 
    width={1200} 
    height={600} 
    className="w-full h-auto"
    priority
  />
 
  <div className="absolute inset-0 flex flex-col items-start justify-center  bg-black/20"> 
    <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold text-center ml-7">
      Upgrade Your Skills Today
    </h1>
    <p className="text-white text-lg mt-1 ml-7">
      Learn from Industry Experts
    </p>
    
    <button className="mt-2 ml-7 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full transition-all">
      Explore Courses
    </button>
  </div>
</div>
  );
};

export default BannerPage;