import Component from "./chartTest";

export default function ChartsComponent({
  title,
  data,
  title2,
  data2,
  subtitle1,
  dataSubtitle1,
  subtitle2,
  dataSubtitle2,
  subtitle3,
  dataSubtitle3,
}: {
  title: string;
  data: number;title2: string;
  data2: number;
  subtitle1?:string
  dataSubtitle1?:number
  subtitle2?:string
  dataSubtitle2?:number
  subtitle3?:string
  dataSubtitle3?:number
}) {
  return (
    <div className="border-2 shadow-md hover:shadow-lg p-4 rounded-xl duration-200">
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-medium opacity-80">{title}</p>
          <p className="font-semibold text-2xl">{data}</p>
        </div>
        <div>
          <p className="text-xs font-medium opacity-80">{title2}</p>
          <p className="font-semibold text-2xl text-right">{data2}</p>
        </div>
      </div>
      <Component />
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-xs font-medium opacity-80">{subtitle1}</p>
          <p className="font-semibold text-lg opacity-80">{dataSubtitle1}</p>
        </div>
        <div>
          <p className="text-xs font-medium opacity-80">{subtitle2}</p>
          <p className="font-semibold text-lg opacity-80 text-center">{dataSubtitle2}</p>
        </div>
        <div>
          <p className="text-xs font-medium opacity-80">{subtitle3}</p>
          <p className="font-semibold text-lg opacity-80 text-right">{dataSubtitle3}</p>
        </div>
      </div>
    </div>
  );
}
