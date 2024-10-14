import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FormRegister from "./_components/FormRegister";

const RegisterPage = () => {
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
              title: "Đăng ký tài khoản thành viên",
              link: "/",
            },
          ]}
        />
      </div>

      <FormRegister />
    </main>
  );
};

export default RegisterPage;
