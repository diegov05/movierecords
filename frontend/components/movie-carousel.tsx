/* eslint-disable prettier/prettier */

import ShowCard from "./show-card"

interface MovieCarouselProps {
  title: string
  description: string
}

export default function MovieCarousel({ description, title }: MovieCarouselProps) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-start items-center">
          <div className="h-5 sm:h-8 w-4 bg-black bg-gradient-to-b from-[#707DEF] to-[#ECA0FF]" />
          <h2 className="text-2xl sm:text-4xl">{title}</h2>
        </div>
        <h3 className="opacity-70 text-base sm:text-xl">{description}</h3>
      </div>
      <ShowCard />
    </section>
  )
}