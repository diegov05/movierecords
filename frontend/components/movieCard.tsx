/* eslint-disable prettier/prettier */
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function MovieCard() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-8 md:py-10">
      <Card
        isFooterBlurred
        as={Link}
        className="border-none group h-96 w-full lg:w-[70%] flex justify-end"
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
              className="size-12 md:size-24 stroke-white group-hover:stroke-primary-300"
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
                className="fill-white group-hover:fill-primary-300"
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
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}