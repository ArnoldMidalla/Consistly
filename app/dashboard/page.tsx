import { createClient } from "@/utils/supabase/server";
import DashSidebar from "../components/dashSidebar";
import ChartsComponent from "../components/mainChart";
import { RadialChart } from "../components/radialChart";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user?.user_metadata;

  return (
    <section className="min-h-screen font-sans flex">
      <DashSidebar userId={data?.user?.id} />
      <section className="flex flex-col gap-4 px-12">
        <div className="pt-8">
          <h1 className="text-2xl tracking-tight">
            Welcome back <span className="font-bold">{user?.firstName}</span>
          </h1>
          <p className="text-sm opacity-80">Let's crush your habits today!</p>
        </div>
        <div className="grid grid-cols-2">
<div className="flex gap-4">

        <ChartsComponent title='Hours Tracked' data={198} title2='Tasks Completed' data2={12} subtitle1="Total Tasks" dataSubtitle1={45} subtitle2="Tasks Completed" dataSubtitle2={20} subtitle3="Tasks Left" dataSubtitle3={25} />
        <RadialChart/>
</div>
        {/* <ChartsComponent title='Total Hours Tracked This Week' data={198} /> */}
        </div>
      </section>
    </section>
  );
}
