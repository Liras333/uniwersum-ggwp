import Link from "next/link";
import { getOneSwiat } from "@/app/_lib/service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { idSwiaty } = await params;
  const swiat = await getOneSwiat(idSwiaty);
  return {
    title: `${swiat.nazwa}`,
  };
}

export default async function Page({ params }) {
  const { idSwiaty } = await params;
  const swiat = await getOneSwiat(idSwiaty);

  return (
    <section className="whitespace-pre ">
      <article className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] lg:grid-rows-[auto] gap-5 text-wrap ">
        <h2 className="text-3xl text-primary-300  lg:col-span-2">
          {swiat.nazwa}
        </h2>
        <div className="relative aspect-video">
          {/* <Image src={swiat.obraz?.[0]} className="object-cover" fill alt={`${swiat.nazwa} obraz`} /> */}
          {swiat?.obraz ? (
            <Link target="_blank" href={swiat.obraz?.[0]}>
              <Image
                fill
                className="object-cover"
                src={swiat.obraz?.[0]}
                alt={`obraz ${swiat.nazwa}`}
              />
            </Link>
          ) : (
            <div className=" text-neutral-400 h-full flex justify-center items-center">
              <span>{swiat.nazwa}</span>
            </div>
          )}
        </div>
        <p>{swiat.opis}</p>
        <Link
          className="lg:col-start-2 justify-self-end  bg-primary-500  text-neutral-950 px-3 py-2 hover:bg-primary-400 transition-colors"
          href="/archiwa/swiaty?strona=1"
        >
          &larr; Wróć
        </Link>
      </article>
    </section>
  );
}
