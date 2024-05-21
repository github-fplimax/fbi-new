import React from "react";
import { LocationData } from "@/data/LocationData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({ location }: { location: (typeof LocationData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/location/detail/${location.id}`);
  };

  const redirectToUrl = () => {
    // Open the URL in a new tab
    window.open(location.urlAddress, "_blank");
  };

  return (
    <div
      // data-aos="zoom-in"
      className="bg-white rounded-md overflow-hidden shadow-xl sm:w-80 w-[150px] sm:m-2 m-0"
      // className="bg-white rounded-md overflow-hidden shadow-xl sm:w-80 w-40 xl:w-32 sm:m-2 m-0"
      // className="bg-white rounded-md overflow-hidden shadow-xl w-full sm:w-80 xs:w-60 m-2 xs:m-1 sm:m-2"
    >
      <div
        onClick={redirectToUrl}
        className="cursor-pointer sm:h-48 h-28 relative flex items-center justify-center place-items-center"
      >
        <Image
          src={location.imageThumbnail}
          alt={location.title}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-110"
        />
       
      </div>
      <div className="p-4 text-center flex flex-col justify-center items-center">
        <h1
          className="capitalize font-bold hover:text-green-500 transition-all cursor-pointer text-black sm:text-xl text-xs"
          onClick={navigateToDetail}
        >
          {location.title}
          {/* <br />
          {location.titleLocation} */}
        </h1>
        <p className="capitalize font-bold text-green-500 transition-all sm:text-xl text-xs mb-2">{location.titleLocation}</p>

        <Link href={location.contactLink}>
          <p className="text-black sm:text-lg text-xs hover:text-green-500 transition-all mb-4">
            {location.contact}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
