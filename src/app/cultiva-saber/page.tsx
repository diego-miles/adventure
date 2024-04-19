

import React from "react";

import Cards from '../../components/globals/cards'


// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {Image} from "@nextui-org/react";
import Adventure from '../../public/adventure.svg';
import HeroHighlightDemo from '../../components/globals/hero-text'
import {CardHoverEffectDemo} from "./CardHover-cultiva"




export function GridSmallBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-p-white/[0.2] bg-grid-p-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  );
}
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
            width={150}
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
