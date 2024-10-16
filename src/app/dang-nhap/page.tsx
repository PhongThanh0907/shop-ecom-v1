import React from "react";
import FormLogin from "./_components/FormLogin";
import Breadcrumbs from "@/components/Breadcrumbs";

const LoginPage = () => {
  return (
    <main className="space-y-4 bg-[#f8f8fc]">
      <div className="width-screen pt-4">
        <Breadcrumbs
          list={[
            {
              title: "Trang chủ",
              link: "/",
            },
            {
              title: "Đăng nhập tài khoản",
              link: "/",
            },
          ]}
        />
      </div>

      <FormLogin />
    </main>
  );
};

export default LoginPage;
