import { PackageIcon, PeopleDiscussIcon, ProtectIcon, SpeedIcon, SustainIcon } from "@/assets";
import Image from "next/image";
import React from "react";

export default function LandingPageSection2Component() {

  const cardData = [
    {
      icon: PackageIcon,
      title: "Engineered for Packaging",
      description: "Built tough for industrial and export packaging needs.",
    },
    {
      icon: SpeedIcon,
      title: "Reliable Order Fulfillment",
      description:
        "Consistent production for large packaging clients worldwide",
    },
    {
      icon: ProtectIcon,
      title: "Built with Precision",
      description: "Accuracy and strength tested before every dispatch",
    },
    {
      icon: SustainIcon,
      title: "Eco-Conscious Practices",
      description:
        "Low-waste production, optimized cutting and recycling of off-cuts.",
    },
  ];

  return (
    <div className=" bg-light py-[64px] md:py-[112px] px-[20px] md:px-[64px] rounded-t-[50px] md:rounded-t-[100px] -mt-[200px] relative opacity-100 z-20">
      <div className="flex-col flex gap-[24px] items-center max-w-[1440px] m-auto">
        <div className="text-primary font-bold text-[32px] md:text-[48px] text-center">
          A Legacy of Strength. A Future of Innovation.
        </div>
        <div className="text-dark text-[12px] md:text-[16px] text-center max-w-[908px]">
          Founded over 25 years ago in South India, our company has grown from a
          regional plywood manufacturer into a trusted name in industrial and
          packaging-grade plywood. Known formerly as Christuraj Veneers and
          Plywoods, our journey has been defined by a commitment to durability,
          reliability, and customer-first partnerships.
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[25px] mt-[40px] md:mt-[80px] max-w-[1440px] m-auto">
        <div className="bg-primary rounded-[9px] p-[24px] col-span-2">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-[20px] md:gap-[56px] py-[20px] md:py-[32px]">
            <div className="min-w-[100px] min-h-[80px] relative md:hidden">
              <Image
                src={PeopleDiscussIcon}
                alt="people discuss icon"
                className=" "
                fill
              />
            </div>
            <div className="flex flex-col gap-[12px] md:gap-[16px] max-w-[514px]">
              <div className="text-[24px] lg:text-[28px] text-light font-bold">
                Built on Trust. Strengthened by Time.
              </div>
              <div className="text-[12px] lg:text-[16px] text-light">
                For over two decades, our journey in plywood manufacturing has
                been driven by more than just machines and materials — it's
                powered by people. Cross-functional teamwork, deep industry
                knowledge, and a shared commitment to quality define every
                product we deliver.
              </div>
            </div>
            <div className="min-w-[244px] min-h-[148px] relative hidden md:block">
              <Image
                src={PeopleDiscussIcon}
                alt="people discuss icon"
                className=" "
                fill
              />
            </div>
          </div>
        </div>
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-primary rounded-[9px] p-[24px] col-span-2 md:col-span-1 flex flex-col md:gap-[20px] gap-[32px]"
          >
            <div className="relative w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
              <Image src={item.icon} alt="background Icon" fill />
            </div>
            <div className="flex flex-col gap-[12px] md:gap-[16px] max-w-[514px]">
              <div className="text-[24px] lg:text-[28px] text-light font-bold">
                {item.title}
              </div>
              <div className="text-[12px] lg:text-[16px] text-light">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
