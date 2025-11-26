import Link from "next/link";
import { countOfVideos } from "../_lib/service";

export default async function PlaylistaList({ playlista }) {
  const count = await countOfVideos(playlista.id);
  return (
    <Link
      href={`/serial/playlisty/${playlista.id}`}
      className="flex flex-col gap-2 text-md p-2 rounded-md hover:opacity-90  hover:bg-neutral-600 transition-colors cursor-pointer"
    >
      <div
        className="bg-cover bg-center rounded-md flex justify-center items-center aspect-video text-neutral-400 bg-neutral-800 "
        role="img"
      >
        [ {count} odcinków ]
      </div>
      <h4>{playlista.nazwa}</h4>
    </Link>
  );
}
