/* eslint-disable prettier/prettier */
import MovieCard from "./movie-card";
import MoviePreview from "./movie-preview";

export default function HeroSection() {
  return (
    <section className="flex flex-row w-full pt-8 gap-4">
      <div className="h-96 lg:h-auto w-full lg:w-[70%]">
        <MovieCard />
      </div>
      <div className="hidden flex-col gap-2 w-[30%] lg:flex">
        {[1, 2, 3].map((num) => (
          <MoviePreview key={num} />
        ))}
      </div>
    </section>
  )
}