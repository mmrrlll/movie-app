import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export const Popular_movies = ({}) => {
  const Movie = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCQufcR3am1qiooLQaqM9Q41NfwFPOLbPAZzQ3vVA3ubkL8vXYVlOARoxW3mVGAKW10Or4rEsgbn1We-Uv7tTuXNoCKZySv1bpIdwl683L-HGFQCh2aolanzjTygbJRG8oxQTaOW~juemQwUKxKlVfDrku7eyKv7kCfb8GjtOtzOXMjPUGfQ1cPuDBT-lQ66x3KsLKXsEsvNyS04Nl-XgtKjiFq3J8vWz--Y7SKpB16xhs5medKqDLyR2gKclKWDTQHp2j3nb5xDgNcjumvVKF8BAMHiDyS~EKQBNdHZif7FuEWg4eIGY97oHzVI0GbCsUbWHh0mcj~FV-FZhmU~fQ__",
      rating: "6.9",
      title: "Dear Santa",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4b08/7764/bc03cf6c5fe844d5ce89f9658466dfef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VxBf6a0UyNNWI2Ef8E9MKlxZyc7jcRh-qGeLDOkVM5XhV1f~sVYxwSFoidjGrQXETt45YTjmIScYqZSvyuzwmi4qgBT5YAPnS9NSSjWBqWpSONfypvg3GL6l6SDn2mxOqJ1hlrtm6BSm8Dxh8Is5UH3D96O91AeEBtziVQkE8UXZxn51XGJbKR8haCM1Y9G~649PPFyWcnVO4BZHnDC31L8sm8a11VDPZDoo4LaP5cLeHgWkb4MO3DeHYsIqG-xMZ4B9yy5ffhL86UEuULXd5okztHFp1lEGdKTrARjAVR-4~5O5RGFjsm1Hr7G9ACqNPXJZD9dtt8ixIK8w0D7Zlw__",
      rating: "6.9",
      title: "How to Train Your Dragon Live Action",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7aa1/1575/96c5c5026e3cccbd4a9ca91b9d63dc7a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TVUi4evCaWv5DXCkFcCXhK5a7XqGLRmAZ46uJH1yM-Fvt~EQO~x3pvBs-s1NXOhAYDjpUlbOSlxEvu0qGD57d4VrRTCnAduwbs0mxFf0XrFpCnOA5Yt0Z3zOCtbnrr4uPJc9aI~O75AITvlCwxdGsFkTgJfdO9nna51yGU-NKXwsjijsbuumFxUJmGULzs5dUbvEW-zBHN2ndMv~eM2QSY0CidjLVlvxQ2il8o8ppwYjVcrskJdifcewBLBgDJTkSID-kb~gxp2lj1Kt75UebcktxFj6yKftUrfgywB1-slsmVEV0J1DftM00LXqF9Y2T1EGuq8XFxug-QkftbReyg__",
      rating: "6.9",
      title: "Alien Romulus",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a2ea/3dd2/e396dc1c5e4ace3bda976b474aaef0b3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LmSRrZdSQ4fvHueiig5LxUblDy9QDnu6n0E9qjEYU4SB1cC4ZxO0nfnzoSC5nPJkfjMlrHY1SdUB6~Eb0heV1S31tD~18qCRsatCoxrbEFMGCmeTXRvtoU~S6ICXR6bplFR45mNqSKQDvUNEkIHEYMF~h0ryW9VulLl9XoZxBQy~z113TYtY9aYz7ATv~xiwah4fux~v7jAZbGzBF1Xv9uEx4IrN-zV0HD8lS9mA704MwbTY3V7eOie9kKJzEErMVaI5n6zP~b1GkYhAH7kolvToDYZINF6Z2~iL~M7YVfB8V2vVuqkM7nqXzqKRjMCFjUc0u0sIfhOMwehMnwwh-w__",
      rating: "6.9",
      title: "From the Ashes",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4225/7c9e/0fafe04642928fbdc70a93ae0f01002d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbb2m1HJmmL7XhKZeu0jrrb-Vzvg8huUbr6E6Abr6tD8f7srS6WVZMaBJyOs1XPkOFTFu-G6O21HG4dUFsnqeqvu-046LbBZcBPe54gSKZMRLhFz40LI0RYs5ZBxMZ~MLIbSoLj-u1c~vymdOCj6RQz-UXndfwRAnHB1r5fDhUDX4MPuvVK5yk5fj2i1iYl-g19Qa4q6aof6xsuLjVKfJyK3-ruSMev5YhAH1z26Z--4wtBHMaJm98J3AjnmXG3srTeVUMimrobyQ4pFtg8L9IQUijLSoFovNwLAfz6Q5DtAz~Ml~V5aY64jdFgOFLv-c0-M8WWT8iuQXYnE3Q8Znw__",
      rating: "6.9",
      title: "Space Dogg",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/d9b1/c0d7/d14a24b806271aee27997170978ff626?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MJLPlmjH-ZH2cPWHRlzeF2mkO-FENUHpt5JvN3K29xAFT8Ww5PaT1vkoH2~s7S1o9PdBVL7WIUD3SVXoWqYeNXaULj7DL~zKZAGEY7J9sQy9SpBkU-6KfwoKqKgBqd9WpjV3zP884SLjBR1uk7JFbKaS9dM6aLJa8ihx17PmQiYtynIfu6zgOSnQ1NpnzO5Sy~nhXUWqsq4HGtOHSuUOHBpazHidklA7dNz1FmnNU~o2HrjAmxvXFObmJdfJR4Yle0Ke7t749UQLDp5w~vl~ZnXL9KeJgrenXu5w~TZtYTJj024q0GblLRoHG4yYg65BGWHoz0KVQFVsrh-KctQZIA__",
      rating: "6.9",
      title: "The Order",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/9e65/3e1b/e01fc9c4092dfdecd24369e2487d8635?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W2zT-Cq57KFy0vpF5PUJ--WXF8LCLBEqBnQ8PUkVItEjV0W2RFX368cnDVg4nYlHFRKdgTAyX8jwfodIznV0XtAlkL9nrD-jSCOILZFYSbpv4pmd6zZGmjya2hXR21GMBq3ZF39oRTbDo1J7YFUNADw~Wb~TL8SBslDL7FG3Zjfuub2ASjtKbDhQe0gx5idbG9KjtBRJi4NPTZ7a4aGV8YLcwrXqWJSlulSl35dT0iBxmIzvE6syvE95yD3vqEyYX9V8RGtli0zX92gtlPN~7JKxwLgh2qEPC-ESXomLc~pyPTHM0DW5To8DX6TmdIuz~CObhMgjLzncegNSzBeEVw__",
      rating: "6.9",
      title: "Y2K",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b356/27f6/7090bf8bfd9ce9490b6575d8d0114025?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JhRdxrMQ8UXJBqrfPkBs5wRrOK~GbcdwRWvpbW3mH1qzcV1dHl6IdvIJsVurUJEM0Y5G1d2MDqM~B5dcOuSPx9aPwcjYuEUpcW~5flXYdSkvbDLq8vGEOtH5PKEsZ7W3V7My6MZIIxn84Z5JljiqkMN9NDv4JSFFh5Q1~Ld7RtGR0ViB-Ml8o2v6afq2W0St5lwybR3W4CI93MBuPqGjIirCfvUoFF~EPRARZhfgfCI40svObKDRjHIQ20JAxOsbhYq0TyeTuS2L7H07h3KeaGEq-VxdA2IImbQsISuhKvqjt-m0rUknDmrhlpqJ57mODEPqSEqMCOOkKYbo4Omq5A__",
      rating: "6.9",
      title: "Solo Leveling: ReAwakening",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3272/77d4/dd6fe464242bf3ceb00cbf7c51bd7f42?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qQrGMobH~gVpKUJMWrAO2IVuhXlHJSlGXyXIgxtHflEcwC2aATPKeglP7jgxCzDdw-MOD66OFKOd1qJRKlzVQpW5v2gcCcYaCSKSztYeSfLQjxL-14O8kBYJGsZ58E4K6Fd3k4L1v81thwoCLgP9UaccZg2vARvcSYyetLS5hVmJAS9yPZun4w1wOGtgbkm-kDlPo6GVGg9oWCKtczCiJ0xdPRsxbTMLeRWZodHCEyTfMmiIa7hpNpIxcXihtvW3y7-FfT7~SzXlEXi-JefqtDZ4qn9u5~VDjZ6v9fWvaWAXsdmUVxQdqpYuhYJMfuM8y561-vH~3qnYMbrEcfl0Gw__",
      rating: "6.9",
      title: "Get Away",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/1a78/359a/45da022f45cbd49977b6b63d7ecfb7c8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hngxFLglxhjir1xLXb2OvqA6i~gjzaI760BFiOjFM6YsKvuvgLrth42FCmhEWtP~bWQjM6cW3QrLLP-wnJeV-R~p6shS5--AxeeT-~gxccu3LD1j46jpvYKXsc8v1Z1kZwuCeWc0DzrEf~GPlbPzHT6zvYb0bfp2-2nWoVLYGL8x-p8OHdGk7Lu30S3pQDX12-Y59KuFZFexa2YNb1ODsnXmS3UjXnNcmDpBYIAXNXZIXvfuLXlMJEoETtGXaDb8HjTRS2j5atE12qFYNbyzDx4-mq8E630OQrpXcwCW1SaUXVA3SaZUCh8qjhJbRekOX5MmnOZ3LRoPU6OiS1a5BA__",
      rating: "6.9",
      title: "Sonic the Hedgehog 3",
    },
  ];
  return (
    <div className="flex flex-col items-start w-screen px-[80px] py-[52px]">
      <div className="w-full mb-4 flex justify-between items-center ">
        <p className="text-2xl text-black font-semibold">Popular</p>
        <Button variant={"noHover"}>See more<ArrowRight/></Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {Movie.map((Movie, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2 rounded-lg bg-[#F4F4F5]"
          >
            <img className="w-full h-auto rounded-t-lg" src={Movie.image}></img>
            <div className="flex p-2 flex-col">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
                    fill="#FDE047"
                    stroke="#FDE047"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>{Movie.rating}/10</p>
              </div>
              <div>
                <p className="text-[18px] font-normal text-[#09090B]">
                  {Movie.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
