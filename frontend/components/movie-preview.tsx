/* eslint-disable prettier/prettier */
import { Card } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

export default function MoviePreview() {
  return (
    <Card
      as={Link}
      className="
        w-full
        h-max
        flex
        flex-row
        gap-2
        justify-start
        items-center 
        py-3
        p-4
        rounded-large 
        group
        "
      href={"/"}
    >
      <Image
        alt="Oppenheimer"
        className="rounded-lg"
        height={80}
        src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
        width={80}
      />
      <div
        className="
          flex 
          flex-col 
          items-start 
          justify-start
        "
      >
        <div className="flex flex-row gap-1 items-center">
          <svg
            className="size-6 md:size-8 group-hover:stroke-yellow-500"
            fill="none"
            stroke="currentColor"
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
              className="fill-white group-hover:fill-yellow-500"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline-block text-tiny font-normal opacity-70">
            3:35
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">
              &quot;Oppenheimer&quot;
            </p>
            <p className="text-sm font-normal opacity-70">
              Watch the teaser
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
