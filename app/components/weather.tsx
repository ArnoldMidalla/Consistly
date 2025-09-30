export default async function Weather() {
  // console.log(process.env.WEATHER_API_KEY)
  const location = 'Kaduna'
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=yes`,
    { cache: "no-store" } // prevents stale data
  );

  const data = await res.json();

  return (
    <div className="w-full rounded-lg p-4 border-2 flex flex-col">
      <div className="opacity-80 text-sm flex justify-between">
        <p>{data.location.name + ", " + data.location.country}</p>
        <p>{data.current.wind_kph}Km/h</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img src={data.current.condition.icon} alt="" className="w-12" />
        </div>
        <p className="text-3xl font-bold">
          {data.current.temp_c}
          <span className="opacity-80 text-sm font-medium">°c</span>
        </p>
      </div>
      <div className="opacity-80 text-sm flex justify-between">
        <p>{data.current.condition.text}</p>
        <p>{data.current.uv} uv</p>
      </div>
    </div>
  );
}
