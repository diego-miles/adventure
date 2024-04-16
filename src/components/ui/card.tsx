import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { HoverBorderGradient } from "./hover-border-gradient";
 import {Button} from "@nextui-org/react";
 import Link from "next/link";


// export function HoverBorderGradientDemo() {
//   return (
//     <div className="m-4 flex justify-center text-center">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-transparent text-white dark:text-white"
//       >
//         <small>Saber más</small> 
//       </HoverBorderGradient>
//     </div>
//   );
// }



export default function App() {
  return (
    <div className="bg-sky-950 w-full py-10">
    <Card isHoverable isPressable className="w-72  p-1 pt-3 mx-auto my-9 bg-black/0 border-3 border-sky-200/20 hover:bg-sky-900 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <h4 className="font-bold text-medium text-white">wiki-science.com</h4>
        <small className="py-1 text-default-500 text-white/65 text-left">Science and Engineering Educational platform based on generative AI.</small>
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/wiki-blue.svg"
          width={300}
        />
      <Link href="#" className="text-xs absolute z-20 text-white bottom-4 right-6  ">See more ➝</Link>

      </CardBody>
    {/* <HoverBorderGradientDemo></HoverBorderGradientDemo> */}
    </Card>
        {/* <Card className="col-span-12 sm:col-span-4 h-[300px] my-9 mt-12 ">
      <CardHeader className="absolute z-30 top-1 flex-col !items-start">
        <h4 className="text-sky-400 font-bold text-large py-1">wiki-science.com</h4>
        <p className=" text-white ">Science and Engineering Educational platform based on generative AI.</p>
      </CardHeader>
        <div className="z-10 absolute inset-0 bg-black opacity-50">z</div>

      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/wiki-blue-backround.svg"
      />
    </Card> */}
    {/* <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/wiki-blue-backround.svg"
          width={270}
        />
      </CardBody>
    </Card> */}
    </div>
  );
}
