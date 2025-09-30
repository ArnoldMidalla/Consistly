"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Clock, MapPin } from "lucide-react";

export default function HabitCard({
  title,
  description,
  time,
  location,
}: {
  title: string;
  description: string;
  time?: string;
  location?: string;
}) {
  const [done, setDone] = useState(false);

  return (
    <div className="flex items-start space-x-3 p-4 border rounded-lg shadow-sm hover:shadow-lg duration-300">
      <Checkbox
        checked={done}
        onCheckedChange={(checked) => setDone(checked === true)}
      />
      <div className="flex flex-col gap-1">
        <Label
          className={
            done ? "line-through text-muted-foreground" : "font-medium"
          }
        >
          {title}
        </Label>
        {/* <p
          className={
            done
              ? "text-xs line-through text-muted-foreground"
              : "text-xs text-gray-500"
          }
        >
          {description}
        </p> */}
        <div className={
            !done ? `text-xs text-gray-500 flex gap-2` : `text-xs text-gray-500 flex gap-2 line-through`}>
          {time? (
          <div className="flex gap-1">
            <Clock size={13} />
            <p className="font-medium">{time}</p>
          </div>):null}
          {location ?(
          <div className="flex gap-1">
            <MapPin size={13} />
            <p className="font-medium">{location}</p>
          </div>) : null}
        </div>
      </div>
    </div>
  );
}
