"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import Card from "../ui/cardLocation";
import { LocationData } from "@/data/LocationData";
import Skeleton from "../ui/Skeleton";

const LocationSection = () => {
  const limitedLocationData = LocationData.slice(0, 7);

  return (
    <section className="bg-[#FAF5EF] container py-5 border-t border-b border-gray-200">
      <h1 className="text-center text-green-500 lg:text-4xl text-3xl font-bold capitalize">
        location
      </h1>
      <p className="text-center text-sm  text-black pt-1 pb-4 leading-tight font-bold capitalize">
        {/* Batching plant locations have been available in Jabodetabek and other locations : */}
        Fresh Beton Indonesia is available in Jakarta, West Java and More
      </p>
      <div className="gap-6 flex flex-wrap justify-center">
        {limitedLocationData.map((location) => (
          <Suspense fallback={<Skeleton />}>
            <Card key={location.id} location={location} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
