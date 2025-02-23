"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardMixer";
import { BatchingPlantData } from "@/data/ProductCategoriesData";
import Image from "next/image";
import FloatingIcon from "@/components/FloatingIcon";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="text-center text-white relative">
        <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
          {/* Apply gradient overlay */}
          {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div> */}

          {/* <Image
            src="/Banner Batching plant.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
            <Image
              src="/Banner Batching plant.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute mt-16  z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <p className="lg:text-4xl text-3xl font-bold py-2 text-center capitalize">
                SELF LOADING CONCRETE MIXER
              </p>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 sm:top-1/2 top-3/4 sm:w-64 w-auto flex flex-col items-start sm:-translate-y-1/2 -translate-y-0 lg:items-center justify-center z-20">
            <h1 className="bg-green-500 uppercase text-white sm:text-xl text-lg sm:p-2 p-1 font-bold">
              Company Summary
            </h1>
            <p className="text-white font-normal">
              Established in 2018 and still continuing to shape the future of
              infrastructure, one project at a time.
            </p>
          </div> */}
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
          SELF LOADING CONCRETE MIXER
        </p> */}
        <article className="text-justify py-2 text-black text-lg capitalize">
          Self-loading concrete mixer is a versatile piece of construction
          equipment designed to efficiently produce and transport concrete
          on-site. Self-loading concrete mixer is equipped with a special bucket
          or loading shovel that allows it to self-load aggregates, cement, and
          water directly into the mixing drum.
        </article>
        <p className="lg:text-4xl text-3xl font-bold text-green-500 pb-2 text-center capitalize">
          OUR OFFERING
        </p>
        <article className="text-justify text-black text-lg capitalize">
          We offer range of models such as FLSCM 1200, FLSCM 2600, FLSCM 3500,
          FLSCM 4000, FLSCM 5500, FLSCM 6000.
        </article>
      </div>
      <div className="gap-5 flex flex-wrap justify-center pb-5 relative z-10">
        {BatchingPlantData.map((batching) => (
          <Card key={batching.id} batching={batching} />
        ))}
      </div>
      <FloatingIcon />
      <Footer />
    </section>
  );
};

export default Page;
