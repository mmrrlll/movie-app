import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { cn } from "@/lib/utils";

function Input({ className, type }: React.ComponentProps<"input">) {
  return (
    <div className="flex p-[12px] justify-start items-center border rounded-md w-[379px] h-[36px] border-[#E4E4E7] ">
      <IoIosSearch />
      <input type={type} className="p-[8px] gap-[10px] w-[] " data-slot="input" placeholder="Search..." />
    </div>
  );
}

export { Input };
