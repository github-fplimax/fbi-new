"use client";

import React from "react";
import { PortfolioData } from "@/data/PortfolioCarouselData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaretRight } from "@phosphor-icons/react";

const Card = ({ portfolio }: { portfolio: (typeof PortfolioData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/portfolio/detail/${portfolio.id}`);
  };

  return (
    <div className="bg-white border-solid border-2 rounded-md shadow-md sm:w-60 w-40">
      {/* <div  className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl sm:w-80 w-40 sm:m-2 m-0"> */}
      <div className="cursor-pointer sm:h-40 h-32 sm:w-60 w-40 relative">
        <Image
          src={portfolio.image}
          alt={portfolio.name}
          layout="fill"
          objectFit="cover"
          className="w-full transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
          onClick={navigateToDetail}
        />
        {/* <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {portfolio.id}
        </p> */}
      </div>
      <div className="flex flex-col justify-between text-center p-4 w-full">
        <div>
          <h1 className="truncate capitalize text-black sm:text-lg text-xs font-semibold mb-2">
            {portfolio.name}
          </h1>
          <p className="truncate italic capitalize  sm:text-lg text-xs text-black mb-1">
            {portfolio.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
