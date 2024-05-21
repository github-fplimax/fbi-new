"use client";
import React from "react";
import Link from "next/link";
import Card from "../ui/cardPortfolioSection";
import { PortfolioData } from "@/data/PortfolioCarouselData";

const PortfolioSection = () => {
  const limitedProductData = PortfolioData.slice(0, 20);

  return (
    <section className="bg-white border-b py-5 ">
      <h1 className="text-center text-green-500 lg:text-4xl text-3xl font-bold capitalize">
        portfolio
      </h1>
      <p className="text-center leading-tight pt-1 container mx-auto text-black text-sm font-bold pb-5 lg:font-bold capitalize">
        various building and foundry projects that we have worked on:
      </p>
      <div className="marquee-container">
        <div className="marquee">
          <div className="partner-item gap-6 flex flex-row justify-center">
            {limitedProductData.map((portfolio) => (
              <Card key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
