import React from "react";
import Heading from "./Heading"; // Adjust path if needed

const Schedule = () => {
  return (
    <div className="bg-black text-white flex p-8 h-[80vh]">
      {/* Title Section using Heading Component */}
      <div className="w-[30%] sticky top-0 h-screen p-4 mb-8">
        <Heading top="Schedule" med="Melody" last="Agenda" />
        <p className="text-gray-400 mt-12">
          Immerse in mesmerizing performances, vibrant soundscapes, and
          interactive art at our music extravaganza. Experience festival
          atmosphere like no other, where unforgettable moments await.
        </p>
        <div className="flex gap-4 mt-12 items-center cursor-pointer group">
          <div className="underline text-gray-300 underline-offset-8 group-hover:text-[#AE0D61] transition-all ease-in-out text-[16px]">
            Download Agenda
          </div>
          <button className="p-4 pl-5 pr-5 group-hover:rotate-[90deg] group-hover:text-[#AE0D61] transition-all duration-300 ease-in-out cursor-pointer text-[18px] rounded-full items-center flex text-white justify-center bg-[#333038]">
            →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[70%] p-8 pt-0 overflow-y-auto h-[80vh] hide-scrollbar">
        {/* Day Tabs */}
        <div className="flex flex-col gap-4 w-full mb-8">
          <div className="h-[20vh] text-[32px] font-[800] text-[#d2d2d2] justify-center bg-[#0B0713] rounded-lg border-2 border-[#26222D] flex items-center p-4">
            26 NOVEMBER 2024 - <u>IDEATEX</u>
          </div>

          {/* Schedule List */}
          <div className="w-full mt-4">
            {Array(6).fill("").map((_, index) => (
              <div key={index} className="flex py-4 border-b border-[#26222D]">
                <div className="font-[800] w-[25%] text-[#d2d2d2] text-[28px]">
                  11:00 AM
                </div>
                <div className="w-[75%]">
                  <p className="font-[600] text-[#d2d2d2] text-[30px]">
                    Pre-Event Registration
                  </p>
                  <p className="font-[400] mt-4 text-[#838490] text-[16px]">
                    Immerse yourself in an artistic wonderland as enchanting
                    installations come to life. Engage with visual and interactive
                    displays that celebrate the harmony between music and art.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
