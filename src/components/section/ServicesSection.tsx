"use client";

import React from "react";
import { ServicesData } from "@/data/ServicesData";
import ServicesTable from "../ServicesTable";

const ServicesSection = () => {
  return (
    // <section className='bg-[#FAF5EF] border-t border-b py-20 border-gray-200'>
    <section className="bg-white border-t border-b py-6  border-gray-200">
      <h1 className="text-center text-green-500 lg:text-4xl text-3xl font-bold capitalize">
        quality service
      </h1>
      <p className="text-center leading-tight pt-1 container mx-auto text-black text-sm font-bold pb-4 lg:font-bold capitalize">
        table showing the quality of concrete produced by our company :
      </p>
      <ServicesTable />
    </section>
  );
};

export default ServicesSection;
