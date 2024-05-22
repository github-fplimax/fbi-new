"use client";

import { DeviceMobile, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    // parent
    <div className="gap-6">
      {/* child */}
      {/* address */}
      <div className="w-full py-2 flex justify-center items-center">
        <ul className="">
          <li className="flex flex-row justify-center items-center  ">
            <MapPin size={32} className="text-green-500" />
            <p className="text-xl">Address</p>
          </li>
          <li className="flex container flex-row justify-center items-center">
            <Link
              href="https://maps.app.goo.gl/iFVuUgRLSHJDbVHZA"
              target="_blank"
              translate="no"
              title="Open in Google Maps"
            >
              <p className="hover:text-green-500 transition-all text-justify">
                JL. Bina Marga No. 76 RT 003 / 005, Sanja, Kec. Citeureup,
                Kabupaten Bogor, Jawa Barat 16810
              </p>
            </Link>
          </li>
        </ul>
      </div>
      {/* email */}
      <div className="py-2 flex justify-center items-center">
        <ul>
          <li className="flex flex-row justify-center items-center  ">
            <Envelope size={32} className="text-green-500 items-center" />
            <p className="text-xl">Email</p>
          </li>
          <li className="flex text-lg flex-row justify-center items-center hover:text-green-500 transition-all">
            <Link href="mailto:admin@freshbeton.com" title="Go to Email">
              admin@freshbeton.com
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2">
        {/* contact */}
        <div className="py-2 flex justify-center items-center">
          <ul>
            <li className="flex flex-row justify-center items-center  ">
              <DeviceMobile size={32} className="text-green-500" />
              <p className="text-xl">Contact</p>
            </li>
            <li className="flex flex-row justify-center items-center hover:text-green-500 transition-all ">
              <Link
                href="https://wa.me/6281574747474"
                target="_blank"
                title="Call Now"
              >
                0815 7474 7474
              </Link>
            </li>
            <li className="flex flex-row justify-center items-center hover:text-green-500 transition-all ">
              <Link
                href="https://wa.me/6281575453524"
                target="_blank"
                title="Call Now"
              >
                0815 7545 3524
              </Link>
            </li>
          </ul>
        </div>
        {/* phone */}
        <div className="py-2 flex justify-center items-center">
          <ul>
            <li className="flex flex-row justify-center items-center  ">
              <Phone size={32} className="text-green-500" />
              <p className="text-xl">Phone</p>
            </li>
            <li className="flex flex-row justify-center items-center hover:text-green-500 transition-all ">
              <Link
                href="https://wa.me/6281574747474"
                target="_blank"
                title="Open in WhatsApp"
              >
                0815 7545 3564
              </Link>
            </li>
            <li className="flex flex-row justify-center items-center hover:text-green-500 transition-all ">
              <Link
                href="https://wa.me/6281575453524"
                target="_blank"
                title="Open in WhatsApp"
              >
                0812 8842 432
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
