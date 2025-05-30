import { IndaLocations, TickMarkLandingPage } from "@/assets";
import Image from "next/image";
import React from "react";

export default function LandingPageSection3Component() {
  const listData = [
      {
        title: "Consistent supply even for high-volume needs",
      },
      {
        title: "Quick turnaround and on-time delivery",
      },
      {
        title: "Dedicated B2B support for long-term partnerships",
      },
    ];
    return (
      <div className="bg-light2 px-[20px] py-[64px] md:px-[64px] md:py-[112px] flex flex-col md:flex-row gap-[px] lg:gap-[80px] items-center">
        <div className="w-[640px] h-[640px] min-w-[350px] relative hidden md:block">
          <Image src={IndaLocations} alt="India locations" className=" " fill />
        </div>
        <div className="py-[52px] flex flex-col gap-[32px] max-w-[592px]">
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <div className="font-bold text-[14px] md:text-[16px] text-primary underline uppercase decoration-[3px] decoration-secondary">
              Why Us
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <div className="font-bold text-primary text-[36px] md:text-[48px]">
                Trusted Across India
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="text-dark font-semibold text-[16px] md:text-[18px]">
                  Supplying Packaging-Grade Plywood to Clients Nationwide
                </div>
                <div className="md:text-[18px] text-[16px] text-dark">
                  From industrial hubs in Maharashtra to port cities in Tamil
                  Nadu, our plywood solutions support packaging companies across
                  more than 10 Indian states. With consistent quality, reliable
                  logistics, and client-first service, we’ve become the go-to
                  supplier for businesses that demand strength, precision, and
                  timely delivery.
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
        <div className="w-[335px] h-[335px] relative md:hidden">
          <Image src={IndaLocations} alt="India locations" className=" " fill />
        </div>
      </div>
    );
}
