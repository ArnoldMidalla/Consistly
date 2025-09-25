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
      toast.error(result.message || "Something went wrong");
    }
  };

  return (
    <section className="min-h-screen font-sans flex text-[#263d3c] bg-[#f3f3f0]">
      <form
        className="flex flex-col items-center justify-center text-center gap-2 w-1/2"
        onSubmit={handleSubmit} // <-- changed here
      >
        <h1 className="text-5xl font-bold leading-11 tracking-tight">Login</h1>
        <p className="text-sm font-medium opacity-80">
          Enter your email and password to access your account
        </p>
        <div className="flex gap-4 items-center">
          <label htmlFor="email">Email:</label>
          <input
            className="border-2 border-[#263d3c] rounded"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>

        <div className="flex gap-4 items-center">
          <label htmlFor="password">Password:</label>
          <input
            className="border-2 border-[#263d3c] rounded"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>

        <Button
          className="bg-[#ffffff] text-[#263d3c] px-[20px] h-[40px] rounded-md flex justify-center items-center font-bold"
          type="submit" // <-- changed here
        >
          Log in
        </Button>

        <Link href="/signup">New user? Sign up instead</Link>
      </form>
      <div className="w-1/2 h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
