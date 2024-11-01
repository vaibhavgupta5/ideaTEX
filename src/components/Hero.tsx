import Image from "next/image";

function Hero() {
  return (
    <div className=" flex justify-center items-center mt-[23vh] w-[100%] ">
 <div className="relative p-12 flex flex-col justify-center w-[92%] h-[90vh] rounded-lg overflow-hidden">
  {/* Background overlay */}
  <div
    className="absolute inset-0 bg-[#0D0714] rounded-lg"
    
  ></div>
  
  {/* Content */}
  <div className="relative z-10">
        <Image src="/pitch4.png" className="mt-[-30px]" alt="ok" width={500} height={500}></Image>

        <p className="text-[250px] stroke-white stroke-2 mt-[-85px]  text-transparent bg-clip-text bg-gradient-to-r from-[#AD0C60] to-[#530AAC] font-[900] ">
          IDEATEX
        </p>
        <p className="text-white mt-[-60px] text-[42px] font-[600] ">
          Turn your Business Idea to Real Business!
        </p>
        <div className="flex justify-between mt-6 items-center border-solid border-2 border-[#26222D] bg-[#04000A] rounded-lg p-8 text-white">
  <div className="flex flex-col items-start space-y-1">
    <span className="text-[30px] font-[800]">23rd Nov 2024</span>
    <span className="text-[18px]">9:00 - 19:00</span>
  </div>
  <div className="w-px h-16 bg-[#26222D] mx-4"></div>
  <div className="flex flex-col items-start">
    <span className="text-[30px] font-[800]">AUDITORIAM</span>
    <span className="text-[18px]">KIET, Ghaziabad</span>
  </div>
  <div className="w-px h-16 bg-[#26222D] mx-4"></div>
  <div className="flex flex-col ">
    <span className="text-[30px] font-[800]">353</span>
    <span className="text-[18px]">Attending</span>
  </div>
  <button className="ml-4 px-10 py-3 text-[16px] bg-gradient-to-r from-[#AE0D61] to-[#530AAC] hover:px-14 transition-all ease-in-out rounded-md text-white font-semibold">
    Interested
  </button>
</div>

</div>
</div>
</div>
  );
}

export default Hero;
