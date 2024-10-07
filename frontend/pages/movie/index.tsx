/* eslint-disable prettier/prettier */
import MovieHeroSection from "@/components/movie-hero";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-16 ">
        <MovieHeroSection />
      </div>
    </DefaultLayout>
  );
}
