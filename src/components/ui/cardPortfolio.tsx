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
    // <div className="bg-white border-solid border-2 rounded-md shadow-md w-96">
    <div  className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl sm:w-80 w-40 sm:m-2 m-0">
      <div className="cursor-pointer sm:h-48 h-32 relative flex items-center justify-center place-items-center">
        <Image
          src={portfolio.image}
          alt={portfolio.name}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-110"
          onClick={navigateToDetail}
        />
        {/* <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {portfolio.id}
        </p> */}
      </div>
      <div className="flex flex-col justify-between text-center p-4 w-full">
        <div>
          <h1 className="capitalize font-bold hover:text-green-500 hover:font-normal transition-all text-black sm:text-xl text-sm mb-2">
            {portfolio.name}
          </h1>
          <p className="capitalize text-black sm:text-lg text-sm hover:text-green-500 transition-all mb-4">
            {portfolio.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
