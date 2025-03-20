import React from "react";
import { Film } from "lucide-react";
import { FaRegCopyright } from "react-icons/fa";
export const Footer = ({}) => {
  return (
    <div className="flex w-screen min-h-[280px] px-[40px] justify-center items-center gap-[48px] text-[#FAFAFA] bg-indigo-700">
      <div className="flex max-w-[1280px] gap-[120px] items-start">
        <div className="max-w-[247px] max-h-[200px] flex flex-col items-start gap-[40px]">
          <div className="flex flex-col items-start gap-[12px]">
            <div className="flex max-w-[247px]">
              {" "}
              <p className="font-[Inter] italic font-bold text-[16px]">
                <Film />
                Movie Z
              </p>
            </div>
            <div className="flex max-w-[247px]">
              {" "}
              <p className="font-[Inter] font-normal text-[14px]">
                <FaRegCopyright />
                2024 Movie Z. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-end items-start gap-[96px]">
          <div className="flex max-h-[200px] flex-col items-start gap-[12px]">
            <p className=" text-[#FAFAFA] font-[Inter] font-normal text-[14px]">
              Contact Information
            </p>
            <div className="flex flex-col items-start gap-[24px]">
              <div className="flex items-center gap-[12px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                    Email:
                  </p>
                  <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                    support@movieZ.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                    Phone:
                  </p>
                  <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
              Follow us
            </p>
            <div className="flex items-center gap-[12px]">
              <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                Facebook
              </p>
              <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                Instagram
              </p>
              <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                Twitter
              </p>
              <p className=" text-[#FAFAFA] font-[Inter] font-medium text-[14px]">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
