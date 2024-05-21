"use client";

import React from "react";
import { MobileBatchingPlantData } from "@/data/ProductCategoriesData";
import Image from "next/image";

const Card = ({
  mobilebatch,
}: {
  mobilebatch: (typeof MobileBatchingPlantData)[number];
}) => {
  return (
    <div className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl sm:w-80 w-28 sm:m-2 m-0">
      <div className="cursor-pointer h-40 relative">
        <Image
          src={mobilebatch.image}
          alt="concrete pump"
          layout="fill"
          objectFit="cover"
          className="w-full flex transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
          //   onClick={navigateToDetail}
        />
        {/* <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {mobilebatch.id}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
