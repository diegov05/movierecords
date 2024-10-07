/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";

import MovieHeader from "./movie-header";
import MovieReviews from "./movie-reviews";


export default function MovieHeroSection() {
  return (
    <section className="flex flex-col w-full pt-8 gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="max-[400px]:text-xl max-[500px]:text-2xl text-4xl font-medium">
            Oppenheimer
          </h1>
          <p className="opacity-60">Movie · 2023 · R · 3hr </p>
        </div>
        <div className="hidden flex-row gap-4 sm:flex">
          <div className="flex flex-col justify-between items-center h-max">
            <p className="font-medium opacity-50 text-xs tracking-widest">RATING</p>
            <Button className="gap-1" size="sm" startContent={
              <svg className="size-4 md:size-6 fill-yellow-500" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>}
              variant="light"
            >
              <span className="text-lg font-medium">8.2</span>
              <span className="text-lg font-light opacity-50">/10</span>
            </Button>
            <span className="text-sm font-light opacity-70">802k</span>
          </div>
          <div className="flex flex-col justify-between items-center h-max">
            <p className="font-medium opacity-50 text-xs tracking-widest">YOUR RATING</p>
            <Button className="gap-1" color="primary" size="sm" startContent={
              <svg className="size-4 md:size-6 stroke-primary-400 fill-none" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
              variant="light"
            >
              <span className="text-lg font-medium">Rate</span>
            </Button>
          </div>
          <div className="flex flex-col justify-between items-center h-max">
            <p className="font-medium opacity-50 text-xs tracking-widest">RATING</p>
            <Button className="gap-1" size="sm" startContent={
              <svg className="size-4 md:size-6" fill="none" stroke="#2ebd2b" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
              variant="light"
            >
              <span className="text-lg font-medium">92</span>
            </Button>
          </div>
        </div>
      </div>
      <MovieHeader />
      <MovieReviews />
    </section>
  )
}