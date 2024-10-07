"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
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
    </main>
  );
}
