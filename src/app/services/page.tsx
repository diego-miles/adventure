

import React from "react";

import CardHoverEffectDemo from "./CardHover";



export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center ">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]text-center">

      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" text-center">
        {/* <p className=" italic text-slate-800 2xl:mx-96 text-lg md:text-3xl py-8">Empowering communities towars a sustainable and independent future.</p>

        <h2 >Program</h2> */}


      <CardHoverEffectDemo></CardHoverEffectDemo>
              {/* <h2 >Stack</h2> */}

      {/* <Cards></Cards> */}
        <div className="pt-9"></div>
      </section>
    </main>
  );
}
