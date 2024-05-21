"use client";

import React from "react";
import PartnershipData from "@/data/PartnershipData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Partnership = () => {
  return (
    <section className="bg-white border-b py-4  overflow-x-hidden">
      <h1 className="text-center text-green-500 lg:text-4xl text-3xl font-bold capitalize">
        Partnership
      </h1>
      <p className="text-center leading-tight py-1 container mx-auto text-black text-sm font-bold  lg:font-bold capitalize">
        Who we work with
      </p>
      <div className="marquee-container">
        <div className="marquee">
          <div className="partner-item gap-6 flex flex-row justify-center items-center">
            {PartnershipData.map((partner, index) => (
              <div key={index} className="partner-item">
                <Image
                  alt={partner.name}
                  src={partner.image}
                  width={partner.width} // Sesuaikan dengan lebar gambar yang diinginkan
                  height={partner.height} // Sesuaikan dengan tinggi gambar yang diinginkan
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-center flex items-center justify-center">
        <p className="bg-white text-green-500 font-bold w-72 capitalize text-3xl">
          900+ Partners <br />
          <span className="text-black text-lg font-thin">Our project</span>
        </p>
      </div> */}
    </section>
  );
};

export default Partnership;
