import { createClient } from "@/utils/supabase/server";
import DashSidebar from "../components/dashSidebar";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user?.user_metadata;

  return (
    <section className="min-h-screen font-sans flex">
      <DashSidebar userId={data?.user?.id} />
      <section className="pt-8">
        <h1 className="text-2xl tracking-tight">
          Welcome back <span className="font-bold">{user?.firstName}</span>
        </h1>
        <p className="text-sm opacity-80">Let's crush your habits today!</p>
      </section>
    </section>
  );
}
