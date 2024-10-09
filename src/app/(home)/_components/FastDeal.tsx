"use client";

import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemProduct from "@/components/ItemProduct";
import { useRef } from "react";

const FastDeal = () => {
  const slideRef = useRef<Slider>(null);

  const NextArrow = () => {
    return (
      <div
        className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-1 flex justify-center items-center h-12 w-12 rounded-l-full bg-[#9ca3af5c]"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        <ChevronRight size={40} className="text-white relative -right-1" />
      </div>
    );
  };

  const PrevArrow = () => {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        className="absolute z-10 cursor-pointer top-1/2 transform -translate-y-1/2 left-1 flex justify-center items-center h-12 w-12 rounded-r-full bg-[#9ca3af5c]"
      >
        <ChevronLeft size={40} className="text-white relative -left-1" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="width-screen pt-24">
      <div
        style={{
          background: "var(--bg-gradient-deal)",
        }}
        className="rounded-xl"
      >
        <div className="border-b-2 border-white">
          <div className="flex-between p-4">
            <div className="flex-center-row gap-1">
              <h4 className="text-white text-4xl font-semibold uppercase">
                Deal Chớp Nhoáng
              </h4>
              <Zap size={52} className="text-yellow-300" />
            </div>

            <div className="flex gap-4">
              <div className="h-[42px] w-[140px] bg-white text-orange flex-center-row rounded-lg border border-white">
                Deal đang diễn ra
              </div>
              <div className="h-[42px] w-[140px] bg-transparent text-white flex-center-row rounded-lg border border-white">
                Deal sắp diễn ra
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 pt-4 pb-6">
          <Slider {...settings} ref={slideRef}>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
            <div className="px-1.5">
              <ItemProduct />,
            </div>
          </Slider>
        </div>

        <div className="flex-center-col gap-2 pb-6">
          <div className="uppercase text-white bg-transparent border w-[260px] h-[48px] border-white flex-center-row rounded-xl">
            Mua sắm toàn bộ sản phẩm
          </div>
          <p className="text-white italic text-sm">
            Quý khách vui lòng xem LƯU Ý phía cuối trang danh sách DEAL (nút bên
            trên) trước khi mua sản phẩm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FastDeal;
