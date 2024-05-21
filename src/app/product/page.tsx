import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import FloatingIcon from "@/components/FloatingIcon";
import HeroSection from "@/components/section/HeroSection";

export const metadata: Metadata = {
  title: "Product - Fresh Beton Indonesia",
  description: "Halaman product Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Header />
      <section className="">
        {/* header product page */}
        {/* <div className="relative h-[500px] sm:h-[400px]">
          <Image
            src="/Banner truck mixer.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        {/* <HeroSection/> */}
        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div> */}

            <Image
              src="/Banner readymix.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute z-10 mt-16 sm:mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <p className="lg:text-4xl text-3xl font-bold py-2 text-center capitalize">
                Product & Service
              </p>
            </div>
          </div>
          <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px] w-screen">
            <span className="font-bold pt-4">PT. Fresh Beton Indonesia</span> is
            a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years.
          </div>
        </div>
        <p className="text-center leading-tight pt-10 sm:pt-[600px] text-black text-sm font-bold lg:font-bold capitalize">
          Explore our product offerings from ready mix concrete supply to mobile
          batching plant hire, all our product can be tailored to your service.
          We supply both retail and long term project.
        </p>
        <div className="container   mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
          {/* Product 1 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Readymix Concrete.jpg"
              alt="Product 1"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Ready Mix Concrete
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Ready mix concrete is a type of concrete that has been industrially produced in specialized factories using modern equipment and technology.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/ready-mix-concrete">Read More</Link>
            </button>
          </div>
          {/* Product 2 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Concrete Pump.jpg"
              alt="Product 2"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Concrete Pump
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Concrete pump is a tool used to transport concrete from the mixing plant to the desired construction project site.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/concrete-pump">Read More</Link>
            </button>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Precast.jpg"
              alt="Product 3"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Precast
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              The precast method allows the manufacture of elements with high and consistent quality, as environmental conditions in the factory are controlled than in the field.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/precast">Read More</Link>
            </button>
          </div>
          {/* Product 4 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Batching Plant.jpg"
              alt="Product 4"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Batching Plant
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              A concrete plant, also known as a batch plant or batching plant or a concrete batching plant, is equipment that combines various ingredients to form concrete.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/batching-plant">Read More</Link>
            </button>
          </div>
          {/* Product 5 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Mobile Batching Plant.jpg"
              alt="Product 5"
              className="rounded-lg hover:scale-110 hover:cursor-pointer"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Mobile Batching Plant
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Mobile batching plant is a type of batching plant designed to be moved from one project site to another easily.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/mobile-batching-plant">
                Read More
              </Link>
            </button>
          </div>
          {/* Product 6 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Self Loading Mixer.jpg"
              alt="Product 6"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center font-semibold mt-4 mb-2">
              Self Loading Mixer
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Mobile batching plant is a type of batching plant designed to be moved from one project site to another easily.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/mobile-batching-plant">
                Read More
              </Link>
            </button>
          </div>
          {/* Product 7 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Truck Mixer.jpg"
              alt="Product 6"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center  font-semibold mt-4 mb-2">
              Truck Mixer
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Mobile batching plant is a type of batching plant designed to be moved from one project site to another easily.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/mobile-batching-plant">
                Read More
              </Link>
            </button>
          </div>
          {/* Product 8 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Batch Pump.jpg"
              alt="Product 6"
              className="rounded-lg"
            />
            <h1 className="text-[#252525] sm:text-xl text-sm text-center  font-semibold mt-4 mb-2">
              Batch Pump
            </h1>
            {/* <p className="text-[#6B7280] text-base mb-4">
              Mobile batching plant is a type of batching plant designed to be moved from one project site to another easily.
            </p> */}
            <button className="text-white bg-[#252525] hover:bg-green-500 transition-all py-1 px-2 rounded-md focus:outline-none capitalize">
              <Link href="/product/category/mobile-batching-plant">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </section>
      <FloatingIcon />
      <Footer />
    </div>
  );
};

export default Page;
