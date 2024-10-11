import React from "react";
import FormLogin from "./_components/FormLogin";

const LoginPage = () => {
  return (
    <main className="space-y-4 bg-[#f8f8fc]">
      <div className="width-screen">
        <div className="flex items-center gap-2 pt-4">
          <span className="text-gray-500 hover:text-blue-800 duration-300 cursor-pointer">
            Trang chủ
          </span>
          <span>/</span>
          <span>Đăng nhập tài khoản</span>
        </div>
      </div>

      <FormLogin />
    </main>
  );
};

export default LoginPage;
