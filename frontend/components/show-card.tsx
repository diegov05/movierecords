/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export default function ShowCard() {
  return (
    <Card className="p-0 w-max">
      <CardBody className="overflow-visible p-0 h-64 sm:w-64 sm:h-96">
        <Button
          isIconOnly
          className="top-6 left-4 md:left-6 absolute z-30"
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
          fill
          alt="Oppenheimer"
          className="rounded-lg relative object-cover"
          src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg"
        />
      </CardBody>
      <CardFooter className="p-4 px-4 flex flex-col gap-4 items-start">
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-1 justify-start items-center">
            <svg className="size-4 md:size-6 fill-yellow-500" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="opacity-60">8.2</span>
          </div>
          <Button isIconOnly className="p-0 border-0" size="sm" variant="light">
            <svg className="size-4 md:size-6 stroke-primary-400 fill-none" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
        <h4 className="font-bold text-large">Oppenheimer</h4>
        <Button
          className="w-full"
          color="secondary"
          startContent={
            <svg
              className="size-4 md:size-5"
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
          }
          variant="flat"
        >
          Watchlist
        </Button>
        <div className="flex flex-row justify-between w-full">
          <Button
            color="default"
            startContent={
              <svg className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            }
            variant="light"
          >
            Trailer
          </Button>
          <Button
            isIconOnly
            color="default"
            variant="light"
          >
            <svg className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}