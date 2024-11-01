'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="flex items-center w-[100%] justify-center text-white py-10 px-16">
      {/* Left Side with "30% off" */}

      <div className='w-[85%] flex justify-center items-center'>
      <div className="flex ">
        <h1 className="text-[180px]  font-bold text-[#AD0C60] leading-none relative">
          <span className="outlined-text" style={{ textShadow: '1px 1px 2px #AD0C60' }}>30</span>
        </h1>
        <div className='flex flex-col ml-[-15px] justify-center gap-0'>
        <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[100px] ml-4">%</span>
        <span className="text-[#AD0C60] outlined-text leading-none font-semibold text-[55px] ml-4">off</span>
        </div>
      </div>

      {/* Center Text "Get Your Tickets Today!" */}
      <div className="ml-10">
        <h2 className="text-[60px] font-[800] leading-[72px] text-[#d2d2d2]">
          Get Your <br /> Tickets Today!
        </h2>
      </div>

      {/* Right Side Icon */}
      <div className="ml-auto flex items-center">
        <ArrowUpRight className="w-[180px] h-[180px] text-[#AD0C60]" />
      </div>
    </div>

      </div>
     
  );
};

export default PromoBanner;
