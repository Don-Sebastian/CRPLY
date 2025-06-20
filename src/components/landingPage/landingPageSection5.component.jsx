import { GlobeImageLandingPage, IndaLocations, TickMarkLandingPage } from "@/assets";
import Image from "next/image";
import React from "react";

export default function LandingPageSection5Component() {
  const listData = [
    {
      title: "Robust supply chain with capacity for bulk exports",
    },
    {
      title: "Private labeling & OEM support for overseas partners",
    },
    {
      title: "Export team for smooth logistics and documentation",
    },
  ];
  return (
    <div className="bg-light2">
      <div className="bg-light2 max-w-[1440px] m-auto px-[20px] py-[64px] md:px-[64px] md:py-[112px] flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] items-center justify-between rounded-b-[100px]">
        <div className="py-[52px] flex flex-col gap-[32px] max-w-[650px]">
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <div className="font-bold text-[14px] md:text-[16px] text-primary underline uppercase decoration-[3px] decoration-secondary">
              Why Us
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <div className="font-bold text-primary text-[36px] md:text-[48px]">
                Global Expansion Underway
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="text-dark font-semibold text-[16px] md:text-[18px]">
                  Taking Indian Plywood to International Markets
                </div>
                <div className="md:text-[18px] text-[16px] text-dark">
                  Backed by over two decades of manufacturing expertise and
                  trusted by domestic clients across industries, we are now
                  stepping confidently onto the global stage. With scalable
                  production, export-ready specifications, and a commitment to
                  international standards, we’re ready to serve packaging and
                  plywood buyers around the world.
                </div>
              </div>
            </div>
          </div>
          <div className="md:py-[6px] flex flex-col gap-[10px] md:gap-[16px] ">
            {listData.map((item, index) => (
              <div key={index} className="flex gap-[16px] items-center">
                <div className="bg-secondary rounded-full  p-[8px]">
                  <div className="md:w-[14px] md:h-[14px] w-[12px] h-[12px] relative ">
                    <Image
                      loading="lazy"
                      src={TickMarkLandingPage}
                      alt="Tick mark"
                      className=" "
                      fill
                    />
                  </div>
                </div>
                <div className="text-dark font-[16px]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full h-[335px] md:w-[600px] md:h-[600px] relative">
          <Image
            loading="lazy"
            src={GlobeImageLandingPage}
            alt="India locations"
            className=" "
            fill
          />
        </div>
      </div>
    </div>
  );
}
