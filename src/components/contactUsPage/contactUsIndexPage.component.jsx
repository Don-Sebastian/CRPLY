"use client";
import {
  APIProvider,
  ColorScheme,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import React from "react";

export default function ContactUsIndexPageComponent() {
  return (
    <div className="bg-light">
      <div className="max-w-[1440px]  m-auto ">
        <div className=" py-[40px] md:py-[100px] px-[20px] md:px-[64px] flex justify-between items-center md:gap-[128px]">
          <div className="flex flex-col gap-[20px] md:gap-[24px]">
            <div className="font-bold text-primary text-[20px] md:text-[28px]">
              You can find us at
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="text-dark font-semibold uppercase text-[16px] md:text-[18px]">
                email
              </div>
              <div className="md:text-[18px] text-[16px] text-dark">
                <a
                  className="hover:underline hover:cursor-pointer decoration-tertiary underline-offset-2"
                  href={`mailto:${"plywoodchristuraj@gmail.com"}`}
                >
                  plywoodchristuraj@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] max-w-[150px]">
              <div className="text-dark font-semibold uppercase text-[16px] md:text-[18px]">
                phone
              </div>
              <div className="md:text-[18px] text-[16px] text-dark ">
                <a
                  className="hover:underline  decoration-tertiary underline-offset-2"
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
            <div className="flex flex-col gap-[5px]">
              <div className="text-dark font-semibold uppercase text-[16px] md:text-[18px] min-w-[320px]">
                LOCATION - CLICK HERE TO FIND US
              </div>
              <div className="md:text-[18px] text-[16px] text-dark max-w-[300px]">
                <a
                  className="hover:underline hover:cursor-pointer  decoration-tertiary underline-offset-2"
                  href={"https://g.co/kgs/QznJXbZ"}
                  target="_blank"
                >
                  Old 273A New 145, Koozhoor, Airapuram, Ernakulam,
                  Kerala-683541
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-[335px] hidden lg:block  lg:h-[350px] rounded-[10px] overflow-hidden">
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
                onClick={() =>
                  window.open("https://g.co/kgs/QznJXbZ", "_blank")
                }
              />
            </APIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
