import { Boxes } from "./background-boxes";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";




export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Adventure",
    },
    {
      text: "Capital",
    },
    // {
    //   text: ".",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];



  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Adventure .
      </p> */}
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}


export function BackgroundBoxesDemo() {
  return (
    <div className=" py-48 relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-gray-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      {/* <Image
          src="/adventure.svg" // Asegúrate de actualizar la ruta según corresponda
          alt="Adventure"
          width={100} // 2rem en píxeles, asumiendo que 1rem = 16px
          height={100} // 2rem en píxeles
          className="w-17 h-17 z-20"
          
        /> */}
        {/* <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo> */}
      <h1 className="text-[1.7rem] md:text-[2.5rem] text-black/80 relative z-20 font-extrabold ">
        Adventure Capital
      </h1>
      <p className="text-xl font-semibold md:text-2xl px-8 text-center mt-5 text-gray-500 relative z-20">
        Next generation platforms based on AI systems.
      </p>
    </div>
  );
}


