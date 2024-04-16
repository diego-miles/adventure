
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import InfiniteMovingCardsDemo from '../../components/globals/moving-cards'

import Link from "next/link";
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {Image} from "@nextui-org/react";
import Adventure from '../../public/adventure.svg';
import HeroHighlightDemo from '../../components/globals/hero-text'


export function GridSmallBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
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

    <main className="flex min-h-screen flex-col px-3">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]">
        <figure className="pt-24 p-9 text-center w-fit mx-auto h-fit">
            <Image
            alt="NextUI  Image "
            className=""
            src="/wiki-blue.svg"
            width={80}
            />
        </figure>
        <HeroHighlightDemo></HeroHighlightDemo>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        <p className=" text-slate-800 ">Engaging the students, tools for professors and tracking the science and engineering knowladge of the world.</p>
        
      {/* <GridSmallBackgroundDemo></GridSmallBackgroundDemo> */}
      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" -mt-2 pt-5">

        <h2 >Products</h2>
        <ul className="list-none">
  <li className="relative flex items-center">
    
    <small className="">Wikipedias (electronics, concepts, biographies, history).</small>
  </li>
  <li className="relative flex items-center">
    <small className="">.</small>
  </li>
  <li className="relative flex items-center">
    <small className="">Visualize the journey with high-quality images of book covers.</small>
  </li>
  <li className="relative flex items-center">
    <small className="">Explore detailed syllabuses to preview the rich content.</small>
  </li>
  <li className="relative flex items-center">
    <small className="">See how others rated the books on platforms like Amazon and Goodreads.</small>
  </li>
  <li className="relative flex items-center">
    <small className=" ">Gain insights from personal reading experiences and reviews.</small>
  </li>
</ul>

        <div className="pt-60"></div>
      </section>
    </main>
  );
}
