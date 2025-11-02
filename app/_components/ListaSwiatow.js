import { getSwiaty } from "@/app/_lib/service";
import Image from "next/image";
import Link from "next/link";

export default async function ListaSwiatow({ swiaty }) {
  return swiaty.map((swiat) => (
    <Link
      href={`/archiwa/swiaty/${swiat.idSwiata}`}
      key={`${swiat.idSwiata} swiat`}
      className="grid grid-cols-1 grid-rows-2 lg:grid-cols-[auto_1fr] lg:grid-rows-1 justify-items-center items-center gap-5 p-5 border-b  hover:bg-secondary-800 transition-colors rounded"
    >
      <div className="relative  h-40 w-70">
        {swiat?.obraz ? (
          <Image
            fill
            className="object-cover"
            src={swiat.obraz?.[0]}
            alt={`obraz ${swiat.nazwa}`}
          />
        ) : (
          <div className=" text-neutral-400 h-full flex justify-center items-center">
            <span>{swiat.nazwa}</span>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl pb-1">{swiat.nazwa}</h2>
        <p className="whitespace-pre-wrap">
          {swiat.opis.slice(0, 300)} ...{" "}
          <span className="text-primary-300 underline hover:text-primary-200">
            Czytaj dalej
          </span>
        </p>
      </div>
    </Link>
  ));
}
