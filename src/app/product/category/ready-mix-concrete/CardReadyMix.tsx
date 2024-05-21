"use client";

import React from "react";
import { ReadyMixData } from "@/data/ProductCategoriesData";
import Image from "next/image";

const Card = ({ readymix }: { readymix: (typeof ReadyMixData)[number] }) => {
  return (
    <div className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl sm:w-80 w-28 sm:m-2 m-0">
      <div className="cursor-pointer h-40 relative">
        <Image
          src={readymix.image}
          alt="readymix concrete"
          layout="fill"
          objectFit="cover"
          className="w-full transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
        />
      </div>
    </div>
  );
};

export default Card;
