// "use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationSection from "@/components/section/LocationSection";
import ContactSection from "./contactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Fresh Beton Indonesia",
  description: "Looking to connect with PT. Fresh Beton Indonesia? Here's how:",
  icons: {
    icon: "./icon.ico",
  },
};

const Page = () => {
  return (
    <section className="bg-[#FAF5EF]">
      <Header />
      <div className="pt-24 ">
        <h1 className="text-3xl font-bold text-center pb-4">Head office</h1>
        <div className="flex justify-center items-center">
          <ContactSection />
        </div>
      </div>
      <LocationSection />
      <Footer />
    </section>
  );
};

export default Page;
