

import React from "react";

import Cards from '../../components/globals/cards'


// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {Image} from "@nextui-org/react";

import {CardHoverEffectDemo} from "./CardHover-cultiva"





export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center ">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]text-center">
        <figure className="pt-10 mx-auto w-fit max-w-56 md:max-w-60">
            <Image
            isZoomed
            alt="NextUI  Image "
            className="p-8"
            src="/cultiva-saber.svg"
            width={130}
            // height={350}
            />
        </figure>
      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" text-center">
        {/* <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo> */}
        <p className=" text-slate-900 text-2xl md:text-3xl py-4 px-2 font-bold ">Empowering <span className="bg-green-300 px-2 rounded-md">communities.</span> A sustainable and <span className="bg-green-300 px-2 rounded-md">independent</span> future</p>

        <h2 >Program</h2>
        <h3>Education</h3>
        <p>The crops as education, scientific-technological, and community development.</p>

      <CardHoverEffectDemo></CardHoverEffectDemo>
              <h2 >Stack</h2>

      <Cards></Cards>
        <div className="pt-9"></div>
      </section>
    </main>
  );
}
