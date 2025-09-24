export default function Title({text, title, subtitle} : {text :string, title:string, subtitle:string}) {
    return(
        <>
        <div className="flex justify-center items-center scale-90">
          <p className="px-4 py-1 rounded-full border-2 text-xs font-semibold">
            {text}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-center font-extrabold text-3xl tracking-tight leading-9">
            {title}
          </h1>
          <p className="text-center text-sm font-medium opacity-80">
            {subtitle}
          </p>
        </div>
        </>
    )
}