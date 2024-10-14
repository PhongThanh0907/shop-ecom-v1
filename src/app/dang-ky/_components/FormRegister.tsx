"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@nextui-org/button";
import { Radio, RadioGroup } from "@nextui-org/react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Email không được để trống"),
    password: yup.string().required("Password không được để trống"),
    name: yup.string(),
    phone: yup.number(),
    district_id: yup.number(),
    address: yup.string(),
    city_id: yup.number(),
  })
  .required();

type RegisterForm = yup.InferType<typeof schema>;

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selected, setSelected] = useState<string>("man");

  const onSubmit = (data: RegisterForm) => console.log(data);

  return (
    <div className="bg-white py-6">
      <div className="width-screen">
        <div>
          <p className="font-semibold text-xl">
            Tạo tài khoản khách hàng cá nhân
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-7 py-10 w-3/4 mx-auto"
          >
            <div className="flex justify-between items-center  relative">
              <span className="w-56">Email đăng ký*</span>
              <input
                type="email"
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                {...register("email")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex justify-between items-center  relative">
              <span className="w-56">Tên*</span>
              <input
                type="name"
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                {...register("name")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.name?.message}
              </p>
            </div>

            <div className="flex justify-between items-center  relative">
              <span className="w-56">Số di động*</span>
              <input
                type="number"
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                {...register("phone")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.phone?.message}
              </p>
            </div>

            <div className="flex justify-between items-center  relative">
              <span className="w-56">Giới tính</span>
              <div className="flex-1">
                <RadioGroup
                  orientation="horizontal"
                  value={selected}
                  onValueChange={setSelected}
                >
                  <Radio value="man">Nam</Radio>
                  <Radio value="woman">Nữ</Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-between items-center relative">
              <span className="w-56">Mật khẩu</span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="password"
                {...register("password")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex justify-between items-center relative">
              <span className="w-56">Xác nhận mật khẩu</span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="password"
                {...register("password")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.password?.message}
              </p>
            </div>

            <div className="flex justify-between items-center relative">
              <span className="w-56">Địa chỉ</span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="address"
                {...register("address")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.address?.message}
              </p>
            </div>

            <div className="flex justify-between items-center relative">
              <span className="w-56">Tỉnh/ Thành phố</span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="city_id"
                {...register("city_id")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.city_id?.message}
              </p>
            </div>

            <div className="flex justify-between items-center relative">
              <span className="w-56">Quận/ Huyện</span>
              <input
                className="border focus:outline-blue-500 h-9 pl-2 rounded border-gray-500 flex-1"
                type="district_id"
                {...register("district_id")}
              />
              <p className="absolute left-[224px] -bottom-5 text-sm text-red">
                {errors.district_id?.message}
              </p>
            </div>

            <div className="flex-center-row">
              <Button
                type="submit"
                className="bg-blue-500 text-white rounded py-1.5"
              >
                Đăng ký
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
