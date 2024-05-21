"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleMaps from "@/components/GoogleMaps";

interface LinkGroupProps {
  children: ReactNode;
  header: string;
}
interface NavLinkProps {
  link: string;
  label: string;
}

const getCurrentDate = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white sm:pt-10 pt-0 flex z-10 items-center place-items-center gap-4 justify-between mx-auto">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <LinkGroup header="">
            <Image
              src="/FRESH-BETON-INDONESIA-white.png"
              alt="logo"
              className="flex items-center justify-center"
              width={250}
              height={250}
            />
            {/* <p className="text-white w-44">fresh beton indonesia</p> */}
          </LinkGroup>
          <div className="w-full sm:px-4 px-0 sm:w-1/2 lg:w-3/12 sm:text-left ">
            <ul>
              <div className="mb-7 w-full">
                <h4 className="mb-2 capitalize text-lg font-semibold text-white">
                  head office
                </h4>
                <div className="mb-6  gap-2">
                  <p className="transition-all">
                    JL. Bina Marga No. 76 RT 003 / 005, Sanja, Kec. Citeureup,
                    Kabupaten Bogor, Jawa Barat 16810
                  </p>
                </div>
              </div>
            </ul>
            <ul>
              {/* phone */}
              <div className="w-full sm:w-1/2 lg:w-3/12">
                <ul>
                  <div className="w-full">
                    <h4 className="mb-2 capitalize text-lg font-semibold text-white">
                      Phone
                    </h4>
                    <div className="mb-6 flex flex-col gap-1">
                      <Link
                        href="https://wa.me/6281575453564"
                        target="_blank"
                        className="hover:text-green-500 transition-all"
                        title="Head Office "
                      >
                        +6281575453564 <span className="sm:hidden">(Head Office)</span>
                      </Link>
                      <Link
                        href="https://wa.me/6282133112840"
                        target="_blank"
                        className="hover:text-green-500 transition-all"
                        title="Serpong"
                      >
                         +6282133112840 <span className="sm:hidden">(Serpong)</span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </ul>
          </div>
          {/* connect with us */}
          <div className="w-full sm:px-4 px-0 sm:w-1/2 lg:w-3/12">
            <ul>
              <div className="w-full sm:w-1/2 lg:w-3/12">
                <ul>
                  <div className="w-full">
                    <h4 className="mb-2 capitalize text-lg font-semibold text-white">
                      email
                    </h4>
                    <div className="mb-6 flex flex-col gap-1">
                      <Link href="mailto:admin@freshbeton.com" className="hover:text-green-500 transition-all">
                        admin@freshbeton.com
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </ul>
            <ul>
              <div className="mb-10 sm:pt-[71px] pt-0  w-full">
                <h4 className="mb-2 capitalize text-lg font-semibold text-dark dark:text-white">
                  connect with us
                </h4>
                <div className="mb-6 flex items-center gap-2">
                  <Link
                    href="https://www.facebook.com/Freshbetonindonesia/"
                    target="_blank"
                    title="facebook fresh beton indonesia"
                  >
                    <Image
                      // size={32}
                      src={"/logo 5.png"}
                      alt={"facebook icon"}
                      width={25}
                      height={25}
                      className="hover:scale-110  rounded-md transition-all"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/freshbeton_indonesia/"
                    target="_blank"
                    title="instagram fresh beton indonesia"
                  >
                    <Image
                      src={"/logo4.png"}
                      alt={"instagram icon"}
                      // size={25}
                      width={25}
                      height={25}
                      className="hover:scale-110 rounded-md transition-all"
                    />
                  </Link>
                  <Link
                    href="https://www.tokopedia.com/freshbeton"
                    target="_blank"
                    title="tokopedia fresh beton indonesia"
                  >
                    <Image
                      // size={25}
                      src="/logo1.png"
                      className="hover:scale-110  rounded-md transition-all"
                      alt={"tokopedia icon"}
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/71995887/admin/feed/posts/"
                    target="_blank"
                    title="linkedin fresh beton indonesia"
                  >
                    <Image
                      // size={25}
                      src="/logo2.png"
                      className="hover:scale-110  rounded-md transition-all"
                      alt={"tokopedia icon"}
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@farrasindo_group?_t=8lvFzjDQswD&_r=1"
                    target="_blank"
                    title="tiktok fresh beton indonesia"
                  >
                    <Image
                      // size={25}
                      src="/logo 3.png"
                      className="hover:scale-110  rounded-md transition-all"
                      alt={"tokopedia icon"}
                      width={25}
                      height={25}
                    />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="w-full sm:px-4 px-0 sm:w-2/3 lg:w-3/12">
            <div className="w-full">
              <GoogleMaps
                location={{
                  lat: 0,
                  lng: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:flex-row flex-wrap sm:justify-center justify-start items-center mb-6">
          <div className="flex items-center">
            <p className="text-base text-body-color pt-5 capitalize mb-0">
              Copyright &copy; {getCurrentDate()} fresh beton indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <>
      <div className="w-full sm:px-4 px-0 sm:w-1/2 lg:w-2/12">
        <div className="mb-7 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3 flex flex-col justify-center items-center">
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
