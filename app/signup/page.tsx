"use client";

import { signup } from "../login/actions";
import Link from "next/link";
import { toast } from "sonner";
import PickDate from "../components/pickDate";

export default function SignupPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await signup(formData);

    if (result.success) {
      toast.warning("Confirm your email address");
      // window.location.href = "/login";
    } else {
      toast.error(result.message || "Something went wrong");
    }
  };

  return (
    <section className="min-h-screen font-sans flex text-[#263d3c] bg-white">
      <form
        className="flex flex-col items-center justify-center text-center gap-6 w-200 px-20"
        onSubmit={handleSubmit} // <-- consistent with login
      >
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold tracking-tighter">
            Start building better<br/>habits today.
          </h1>
          <p className="text-sm font-medium text-[#263d3ccc]">
            It only takes 30 seconds to set up your first habit.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <input
            className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full focus:outline-none focus:ring-0"
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First name"
          />
          <input
            className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full focus:outline-none focus:ring-0"
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
          />
          <input
            className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full focus:outline-none focus:ring-0"
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            className="bg-[#f3f3f0] font-medium rounded-md text-sm px-4 py-2 w-full focus:outline-none focus:ring-0"
            id="password"
            name="password"
            type="password"
            required
            placeholder="Create a password"
          />
          {/* <PickDate/> */}
        </div>

        <div className="w-full flex flex-col gap-2">
          <button
            className="bg-[#263d3c] text-white w-full py-2 rounded-md flex justify-center items-center font-bold hover:underline hover:cursor-pointer"
            type="submit" // <-- same as login
          >
            Sign up
          </button>

          <p className="text-[#263d3c] text-sm font-semibold">or</p>
          <Link
            href="/"
            className="flex justify-center items-center gap-2 w-full text-sm font-semibold bg-[#f3f3f0] rounded-md py-2 hover:underline"
          >
            <img src="google-2025-seeklogo.svg" className="w-6" alt="" />
            Sign up with Google
          </Link>
        </div>

        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="hover:underline font-semibold">
            Log in
          </Link>{" "}
          instead
        </p>
      </form>

      <div className="w-full h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1644945581764-66b9e8ed4893?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
