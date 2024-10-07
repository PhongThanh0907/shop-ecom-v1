"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const listUnderBanner = [
    "https://kccshop.vn/media/banner/Webnh3.png",
    "https://kccshop.vn/media/banner/Webnh2.png",
    "https://kccshop.vn/media/banner/Webnh4.png",
    "https://kccshop.vn/media/banner/z5859354644608_063753c0d820948b6ec70bfc4456508e.jpg",
  ];

  return (
    <div>
      <Slider {...settings}>
        <Image
          src="https://kccshop.vn/media/banner/xcbxcbxcb.jpg"
          alt="banner"
          width={1440}
          height={420}
        />
        <Image
          src="https://kccshop.vn/media/banner/12_Sepbca1dbd449d743b7894e9d1c1139d2fa.png"
          alt="banner01"
          width={1440}
          height={420}
        />
        <Image
          src="https://kccshop.vn/media/banner/03_Apr2023e720af52eef3068aaa380a9cb0eb.jpg"
          alt="banner01"
          width={1440}
          height={420}
        />
      </Slider>

      <div className="width-screen grid grid-cols-4 relative -top-[76px]">
        {listUnderBanner.map((item, index) => (
          <div key={index} className="w-[306px] h-[179px] banner-hover">
            <Image
              src={item}
              height={182}
              width={292}
              alt="banner"
              className="rounded-2xl cursor-pointer w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
