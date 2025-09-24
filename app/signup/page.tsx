import { Button } from "@/components/ui/button";
import { signup } from "../login/actions";
import Link from "next/link";

export default function SignupPage() {
  return (
    <form className="font-sans pt-16 flex flex-col items-center justify-center text-center min-h-screen gap-2 text-[#263d3c] bg-[#f3f3f0]">
      <h1 className="text-5xl font-bold leading-11 tracking-tight">Sign Up</h1>

      <div className="flex gap-4 items-center">
        <label htmlFor="firstName">First Name:</label>
        <input
          className="border-2 border-[#263d3c] rounded"
          id="firstName"
          name="firstName"
          type="text"
          required
        />
      </div>

      <div className="flex gap-4 items-center">
        <label htmlFor="lastName">Last Name:</label>
        <input
          className="border-2 border-[#263d3c] rounded"
          id="lastName"
          name="lastName"
          type="text"
          required
        />
      </div>

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
        className="bg-[#263d3c] text-white px-[20px] h-[40px] rounded-md flex justify-center items-center font-bold"
        formAction={signup}
      >
        Sign up
      </Button>

      <Link href="/login">Already have an account? Log in instead</Link>
    </form>
  );
}