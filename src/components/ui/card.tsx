import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { HoverBorderGradient } from "./hover-border-gradient";
 import {Button} from "@nextui-org/react";
 import Link from "next/link";




export default function App() {
  return (
    <section className="bg-gray-50 w-full py-12 pb-28">
      <h2 className="text-center">In-house Proyects</h2>
    <div className=" w-fit mx-auto pt-5 grid gap-7  grid-cols-1 sm:grid-cols-3">
    <Card isHoverable isPressable className="max-w-96  p-1 pb-2 pt-3 mx-auto my-6 bg-white border-3 border-gray-300 hover:border-slate-500  ">
      <Link href="wiki-science" >
      <CardHeader className="pb-0 pt-3 px-3 flex-col items-start ">
        <h4 className="font-semibold">wiki-science.com</h4>
        <p className="py-3 text-default-500  text-left">Science and Engineering Educational platform based on generative AI.</p>
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <figure className=" mx-auto w-fit ml-0 py-1">

        <Image
          isZoomed
          alt="Card background text-center"
          className="object-cover rounded-xl p-3 -ml-3"
          src="/wiki-blue.svg"
          width={80}
        />
        </figure>
        <div className="text-xs absolute z-20 text-black bottom-4 right-6  ">

        See more ➝
        </div>

      </CardBody>
        </Link>
    {/* <HoverBorderGradientDemo></HoverBorderGradientDemo> */}
    </Card>


    <Card isHoverable isPressable className="max-w-96  p-1 pb-2 pt-3 mx-auto my-6 bg-white border-3 border-gray-300 hover:border-gray-500  ">
      <Link href="#" >
      <CardHeader className=" pt-3 px-3 flex-col items-start pb-12">
        <h4 className="font-semibold text-black">Oaxaca Subversiva</h4>
        <p className="py-3 text-default-500 text-black/80 text-left">24/7 coverage media, AI agents running in the back to bring the most confindent and factual news.</p>
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <figure className=" mx-auto w-fit ml-0">

        <Image
          isZoomed
          alt="Card background text-center"
          className="object-cover rounded-xl p-1"
          src="/wiki-blue.svg"
          width={80}
        />
        </figure> */}
        <div className="text-xs absolute z-20 text-black bottom-4 right-6">

        See more ➝
        </div>

      </CardBody>
      </Link>
    {/* <HoverBorderGradientDemo></HoverBorderGradientDemo> */}
    </Card>


    <Card isHoverable isPressable className="max-w-96 p-1 pb-2 pt-3 mx-auto my-6 bg-white border-3 border-gray-300 hover:border-gray-500  ">
          <Link href="cultiva-saber" >
      <CardHeader className="pb-0 pt-3 px-3 flex-col items-start ">
        <h4 className="font-semibold text-black">Cultiva Saber</h4>
        <p className="py-3 text-default-500 text-black/90 text-left">Agrocoesystems to empower the independence and education of communities.</p>
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
      </CardHeader>
      <CardBody className="overflow-visible py-1">
        <figure className=" mx-auto w-fit ml-0">

        <Image
          isZoomed
          alt="Card background text-center"
          className="object-cover p-5 -ml-4"
          src="/cultiva-saber-icon.svg"
          width={100}
        />
        </figure>
        <div className="text-xs absolute z-20 text-black bottom-4 right-6  ">

            See more ➝
        </div >
      </CardBody>
            </Link>

    {/* <HoverBorderGradientDemo></HoverBorderGradientDemo> */}
    </Card>





</div>

        </section>
  );
}
