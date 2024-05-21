"use client";

import React from "react";
import Image from "next/image";

const ProductSection = () => {
  return (
    <section className="bg-[#FAF5EF]border-t border-b border-gray-200  py-5 ">
      <h1 className="lg:text-4xl text-3xl font-bold pb-1 text-green-500 text-center">
        Product & Services
      </h1>
      <p className="text-center leading-tight  container mx-auto  text-black text-sm font-bold capitalize">
        Explore our product offerings from ready mix concrete supply to mobile
        batching plant hire
      </p>
      <div className="flex items-center justify-center">
        <section className="container mx-auto">
          {/* header product page */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
            {/* Product 1 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Readymix Concrete.jpg"
                alt="Product 1"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 2 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Concrete Pump.jpg"
                alt="Product 2"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 3 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Precast.jpg"
                alt="Product 3"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 4 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Batching Plant.jpg"
                alt="Product 4"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 5 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Mobile Batching Plant.jpg"
                alt="Product 5"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 6 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Self Loading Mixer.jpg"
                alt="Product 6"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 7 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Truck Mixer.jpg"
                alt="Product 6"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            {/* Product 8 */}
            <div
              className="flex flex-col justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                width={400}
                height={400}
                src="/Batch Pump.jpg"
                alt="Product 6"
                className="rounded-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductSection;
