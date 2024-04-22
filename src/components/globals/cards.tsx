import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Cards() {
  const list = [
    {
      title: "Tangerine",
      img: "/react_logo.png",
      paddings: { padding: '3.6rem'}
    },
    {
      title: "Raspberry",
      img: "/prisma-logo.png",
      paddings: { padding: '1.8rem'}

    },
    {
      title: "Orange",
      img: "/mongodb-logo.png",
      // paddings: { left: '.5rem'}
    },
    {
      title: "Lemon",
      img: "/typescript-logo.png",
      paddings: { padding: '1.8rem'}

    },

  ];

  return (
    <div className="gap-0 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <div key={index} className="w-full ">
          <div className="grid content-center overflow-visible p-0 w-full h-full md:pt-9">
            <figure className="max-w-44">

            <Image
            //   shadow="sm"
            //   radius="lg"
              alt={item.title}
              className="object-fit  mx-auto p-4"
              src={item.img}
              style={item.paddings}

            />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
