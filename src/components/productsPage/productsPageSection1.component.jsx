"use client";
import { ProductsImageMainSection } from "@/assets";
import Image from "next/image";
import React from "react";

export default function ProductsPageSection1Component() {
  return (
    <div className="relative h-[320px] md:h-[550px]">
      <Image
        src={ProductsImageMainSection}
        alt="Plywood"
        className="absolute opacity-50"
        fill
      />
      <div className="max-w-[1440px] m-auto relative  z-10">
        <div className="  md:px-[64px] py-[88px] md:py-[235px] px-[20px]">
          <div className="text-light  font-medium font-dmSans text-[40px] md:text-[72px]">
            Our Plywood Range
          </div>
        </div>
      </div>
    </div>
  );
}
