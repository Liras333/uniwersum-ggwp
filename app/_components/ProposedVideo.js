import { formatDistance } from "date-fns";
import Link from "next/link";

export default function ProposedVideo({ proposedVideo }) {
  const thumb = `https://img.youtube.com/vi/${proposedVideo.film}/hqdefault.jpg`;
  return (
    <Link
      href={`/serial/odcinki/${proposedVideo.film}`}
      className="w-80 p-2 h-25 hover:bg-neutral-500 rounded-md transition-colors cursor-pointer flex gap-5"
    >
      <img src={thumb} className="h-full rounded-md" />
      <div className="flex flex-col justify-around">
        <h4 className="font-bold">{proposedVideo.nazwa.slice(0, 30)}...</h4>
        <span className="text-neutral-300">
          {formatDistance(new Date(), proposedVideo.created_at)}
        </span>
      </div>
    </Link>
  );
}
