"use client"

import React from "react";

import  Card  from "../components/ui/card";
import {BackgroundBoxesDemo} from "../components/ui/hero"
import CardHoverEffectDemo from "./services/CardHover-services";





export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
    <BackgroundBoxesDemo></BackgroundBoxesDemo>
      <div className="  text-center py-24 px-8  w-full">
          <p className="text-xl text-gray-500 italic ">
          Harnessing the AI Revolution for Business Growth
        </p>
</div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section>
        {/* <div className="pt-60"></div> */}
      </section>
      <Card ></Card>
      <h2>Services</h2>
      <CardHoverEffectDemo></CardHoverEffectDemo>
    </main>
  );
}
