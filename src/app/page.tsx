"use client";
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SlArrowDown } from "react-icons/sl";
import { IoMoon } from "react-icons/io5";

import { Input } from "@/components/ui/input";

import { Movies_upcoming } from "@/components/Movies_upcoming";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col py-[16px] px-[16px] justify-center items-center w-screen h-[59px]">
        <div className="flex h-[36px] w-screen items-center justify-between ">
          <div className="flex gap-[8px] items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.67"
              height="16.67"
              viewBox="0 0 24 24"
              color="#4338CA"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 3v18" />
              <path d="M3 7.5h4" />
              <path d="M3 12h18" />
              <path d="M3 16.5h4" />
              <path d="M17 3v18" />
              <path d="M17 7.5h4" />
              <path d="M17 16.5h4" />
            </svg>
            <p className="flex justify-center items-center font-[Inter] italic w-[64px] h-[20px] font-bold text-[16px] text-[#4338CA]">
              Movie Z
            </p>
          </div>
          <div className="flex gap-[12px]">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>
                  <SlArrowDown />
                  Genre
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Input type="text" />
          </div>
          <div className="flex border border-black w-[36px] h-[36px] justify-center items-center rounded-md">
            <IoMoon />
          </div>
        </div>
      </div>
      <div>
        <Upcoming></Upcoming>
      </div>
      <Movies_upcoming />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
