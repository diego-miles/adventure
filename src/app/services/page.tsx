
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import InfiniteMovingCardsDemo from '../../components/globals/moving-cards'
import Cards from '../../components/globals/cards'


// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {Image} from "@nextui-org/react";
import Adventure from '../../public/adventure.svg';
import HeroHighlightDemo from '../../components/globals/hero-text'
import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web development",
    description:
      "Building the web with modern stacks, fast and cheap.",
    link: "#",
  },
  {
    title: "Data Management",
    description:
      "Automate the data of your organization, no more beurocracy.",
    link: "#",
  },
  {
    title: "AI and tools integrations",
    description:
      "Harness the power of AI, integrate custom solution for your organization.",
    link: "#",
  },
  {
    title: "Business Consulting",
    description:
      "Dont know how to leverage from the power of new technologies? we can help you.",
    link: "#",
  },

];



export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center ">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]text-center">
        {/* <HeroHighlightDemo></HeroHighlightDemo> */}
        {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
        
      {/* <GridSmallBackgroundDemo></GridSmallBackgroundDemo> */}
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
