import Image from "next/image";
import React from "react";

const HeaderMenu = () => {
  const data = [
    {
      img: "https://kccshop.vn/media/category/cat_icon_2_1666948667.png",
      title: "Bộ PC",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_1_1666948464.png",
      title: "Laptop",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_136_1666948394.png",
      title: "Phụ kiện",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_5_1666946989.png",
      title: "Main",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_2_1666948667.png",
      title: "CPU",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_7_1666947261.png",
      title: "Ram",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_8_1666947758.png",
      title: "VGA",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_9_1666947423.png",
      title: "Ổ cứng",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_10_1666948930.png",
      title: "PSU",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_11_1666948005.png",
      title: "Case",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_12_1666948799.png",
      title: "Màn hình",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_13_1666948138.png",
      title: "Gaming Gear",
    },
    {
      img: "https://kccshop.vn/media/category/cat_icon_14_1666948072.png",
      title: "Tản nhiệt",
    },
  ];

  const data2 = [
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
    {
      title: "PC1",
    },
  ];

  return (
    <div className="">
      <div className="width-screen flex justify-between relative group">
        {data.map((item, index) => (
          <div
            className="flex items-center gap-2 flex-col py-2 cursor-pointer hover:scale-125 duration-300"
            key={index}
          >
            <Image
              className="te"
              src={item.img}
              alt={item.title}
              width={30}
              height={30}
            />
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
        <div
          className={`group-hover:opacity-100 opacity-0 absolute inset-x-0 top-[74px] shadow-lg border duration-300 rounded-xl p-4 z-20 bg-white`}
        >
          <div className="flex justify-between">
            <div className="flex-1 px-6 py-2">
              <div className="grid grid-cols-3 gap-y-6">
                {data2.map((item, index) => (
                  <div
                    className="text-orange font-semibold text-sm "
                    key={index}
                  >
                    <span className="hover:underline duration-300 cursor-pointer">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Image
              className="rounded"
              src="https://kccshop.vn/media/product/250-3218-1.jpeg"
              alt="img"
              width={320}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
