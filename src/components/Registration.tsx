// components/TicketInfo.tsx
function TicketInfo() {
  return (
    <div className="flex items-center justify-center mt-8 w-[100%] bg-black">
      <div className="flex space-x-6 w-[100%]">
        
        {/* Ticket Options */}
        <div className=" rounded-lg  w-[50%] p-1">
          <div className="flex justify-between items-center h-[25vh] text-black p-2 bg-gradient-to-r bg-white rounded-lg">
         Ticket placeholder
          </div>

         

          {/* Buy Tickets Button */}
          <button className="bg-gradient-to-r from-[#AE0D61] to-[#530AAC] h-[10vh] text-white font-semibold py-2 text-[18px] mt-4 w-full rounded-lg">
            Buy Tickets
          </button>
        </div>
        
        {/* Availability Section */}
        <div className="bg-gradient-to-r from-[#AE0D61] to-[#530AAC] text-white rounded-lg p-6 pt-0 flex flex-col justify-center w-[35%] relative">
          <div className='flex flex-row items-center'>
          <div className="text-[100px] font-[800] ">248</div>
          <div className="text-[32px] font-[800] leading-[35px] p-2">Seats <br/> Available</div>
          </div>
        

          {/* Progress Bar */}
          <div className='flex items-center'>
          <div className=" bg-white p-1 w-[80%]  rounded-full h-[9vh] flex items-center overflow-hidden">
            <div className="bg-pink-600 h-full rounded-full  text-center flex items-center p-4  text-[18px] text-white font-semibold" style={{ width: '73%' }}>
              73% filled
            </div>
            <div className="bg-white h-full text-center text-[18px] flex items-center justify-center text-[#490ab5] font-semibold" style={{ width: '17%' }}>
              17%
            </div>
          </div>

        <div className='w-[17%] ml-2 hover:rotate-[-45deg] transition-all duration-300 ease-in-out cursor-pointer  text-[24px] h-[9vh] rounded-full items-center flex text-black justify-center bg-white'>
            →
        </div>

          </div>
          
        </div>

        {/* Additional Stats */}
        <div className="space-y-4 flex flex-col justify-center">
          <div className="bg-[#0B0713] border-2 border-solid border-[#26222D] flex flex-col justify-center h-[45%] text-white rounded-lg p-4 w-32 text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm">Sponsors</div>
          </div>
          <div className="bg-[#0B0713] border-2 border-solid border-[#26222D] flex flex-col justify-center h-[45%] text-white rounded-lg p-4 w-32 text-center">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm">Teams</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketInfo;
