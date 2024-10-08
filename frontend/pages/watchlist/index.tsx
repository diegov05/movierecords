/* eslint-disable prettier/prettier */
import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import WatchlistCard from "@/components/watchlist-card";


export default function IndexPage() {

  const { user } = useUser()

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6 pt-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">Your Watchlist</h1>
          <div className="flex flex-row gap-2"><p className="opacity-60">by</p>
            <Link className="text-primary-400" href={'/'}>{user?.username}</Link>
          </div>
          <p className="text-sm opacity-60">Your Watchlist is the place to track the titles you want to watch. You can sort your Watchlist by the IMDb rating, popularity score and arrange your titles in the order you want to see them.</p>
        </div>
        <SignedIn>

          <WatchlistCard />
          <WatchlistCard />
          <WatchlistCard />
          <WatchlistCard />
        </SignedIn>
      </div>
    </DefaultLayout>
  );
}
