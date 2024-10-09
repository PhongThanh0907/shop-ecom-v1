import ItemProduct from "@/components/ItemProduct";
import React from "react";

const Promotion = () => {
  const data = [
    {
      title: "Giá shock trong ngày",
      description: "Cập nhật liên tục",
    },
    {
      title: "Siêu sale trong tháng",
      description: "Xem ngày kiểu lỡ",
    },
    {
      title: "Top pc bán chạy",
      description: "Giá ưu đãi nhất",
    },
    {
      title: "Màn hình đồ họa",
      description: "Nhiều ưu đãi hấp dẫn",
    },
    {
      title: "Góc thanh lý",
      description: "Xả hàng tồn kho",
    },
  ];

  return (
    <div className="width-screen">
      <div
        className="p-4 rounded-xl"
        style={{
          backgroundImage:
            "url(https://kccshop.vn/static/assets/072024/images/static-collection-bg-2.jpg)",
        }}
      >
        <p className="text-3xl text-white uppercase font-semibold text-center pt-4">
          ƯU ĐÃI DÀNH CHO BẠN
        </p>

        <div className="grid grid-cols-5 gap-3 pt-9">
          {data.map((item, index) => (
            <div
              className="text-center bg-item-promotion rounded-full py-2 cursor-pointer"
              key={index}
            >
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-sm pt-0.5">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4 pt-4">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>

        <p className="uppercase hover:text-orange duration-300 text-white text-center cursor-pointer pt-8">
          Xem tất cả +
        </p>
      </div>
    </div>
  );
};

export default Promotion;
