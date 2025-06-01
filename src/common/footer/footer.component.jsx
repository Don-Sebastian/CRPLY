"use client";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { APIProvider, ColorScheme, Map, Marker } from "@vis.gl/react-google-maps";

export default function FooterComponent() {
  
  
  return (
    <footer className="px-[64px] py-[80px]">
      <div className="flex gap-[88px] justify-between">
        <div className="flex gap-[88px]">
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
          <div className="hidden">
            <div>about us</div>
            <div>contact us</div>
            <div>Products</div>
            <div>blog</div>
          </div>
        </div>
        <div className="w-[400px] h-[190px] rounded-[10px] overflow-hidden">
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
    </footer>
  );
}
