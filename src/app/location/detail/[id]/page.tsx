import React from "react";
import { LocationData } from "@/data/LocationData";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import FloatingIcon from "@/components/FloatingIcon";

export const metadata: Metadata = {
  title: `Location - ${LocationData[0].title}`,
  description: `batching plants in the area ${LocationData[0].address}`,
  icons: {
    icon: "./icon.ico",
  },
};

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;

  // Parse the id into a number
  const locationId = parseInt(id, 10); // Using parseInt with radix 10

  return (
    <section>
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex">
          {/* Main content */}
          <div className="pt-10 pb-5">
            <span className="text-3xl capitalize flex font-bold mb-2 text-center justify-center items-center">
              {LocationData[locationId - 1].title}
            </span>
            <div className="flex flex-row mx-8 gap-4">
              <Link
                href={`/news/category/${LocationData[locationId - 1].title}`}
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <Image
                width={800}
                height={700}
                src={LocationData[locationId - 1].image}
                alt={LocationData[locationId - 1].title}
              />
            </div>
            <div className="flex items-center mx-8 flex-col gap-5">
              <Link
                target="_blank"
                className="hover:text-green-500 "
                href={LocationData[locationId - 1].contactLink}
              >
                {LocationData[locationId - 1].contact}
              </Link>
              <p className="text-lg hover:text-green-500 text-justify">
                <Link
                  target="_blank"
                  href={LocationData[locationId - 1].urlAddress}
                >
                  {LocationData[locationId - 1].address}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FloatingIcon />
      <Footer />
    </section>
  );
};

export default Page;
