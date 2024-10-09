"use client";

import { Check, PlusCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";

const ItemProduct = () => {
  return (
    <div className="h-[420px] bg-white rounded-xl overflow-hidden p-4 relative shadow">
      <div className="flex-center-row relative">
        <Image
          src="https://kccshop.vn/media/product/250-7494-wrwrw.jpg"
          className="w-[210px] h-[200px]"
          alt="img"
          height={202}
          width={202}
        />
        <div className="absolute bottom-0 left-0">
          <Image
            src="/assets/static.png"
            alt="img"
            width={82}
            height={32}
            className="w-24 h-[38px]"
          />
          <div className="absolute bottom-0.5 left-1.5 flex flex-col gap-0.5">
            <span className="text-[8px] text-yellow-400 uppercase">
              Tiết kiệm
            </span>
            <span className="text-xs text-white font-semibold">559.000đ</span>
          </div>
        </div>
      </div>
      <h1 className="text-sm hover:text-blue-500 duration-300 cursor-pointer pt-2 pb-3">
        VGA Colorful iGame RTX 4080 SUPER Ultra W OC 16G-V
      </h1>
      <span className="text-blue-800 font-bold text-xl">4.430.000 đ</span>
      <div className="space-x-2">
        <span className="text-sm line-through">5.290.000 đ</span>
        <span className="text-blue-800 text-sm">-15%</span>
      </div>
      <div className="flex justify-between items-center pt-1">
        <div className="flex flex-col justify-start">
          <div className="flex text-sm gap-1">
            <Check size={16} />
            Còn 5 DEAL
          </div>
          <div className="flex text-sm gap-1 text-orange">
            <PlusCircle size={16} />
            <span>So sánh</span>
          </div>
        </div>

        <div className="bg-[#eee] h-[32px] w-[32px] flex-center-row rounded">
          <ShoppingBag size={22} color="#7e7e7e" />
        </div>
      </div>

      <div className="h-[17px] absolute bottom-3.5 inset-x-0">
        <div
          className="mx-4 h-full rounded-full"
          style={{
            background: "var(--bg-gradient-4)",
          }}
        />
        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold">
          <span>Đã bán 2</span>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
