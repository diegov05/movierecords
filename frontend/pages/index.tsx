import HeroSection from "@/components/hero";
import MovieCarousel from "@/components/movie-carousel";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-16">
        <HeroSection />
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl sm:text-5xl">What to Watch</h1>
          <MovieCarousel
            description="TV shows and movies just for you"
            title="Top Picks"
          />
          <MovieCarousel
            description="Movies and TV shows that you have watchlisted"
            title="From your watchlist"
          />
          <MovieCarousel
            description="This week's top TV and movies"
            title="Fan favorites"
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
