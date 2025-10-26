import ListaPostaci from "@/app/_components/ListaPostaci"
import Spinner from "@/app/_components/Spinner"
import { Suspense } from "react"

export const metadata = {
    title: "postacie"
}
export const revalidate = 3600


export default async function Page(){

    // console.log(swiaty);
    return (
       <section className="divide-y divide-neutral-700 flex flex-col">
            <h2 className="text-4xl text-primary-300 py-5">Postacie</h2>
            <Suspense fallback={<Spinner/>}>
                <ListaPostaci />
            </Suspense>
       </section>
    )
}