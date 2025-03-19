import React from "react";
import { Button } from "./ui/button";
import { describe } from "node:test";
export const Upcoming_description = ({}) => {
  const Description = [
    {
      Title: "Wicked",
      Rating: "6.9",
      Describe:
        "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
    },
  ];
  return (
    <div
      className="flex flex-col items-start gap-4 h-[264px] w-[404px] 
absolute top-[178px] left-[140px] z-[1]"
    >
      <div className="w-full text-[#fff]">
        <p className=" text-[16px] font-[Inter] font-normal">Now Playing:</p>
        <h1 className=" text-4xl font-[Inter] font-bold">
          {Description[0].Title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M13.9997 2.3335L17.6047 9.63683L25.6663 10.8152L19.833 16.4968L21.2097 24.5235L13.9997 20.7318L6.78967 24.5235L8.16634 16.4968L2.33301 10.8152L10.3947 9.63683L13.9997 2.3335Z"
            fill="#FDE047"
            stroke="#FDE047"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="w-full text-[#fafafa] text-[18px] font-[Inter] font-semibold">
          {Description[0].Rating}/10
        </p>
      </div>
      <div className="w-[302px]">
        <p className="text-[12px] font-normal text-[#fafafa]">
          {Description[0].Describe}
        </p>
      </div>
      <div>
        <Button>Watch Trailer</Button>
      </div>
    </div>
  );
};
