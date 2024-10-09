"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="width-screen flex gap-4">
      <div className="flex-1 h-auto bg-orange flex-center-row rounded-lg">
        <Image
          src="/assets/feedback.jpg"
          alt="img"
          width={290}
          height={250}
          className="w-full"
        />
      </div>
      <div className="w-[1000px] flex flex-col bg-orange px-1 pb-4 rounded-lg">
        <p className="text-3xl text-white font-semibold text-center py-5">
          Những khách hàng luôn đồng hành cùng kccshop
        </p>
        <div className="px-4">
          <Slider {...settings}>
            <div className="h-[380px] banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
            <div className="h-[380px] banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
            <div className="h-[380px] banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
            <div className="h-[380px] banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
            <div className=" h-[380px] banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
            <div className="h-[380px] w-full banner-hover px-2">
              <Image
                className="h-full w-full rounded-lg"
                src="https://kccshop.vn/media/banner/04_Aug10fb15c77258a991b0028080a64fb42d.png"
                alt="banner"
                width={278}
                height={380}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
