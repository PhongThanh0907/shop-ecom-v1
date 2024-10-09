"use client";

import { Send } from "lucide-react";
import React, { useState } from "react";

const CusRes = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-orange py-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex-between">
          <div className="flex items-center gap-4">
            <div
              style={{
                background: "url(/assets/icon.png)",
                backgroundPosition: `-2px -89px`,
              }}
              className="w-[55px] h-[55px]"
            ></div>
            <div className="text-white space-y-1">
              <p className="font-semibold text-2xl">Nhận tin khuyến mãi</p>
              <p className="italic leading-[20px]">
                Bạn vui lòng để lại Email để nhận thông tin
                <br /> khuyến mãi từ Kccshop
              </p>
            </div>
          </div>

          <div className="relative w-[550px]">
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Nhập email đăng ký nhận tin khuyến mãi"
              className="outline-transparent border border-gray-400 rounded-lg h-14 pl-4 pr-12 focus:outline-blue-400 duration-300 w-full"
            />
            <Send className="text-orange absolute top-1/2 right-4 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusRes;
