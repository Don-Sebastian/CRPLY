import { PlywoodProductLogoLandingPage } from '@/assets';
import CustomMUIButton from '@/elements/mui/customButton';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from 'next/image';
import React from 'react'

export default function LandingPageSection4Component() {
  return (
    <div className="px-[20px] md:px-[64px] py-[64px] md:py-[112px] bg-light">
      <div className="bg-primary max-w-[1440px] m-auto px-[20px] md:px-[88px] py-[20px] md:py-[60px] rounded-[20px] md:rounded-[32px] flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]   lg:justify-between">
        <div className="flex gap-[16px] md:gap-[24px] flex-col">
          <div className="text-light text-[36px] md:text-[75px] font-bold">
            Plywood
          </div>
          <div className="text-light text-[16px] md:text-[35px] font-medium">
            Exceptional range of commercial plywood.
          </div>
          <div>
            <CustomMUIButton
              endIcon={
                <ArrowForwardIcon sx={{ color: "primary" }} className="" />
              }
            >
              Check out now
            </CustomMUIButton>
          </div>
        </div>
        <div className="w-full h-[350px] lg:w-[530px] lg:h-[500px] relative rounded-[10px] ">
          <Image
            src={PlywoodProductLogoLandingPage}
            alt="India locations"
            className=" rounded-[10px] "
            fill
          />
        </div>
      </div>
    </div>
  );
}
