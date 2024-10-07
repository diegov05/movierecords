/* eslint-disable prettier/prettier */

import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const MovieHeader = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col min-[810px]:flex-row-reverse gap-4">
        <Card
          isFooterBlurred
          as={Link}
          className="border-none group h-96 min-[810px]:h-auto w-full flex justify-end"
          href={"/movie"}
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
            p-4
            md:px-0
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
                className="size-8 md:size-16 stroke-white group-hover:stroke-yellow-300"
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
                  <p className="text-lg font-normal text-white">
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
        <Button
          isIconOnly
          className="absolute z-10 left-6 max-[810px]:top-[36rem] md:left-36"
          radius="sm"
          size="lg"
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
        <div className="hidden min-[810px]:block w-[22rem] h-[26rem] relative">
          <Image
            fill
            alt="Oppenheimer"
            className="rounded-lg"
            src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
          />
        </div>
      </div>
      <Card isBlurred className="p-0" shadow="none">
        <CardBody className="flex flex-row justify-between min-[810px]:items-center py-2 px-0 gap-4">
          <div className="block min-[810px]:hidden min-w-[10rem] h-[16rem] relative">
            <Image
              fill
              alt="Oppenheimer"
              className="rounded-lg"
              src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
            />
          </div>
          <div className="flex flex-col gap-2 overflow-x-hidden">
            <div className="flex flex-col gap-2 min-[810px]:w-[70%] py-2">
              <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
                <Button className="min-w-max" size="sm" variant="bordered">
                  Docudrama
                </Button>
                <Button className="min-w-max" size="sm" variant="bordered">
                  Epic
                </Button>
                <Button className="min-w-max" size="sm" variant="bordered">
                  Historical Epic
                </Button>
                <Button className="min-w-max" size="sm" variant="bordered">
                  Biography
                </Button>
                <Button className="min-w-max" size="sm" variant="bordered">
                  Drama
                </Button>
              </div>
              <p className="w-fit">The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
              </p>
            </div>
          </div>
          <div>
            <Button className="min-[810px]:flex font-bold hidden justify-start" color="warning" size="lg" startContent={
              <svg
                className="size-4 md:size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5v15m7.5-7.5h-15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            } variant="solid">
              <div className="flex flex-col">
                <span>Add to Watchlist</span>
                <span className="text-sm font-normal">Added by 640k users</span>
              </div>
            </Button>
          </div>
        </CardBody>
        <div className="sm:hidden flex flex-row">
          <div className="flex flex-row min-[610px]:flex-col justify-between items-center h-max">
            <Button className="p-0 gap-1" size="lg" startContent={
              <svg className="size-4 md:size-6 fill-yellow-500" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>}
              variant="light"
            >
              <span className="font-medium">8.2</span>
              <span className="font-light opacity-50">/10</span>
              <span className="font-light opacity-70">802k</span>
            </Button>
          </div>
          <div className="flex flex-col justify-between items-center h-max">
            <Button className="gap-1 p-0" color="primary" size="lg" startContent={
              <svg className="size-4 md:size-6 stroke-primary-400 fill-none" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
              variant="light"
            >
              <span className="font-medium">Rate</span>
            </Button>
          </div>
          <div className="flex flex-col justify-between items-center h-max">
            <Button className="gap-1 p-0 justify-start" size="lg" startContent={
              <svg className="size-4 md:size-6" fill="none" stroke="#2ebd2b" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
              variant="light"
            >
              <span className="font-medium">92</span>
            </Button>
          </div>
        </div>
        <Divider />
        <CardFooter className="py-2 px-0 flex flex-col gap-2 justify-start items-start">
          <div className="flex flex-row gap-2 py-2">
            <b>Director</b> <a className="text-primary-400 border-b border-transparent hover:border-primary-400" href="/">Christopher Nolan</a>
          </div>
          <Divider />
          <div className="flex flex-row gap-2 py-2">
            <b>Writers</b> <a className="text-primary-400 border-b border-transparent hover:border-primary-400" href="/">Kai Bird</a>
          </div>
          <Divider />
          <div className="flex flex-row gap-2 py-2">
            <b>Stars</b> <a className="text-primary-400 border-b border-transparent hover:border-primary-400" href="/">Cillian Murphy</a>
          </div>
          <Divider />
          <Button className="min-[810px]:hidden font-bold flex justify-start" color="warning" size="lg" startContent={
            <svg
              className="size-4 md:size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.5v15m7.5-7.5h-15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          } variant="solid">
            <div className="flex flex-col">
              <span>Add to Watchlist</span>
              <span className="text-sm font-normal">Added by 640k users</span>
            </div>
          </Button>
        </CardFooter>
      </Card>
    </div >
  )
}

export default MovieHeader;