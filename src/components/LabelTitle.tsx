import React from "react";

interface LabelTitleProps {
  title: string;
}

const LabelTitle: React.FC<LabelTitleProps> = ({ title }) => {
  return (
    <div className="h-[46px] bg-blue-800 px-10 flex-center-row rounded-xl relative overflow-hidden">
      <div
        style={{
          clipPath: "polygon(0 0, 30% 0, 100% 100%, 0% 100%)",
        }}
        className="h-full w-[30px] absolute left-0 bottom-0 bg-orange"
      />
      <span className="text-2xl font-bold text-white">{title}</span>
    </div>
  );
};

export default LabelTitle;
