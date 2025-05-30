"use client"
import { CRLogoIcon, CRPLYLogoIcon } from '@/assets';
import CustomMUIButton from '@/elements/mui/customButton';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function NavbarComponent() {

  const [openMenu, setopenMenu] = useState(false)

  return (
    <div className="px-[20px] md:px-[64px] gap-[32px] py-[16px] flex flex-col md:flex-row justify-between">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="flex gap-[10px] items-center ">
          <div className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] relative">
            <Image src={CRLogoIcon} alt="CRLOGO" fill />
          </div>
          <div className="w-[98px] h-[22px] md:w-[100px] md:h-[34px] relative">
            <Image src={CRPLYLogoIcon} alt="CRPLY" className="" fill />
          </div>
        </Link>
        <div className="md:hidden block text-secondary">
          {openMenu && <CloseIcon onClick={() => setopenMenu(false)} />}
          {!openMenu && <MenuIcon onClick={() => setopenMenu(true)} />}
        </div>
      </div>
      <div className={`${ openMenu ? " block " : " hidden md:block "}" flex flex-col md:flex-row gap-[32px]  md:items-center "`}>
        <div className="flex flex-col md:flex-row justify-between gap-[12px] md:gap-[32px] text-tertiary">
          <Link href={"/about-us"}>About</Link>
          <Link href={"/products"}>Product</Link>
          <Link href={"/vision"}>Vision</Link>
          <Link href={"/gallery"}>Gallery</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-[16px]">
          <CustomMUIButton outlined className="">
            Sales
          </CustomMUIButton>
          <CustomMUIButton className="">Contact</CustomMUIButton>
        </div>
      </div>
    </div>
  );
}
