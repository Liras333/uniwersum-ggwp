import Image from "next/image";
import Link from "next/link";

export default function RecordsList({ data, tabela }) {
  return data.map((rekord) => (
    <Link
      href={`/archiwa/${tabela}/${rekord.id}`}
      key={`${rekord.id}_${tabela}`}
      className="grid grid-cols-1 grid-rows-2 lg:grid-cols-[auto_1fr] lg:grid-rows-1 justify-items-center items-center gap-5 p-5 border-b  hover:bg-secondary-800 transition-colors rounded"
    >
      <div className="relative h-40 w-full lg:w-50">
        {rekord?.obraz?.at(0) || rekord?.obraz ? (
          <Image
            fill
            quality={40}
            className="object-scale-down"
            src={
              Array.isArray(rekord.obraz) ? rekord.obraz.at(0) : rekord.obraz
            }
            alt={`obraz ${rekord.nazwa}`}
          />
        ) : (
          <div className=" text-neutral-400 h-full flex justify-center items-center">
            <span>{rekord.nazwa}</span>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl pb-1">{rekord.nazwa}</h2>
        <p className="whitespace-pre-wrap">
          {rekord.opis.slice(0, 300)} ...{" "}
          <span className="text-primary-300 underline hover:text-primary-200">
            Czytaj dalej
          </span>
        </p>
      </div>
    </Link>
  ));
}
