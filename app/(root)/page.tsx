// "use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import React from "react";
import * as motion from "motion/react-client";
import { Footprints, Sprout, TrendingUp } from "lucide-react";
import Title from "../components/title";
import Steps from "../components/steps";
import Footer from "../components/footer";

export default function Home() {
  // let [habitNo, setHabitNo] = React.useState(0);
  // function add() {
  //   if (habitNo < 50) {
  //     setHabitNo(habitNo + 1);
  //   }
  // }
  // function minus() {
  //   if (habitNo > 0) {
  //     setHabitNo((prev) => prev - 1);
  //   }
  // }
  return (
    <>
      <section className="font-sans pt-16 flex flex-col items-center justify-center text-center min-h-screen gap-5 text-[#263d3c] bg-[#f3f3f0]">
        <div className="text-5xl font-bold leading-11 tracking-tight flex flex-col">
          <motion.h1
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            Build better habits
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="text-[#263d3ccc]"
          >
            One day at a time
          </motion.h1>
        </div>

        {/* <div>
          <p>Clock how easy it is to make habits here</p>
          <div>
            <button onClick={minus}>-</button>
            {habitNo} habit{(habitNo > 0 && habitNo < 2)? '' : 's'} made
            <button onClick={add}>+</button>
          </div>
        </div> */}
        <motion.p
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.8,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="leading-5 font-medium"
        >
          HabitFlow helps you stay consistent with streaks, insights,
          <br />
          and motivation — so you can finally stick to your goals.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.2,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <Link
            href="/signup"
            className="bg-[#ffffff] text-sm text-[#263d3c] px-[18px] py-2 rounded-md flex justify-center items-center font-bold"
          >
            Get Started Free &gt;
          </Link>
          <Link
            href="/"
            className="bg-[#263d3c] text-sm text-white px-[18px] py-2 rounded-md flex justify-center items-center font-bold"
          >
            See Pricing
          </Link>
        </motion.div>
      </section>
      <section className="px-10 sm:px-30 py-16 text-[#263d3c] bg-white gap-3 font-sans">
        <Title
          text="Our Features"
          title="Why HabitFlow works"
          subtitle="Simple tools that make habits stick."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-bold mt-3">
          {/* <!-- Top row --> */}
          <div className="bg-[#f3f3f0] p-6 flex flex-col rounded-md">
            <TrendingUp
              className="p-2 rounded-md scale-90 border-2 border-[#263d3c]"
              size={40}
            />
            <h1 className="pt-2">Track Anything</h1>
            <p className="text-sm font-medium opacity-80">
              Create daily, weekly, or monthly habits with flexible reminders.
            </p>
          </div>
          <div className="bg-[#f3f3f0] p-6 flex flex-col rounded-md">
            <Footprints
              className="p-2 rounded-md scale-90 border-2 border-[#263d3c]"
              size={40}
            />
            <h1 className="pt-2">Stay Motivated</h1>
            <p className="text-sm font-medium opacity-80">
              Build streaks, celebrate wins, and keep your momentum going.
            </p>
          </div>
          <div className="bg-[#f3f3f0] p-6 flex flex-col rounded-md">
            <Sprout
              className="p-2 rounded-md scale-90 border-2 border-[#263d3c]"
              size={40}
            />
            <h1 className="pt-2">See Your Growth</h1>
            <p className="text-sm font-medium opacity-80">
              Visual dashboards and insights that keep you accountable.
            </p>
          </div>
          {/* <!-- Bottom row -->
          <div className="bg-blue-400 p-6 ">4</div>
          <div className="bg-blue-400 p-6  col-span-2">5</div> */}
        </div>
      </section>
      <section className="px-10 sm:px-30 py-16 bg-[#263d3c] text-white gap-3 font-sans">
        <Title
          text="How it Works"
          title="Build habits in 3 simple steps"
          subtitle="No fluff. Just focus and consistency."
        />
        {/* <div className="grid grid-cols-2 grid-rows-3 text-[#263d3c]">
          <div className="bg-[#f3f3f0] w-30 h-30 flex justify-center items-center font-bold text-3xl">1</div>
          <div className="text-right bg-[#f3f3f0] flex flex-col justify-center items-center h-30 w-90">
            <div>

            <h1 className="text-xl font-bold">Create a Habit</h1>
            <p>Define your goal and set a schedule.</p>
            </div>
          </div>
          <div className="">
            <h1>Check It Off Daily</h1>
            <p>Mark habits as done, build streaks</p>
          </div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">
            <h1>Review Progress</h1>
            <p>Get charts and insights to improve</p>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-bold mt-3">
          <Steps
            number={1}
            title="Create a Habit"
            subtitle="Define your goal and set a schedule."
          />
          <Steps
            number={2}
            title="Check It Off Daily"
            subtitle="Mark habits as done, build streaks."
          />
          <Steps
            number={3}
            title="Review Progress"
            subtitle="Get charts and insights to improve."
          />
        </div>
      </section>
      <section className="font-sans">
        <Title
          text="Pricing"
          title="Start free. Upgrade anytime."
          subtitle="Pick a plan that grows with you."
        />
      </section>
    </>
  );
}
