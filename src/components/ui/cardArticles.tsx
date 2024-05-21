"use client";

import React from "react";
import { ArticleData } from "@/data/ArticlesData";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Card = ({ article }: { article: (typeof ArticleData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/article/detail/${article.id}`);
  };

  // Fungsi untuk membatasi teks menjadi 100 karakter
  const truncateContent = (content: string) => {
    return content.length > 50 ? content.slice(0, 50) + "..." : content;
  };

  const truncateTitle = (title: string) => {
    return title.length > 40 ? title.slice(0, 0) + "..." : title;
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-xl sm:w-96 w-[150px] sm:m-2 m-0">
      <div className="cursor-pointer sm:h-56 h-28 relative flex items-center justify-center place-items-center">
        <Image
          src={article.image}
          alt={article.title}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-110 sm:h-56 h-28 sm:w-96 w-[200px]"
          onClick={navigateToDetail}
        />
      </div>
      <div className="p-4 flex flex-col ">
        <h1
          className="capitalize hover:text-green-500 transition-all text-black sm:text-sm text-xs mb-2"
          onClick={navigateToDetail}
        >
          {truncateTitle(article.title)}
        </h1>
      </div>
    </div>
  );
};

export default Card;
