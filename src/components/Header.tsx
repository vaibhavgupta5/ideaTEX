import Link from "next/link";

function Header() {
  return (
    <div className=" mt-8 fixed top-[0.2rem] z-40 mb-8 flex justify-center items-center w-[100%] ">
      <div className="glass flex items-center p-4 w-[90%] border-solid border-[#26222D] border-2 h-[13vh] rounded-lg">
        <div className="w-[40%] font-[600] text-[#AE0D61] text-[20px]">IDEATEX</div>
        <div className="flex justify-end items-center gap-6 w-[60%]">
          <Link
            href="#"
            className="font-[600] text-[18px] hover:text-[#AE0D61] "
          >
            HOME
          </Link>
          <Link
            href="#"
            className="font-[600] text-[18px] hover:text-[#AE0D61] "
          >
            ABOUT US
          </Link>
          <Link
            href="#"
            className="font-[600] text-[18px] hover:text-[#AE0D61] "
          >
            SPEAKERS
          </Link>
          <Link
            href="#"
            className="font-[600] text-[18px] hover:text-[#AE0D61] "
          >
            EVENTS
          </Link>
          <Link
            href="#"
            className="font-[600] text-[18px] hover:text-[#AE0D61] "
          >
            SPONSERS
          </Link>

          <button className="bg-[#AE0D61] font-[600] p-3 pl-10 hover:bg-transparent hover:border-solid hover:border-2 hover:border-[#AE0D61] pr-10 border-2 border-[#AE0D61] rounded-lg">Buy Tickets</button>

        </div>
      </div>
    </div>
  );
}

export default Header;