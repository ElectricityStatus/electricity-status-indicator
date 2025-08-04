import Image from "next/image";
import WorldImg from "../public/Final-ezgif.com-speed 1.png";
import Button from "./components/Button";
export default function Home() {
  return (
    <>
      <div
        className="flex flex-col bg-[url('../public/worldImg.png')] border  
         h-screen bg-cover bg-center w-screen    min-h-screen bg-black text-white"
      >
        <nav>
          <div className="logo flex mt-10 ml-10 items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            {/* <h1>LOGO</h1>{" "} */}
          </div>
        </nav>

        <main className="  flex mt-56 flex-col   text-start justify-center ">
          <div className=" pl-[15%]  text-white gap-2.5 flex flex-col">
            <h1 className="font-bold text-2xl leading-[100%] tracking-[0%]">
              STOP GUESSING <br />
              START CHECKING.
            </h1>

            <p className="text-base font-normal leading-[100%] tracking-[0%]">
              Real-time electricity updates <br />
              from your area.
            </p>
          </div>
          <div className="mt-36 flex gap-4 flex-col  justify-center items-center ">
            <Button variant="primary" fullWidth className="w-[90%]" >Get Started</Button>
            <Button variant="outline" fullWidth className="w-[90%]">Log In</Button>
          </div>
        </main>
      </div>
    </>
  );
}
