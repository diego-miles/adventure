
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import InfiniteMovingCardsDemo from '../../components/globals/moving-cards'
// import Cards from '../../components/globals/cards'


// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Image from "next/image";
import Adventure from '../../public/adventure.svg';
// import HeroHighlightDemo from '../../components/globals/hero-text'
// import CardHoverEffectDemo from "./CardHover-wiki";
import dynamic from "next/dynamic";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

const Cards = dynamic(() => import('../../components/globals/cards'))
const CardHoverEffectDemo = dynamic(() => import('./CardHover-wiki'))









export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-7 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Science and technology {" "}
        <Highlight className="text-black dark:text-white">
           accesible to everyone.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}





export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center ">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]text-center">
        <figure className="pt-16 mx-auto w-fit">
            <Image
            priority={true}
            alt="NextUI  Image "
            className="p-8"
            src="/wiki-blue.svg"
            width={140}
            height={140}
            />
        </figure>
        <HeroHighlightDemo></HeroHighlightDemo>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        
      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" -mt-2 pt-5 text-center">
        <p className=" italic text-slate-800 2xl:mx-96 text-lg md:text-3xl py-8">Engaging the students, tools for professors and tracking the science and engineering knowladge of the world.</p>

        <h2 >Products</h2>

      <CardHoverEffectDemo></CardHoverEffectDemo>
              <h2 >Stack</h2>

      <Cards></Cards>
        <div className="pt-9"></div>
      </section>
    </main>
  );
}
