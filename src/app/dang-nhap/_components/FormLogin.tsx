"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Email không được để trống"),
    password: yup.string().required("Password không được để trống"),
  })
  .required();

type LoginForm = yup.InferType<typeof schema>;

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginForm) => console.log(data);

  return (
    <div className="bg-white py-6">
      <div className="width-screen grid grid-cols-2 gap-6">
        <div>
          <p className="font-semibold text-xl">
            Thông tin khách hàng đăng nhập hệ thống
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 py-10">
            <div className="flex justify-between items-center  relative">
              <span className="w-56">Email đăng nhập</span>
              <input
                type="email"
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                {...register("email")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.email?.message}
              </p>
            </div>

            <div className="flex justify-between items-center relative">
              <span className="w-56">Mật khẩu </span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="password"
                {...register("password")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.password?.message}
              </p>
            </div>
            <div className="relative left-[224px] space-x-2 -top-2">
              <Button
                type="submit"
                className="bg-blue-500 text-white rounded py-1.5"
              >
                Đăng nhập
              </Button>
              <span className="text-sm hover:underline cursor-pointer">
                Quên mật khẩu?
              </span>
            </div>
          </form>
        </div>
        <div>
          <p className="font-semibold text-xl">Bạn chưa là thành viên ?</p>
          <div className="pt-9">
            <p>
              Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ
              dàng hơn.
            </p>
            <Link
              className="text-blue-800 hover:text-orange font-semibold text-lg duration-300"
              href="/"
            >
              Đăng ký tài khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
