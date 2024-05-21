"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ButtonTranslate from "./ButtonTranslate";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 50;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="google_translate_element" className="sticky top-0 z-50">
      <div
        className={`fixed inset-0 bg-white z-50 overflow-hidden transition-transform duration-300 
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* mobile view */}
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <NavLink href="/" active={false}>
              Home
            </NavLink>
            <NavLink href="/about" active={false}>
              About Us
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="transition-all flex items-center focus:outline-none"
              >
                <NavLink href="/product" active={activePage === "/product"}>
                  Product & Services
                </NavLink>
                <CaretDown size={18} className="ml-1" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-[#FAF5EF] rounded-lg shadow-lg z-10">
                  <div className="flex flex-col p-4 gap-6">
                    <NavLink
                      active={
                        activePage === "/product/category/ready-mix-concrete"
                      }
                      href="/product/category/ready-mix-concrete"
                    >
                      Ready Mix Concrete
                    </NavLink>
                    <NavLink
                      active={activePage === "/product/category/concrete-pump"}
                      href="/product/category/concrete-pump"
                    >
                      Concrete Pump
                    </NavLink>
                    <NavLink
                      active={activePage === "/product/category/precast"}
                      href="/product/category/precast"
                    >
                      Precast
                    </NavLink>
                    <NavLink
                      active={activePage === "/product/batching-plant"}
                      href="/product/category/batching-plant"
                    >
                      Batching Plant
                    </NavLink>
                    <NavLink
                      active={
                        activePage === "/product/category/mobile-batching-plant"
                      }
                      href="/product/category/mobile-batching-plant"
                    >
                      Mobile Batching Plant
                    </NavLink>
                    <NavLink
                      active={
                        activePage === "/product/category/self-loading-mixer"
                      }
                      href="/product/category/self-loading-mixer"
                    >
                      Self Loading Mixer
                    </NavLink>
                    <NavLink
                      active={
                        activePage === "/product/category/truck-mixer"
                      }
                      href="/product/category/truck-mixer"
                    >
                      Truck Mixer
                    </NavLink>
                    <NavLink
                      active={
                        activePage === "/product/category/batch-pump"
                      }
                      href="/product/category/batch-pump"
                    >
                      Batch Pump
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink href="/portfolio" active={false}>
              Portofolio
            </NavLink>
            <NavLink href="/contact" active={false}>
              Contact Us
            </NavLink>
            <NavLink href="/article" active={false}>
              Article
            </NavLink>
          </nav>
          <button
            className="absolute top-4 right-4"
            onClick={closeMobileSidebar}
          >
            <X size={32} />
          </button>
        </div>
      </div>

      <header
        className={`transition duration-300 absolute w-full text-black p-2 flex justify-between items-center px-10 
      ${isScrolled ? "bg-white drop-shadow-md" : "bg-white drop-shadow-md"} border-b-8 border-green-500`}
      >
      {/* <header
        className={`transition duration-300 absolute w-full text-black p-4 flex justify-between items-center px-10 ${
          isScrolled ? "bg-white drop-shadow-md" : "bg-transparent"
        } ${isScrolled ? "border-b-8 border-green-500" : ""}`}
      > */}
        <button
          className="lg:hidden bg-green-500 p-1 text-black"
          onClick={toggleMobileSidebar}
        >
          <span className="sr-only">Toggle Sidebar</span>
          <List size={32} />
        </button>

        <div className="flex items-center justify-center pl-10 lg:hidden">
          <Link href="/">
            <Image src='/FRESH BETON INDONESIA copy.png' alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/">
            <Image src="/FRESH BETON INDONESIA copy.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        {/* desktop view */}
        <nav className="hidden capitalize lg:flex space-x-4 gap-4 ">
          <NavLink href="/" active={activePage === "/"}>
            home
          </NavLink>
          <NavLink href="/about" active={activePage === "/about"}>
            about us
          </NavLink>
          {/* <span>produk</span> */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="transition-all flex items-center focus:outline-none"
            >
              <NavLink href="/product" active={activePage === "/product"}>
                Product & Services
              </NavLink>
              <CaretDown size={18} className="ml-1" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-[#FAF5EF] rounded-lg shadow-lg z-10">
                <div className="flex flex-col p-4 gap-6">
                  <NavLink
                    active={
                      activePage === "/product/category/ready-mix-concrete"
                    }
                    href="/product/category/ready-mix-concrete"
                  >
                    Ready Mix Concrete
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/category/concrete-pump"}
                    href="/product/category/concrete-pump"
                  >
                    Concrete Pump
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/category/precast"}
                    href="/product/category/precast"
                  >
                    Precast
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/category/batching-plant"}
                    href="/product/category/batching-plant"
                  >
                    Batching Plant
                  </NavLink>
                  <NavLink
                    active={
                      activePage === "/product/category/mobile-batching-plant"
                    }
                    href="/product/category/mobile-batching-plant"
                  >
                    Mobile Batching Plant
                  </NavLink>
                  <NavLink
                    active={
                      activePage === "/product/category/self-loading-mixer"
                    }
                    href="/product/category/self-loading-mixer"
                  >
                    Self Loading Mixer
                  </NavLink>
                  <NavLink
                    active={
                      activePage === "/product/category/truck-mixer"
                    }
                    href="/product/category/truck-mixer"
                  >
                    Truck Mixer
                  </NavLink>
                  <NavLink
                    active={
                      activePage === "/product/category/batch-pump"
                    }
                    href="/product/category/batch-pump"
                  >
                    Batch Pump
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink href="/portfolio" active={activePage === "/portfolio"}>
            portfolio
          </NavLink>
          <NavLink href="/article" active={activePage === "/article"}>
            article
          </NavLink>
          <NavLink href="/contact" active={activePage === "/contact"}>
            contact us
          </NavLink>
        </nav>
        {/* button translate */}
        <div className="flex flex-row gap-3 items-center">
          {/* <select className="bg-transparent">
            <option value="ID">
              <Link href="/id" target="_blank">ID</Link>
            </option>
            <option value="EN">
              <Link href='/'>EN</Link>
            </option>
          </select> */}
          <ButtonTranslate/>
          {/* <MagnifyingGlass size={32} /> */}
          <SearchBar/>
        </div>
      </header>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div
        className={`hover:text-green-500 ${
          active ? "border-b-2 border-green-500" : ""
        } text-black`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Header;
