/* eslint-disable prettier/prettier */
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function MovieCard() {
  return (
    <Card
      isFooterBlurred
      as={Link}
      className="border-none group h-96 lg:h-auto w-full lg:w-[70%] flex justify-end"
      href={"/"}
      radius="lg"
    >
      <div className="hidden group-hover:block absolute w-full h-full bg-black/5 z-30" />
      <Image
        fill
        alt="Oppenheimer"
        className="object-cover"
        src="https://www.hometheaterforum.com/wp-content/uploads/2023/11/oppenheimer-will-be-available-to-purchase-on-4k-uhd-blu-ray-v0-O50xoWj6sFuSyPzEBKR4We_rwMkNLT2Hg7xSBMRqOBY.webp"
      />
      <CardFooter
        className="
            flex
            flex-row
            px-0
            space-x-2
            md:space-x-4
            justify-start 
            before:bg-white/10 
            border-white/20 
            border-1 
            overflow-hidden 
            py-3
            before:rounded-xl 
            rounded-large 
            w-[calc(100%_-_8px)] 
            shadow-small 
            ml-1 
            z-10
            "
      >
        <Button
          isIconOnly
          className="top-6 left-4 md:left-8 absolute"
          radius="full"
          size="sm"
        >
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.5v15m7.5-7.5h-15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Image
          alt="Oppenheimer"
          className="rounded-lg"
          height={240}
          src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
          width={140}
        />
        <div
          className="
              flex 
              flex-col 
              md:flex-row 
              md:items-center 
              items-start 
              justify-start
            "
        >
          <svg
            className="size-12 md:size-24 stroke-white group-hover:stroke-yellow-300"
            fill="none"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="fill-white group-hover:fill-yellow-300"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="max-[400px]:text-xl max-[500px]:text-2xl text-4xl font-medium text-white">
                &quot;Oppenheimer&quot;
                <span className="hidden sm:inline-block text-base font-normal text-white/70">
                  &nbsp;&nbsp;&nbsp;3:35
                </span>
              </p>
              <p className="sm:text-base font-normal text-white/70">
                Watch the teaser
              </p>
              <div className="flex flex-row gap-2 justify-start items-center">
                <div className="flex flex-row gap-1 justify-start items-center">
                  <svg className="size-3 sm:size-4 opacity-80" fill="none" stroke="#fff" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <p className="text-xs font-normal text-white/70">
                    260k
                  </p>
                </div>
                <div className="flex flex-row gap-1 justify-start items-center">
                  <span className="text-xs">😍❤️</span>
                  <p className="text-xs font-normal text-white/70">
                    9.3k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}