"use client";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { APIProvider, ColorScheme, Map, Marker } from "@vis.gl/react-google-maps";
import Link from "next/link";
import Image from "next/image";
import { CRPLY_Footer, CRPLY_Footer_Shadow } from "@/assets";

export default function FooterComponent() {
  
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-[20px] py-[48px] md:px-[64px] md:py-[80px] max-w-[1440px] m-auto">
      <div className="flex gap-[40px] md:gap-[88px] flex-col lg:flex-row justify-between">
        <div className="flex gap-[40px] md:gap-[88px] flex-col md:flex-row">
          <div className="flex flex-col gap-[12px]">
            <Link
              className="font-bold  text-tertiary text-[20px]"
              href={"/about-us"}
            >
              About Us
            </Link>
            <Link className="text-tertiary" href={"/products"}>
              Products
            </Link>
            <Link className="text-tertiary" href={"/vision"}>
              Vision
            </Link>
            <Link className="text-tertiary" href={"/gallery"}>
              Gallery
            </Link>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="font-bold text-tertiary text-[20px]">
              Contact Us
            </div>
            <div className=" flex gap-[12px] text-tertiary text-[14px] ">
              <PhoneOutlinedIcon />
              <div>
                <a
                  className="hover:underline decoration-tertiary underline-offset-2"
                  href={`tel:${"+916282241546"}`}
                >
                  +91 6282241546
                </a>
                {", "}
                <a
                  className="hover:underline decoration-tertiary underline-offset-2"
                  href={`tel:${"+919447909261"}`}
                >
                  +91 9447909261
                </a>
              </div>
            </div>
            <div className=" flex gap-[12px] text-tertiary text-[14px] items-center">
              <EmailOutlinedIcon />
              <div>
                <a
                  className="hover:underline hover:cursor-pointer decoration-tertiary underline-offset-2"
                  href={`mailto:${"plywoodchristuraj@gmail.com"}`}
                >
                  plywoodchristuraj@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="font-bold text-tertiary text-[20px]">
              Our Location
            </div>
            <div className=" flex gap-[12px] text-tertiary text-[14px] ">
              <LocationOnOutlinedIcon />
              <div className="max-w-[190px]">
                Old 273A New 145, Koozhoor, Airapuram, Ernakulam, Kerala-683541
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[335px] lg:w-[400px] lg:h-[190px] rounded-[10px] overflow-hidden">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={{ lat: 10.050332, lng: 76.522543 }}
              defaultZoom={15}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              colorScheme={ColorScheme.DARK}
            />
            <Marker
              position={{ lat: 10.050332, lng: 76.522543 }}
              onClick={() => window.open("https://g.co/kgs/QznJXbZ", "_blank")}
            />
          </APIProvider>
        </div>
      </div>
      <div className="md:py-[80px] py-[40px]">
        <hr className="border-tertiary" />
        <div className="mt-[32px]">
          <div className="text-[14px] text-tertiary">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:py-[40px] ">
        <div className="w-[1034px] md:h-[300px] h-[200px] group relative ">
          <Image src={CRPLY_Footer} alt="CRPLY" className="absolute " fill />
          <Image
            src={CRPLY_Footer_Shadow}
            alt="CRPLY"
            className=" absolute transition-all group-hover:translate-x-[5px] group-hover:translate-y-[5px]  duration-[1500ms] opacity-75 "
            fill
          />
          <Image
            src={CRPLY_Footer_Shadow}
            alt="CRPLY"
            className=" absolute transition-all group-hover:translate-x-[10px] group-hover:translate-y-[10px]  duration-[1500ms] opacity-50 "
            fill
          />
          <Image
            src={CRPLY_Footer_Shadow}
            alt="CRPLY"
            className=" absolute transition-all group-hover:translate-x-[15px] group-hover:translate-y-[15px]  duration-[1500ms] opacity-25"
            fill
          />
        </div>
      </div>
    </footer>
  );
}
