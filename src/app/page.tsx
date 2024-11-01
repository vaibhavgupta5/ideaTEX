import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import Heading from "@/components/Heading";
import TicketInfo from "@/components/Registration";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="relative bg-[#04000A] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <CountdownTimer />
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-[80%]">
            <div className="h-[80vh]">
              <Heading top="Ticket" med="IdeaTex" last="REGISTRATION" />
              <TicketInfo />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-[80%]">
            <div className="h-[80vh] flex items-center">
              <div className="w-[50%] ">
                <div>
                  <Heading top="About The Event" med="Ecell's" last="IDEATEX" />
                  <div className="text-[16px] mt-8 text-[#838490]">
                    Experience Harmonia: where melodies transcend boundaries.
                    Immerse in captivating performances that ignite the stage.
                    Unleash your musical senses and embrace rhythmic bliss.
                    <br />
                    <br />
                    Don't miss this extraordinary celebration of music and
                    create memories that will last a lifetime.
                  </div>
                  <Button/>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50%]">
            <div className="w-[80%] rounded-lg m-8 h-[60vh] bg-white shadow-custom "></div>
                
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
