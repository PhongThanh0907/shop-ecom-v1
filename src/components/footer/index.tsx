import React from "react";

type Props = {};

const Footer = () => {
  const data = [
    {
      title: "Thông tin công ty",
      list: [
        {
          title: "Giới thiệu công ty",
          href: "/",
        },
        {
          title: "Tin tức công nghệ",
          href: "/",
        },
        {
          title: "Thông tin liên hệ",
          href: "/",
        },
        {
          title: "Nội quy kccshop",
          href: "/",
        },
      ],
    },
    {
      title: "Hỗ trợ khách hàng",
      list: [
        {
          title: "Hướng dẫn mua hàng online",
          href: "/",
        },
        {
          title: "Chính sách trả góp",
          href: "/",
        },
        {
          title: "Yêu cầu báo giá",
          href: "/",
        },
        {
          title: "Xây dựng cấu hình",
          href: "/",
        },
      ],
    },
    {
      title: "Chính sách chung",
      list: [
        {
          title: "Chính sách bảo hành",
          href: "/",
        },
        {
          title: "Chinh sách đổi trả",
          href: "/",
        },
        {
          title: "Chính sách giao hàng",
          href: "/",
        },
        {
          title: "Chính sách bảo mật thông tin",
          href: "/",
        },
      ],
    },
    {
      title: "Thông tin khác",
      list: [
        {
          title: "Fan Page KCCSHOP",
          href: "/",
        },
        {
          title: "SĐT: 0912.074.444 (8:00 - 21:00)",
          href: "/",
        },
        {
          title: "Email: khanhchungcomputer@gmail.com",
          href: "/",
        },
      ],
    },
    {
      title: "Phương thức thanh toán",
      list: [],
    },
  ];
  return (
    <footer>
      <div className="width-screen grid grid-cols-5 py-5 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <ul className="pt-3 space-y-2">
              {item.list.map((item, index) => (
                <li
                  className="text-gray-800 hover:text-orange duration-300 cursor-pointer"
                  key={index}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
