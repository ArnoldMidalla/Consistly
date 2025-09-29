"use client";

import { useState } from "react";

export default function StreakCa() {
  // Example: days completed in September
  const completedDays = [1, 2, 5, 8, 10, 14, 15, 20, 25, 28];

  // Current date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = January
  const currentDay = today.getDate();

  // Days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="">
      <h2 className="my-2 font-semibold">
        {today.toLocaleString("default", { month: "long" })} {year}
      </h2>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isCompleted = completedDays.includes(day);
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className={`flex size-8 text-sm font-medium items-center justify-center rounded-full border-2
              ${isCompleted ? "border-black" : "text-gray-500"} 
              ${isToday ? "ring-2 ring-blue-500" : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
