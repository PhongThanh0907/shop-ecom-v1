import Image from "next/image";
import React from "react";

const ItemNew = () => {
  return (
    <div className="shadow-lg border rounded-xl overflow-hidden">
      <Image
        className="w-full "
        src="https://kccshop.vn/media/news/0-thumb.jpg"
        alt="img"
        height={168}
        width={290}
      />
      <div className="space-y-1.5 px-3 pt-2 pb-4">
        <h4 className="text-xl font-semibold leading-[24px]">
          Khuyến mãi trao tay cùng LG Smart Monitor
        </h4>
        <p className="text-sm">
          Khuyến mãi trao tay cùng LG Smart Monitor. Khuyến mãi trao tay cùng LG
          Smart Monito
        </p>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="bg-white pt-8 pb-6">
      <div className="width-screen">
        <div className="flex-between">
          <span className="text-2xl font-semibold">TIN TỨC VÀ KẾT NỐI</span>
          <span className="uppercase text-blue-800 hover:text-orange duration-300 cursor-pointer font-semibold">
            Xem tất cả +
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-5">
          <ItemNew />
          <ItemNew />
          <ItemNew />
          <ItemNew />
        </div>
      </div>
    </div>
  );
};

export default News;
