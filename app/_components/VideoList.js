"use client";

import { PlayCircle } from "@deemlol/next-icons";
import Link from "next/link";
import { useState } from "react";

export default function VideoList({ video }) {
  const [isFocus, setIsFocus] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.film}/hqdefault.jpg`;

  return (
    <Link
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
      href={`/serial/odcinki/${video.film}`}
      className="flex flex-col gap-2 text-md p-2 rounded-md hover:opacity-90 hover:bg-neutral-600 transition-colors cursor-pointer"
    >
      <div
        className="bg-cover bg-center rounded-md flex justify-center items-center aspect-video "
        style={{ backgroundImage: `url("${thumb}")` }}
        role="img"
        aria-label={video.nazwa}
      >
        {isFocus && <PlayCircle size={35} />}
      </div>
      <h4>{video.nazwa.slice(0, 50)}...</h4>
    </Link>
  );
}
