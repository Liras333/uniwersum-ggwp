import Link from "next/link";

export default function Video({ video }) {
  const thumb = `https://img.youtube.com/vi/${video.film}/hqdefault.jpg`;

  return (
    <Link
      href={`/serial/odcinki/${video.id}`}
      className="flex flex-col gap-2 text-md p-2 rounded-md hover:bg-neutral-600 transition-colors cursor-pointer"
    >
      <div
        className="bg-cover bg-center rounded-md aspect-video"
        style={{ backgroundImage: `url("${thumb}")` }}
        role="img"
        aria-label={video.nazwa}
      />
      <h4>{video.nazwa.slice(0, 50)}...</h4>
    </Link>
  );
}
