import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import StreakCa from "../components/streakCa";
import Weather from "../components/weather";
import Link from "next/link";
import HabitCard from "../components/habitCard";

import { Home, User, Settings, Link2 } from "lucide-react";
import { Chart } from "../components/chart";
import Lottie from "../components/lottie";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user?.user_metadata;
  const today = new Date();
  const formatted = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  console.log(formatted); // "29/9/2025"

  const habits = [
    {
      id: 1,
      title: "Exercise",
      description: "30 min workout daily",
      time: "10:00",
      location: "abuja",
    },
    {
      id: 2,
      title: "Read",
      description: "Read 20 pages",
      time: "10:00",
      location: "abuja",
    },
    {
      id: 3,
      title: "Meditate",
      description: "10 minutes mindfulness",
      time: "10:00",
      location: "abuja",
    },
  ];

  return (
    <section className="min-h-screen font-sans flex p-12 gap-8">
      <section className="w-1/4 min-h-full">
        <div>
          <h1 className="text-lg tracking-tight leading-5">
            Welcome back <br />
            <span className="font-bold text-2xl">
              {user?.firstName + " " + user?.lastName}
            </span>
          </h1>
          <p className="text-sm opacity-80">Let's crush your habits today!</p>
          <p className="text-sm opacity-80">{formatted}</p>
          <div className="flex flex-col gap-2 pt-2">
            <Button className="rounded-full">+ New Habit</Button>
            <Button className="rounded-full" variant={"secondary"}>
              Browse Popular Habits
            </Button>
          </div>
          <div>
            <Lottie/>
          </div>
          <StreakCa />
        </div>
      </section>
      <section className="w-1/4 min-h-full flex flex-col gap-4">
        <div>
          <div className="text-sm flex items-end justify-between">
            <p className="text-lg font-semibold tracking-tight">
              Weather details
            </p>
            <Link href="" className="opacity-80">
              More details
            </Link>
          </div>
          <Weather />
        </div>
      </section>
      <section className="w-1/2 min-h-full flex flex-col ">
        <section className="h-fit flex gap-8">
          <div className="w-1/2">
            <div>
              <div className="text-sm items-center flex justify-between">
                <p className="text-lg font-semibold tracking-tight">
                  Today's Todos
                </p>
                <Link href="" className="opacity-80">
                  More details
                </Link>
              </div>
              {/* <Weather /> */}
              <div className="flex flex-col gap-2">
                {habits.map((habit) => (
                  <HabitCard
                    key={habit.id}
                    title={habit.title}
                    description={habit.description}
                    time={habit.time}
                    location={habit.location}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-2">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt=""
              className="size-12"
            />
            <p className="text-lg font-bold tracking-tight text-center leading-5">
              Connect your <br />
              Spotify account
            </p>
            <p className="text-sm tracking-tight text-center opacity-80 leading-4">
              Empower yourself with habit tracking
              <br /> while enjoying uninterrupted music
            </p>
            <Button className="rounded-full">
              <Link2 /> Link Account
            </Button>
          </div>
        </section>
        <section className="h-1/2">
        <p className="text-lg font-semibold tracking-tight">Favourite habits</p>
          <Chart />
        </section>
      </section>
    </section>
  );
}
