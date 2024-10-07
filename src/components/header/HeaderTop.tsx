import {
  BookOpen,
  ContactRound,
  Gamepad,
  Phone,
  Share2,
  ShieldHalf,
  UserCircle,
  UserSearch,
} from "lucide-react";
import React from "react";

const HeaderTop = () => {
  const data = [
    {
      title: "Trang tin công nghệ",
      link: "/",
      icon: <BookOpen size={18} />,
    },
    {
      title: "Tra cứu bảo hành",
      link: "/",
      icon: <ShieldHalf size={18} />,
    },
    {
      title: "Giới thiệu",
      link: "/",
      icon: <Gamepad size={18} />,
    },
    {
      title: "Liên hệ",
      link: "/",
      icon: <ContactRound size={18} />,
    },
    {
      title: "Tuyển dụng",
      link: "/",
      icon: <UserSearch size={18} />,
    },
  ];
  return (
    <div className="bg-[#d94700] py-2">
      <div className="width-screen flex justify-between">
        <div className="flex">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1 bg-gradient justify-center rounded-full py-1">
              <Share2 className="text-red" size={18} />
              <span className="text-red text-sm">Hệ thống showroom</span>
            </div>
            <div className="flex items-center gap-1 bg-gradient justify-center rounded-full py-1">
              <Phone className="text-red" size={18} />
              <span className="text-red text-sm">Bán hàng trực tuyến</span>
            </div>
          </div>
          <div className="flex gap-5 pl-8">
            {data.map((item, index) => (
              <div
                className="flex items-center text-white text-sm gap-1"
                key={index}
              >
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <UserCircle size={18} />
          <div>
            <span>Đăng nhập</span> | <span>Đăng ký</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
