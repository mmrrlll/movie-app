"use client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ArrowRight} from "lucide-react";
import { Card } from "./Card";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Badge } from "@/components/ui/badge";

export const Movie_details = ({}) => {
  const [specificMovies, setSpecificMovies] = useState([]);
  const [similiarData, setSimiliarData] = useState([]);

  const getSpecificMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/278?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setSpecificMovies(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const getSimiliarMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/278/similar?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setSimiliarData(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getSpecificMovies();
    getSimiliarMovies();
  }, []);

  console.log(similiarData);
  const router = useRouter();
  const handleOnClock = (id: number) => {
    router.push(`details/${id}`);
  };
  return (
    <div>
      <div>
        <div className="flex max-w-[1080px] flex-col items-start gap-6">
          <div className="flex py-3 justify-between items-center self-stretch text-black">
            <div className="flex w-[211px] flex-col items-start gap-1">
              {specificMovies.title}
            </div>
            <div className="flex flex-col items-start gap-0">
              {specificMovies.vote_average}
            </div>
          </div>
          <div className="flex items-center gap-8 self-stretch">
            <div className="max-w-[290px] max-h-[428px]">
              <img
                src={`https://image.tmdb.org/t/p/original${specificMovies.poster_path}`}
              ></img>
            </div>
            <div className="flex max-w-[760px] max-h-[428px] p-[364px 562px 24px 24px] items-center">
              <img
                src={`https://image.tmdb.org/t/p/original${specificMovies.backdrop_path}`}
              ></img>
              <div className="flex items-center gap-3">
                <div className="flex w-[40px] h-[40px] p-[8px 16px] justify-center items-center gap-2">
                  <IoPlayOutline />
                </div>
                <p className="text-white">Play trailer</p>
                <p className="text-white">{specificMovies.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-[1080px] flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <Badge variant="outline">Badge</Badge>
          </div>
          <p className="self-stretch text-[16px] font-normal">{}</p>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <div className="flex items-center gap-[53px] self-stretch">
                <p className="text-[16px] font-bold">Director</p>
                <p className="text-[16px] font-normal">{specificMovies.}</p>
              </div>
              <Separator />
            </div>{" "}
            <div className="flex flex-col items-start gap-1 self-stretch">
              <div className="flex items-center gap-[53px] self-stretch">
                <p className="text-[16px] font-bold">Writers</p>
                <p className="text-[16px] font-normal"></p>
              </div>
              <Separator />
            </div>{" "}
            <div className="flex flex-col items-start gap-1 self-stretch">
              <div className="flex items-center gap-[53px] self-stretch">
                <p className="text-[16px] font-bold">Stars</p>
                <p className="text-[16px] font-normal"></p>
              </div>
              <Separator />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1080px] flex-col items-start gap-8 text-black">
        <div className="flex justify-between items-start self-stretch">
          <p>More like this</p>
          <Button variant={"noHover"}>
            See more
            <ArrowRight />
          </Button>
        </div>
        {similiarData.slice(0, 5).map((value: any, index: number) => {
          return (
            <div className="flex items-start gap-8 self-stretch">
              <Card
                jumpToDetails={() => {
                  handleOnClock(value.id);
                }}
                key={index}
                title={value.title}
                image={`https://image.tmdb.org/t/p/w300${value.backdrop_path}`}
                rate={value.vote_average}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
