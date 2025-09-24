import { Button } from "@/components/ui/button";
import { login } from "./actions";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
    async function handleLogin(formData: FormData) {
  try {
    await login(formData);          // call server action
    toast.success("Login successful 🎉");
    // setTimeout(() => window.location.href = "/", 1000); // optional redirect
  } catch (err: any) {
    toast.error(err?.message || "Login failed ❌");
  }
}
    
  return (
    <form className="font-sans pt-16 flex flex-col items-center justify-center text-center min-h-screen gap-2 text-[#263d3c] bg-[#f3f3f0]">
      <h1 className="text-5xl font-bold leading-11 tracking-tight">Login</h1>
      
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

      {/* <Button
        className="bg-[#ffffff] text-[#263d3c] px-[20px] h-[40px] rounded-md flex justify-center items-center font-bold"
        formAction={login}
      >
        Log in
      </Button> */}
      <Button
  className="bg-[#ffffff] text-[#263d3c] px-[20px] h-[40px] rounded-md flex justify-center items-center font-bold"
  type="submit"
>
  Log in
</Button>

      <Link href="/signup">New user? Sign up instead</Link>
    </form>
  );
}
