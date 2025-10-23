import Link from "next/link";
import { getOnePost } from "@/app/_lib/service";
import { format } from "date-fns";


export default async function Page({params}){
    const {idAktualnosci} = await params;
    const post = await getOnePost(idAktualnosci)

    return (
        <section className="whitespace-pre ">
            <p className="text-neutral-300 pb-5">Data zamieszczenia: {format(post.created_at, 'dd MMMM yyyy H:mm')}</p>
            <article className="flex flex-col gap-5 text-wrap ">
                <h2 className="text-3xl text-primary-300">{post.tytul}</h2>
                <p className="">
                    {post.opis}
                </p>

                <Link className="bg-primary-500 self-center text-neutral-950 px-3 py-2 hover:bg-primary-400 transition-colors" href="/glowna/aktualnosci">&larr; Wróć</Link>
            </article>
        </section>

    )
}