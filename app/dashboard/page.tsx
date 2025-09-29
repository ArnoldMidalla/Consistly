import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import StreakCa from "../components/streakCa";
import Weather from "../components/weather";
import Link from "next/link";
import HabitCard from "../components/habitCard";

import { Home, User, Settings } from "lucide-react"

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
  { id: 1, title: "Exercise", description: "30 min workout daily", time:'10:00', location: 'abuja' },
  { id: 2, title: "Read", description: "Read 20 pages", time:'10:00', location: 'abuja'},
  { id: 3, title: "Meditate", description: "10 minutes mindfulness", time:'10:00', location: 'abuja'},
];

  return (
    <section className="min-h-screen font-sans flex p-12 gap-8">
      <section className="w-1/4 min-h-screen">
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
            <Button>+ New Habit</Button>
            <Button variant={"secondary"}>Browse Popular Habits</Button>
          </div>
          <StreakCa />
        </div>
      </section>
      <section className="w-1/4 min-h-screen flex flex-col gap-4">
        <div>
          <div className="text-sm opacity-80 flex justify-between">
            <p>Weather details</p>
            <Link href="">More details</Link>
          </div>
          <Weather />
        </div>
      </section>
      <section className="w-1/4 min-h-screen">
        <div>
          <div className="text-sm opacity-80 flex justify-between">
            <p>Today's Todos</p>
            <Link href="">More details</Link>
          </div>
          {/* <Weather /> */}
          <div className="flex flex-col gap-2">

          {habits.map(habit => (
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
      </section>
      <section className="w-1/4 min-h-screen ">k</section>
    </section>
  );
}
