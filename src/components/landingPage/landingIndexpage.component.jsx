import { PlywoodImageMain } from "@/assets";
import CustomMUIButton from "@/elements/mui/customButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import React from "react";

export default function LandingPageSection1Component() {
  return (
    <div className="relative  h-[750px]">
      <Image
        src={PlywoodImageMain}
        alt="Plywood"
        className="-mt-[28px] absolute "
        fill
      />
      <div className="py-[80px] md:py-[150px] px-[20px] flex flex-col items-center  justify-center ">
        <div className=" z-10 flex flex-col items-center  justify-center gap-[16px] md:gap-[24px] -mt-[50px]">
          <div className="flex justify-center items-center ">
            <div className=" gap-[12px] flex items-center bg-[#F4FFD6] text-center  p-[4px] rounded-full ">
              <div className="px-[10px] py-[3px] bg-secondary rounded-full text-[12px] md:text-[14px] font-medium">
                New
              </div>
              <div className="text-[12px] md:text-[14px] font-medium text-primary">
                Borpath White Ply
                <ArrowForwardIcon
                  fontSize="small"
                  className="mx-[4px]"
                  sx={{ color: "primary" }}
                />
              </div>
            </div>
          </div>
          <div className="text-light text-center font-bold font-dmSans text-[40px] md:text-[72px]">
            Crafting Strength, Layer by Layer.
          </div>
          <div className="text-light text-center  font-medium font-dmSans text-[16px] md:text-[20px] max-w-[938px]">
            For 25+ years, we've delivered precision-engineered plywood
            solutions trusted by packaging leaders across India — and now, the
            world
          </div>
          <div className="pt-[16px] flex flex-col md:flex-row gap-[16px]">
            <CustomMUIButton
              endIcon={
                <ArrowForwardIcon
                  sx={{ color: "primary" }}
                  className="hidden md:block"
                />
              }
            >
              Give an enquiry
            </CustomMUIButton>
            <CustomMUIButton
              outlined
              endIcon={
                <ArrowForwardIcon
                  sx={{ color: "primary" }}
                  className="hidden md:block"
                />
              }
            >
              Contact sales
            </CustomMUIButton>
          </div>
        </div>
      </div>
    </div>
  );
}
