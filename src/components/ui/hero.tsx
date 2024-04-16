import { Boxes } from "./background-boxes";



export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      {/* <Image
          src="/adventure.svg" // Asegúrate de actualizar la ruta según corresponda
          alt="Adventure"
          width={100} // 2rem en píxeles, asumiendo que 1rem = 16px
          height={100} // 2rem en píxeles
          className="w-17 h-17 z-20"
          
        /> */}
      <h1 className="text-[1.5rem] text-white relative z-20 font-semibold ">
        Adventure Capital
      </h1>
      <p className="px-8 text-center mt-5 text-neutral-300 relative z-20">
        Next generation platforms based on generative AI and agents.
      </p>
    </div>
  );
}


