function Heading({ top, med, last }) {
  return (
    <div className="flex group flex-col space-y-0">
      <div className="flex items-center">
        <div className="p-[0.85px] bg-[#AD0C60] w-[3%] transition-all duration-300 ease-in-out group-hover:w-[5%]"></div>
        <div className="text-white text-[24px] leading-[36px] font-[600] ml-2">{top}</div>
      </div>
      <div className="text-white text-[60px] leading-[72px] font-[800]">{med}</div>
      <div 
  className="outlined-text text-[70px] leading-[72px] font-[800]"
  style={{ textShadow: '1px 1px 2px #AD0C60' }}
>
  {last}
</div>
    </div>
  );
}

export default Heading;