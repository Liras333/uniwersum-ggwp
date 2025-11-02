import Image from "next/image";
import baner from "@/public/baner.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-40">
      <Image
        src={baner}
        fill
        className="object-cover z-1 min-h-screen"
        placeholder="blur"
        alt="background"
      />
      <div className="relative  flex justify-center align-middle ">
        <Link
          className="z-102 underline sm:underline sm:underline-offset-25 text-center opacity-80 text-3xl px-6 py-4 font-bold text-primary-300 hover:opacity-100 transition-opacity "
          href="/glowna"
        >
          <span className="hidden md:inline">&rarr;</span>
          <span> Wejdź do Uniwersum G.G.W.P. </span>
          <span className="hidden md:inline">&larr;</span>
        </Link>
      </div>
    </div>
  );
}
