import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function contacts() {
  return (
    <>
    <Card className="w-68 max-w-[400px] my-10 p-2 ">
      <CardHeader className="block text-left">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
          <p className="text-md font-semibold">Keymer Inclan</p>
          <small className=" text-default-500">Co-founder</small>
          <p className="mt-3">Marketing and Management director</p>
          <p> 951-547-78-63</p>
      </CardHeader>
      {/* <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
    <Card className="w-68 max-w-[400px] my-10 p-2">
      <CardHeader className="flex gap-3  text-left">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
        <div className="flex flex-col">
          <p className="text-md font-semibold">Diego Fernandez</p>
          <small className=" text-default-500">Co-founder</small>
          <p className=" ">Software and Design director</p>
        <p>951-547-78-63</p>
        </div>
      </CardHeader>
      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
    </>
  );
}
