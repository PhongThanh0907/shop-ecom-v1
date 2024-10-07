import Image from "next/image";
import React from "react";
import InputSearch from "./InputSearch";
import { Computer, PhoneOutgoing, ShoppingBag } from "lucide-react";

const HeaderBar = () => {
  return (
    <div className="width-screen flex items-center gap-4 py-4">
      <Image
        src="https://kccshop.vn/media/banner/header_KCCSHOP%20Cam.png"
        alt="logo"
        width={230}
        height={56}
      />
      <InputSearch />

      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <PhoneOutgoing size={34} color="#ff7e00" />
          <div className="text-black hover:text-orange duration-300 cursor-pointer flex flex-col text-sm">
            <span>Hotline mua hàng</span>
            <span className="font-semibold">0912.074.444</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Computer size={34} color="#ff7e00" />
          <div className="text-black hover:text-orange duration-300 cursor-pointer flex flex-col text-sm">
            <span>Xây dựng</span>
            <span className="font-semibold">Cấu hình PC</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ShoppingBag size={34} color="#ff7e00" />
          <div className="text-black hover:text-orange duration-300 cursor-pointer flex flex-col text-sm">
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
