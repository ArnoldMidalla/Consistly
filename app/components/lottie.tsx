"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Lottie() {
  return (
    <section className="flex justify-between items-center">
      <DotLottieReact
        src="https://lottie.host/23fbe905-b8fe-4e3a-b57b-b852786be733/qYIROKN6hg.lottie"
        loop
        autoplay
        className="w-24"
      />
    <p className="text-lg font-bold">17 day streak</p>
    </section>
  );
}
