import { CRLogoIcon, CRPLYLogoIcon } from '@/assets';
import Image from 'next/image';
import React from 'react'

export default function NavbarComponent() {
  return (
    <div className="px-[64px] py-[16px] flex justify-between">
      <div className="flex gap-[10px] items-center ">
        <div className="w-[40px] h-[40px] relative">
          <Image src={CRLogoIcon} alt="CRLOGO" fill />
        </div>
        <div className="w-[100px] h-[34px] relative">
          <Image src={CRPLYLogoIcon} alt="CRPLY" className="" fill />
        </div>
      </div>
      <div className="flex gap-[32px]">
        <div>links</div>
        <div className="flex">
          {/* <Button variant="contained">Contained</Button> */}
        </div>
      </div>
    </div>
  );
}
