import React, { ReactNode } from 'react';
import Heading from './Heading';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zerodha" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zelle" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Spotify" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Rackspace" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/2560px-Zerodha_logo.svg.png", alt: "Zerodha" },
  ];
  
const Sponsers = () => {
  return (
    <div className='h-[80vh] gap-10 flex-col p-14 flex bg-[#0B0713] rounded-lg border-2 border-[#26222D] justify-center'>
<div className="w-[100%] flex items-end ">
    <div className="w-[60%]">
      <Heading top="The Power Behind Us" med="IdeaTex" last="SPONSERS" />
    </div>

    <div className="text-[16px] w-[40%] text-right align-bottom text-[#838490]">
      Immerse in mesmerizing performances,vibrant soundscapes,and
      interactive art at our music extravaganza. Experience a
      festival atmosphere like no other, where unforgettable
      moments.
    </div>
  </div>

  <div className="flex items-center cursor-pointer justify-center gap-8 py-8 bg-[#0B0713]">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={300} // Adjust size as needed
            height={300}
            className="object-contain"
          />
        </div>
      ))}
    </div>

<div className='w-full flex justify-center'>
<button className="flex items-center w-[20%] justify-center gap-2 px-6 py-4 border border-[#AE0D61] rounded-lg text-gray-300 hover:bg-[#AE0D61] hover:text-white transition duration-300 ease-in-out">
      <span className="font-semibold">Become A Sponsor</span>
      <ArrowRight className="w-5 h-5" />
    </button>

</div>

    </div>
    
  );
};

export default Sponsers;
