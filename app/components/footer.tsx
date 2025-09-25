import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full h-fit p-15 bg-white rounded-t-4xl shadow-2xl border-2 font-sans">
      <div className="w-full h-fit rounded-2xl shadow-2xl border-2 flex flex-col gap-12 p-15">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Consistly
            </h1>
            <p className="opacity-80 text-sm ">
              Consistly allows people to do nonsense with their time. bunch of
              wereys
            </p>
          </div>
          <div className="flex gap-16">
            <div className="h-full w-fit flex flex-col gap-1">
              <h1 className="font-bold mb-1">Product</h1>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
            </div>
            <div className="h-full w-fit flex flex-col gap-1">
              <h1 className="font-bold mb-1">Product</h1>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
            </div>
            <div className="h-full w-fit flex flex-col gap-1">
              <h1 className="font-bold mb-1">Product</h1>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
              <Link href="/" className="opacity-80 text-sm w-fit">
                Features
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300" />
        <div className="flex justify-between text-xs font-medium opacity-80">
            <p>&copy; 2025 Arnold Midalla. All Rights Reserved</p>
            <div className="flex gap-4">
                <Link href='/' className="hover:underline">Privacy Policy</Link>
                <Link href='/' className="hover:underline">Terms of Service</Link>
                <Link href='/' className="hover:underline">Cookie Settings</Link>
            </div>
        </div>
      </div>
    </section>
  );
}
