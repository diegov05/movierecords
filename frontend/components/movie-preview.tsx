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
          <div className="flex flex-row gap-2 justify-start items-center">
            <div className="flex flex-row gap-1 justify-start items-center">
              <svg className="size-4 opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p className="sm:text-xs font-normal opacity-70">
                260k
              </p>
            </div>
            <div className="flex flex-row gap-1 justify-start items-center">
              ❤️
              <p className="sm:text-xs font-normal opacity-70">
                9.3k
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
