"use client";

import Link from "next/link";

export default function PlaylistaList({ playlista }) {
  return (
    <Link
      href={`/serial/odcinki/playlisty/${playlista.id}`}
      className="flex flex-col gap-2 text-md p-2 rounded-md hover:opacity-90 hover:bg-neutral-600 transition-colors cursor-pointer"
    >
      <div
        className="bg-cover bg-center rounded-md flex justify-center items-center aspect-video bg-neutral-800 "
        role="img"
      ></div>
      <h4>{playlista.nazwa}</h4>
    </Link>
  );
}
