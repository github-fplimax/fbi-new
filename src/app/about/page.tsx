import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "../../../public/IMG_5671.png";
import isoImage from "../../../public/ISO 14001, PT FBI_compressed (1)-1.png";
import isoImage9001 from "../../../public/ISO 9001, PT FBI-1.png";
import achievementImage from "../../../public/AWARDS AND ACHIEVEMENTS .png";
import FloatingIcon from "@/components/FloatingIcon";
import BrochureForm from "@/components/BrochureForm";

export const metadata: Metadata = {
  title: "About us - Fresh Beton Indonesia",
  description: `Fresh Concrete Indonesia: Specializing in ready-mixed and precast concrete since 2018. We are a company that focuses on the production of ready-mixed concrete and precast concrete. With the establishment of Fresh Beton Readymix since March 2018, we have established our Permanent Batching Plant in Neglasari, Sukabumi. We are a large-scale manufacturer specializing in producing various mining machines including different types of 
  sand and gravel equipment, milling equipment, mineral processing equipment and building materials equipment.`,
  icons: {
    icon: "./icon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Header />
      <FloatingIcon />
      <section className="overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center">
        <div className="text-center relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
            <Image src={aboutImage} alt="" layout="fill" objectFit="cover" />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl capitalize font-bold">
                company profile
              </h1>
            </div>
          </div>
          <article className=" mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[420px] sm:pt-[320px] lg:pt-[450px]">
            <span className="font-bold pt-4">PT. Fresh Beton Indonesia</span>{" "}
            proudly operated for over 7 years, we have significantly
            contributing to the advancement of infrastructure development. Our 7
            batching plants guarantee durability and reliability in every
            project we undertake. We provide a range of concrete options: mini
            concrete, ready mix concrete, and self-engine ready mix, and variety
            of concrete quality ranging from B0 up to K-500, all prepared to
            efficiently execute project after project.
            {/* is
            a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years. The installed
            batching plant capacity is 60 m3/hour with a fleet of 15 7m3
            capacity mixer trucks and 5 minimix trucks. */}
          </article>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-6 text-justify">
          <div data-aos="fade-right" className="w-full sm:w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold capitalize">vision</h1>
            <p>
              {/* To be a Readymix Concrete and Precast Concrete company with
              innovative equipment support, quality, and reliable for the
              community and the construction world. */}
              To be the foremost leader in the concrete industry, recognized for
              our unwavering commitment to quality, innovation, and
              sustainability.
            </p>
          </div>
          <div data-aos="fade-left" className="w-full sm:w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold capitalize text-start sm:text-end">
              mision
            </h1>
            <p>
              Our mission is to deliver superior concrete solutions, empowering
              clients for confident and efficient construction. We aim to be the
              preferred partner in projects of all sizes. Committed to safety,
              sustainability, and continuous improvement, we ensure long-term
              success for our business and the communities we serve.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-10"
        >
          <h1
            data-aos="fade-up"
            className="capitalize text-center text-2xl sm:text-3xl mb-4 text-green-500"
          >
            Overview of PT. Fresh Beton Indonesia
          </h1>
          <article className="text-justify">
            {/* <span className="font-bold">PT. Fresh Beton Indonesia</span> which
            was established in 2017 is a complete Readymix concrete manufacturer
            with technologically advanced production equipment and computerized
            systems for quality assurance of products and production processes.
            Supported by the supply of natural materials Split Andesite, Abubatu
            Cuci and Silica Sand Cuci large capacity of our internal group Quary
            Crusher. Ready mix concrete can be used for a wide range of
            industrial, commercial and infrastructure construction which
            includes the construction of buildings, factories, housing,
            highways, toll roads, waterworks, airstrips and so on. <br />{" "}
            <span className="font-bold">PT. Fresh Beton Indonesia</span>, We are
            a family owned business and have been involved in supplying
            ready-mix concrete batching plants and equipment to the industry
            over the last 25 years. */}
            Established in 2018, we are a subsidiary of{" "}
            <span className="font-bold">PT Farrasindo Perkasa</span>, a market
            leader in heavy equipment rental specifically for its concrete pump.
            With a track record of over 2,000 projects done, our contributions
            extend to major projects such as Jakarta-Bandung high speed rail
            (Whoosh), Ibu Kota Nusantara, Toll Roads, Hospitals, Malls and more.
            Committed to excellence, we deliver top-quality ready-mixed concrete
            solutions, catering to diverse construction requirements.
          </article>
        </div>
        <div>
          <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-10">
            <h1
              data-aos="fade-up"
              className="capitalize text-center text-2xl sm:text-3xl mb-2 text-green-500"
            >
              Cultural Values and Business Integration
            </h1>
            <p data-aos="fade-up" className="mb-4 text-justify">
              Our commitment to our mission has always been based on the values
              that are the philosophy of our people..
            </p>
            <ul>
              <li data-aos="fade-right" className="mb-2">
                <span className="text-5xl text-emerald-600 pr-5">S</span>emangat
                yang tinggi dalam belajar dan terus menggali ilmu untuk
                pengembangan dan mencapai visi misi perusahaan
              </li>
              <li data-aos="fade-right" className="mb-2">
                <span className="text-5xl text-emerald-600 pr-1">M</span>emiliki
                integritas yang baik dan proporsional dalam melakukan segala
                sesuatu, agar tercipta suatu simbiosis yang saling menguntungkan
              </li>
              <li data-aos="fade-right" className="mb-2">
                <span className="text-5xl text-emerald-600 pr-3">A</span>da
                keinginan untuk terus proaktif meningkatkan kinerja melalui
                penciptaan ide yang kreatif, inovatif, dan efisien yang berujung
                pada kesehatan karyawan
              </li>
              <li data-aos="fade-right" className="mb-2">
                <span className="text-5xl text-emerald-600 pr-3">R</span>aihlah
                tekad menjadi bagian dari tim kerja yang solid dan dinamis
              </li>
              <li data-aos="fade-right" className="mb-2">
                <span className="text-5xl text-emerald-600 pr-3">T</span>
                empatkan kepuasan pelanggan sebagai prioritas utama dalam
                tahapan SOP baik dari segi mutu, pengiriman, dan pelayanan
              </li>
            </ul>
          </div>
        </div>
        {/* form brosur */}
        {/* <BrochureForm /> */}
        {/* iso certificate */}
        <div className="flex pb-10">
          <div className="flex flex-col items-center pb-10">
            <h1 className="capitalize text-center text-2xl sm:text-3xl mb-4 text-green-500">
              certificate ISO
            </h1>
            <div className="flex flex-row sm:w-full w-40 items-center justify-center gap-9">
              <Image
                src={isoImage}
                alt=""
                className="disableRightClick border border-green-500"
                width={200}
                height={200}
              />
              <Image
                src={isoImage9001}
                alt=""
                className="disableRightClick border border-green-500"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
