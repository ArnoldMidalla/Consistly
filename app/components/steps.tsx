export default function Steps({number, title, subtitle}: {number: number, title:string, subtitle:string}) {
  return (
    <div className="bg-[#f3f3f0] text-[#263d3c] p-6 rounded-md">
      <p className="rounded-md bg-[#263d3c] text-white flex justify-center items-center w-9 h-9 text-md">
        {number}
      </p>
      <h1 className="pt-2">{title}</h1>
      <p className="text-sm font-medium opacity-80">
        {subtitle}
      </p>
    </div>
  );
}
