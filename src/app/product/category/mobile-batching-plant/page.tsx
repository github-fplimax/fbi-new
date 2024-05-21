"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardMobileBatch";
import { MobileBatchingPlantData } from "@/data/ProductCategoriesData";
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

          {/* <Image
            src="/Banner Mobile batching plant.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
            <Image
              src="/Banner Mobile batching plant.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute  mt-16 sm:mt-10 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <p className="lg:text-4xl text-3xl font-bold py-2 text-center capitalize">
                MOBILE BATCHING PLANT
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
        {/* <p className="lg:text-4xl text-3xl font-bold py-2 text-green-500 text-center capitalize">
          MOBILE BATCHING PLANT
        </p> */}
        <article className="text-justify py-2 text-black text-lg capitalize">
          Mobile Batching Plants are versatile, efficient, and cost-effective
          solutions for construction projects that require on-site concrete
          production. Their mobility, flexibility, and integration with the
          construction process make them indispensable tools for meeting the
          dynamic demands of modern construction projects.
        </article>
        <p className="lg:text-4xl py-2 text-3xl font-bold text-green-500 text-center capitalize">
          OUR OFFERING
        </p>
        <article className="text-justify text-black text-lg capitalize">
          We offer two types: Blend EO25 and Blend Seventy.
        </article>

        <article className="text-justify text-black text-lg capitalize">
          Provides various grades of concrete ranging from grade B0 to grade
          K500. Types include Ready Mix with fly ash and non-fly ash options,
          with service acceleration ranging from 3 days to 7 days.
        </article>
      </div>
      <div className="gap-5 flex flex-wrap justify-center pb-5 relative z-10">
        {MobileBatchingPlantData.map((mobilebatch) => (
          <Card key={mobilebatch.id} mobilebatch={mobilebatch} />
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
