"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowRightIcon, BlancPlyImage, TerraPlyImage } from "@/assets";
import Image from "next/image";

const ProductData = [
  {
    title: "CRply BLANC",
    subTitle: "Borpath-Faced Commercial Plywood",
    subHeading: "Clean Finish. Pure Performance.",
    description:
      "Packing-grade plywood with a cleaner, pale-white Borpath face — built for export packaging and where aesthetics meet efficiency.",
    points: [
      "White-faced packing boxes",
      "Export packaging",
      "High-contrast labeling and stamping",
    ],
    image: BlancPlyImage,
  },
  {
    title: "CRply EDGE",
    subTitle: "Packing & General Purpose Plywood",
    subTitle2: "(Okoume-Faced)",
    subHeading: "Naturally Strong. Sustainably Made.",
    description:
      "Built for strength and stability. Sustainably sourced, it balances performance with eco-conscious design.",
    points: [
      "Pallets & crates",
      "Packaging boxes",
      "Furniture frameworks",
      "Industrial partitions",
      "General utility carpentry",
    ],
    image: TerraPlyImage,
  },
];

// export async function generateMetadata({params}) {
//   return {
//     title: ProductData.[0].title,
//     description: ProductData.[0].description
//     // openGraph: {
//     //   images: {
//     //     url: ProductData.[0].imageUrl
//     //   }
//     // }
//   }
// }

export default function ProductsPageSection2Component() {
  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-light py-[64px] md:py-[94px] px-[20px] md:px-[64px] rounded-[50px] md:rounded-[100px] -mt-[114px] relative">
      <div className="max-w-[1440px] m-auto flex flex-col gap-[32px] relative">
        <div className="absolute z-20 top-4   right-0">
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="md:w-[50px] cursor-pointer md:h-[50px] w-[25px] h-[25px] relative "
          >
            <Image src={ArrowRightIcon} alt="arrow icon" className=" " fill />
          </button>
        </div>
        <div className="absolute z-20 top-4  right-14">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="md:w-[50px] cursor-pointer md:h-[50px] w-[25px] h-[25px] relative "
          >
            <Image
              src={ArrowRightIcon}
              alt="arrow icon"
              className=" rotate-180 "
              fill
            />
          </button>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {ProductData.map((item, index) => (
            <div key={index}>
              <div className="font-bold text-primary text-[36px] md:text-[48px]">
                {item.title}
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-[50px] items-center mt-[44px]">
                <div className=" max-w-[620px] w-full h-[335px] md:w-[620px] md:h-[540px] rounded-[32px] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-[32px]"
                  />
                </div>
                <div>
                  <p className="font-bold text-primary text-[20px] md:text-[28px]">
                    {item.subTitle}
                  </p>
                  {item.subTitle2 && (
                    <p className="font-bold text-primary -mt-2 text-[18px] md:text-[20px]">
                      {item.subTitle2}
                    </p>
                  )}
                  <h3 className="font-semibold text-[16px] md:text-[18px] mt-[24px]">
                    {item.subHeading}
                  </h3>
                  <p className=" text-[16px] md:text-[18px]">
                    {item.description}
                  </p>
                  <p className=" text-[16px] md:text-[18px]">Best for:</p>
                  <ul className="list-disc pl-5 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
