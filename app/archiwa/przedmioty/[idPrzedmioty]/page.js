import Link from "next/link";
import { getOneWydarzenie } from "@/app/_lib/service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { idPrzedmioty } = await params;
  const przedmiot = await getOnePrrzedmiot(idPrzedmioty);
  return {
    title: `${przedmiot.nazwa}`,
  };
}

export default async function Page({ params }) {
  const { idPrzedmioty } = await params;
  const przedmiot = await getOnePrzedmiot(idPrzedmioty);

  return (
    <section className="whitespace-pre ">
      <article className="flex flex-wrap flex-col items-center gap-5 text-wrap ">
        <h2 className="text-3xl text-primary-300 self-start lg:col-span-2">
          {przedmiot.nazwa}
        </h2>
        <div className=" inline-block relative aspect-square w-70">
          {/* <Image src={swiat.obraz?.[0]} className="object-cover" fill alt={`${swiat.nazwa} obraz`} /> */}
          {przedmiot?.obraz ? (
            <Link target="_blank" href={przedmiot.obraz}>
              <Image
                fill
                className="object-scale-down"
                src={przedmiot.obraz}
                alt={`obraz ${przedmiot.nazwa}`}
              />
            </Link>
          ) : (
            <div className=" text-neutral-400 h-full flex justify-center items-center">
              <span>{przedmiot.nazwa}</span>
            </div>
          )}
        </div>
        <p className="w-4/5">{przedmiot.opis}</p>
        <Link
          className="lg:col-start-2 justify-self-end  bg-primary-500  text-neutral-950 px-3 py-2 hover:bg-primary-400 transition-colors"
          href="/archiwa/przemioty?strona=1"
        >
          &larr; Wróć
        </Link>
      </article>
    </section>
  );
}
