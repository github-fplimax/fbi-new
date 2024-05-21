"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardPump";
import { ConcretePumpData } from "@/data/ProductCategoriesData";
import Image from "next/image";
import FloatingIcon from "@/components/FloatingIcon";
import { InstagramEmbed } from "react-social-media-embed";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="text-center text-white relative">
        <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
          {/* Apply gradient overlay */}
          {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div> */}
          {/* 
          <Image
            src="/Banner Concrete Pump.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
            <Image
              src="/Banner Concrete Pump.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute mt-16 sm:mt-10 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <p className="lg:text-4xl text-3xl font-bold py-2 text-center capitalize">
                CONCRETE PUMP
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px] w-screen">
          <span className="font-bold pt-4">PT. Fresh Beton Indonesia</span> is a
          company engaged in the field of ready-mixed concrete (readymix) and
          precast concrete. Fresh Beton Readymix was established in March 2018
          with the establishment of We are a family owned business and have been
          involved in supplying ready-mix concrete batching plants and equipment
          to the industry over the last 25 years.
        </div>
      </div>
      <div className="py-4 pt-[10px] sm:pt-[400px] mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify">
        {/* <p className="lg:text-4xl text-3xl font-bold py-2 text-green-600 text-center capitalize">
          CONCRETE PUMP
        </p> */}
        <article className="text-justify py-2 text-black text-lg capitalize">
          Concrete pump is a machine used in construction to transfer liquid
          concrete from a concrete mixer (either truck-mounted or stationary) to
          the desired location on a construction site. It works by pumping the
          concrete through pipes or hoses, allowing for precise placement even
          in hard-to-reach areas or at considerable heights.
        </article>
        <p className="lg:text-4xl text-3xl py-2 font-bold text-green-500 text-center capitalize">
          CONCRETE PUMP HIRE AT FARRASINDO PERKASA
        </p>
        <article className="text-justify py-2 text-black text-lg capitalize">
          PT Farrasindo Perkasa is a trusted partner for concrete pump rental
          services, ensuring that construction projects have access to reliable
          and high-performing equipment.
        </article>
        <p className="lg:text-4xl text-3xl py-2 font-bold text-green-500 text-center capitalize">
          OUR OFFERING
        </p>
        <article className="text-justify text-black text-lg capitalize">
          Various types of concrete pumps are available to cater to different
          project requirements: Standard, Long Boom, Super Long Boom, Double
          Super Long Boom, and Extra Double Super Long Boom
        </article>
      </div>
      <div className="gap-5 flex flex-wrap justify-center pb-5 relative z-10">
        {ConcretePumpData.map((concrete) => (
          <Card key={concrete.id} concretepump={concrete} />
        ))}
      </div>
      <div className="gap-2 flex items-center justify-center flex-col sm:flex-row">
        <InstagramEmbed
          url="https://www.instagram.com/p/Cn4KuJTP_5m/?igsh=OXgzZjE1OXRsbGk2"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C66QDzNypLz/?igsh=b3NybWZhOThiMnZo"
          width={328}
        />
      </div>
      <FloatingIcon />
      <Footer />
    </section>
  );
};

export default Page;
