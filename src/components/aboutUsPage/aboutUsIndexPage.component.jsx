import React from 'react'
import Image from "next/image";
import { AboutUsBanner } from "@/assets";


export default function AboutUsIndexPageComponent() {
  return (
    <>
      <div className="relative h-[320px] md:h-[550px]">
        <Image
          src={AboutUsBanner}
          alt="Plywood"
          className="absolute opacity-50"
          fill
        />
        <div className="max-w-[1440px] m-auto relative  z-10">
          <div className="  md:px-[64px] py-[88px] md:py-[235px] px-[20px]">
            <div className="text-light  font-medium font-dmSans text-[40px] md:text-[72px]">
              🌿About CRPLY
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light relative  z-10 -mt-[114px]">
        <div className="max-w-[1440px]  m-auto ">
          <div className=" py-[40px] md:py-[100px] px-[20px] md:px-[64px] ">
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <div className="font-bold text-primary text-[20px] md:text-[28px]">
                Our Team
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
        </div>
      </div>
      <div className="bg-primary">
        <div className="max-w-[1440px]  m-auto ">
          <div className=" py-[40px] md:py-[100px] px-[20px] md:px-[64px] ">
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <div className="font-bold text-light text-[20px] md:text-[28px]">
                Our Vision
              </div>
              <div className="flex flex-col gap-[5px]">
                {/* <div className="text-light font-semibold text-[16px] md:text-[18px]">
                    Taking Indian Plywood to International Markets
                  </div> */}
                <div className="md:text-[18px] text-[16px] text-light">
                  To be a globally recognized plywood brand from India — rooted
                  in trust, driven by innovation, and committed to responsible
                  growth that supports people, partners, and the planet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="max-w-[1440px]  m-auto ">
          <div className=" py-[40px] md:py-[100px] px-[20px] md:px-[64px] ">
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              <div className="font-bold text-primary text-[20px] md:text-[28px]">
                Our Mission
              </div>
              <div className="flex flex-col gap-[5px]">
                {/* <div className="text-dark font-semibold text-[16px] md:text-[18px]">
                    Taking Indian Plywood to International Markets
                  </div> */}
                <div className="md:text-[18px] text-[16px] text-dark">
                  To manufacture reliable, sustainable plywood that empowers
                  industries to build with confidence — by combining decades of
                  craftsmanship with ethical practices and consistent quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
