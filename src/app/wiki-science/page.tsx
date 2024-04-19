
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
    title: "Electronics encyclopedia",
    description:
      "Accesible information for people to build.",
    link: "#",
  },
  {
    title: "The outsiders",
    description:
      "Mapping the hisoty of the people that has shaped our world.",
    link: "#",
  },
  {
    title: "Periodic table",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "#",
  },
  {
    title: "Inventions",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "#",
  },
  {
    title: "Glossary",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "#",
  },
  {
    title: "Crops calendar",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "#",
  },
];


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
        <figure className="pt-16 mx-auto w-fit">
            <Image
            isZoomed
            alt="NextUI  Image "
            className="p-8"
            src="/wiki-blue.svg"
            width={140}
            height={140}
            />
        </figure>
        <HeroHighlightDemo></HeroHighlightDemo>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        
      {/* <GridSmallBackgroundDemo></GridSmallBackgroundDemo> */}
      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" -mt-2 pt-5 text-center">
        <p className=" italic text-slate-800 2xl:mx-96 text-lg md:text-3xl py-8">Engaging the students, tools for professors and tracking the science and engineering knowladge of the world.</p>

        <h2 >Products</h2>
        {/* <ul className="list-none">
  <li className="relative flex items-center">
    
    <p className="">Wikipedias (electronics, concepts, biographies, history).</p>
  </li>
  <li className="relative flex items-center">
    <p className="">.</p>
  </li>
  <li className="relative flex items-center">
    <p className="">Visualize the journey with high-quality images of book covers.</p>
  </li>
  <li className="relative flex items-center">
    <p className="">Explore detailed syllabuses to preview the rich content.</p>
  </li>
  <li className="relative flex items-center">
    <p className="">See how others rated the books on platforms like Amazon and Goodreads.</p>
  </li>
  <li className="relative flex items-center">
    <p className=" ">Gain insights from personal reading experiences and reviews.</p>
  </li>
</ul> */}

      <CardHoverEffectDemo></CardHoverEffectDemo>
              <h2 >Stack</h2>

      <Cards></Cards>
        <div className="pt-9"></div>
      </section>
    </main>
  );
}
