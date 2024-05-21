"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const [counters, setCounters] = useState([
    { name: "Years Experience", current: 0, max: 22, increaseFactor: 25 },
    { name: "Completed Projects", current: 0, max: 2000, increaseFactor: 25 },
    { name: "Batching Plants", current: 0, max: 7, increaseFactor: 1 },
    { name: "Operating Units", current: 0, max: 100, increaseFactor: 25 },
    { name: "Satified Clients", current: 0, max: 900, increaseFactor: 2 },
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            if (observer.current) {
              observer.current.disconnect();
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.current.observe(sectionRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => ({
          ...counter,
          current:
            counter.current < counter.max
              ? counter.current + counter.increaseFactor
              : counter.current,
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-4  items-center justify-center "
    >
      <h1 className="font-bold text-center text-green-500 lg:text-[3rem] text-[1.5rem]">
        Fresh Beton Indonesia
      </h1>
      <div className="flex flex-col gap-7 justify-center items-center md:flex-row container">
        <div className="sm:w-1/2 w-full flex justify-center items-center sm:mb-2 mb-0">
          <Image
            src="/FRESH BETON INDONESIA copy (1).png"
            width={150}
            height={100}
            alt="about us image"
          />
        </div>
        <p className="text-justify mb-6">
          <span className="font-bold">PT. Fresh Beton Indonesia</span>{" "}
          specializes in ready-mixed and precast concrete. Established in March
          2018, our permanent batching plant is located in Neglasari, Sukabumi,
          adjacent to the Quarry and Crusher of{" "}
          <span className="hover:underline italic hover:text-green-500">
            <Link
              href="https://gbp-quarry.com/"
              target="_blank"
              title="PT. Gunung Bumi Perkasa"
            >
              PT. Gunung Bumi Perkasa
            </Link>
          </span>
          . With 74 Truck Mixers and 7 Batching Plants, we pride ourselves on
          seamlessly integrating into mobile projects, offering comprehensive
          solutions that adapt to the dynamic nature of construction endeavors.
        </p>
      </div>
      <div className="bg-image flex items-center justify-center">
        <div className="gap-6 block sm:hidden z-20 text-white">
          <div className="grid pt-6 grid-cols-2 sm:grid-cols-3 items-center justify-center sm:w-full w-72">
            {/* Bagian atas */}
            {counters.slice(0, 2).map((counter, index) => (
              <div key={index} className="text-center">
                <p className="w-3 pl-10 sm:pl-0 transition-all text-2xl sm:text-4xl font-bold">
                  {counter.current}+
                </p>
                <p className="w-3 pl-8 sm:pl-0 text-center flex items-center text-sm font-medium sm:text-xl">
                  {counter.name}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3  py-8  sm:hidden items-center justify-between w-72">
            {/* Bagian bawah */}
            {counters.slice(2, 5).map((counter, index) => (
              <div key={index} className="text-center">
                <p className="transition-all text-2xl sm:text-4xl font-bold">
                  {counter.current}+
                </p>
                <p className="text-sm  sm:text-xl">{counter.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-6 sm:block hidden z-20 text-white">
          <div className="flex items-center justify-center">
            <div className="container flex flex-row justify-between gap-12 items-center">
              {counters.map((counter, index) => (
                <div key={index} className="text-center">
                  <p className="transition-all text-2xl sm:text-4xl font-bold">
                    {counter.current}+
                  </p>
                  <p className="text-sm sm:text-xl">{counter.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
