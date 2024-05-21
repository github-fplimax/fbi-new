import React, { Suspense } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";



const CarouselHero = () => {
   // Custom function to render the indicators
   const customIndicator = (
    onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    const defStyle = {
      marginLeft: 8,
      marginRight: 8,
      cursor: 'pointer',
      backgroundColor: isSelected ? '#22c55e' : '#ffffff',
      height: 5,
      // width: 30,
      width: isSelected ? 50 : 30,
      borderRadius: 4,
      // paddingBottom : 2, 
      marginBottom : 5, 
      display: 'inline-block',
      transition: 'background-color 0.3s ease',
    };

    return (
      <div
        style={defStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        // value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <section className="pt-[70px] sm:pt-0">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        interval={2000}
        // renderIndicator={() => null}
        renderIndicator={customIndicator}
      >
        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>

            <Image
              src="/COMPANY SUMMARY.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 sm:top-1/2 top-3/4  sm:w-64 w-auto flex flex-col items-start sm:-translate-y-1/2 sm:mt-40 mt-0  -translate-y-0 lg:items-center justify-center z-20 ">
              {/* <div className="absolute top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              <div className="sm:pl-0 pl-[75px]">
                <h1 className="bg-green-500 text-center uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Fresh beton indonesia
                </h1>
              </div>
              <p className="text-white pb-10 pt-2 text-sm font-normal">
                Established in 2018 and still continuing to shape the future of
                infrastructure, one project at a time.
              </p>
            </div>
          </div>
          <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px] w-screen">
            <span className="font-bold pt-4">PT. Fresh Beton Indonesia</span> is
            a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years.
          </div>
        </div>

        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>
            <Image src="/BANNER 2.jpg" alt="" layout="fill" objectFit="cover" />
            {/* <div className="absolute sm:top-1/2 top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20 sm:pb-0 pb-14"> */}
            <div className="absolute bottom-0 left-0 top-3/4 sm:top-1/2 sm:w-64 w-auto flex flex-col items-start sm:-translate-y-1/2 sm:mt-40 mt-0 -translate-y-0 lg:items-center justify-center z-20 ">
              {/* <div className="absolute top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              <div className="pl-[94px] sm:pl-0">
                <h1 className="bg-green-500 uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Quality & Services
                </h1>
              </div>
              <p className="text-white  pb-8 pt-2  text-sm  font-normal">
                Ensures top-notch concrete products, prioritizes client
                satisfaction and efficiency.
              </p>
            </div>
          </div>
          <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px]">
            <span className="font-bold  pt-4">PT. Fresh Beton Indonesia</span>{" "}
            is a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years.
          </div>
        </div>

        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>
            <Image
              src="/MATERIALS QUALITY.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />

            {/* <div className="absolute sm:top-1/2 top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
            <div className="absolute bottom-0 left-0 top-3/4 sm:top-1/2 sm:w-64 w-auto flex flex-col sm:-translate-y-1/2 sm:mt-40 mt-0  -translate-y-0 items-start lg:items-center justify-center z-20 ">
              {/* <div className="absolute top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              <div className="pl-[94px] sm:pl-0">
                <h1 className="bg-green-500 uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Materials Quality
                </h1>
              </div>
              <p className="text-white pb-10 pt-2 text-sm font-normal">
                Top-notch quality and excellence material from PT Gunung Bumi
                Perkasa.
              </p>
            </div>
          </div>
          <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px]">
            <span className="font-bold  pt-4">PT. Fresh Beton Indonesia</span>{" "}
            is a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years.
          </div>
        </div>
        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>
            <Image
              src="/SPECIALIZING IN REMOTE AREAS.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 top-3/4 sm:top-1/2 sm:w-64 w-auto flex sm:-translate-y-1/2 sm:mt-40 mt-0  -translate-y-0 flex-col items-start lg:items-center justify-center z-20 ">
              {/* <div className="absolute sm:top-1/2 top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20 sm:pb-0 pb-14"> */}
              {/* <div className="absolute top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              <div className="sm:pl-0 pl-[33px]">
                <h1 className="bg-green-500 uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Specializing in Remote Areas
                </h1>
              </div>
              <p className="text-white pb-10 pt-2 text-sm font-normal">
                Even the most isolated locations have access to high-quality
                construction materials.
              </p>
            </div>
          </div>
          <div className="mx-4 sm:hidden block sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px]">
            <span className="font-bold  pt-4">PT. Fresh Beton Indonesia</span>{" "}
            is a company engaged in the field of ready-mixed concrete (readymix)
            and precast concrete. Fresh Beton Readymix was established in March
            2018 with the establishment of We are a family owned business and
            have been involved in supplying ready-mix concrete batching plants
            and equipment to the industry over the last 25 years.
          </div>
        </div>
        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>
            <Image src="/banner 5.jpg" alt="" layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 top-3/4 sm:top-1/2  sm:w-64 w-auto sm:-translate-y-1/2 -translate-y-0 sm:mt-40 mt-0  flex flex-col items-start lg:items-center justify-center z-20 ">
              {/* <div className="absolute sm:top-1/2 top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              {/* <div className="absolute top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
              <div className="pl-[87px] sm:pl-0">
                <h1 className="bg-green-500 uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Portfolio & Project
                </h1>
              </div>
              <p className="text-white sm:pl-0 pl-[87px] pb-10 pt-2 text-sm font-normal">
                Over 2.000 projects nationwide.
              </p>
            </div>
          </div>
          <div className=" mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44  text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px]"></div>
        </div>
        <div className="text-center text-white relative">
          <div className="absolute inset-0 z-0 h-[400px] w-full flex pb-[200px] sm:pb-[350px] lg:pb-[550px] items-center justify-center">
            {/* Apply gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent sm:hidden block"></div>
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-transparent sm:hidden block"></div> */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent hidden sm:block"></div>
            <Image
              src="/FBI - BATCHING PLANT COMING SOON -.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            {/* <div className="absolute sm:top-1/2 top-3/4 sm:left-0 left-1/2 transform sm:-translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20"> */}
            <div className="absolute bottom-0 left-0 sm:top-1/2 top-3/4 sm:-translate-y-1/2 sm:mt-40 mt-0 -translate-y-0 sm:w-64 w-auto flex flex-col items-start lg:items-center justify-center z-20 ">
              <div className="sm:pl-0 pl-[124px]">
                <h1 className="bg-green-500 uppercase text-[#252525] sm:text-xl text-lg sm:p-2 p-1 font-bold">
                  Coming Soon
                </h1>
              </div>
              <p className="text-white sm:pl-0 pl-[64px] pb-10 pt-2 text-sm uppercase">
                new batching plant in west java
              </p>
            </div>
          </div>
          <div className=" mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44  text-justify pt-[200px] sm:pt-[350px] lg:pt-[550px]"></div>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselHero;
