
import { motion } from "framer-motion";
import React from "react";
import Contacts from '../../components/globals/contact'
import Location from '../../components/globals/Location'
import {Link} from "@nextui-org/react";


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center ">
        
      <div className="text-center bg-white w-full px-1 rounded-[2rem]text-center">
        {/* <HeroHighlightDemo></HeroHighlightDemo> */}
        {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
        
      {/* <GridSmallBackgroundDemo></GridSmallBackgroundDemo> */}
      </div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section className=" text-center pt-8">
        {/* <p className=" italic text-slate-800 2xl:mx-96 text-lg md:text-3xl py-8">Empowering communities towars a sustainable and independent future.</p> */}

        {/* <h2 >Program</h2> */}
        <Contacts></Contacts>

              {/* <h2 >Stack</h2> */}
    <div className="pt-5">
      <Link
        isExternal
        href="#"
        showAnchorIcon
      >
        View office location
      </Link>
    </div>
      {/* <Cards></Cards> */}
        <div className="pt-9"></div>
      </section>
    </main>
  );
}
