import Image from "next/image";
import React from "react";

const Policy = () => {
  const data = [
    {
      title: "Giao hàng toàn quốc",
      descripion: "Giao hàng trước trả tiền sau COD",
      position: "-132px -30px",
    },
    {
      title: "Đổi trả dễ dàng",
      descripion: "Đổi mới trong 15 ngày đầu",
      position: "-198px -30px",
    },
    {
      title: "Thanh toán tiện lợi",
      descripion: "Trả tiền mặt, chuyển khoản, trả góp 0%",
      position: "-269px -36px",
    },
    {
      title: "Hỗ trợ nhiệt tình",
      descripion: "Tư vấn tổng đài miễn phí 24/7",
      position: "-334px -30px",
    },
  ];
  return (
    <div className="width-screen pb-6 pt-4">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              style={{
                background: "url(/assets/icon.png)",
                backgroundPosition: `${item.position}`,
              }}
              className="w-[50px] h-[50px]"
            ></div>
            <div className="relative top-1">
              <h4 className="text-sm font-semibold uppercase">{item.title}</h4>
              <p className="text-sm">{item.descripion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
