import Link from "next/link";
import { getOneSwiat } from "@/app/_lib/service";
import Image from "next/image";

export default async function Page({params}){
    const {idSwiaty} = await params;
    const swiat = await getOneSwiat(idSwiaty)

    return (
        <section className="whitespace-pre ">
            <article className="grid grid-cols-[3fr_4fr] gap-5 text-wrap ">
                <h2 className="text-3xl text-primary-300 col-span-2">{swiat.nazwa}</h2>
                <div className="relative aspect-video">
                    <Image src={swiat.obraz?.[0]} className="object-cover" fill alt={`${swiat.nazwa} obraz`} />
                </div>
                <p >
                    {swiat.opis}
                </p>
                <Link className="col-start-2 justify-self-end   bg-primary-500   text-neutral-950 px-3 py-2 hover:bg-primary-400 transition-colors" href="/archiwa/swiaty">&larr; Wróć</Link>
            </article>
        </section>  

    )
}