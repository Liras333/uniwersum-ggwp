import Link from "next/link";
import { getOnePostac } from "@/app/_lib/service";
import Image from "next/image";
import DataStatusColor from "@/app/_components/DataStatusColor";

export async function generateMetadata({ params }) {
  const { idPostaci } = await params;
  const postac = await getOnePostac(idPostaci);
  return {
    title: `${postac.nazwa}`,
  };
}

export default async function Page({ params }) {
  const { idPostaci } = await params;
  const postac = await getOnePostac(idPostaci);

  return (
    <section className="whitespace-pre w-full md:w-4/5 mx-auto text-secondary-100">
      <article className="flex flex-col gap-5 text-wrap leading-6.5 ">
        <h2 className="text-3xl text-primary-300  ">{postac.nazwa}</h2>
        <div className="grid grid-col-1 lg:grid-cols-[1fr_0.9fr]  gap-5 ">
          <div className="inline-block relative  aspect-video">
            {postac?.obraz ? (
              <Link target="_blank" href={postac.obraz}>
                <Image
                  fill
                  className="object-scale-down"
                  src={postac.obraz}
                  alt={`obraz ${postac.nazwa}`}
                />
              </Link>
            ) : (
              <div className=" text-neutral-400 h-full flex justify-center items-center">
                <span>{postac.nazwa}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5  h-full">
            <p>
              <DataStatusColor data={postac.pochodzenie}>
                Pochodzenie:{" "}
              </DataStatusColor>
              {postac.pochodzenie}
            </p>
            <p>
              <DataStatusColor data={postac.rokUrodzeniaSmierci}>
                Rok urodzenia i śmierci:{" "}
              </DataStatusColor>
              {postac.rokUrodzeniaSmierci}
            </p>
            <p>
              <DataStatusColor data={postac.magia}>Magia: </DataStatusColor>
              {postac.magia}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <DataStatusColor data={postac.umiejetnosci}>
              Umiejętności:{" "}
            </DataStatusColor>
            {postac.umiejetnosci}
          </p>
          <p>
            <DataStatusColor data={postac.opis}>Historia: </DataStatusColor>
            {postac.opis}
          </p>
          <p>
            <DataStatusColor data={postac.powiazania}>
              Powiązania:{" "}
            </DataStatusColor>
            {postac.powiazania || "brak"}
          </p>
          <p>
            <DataStatusColor data={postac.dodatkowe}>
              Dodatkowe:{" "}
            </DataStatusColor>
            {postac.dodatkowe || "brak"}
          </p>
          <p className="mt-auto ">
            <DataStatusColor data={postac.autor}>Autor: </DataStatusColor>
            {postac.autor}
          </p>
        </div>
        <Link
          className=" self-center  bg-primary-500  text-neutral-950 px-3 py-2 hover:bg-primary-400 transition-colors"
          href="/archiwa/postacie?strona=1"
        >
          &larr; Wróć
        </Link>
      </article>
    </section>
  );
}
