import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import Heading from "@/components/Heading";
import TicketInfo from "@/components/Registration";
import Button from "@/components/Button";
import MovingText from "@/components/MovingText";
import EventCard from "@/components/EventCard";
import { Guitar } from "lucide-react";
import Schedule from "@/components/Schedule";
import Sponsers from "@/components/Sponsers";
import ScrollingGallery from "@/components/Scrolling-Gallery";
import FAQSection from "@/components/Faq";
import PromoBanner from "@/components/OffBanner";
import Maps from "@/components/Maps";

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
          <div className="flex flex-col justify-center w-[85%]">
            <div className="h-[80vh]">
              <Heading top="Ticket" med="IdeaTex" last="REGISTRATION" />
              <TicketInfo />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-[85%]">
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
                  <Button />
                </div>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <div className="w-[80%] rounded-lg m-8 h-[60vh] bg-white shadow-custom "></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40vh] flex items-center">
          <MovingText />
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-[85%]">
            <div className="h-[100vh] flex flex-col justify-center">
              <div className="w-[100%] flex items-end ">
                <div className="w-[60%]">
                  <Heading top="Why IdeaTex?" med="Simply" last="EXTRAORIDINARY" />
                </div>

                <div className="text-[16px] w-[40%] text-right align-bottom text-[#838490]">
                  Immerse in mesmerizing performances,vibrant soundscapes,and
                  interactive art at our music extravaganza. Experience a
                  festival atmosphere like no other, where unforgettable
                  moments.
                </div>
              </div>
              <div className=" flex items-center w-[100%] gap-6 justify-center mt-12">
                <EventCard
                  icon={<Guitar className="w-16 h-16" />}
                  title="Main Stage Extravaganza"
                  description="Experience a diverse array of musical genres of talented artists."
                />

                <EventCard
                  icon={<Guitar className="w-16 h-16" />}
                  title="Main Stage Extravaganza"
                  description="Experience a diverse array of musical genres of talented artists."
                />

                <EventCard
                  icon={<Guitar className="w-16 h-16" />}
                  title="Main Stage Extravaganza"
                  description="Experience a diverse array of musical genres of talented artists."
                />
              </div>
            </div>
          </div>
        </div>


        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-[85%]">
            <div className=" flex flex-col justify-center">
           <Schedule/>
            </div>
          </div>
        </div>



        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col h-[100vh] justify-center w-[90%]">
           <Sponsers/>
          </div>
        </div>


        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col h-[80vh] justify-center w-[90%]">
           <ScrollingGallery/>
          </div>
        </div>


        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col h-[80vh] justify-center w-[90%]">
           <FAQSection/>
          </div>
        </div>

       
        <div className="h-[50vh] flex items-center">
<PromoBanner />
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col h-[100vh] justify-center w-[90%]">
           <Maps/>
          </div>
        </div>

        <div className="h-[30vh] flex items-center">
          <MovingText />
        </div>

      </div>
    </div>
  );
}
