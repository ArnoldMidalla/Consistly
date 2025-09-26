import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import DarkModeButton from "@/app/components/darkModeButton";

export default async function Navbar() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user?.user_metadata;
  return (
    <section className="flex fixed h-16 items-center justify-center w-full bg-[#f3f3f0]/20 backdrop-blur-lg z-40 border-b-2">
      {/* <div>
        <Link href="/">One</Link>
      </div> */}
      <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href='/login'>Login</Link>
        <Link href='/signup'>SignUp</Link>
      </div>
      welcome {user?.firstName + " " + user?.lastName}
      {/* <DarkModeButton/> */}
    </section>
  );
}
