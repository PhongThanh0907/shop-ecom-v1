import Image from "next/image";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import HeaderBar from "./HeaderBar";

const Header = () => {
  return (
    <header>
      <Image
        className="w-full"
        src="https://kccshop.vn/media/banner/14_Febaad60d88ebff872e2aaa146ff2831332.png"
        alt="banner"
        width={1440}
        height={45}
      />
      <HeaderTop />
      <HeaderBar />
      <HeaderMenu />
    </header>
  );
};

export default Header;
