// "use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partnership from "@/components/section/Partnership";
import Card from "@/components/ui/cardPortfolio";
import { PortfolioData } from "@/data/PortfolioData";
import { Metadata } from "next";
import Image from "next/image";
import imagePortoflio from "../../../public/IMG_8274.png";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio - Fresh Beton Indonesia",
  description: "portfolio page Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};

const page = () => {
  return (
    <section>
      <Header />
      <section className="overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center">
        <div className="absolute inset-0 z-0 h-[500px] flex items-center justify-center">
          <Image src="/IMG_8274.png" alt="" layout="fill" objectFit="cover" />
          <div className="absolute z-10 pt-32 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl capitalize font-bold">
              completed project
            </h1>
          </div>
        </div>
      </section>
      {/* <p className="font-bold text-lg pt-[450px] capitalize pb-6 text-center py-12 mx-4 sm:mx-10 md:mx-20 lg:mx-32"> */}
      <p className="text-center pt-[430px] text-black text-lg pb-2 lg:font-bold capitalize">
        On this page, you will find comprehensive information on the profile of
        the products and services we offer.
      </p>
      {/* <div
        data-aos="fade-up"
        className="gap-4 flex flex-wrap justify-center pb-5  "
      >
        {PortfolioData.map((portfolio) => (
          <Card key={portfolio.id} portfolio={portfolio} />
        ))}
      </div> */}
      <div className="gap-6 flex flex-wrap justify-center" data-aos="fade-up">
        {PortfolioData.map((portfolio) => (
          <Card key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
      <Partnership />
      <Footer />
    </section>
  );
};

export default page;
