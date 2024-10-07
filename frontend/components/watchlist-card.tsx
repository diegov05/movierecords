/* eslint-disable prettier/prettier */
import { Card } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";


const WatchlistCard = () => {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div>
              <Button
                isIconOnly
                className="top-4 left-4 md:left-4 absolute z-30"
                radius="sm"
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
                height={80}
                src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
                width={80}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row">
                <div>
                  <b>1. Oppenheimer</b>
                  <p className="opacity-60 text-sm">Movie · 2023 · R · 3hr </p>
                </div>
                <Button
                  isIconOnly
                  className="flex sm:hidden"
                  color="primary"
                  variant="light"
                >
                  <svg className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className="flex flex-row gap-1 text-xs items-center">
                  <svg className="size-4 md:size-6 fill-yellow-500" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-medium">8.2</span>
                  <span className="font-light opacity-50">/10</span>
                </div>
                <div className="flex flex-col justify-between items-center h-max">
                  <Button className="gap-1 " color="primary" size="sm" startContent={
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
                  <Button className="gap-1" color="success" size="sm" startContent={
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
            </div>
          </div>
          <Button
            isIconOnly
            className="hidden sm:flex"
            color="primary"
            variant="light"
          >
            <svg className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
        <p className="text-sm">The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.</p>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 text-xs sm:text-sm">
            <b>Creator</b> <a className="text-primary-400 border-b border-transparent hover:border-primary-400" href="/">Christopher Nolan</a>
          </div>
          <div className="flex flex-row gap-2 text-xs sm:text-sm">
            <b>Stars</b> <a className="text-primary-400 border-b border-transparent hover:border-primary-400" href="/">Cillian Murphy</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default WatchlistCard;