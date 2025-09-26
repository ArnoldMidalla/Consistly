"use client";

import { Button } from "@/components/ui/button";
import { login } from "./actions";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result.success) {
      toast.success("Logged in successfully!");
      window.location.href = "/";
    } else {
      toast.error(
        `${result.message}. Try signing up instead` || "Something went wrong"
      );
    }
  };

  return (
    <section className="min-h-screen font-sans flex text-[#263d3c] bg-white">
      <form
        className="flex flex-col items-center justify-center text-center gap-6 w-200 px-20"
        onSubmit={handleSubmit} // <-- changed here
      >
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold tracking-tighter">
            Welcome back.
          </h1>
          <p className="text-sm font-medium text-[#263d3ccc]">
            Log in to continue your streaks and stay consistent.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full  focus:outline-none focus:ring-0"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full  focus:outline-none focus:ring-0"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">

        <button
          className="bg-[#263d3c] text-white w-full py-2 rounded-md flex justify-center items-center font-bold hover:underline hover:cursor-pointer"
          type="submit" // <-- changed here
          >
          Log in
        </button>

        <p className="text-[#263d3c] text-sm font-semibold">or</p>
        <Link href='/' className="flex justify-center items-center gap-2 w-full text-sm font-semibold bg-[#f3f3f0] rounded-md py-2 hover:underline"><img src="google-2025-seeklogo.svg" className="w-6" alt="" />Sign in with Google</Link>
          </div>
        <p className="text-sm">
          New user?{" "}
          <Link href="/signup" className="hover:underline font-semibold">
            Sign up
          </Link>{" "}
          instead
        </p>
      </form>
      <div className="w-full h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
