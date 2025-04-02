import React from "react";
import { FaStar } from "react-icons/fa6";
type CardProps={
    image: string;
    rate: string;
    title: string;
    jumpToDetails:()=>void;
};
export const Card = ({image,rate,title,jumpToDetails}:CardProps) => {
  return (
    <div onClick={jumpToDetails} className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
      <div className="flex flex-col items-start gap-2 rounded-lg bg-[#F4F4F5] min-h-[435px]">
        <img className="w-full min-h-[340px] rounded-t-lg" src={image}></img>
        <div className="flex p-2 flex-col max-h-[95px]">
          <div className="flex items-center gap-1">
            <FaStar />
            <p>{rate}/10</p>
          </div>
          <div>
            <p className="text-[18px] font-normal text-[#09090B]">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
