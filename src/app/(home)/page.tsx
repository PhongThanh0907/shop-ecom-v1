"use client";

import Image from "next/image";
import Banner from "./_components/Banner";
import FastDeal from "./_components/FastDeal";
import Promotion from "./_components/Promotion";
import ListProduct from "./_components/ListProduct";
import Feedback from "./_components/Feedback";

export default function Home() {
  return (
    <main className="space-y-4 bg-[#f8f8fc]">
      <Banner />
      <FastDeal />
      <Promotion />
      <div className="banner-hover width-screen h-[205px] rounded-xl">
        <Image
          className="h-full w-full"
          src="https://kccshop.vn/media/category/cat_big_2_1667211611.png"
          alt="banner"
          width={1300}
          height={203}
        />
      </div>
      <div className="py-4">
        <ListProduct />
      </div>

      <Feedback />
    </main>
  );
}
