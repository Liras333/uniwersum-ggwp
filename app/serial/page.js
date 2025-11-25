import Image from "next/image";
import { ExternalLink } from "@deemlol/next-icons";
export const metadata = {
  title: "Serial G.G.W.P.",
};

export default function page() {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-[auto_1fr] gap-5 border-b-2 border-neutral-600 pb-3 mb-3">
        <Image
          src="/favicon.ico"
          width={120}
          height={120}
          alt="logo uniwersum G.G.W.P."
          className="rounded-full "
        />
        <div>
          <h2 className="text-4xl  text-primary-300 py-2">
            Uniwersum G.G.W.P.
          </h2>
          <a
            href="https://www.youtube.com/@uniwersumg.g.w.p.654"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline hover:text-neutral-300 transition-colors"
          >
            @uniwersumg.g.w.p.654 <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <p className="text-neutral-300 w-3/4 ">
        Serial o Uniwersum G.G.W.P. jest historią wojny między Vidatras a
        Sanowarem. Postać zwana <i>Syriusz</i> jest głównyym bohaterem, i z
        czasem dowiaduje się niezwykłych tajemnic. Odcinki są prowadzone rónierz
        na platformie YouTube{" "}
        <a
          href="https://www.youtube.com/@uniwersumg.g.w.p.654"
          target="_blank"
          className="inline-flex text-neutral-200 items-center gap-1 hover:underline hover:text-neutral-300 transition-colors"
        >
          Uniwersum G.G.W.P <ExternalLink size={16} />
        </a>
      </p>
    </section>
  );
}
