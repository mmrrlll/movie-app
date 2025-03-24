"use client";
import { Movies_upcoming } from "@/components/Movies_upcoming";
import { Upcoming } from "@/components/Upcoming";
import { Popular_movies } from "@/components/Popular_movies";
import { Top_rated_movies } from "@/components/Top_rated_movies";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div>
        <Upcoming></Upcoming>
      </div>
      <Movies_upcoming />
      <Popular_movies />
      <Top_rated_movies />
      <Footer />
    </div>
  );
}
