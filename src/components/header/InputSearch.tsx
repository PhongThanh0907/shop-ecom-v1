"use client";

import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const InputSearch = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex-1 relative">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập từ khóa cần tìm"
        className="outline-transparent border border-gray-400 rounded-full w-full h-[46px] pl-7 pr-14 focus:outline-blue-400 duration-300"
      />
      <div className="bg-orange absolute top-0 bottom-0 flex-center-row w-[46px] rounded-full right-0">
        <SearchIcon size={28} className="text-white" />
      </div>
    </div>
  );
};

export default InputSearch;
