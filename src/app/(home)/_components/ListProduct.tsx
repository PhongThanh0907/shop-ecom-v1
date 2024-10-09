import ItemProduct from "@/components/ItemProduct";
import LabelTitle from "@/components/LabelTitle";
import React from "react";

const ListProduct = () => {
  return (
    <div className="width-screen">
      <div className="flex-between">
        <LabelTitle title="Bộ PC" />
        <span className="uppercase text-blue-800 hover:text-orange duration-300 cursor-pointer font-semibold">
          Xem tất cả +
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4 pt-8">
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
    </div>
  );
};

export default ListProduct;
