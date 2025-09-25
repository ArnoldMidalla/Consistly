import { Egg, EggFried, Home } from "lucide-react";
import Link from "next/link";

export default function DashSidebar({userId}:{userId : string | undefined}){
    return(
        <section className="h-screen w-40 flex flex-col justify-between border-r-2 items-center py-8">
            <p className="text-2xl font-bold tracking-tight">Consistly</p>
            <nav className="flex flex-col gap-2">
                <Link href='/' className="text-sm font-medium hover:font-semibold flex items-center gap-1 opacity-80 hover:opacity-100 duration-300 w-fit"><Home size={22} />Home</Link>
                <Link href='/habits' className="text-sm font-medium hover:font-semibold flex items-center gap-1 opacity-80 hover:opacity-100 duration-300 w-fit"><Egg size={22} />Habits</Link>
                <Link href={`/habits/${userId}`} className="text-sm font-medium hover:font-semibold flex items-center gap-1 opacity-80 hover:opacity-100 duration-300 w-fit"><EggFried size={22} />Your Habits</Link>
                {/* <Link href='/'><Home/>Home</Link> */}
            </nav>
            <div>

            </div>
        </section>
    )
}