

import React from "react";

import  Card  from "../components/ui/card";
import {BackgroundBoxesDemo} from "../components/ui/hero"





export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
    <BackgroundBoxesDemo></BackgroundBoxesDemo>
      <div className="  text-center py-20 px-8  w-full">
          <p className="font-medium text-indigo-900 italic">
          Harnessing the AI Revolution for Business Growth.
        </p>
</div>
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      <section>
        {/* <div className="pt-60"></div> */}
      </section>
      <Card ></Card>
    </main>
  );
}
