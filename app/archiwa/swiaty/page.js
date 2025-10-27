import ListaSwiatow from "@/app/_components/ListaSwiatow"
import Spinner from "@/app/_components/Spinner"
import { getPostacie } from "@/app/_lib/service"
import { Suspense } from "react"


export const metadata = {
    title: "swiaty"
}
export const revalidate = 3600

export default async function Page(){

    return (
       <section className="divide-y divide-neutral-700 flex flex-col">
            <h2 className="text-4xl text-primary-300 py-5">Światy</h2>
            <Suspense fallback={<Spinner/>}>
                <ListaSwiatow />
            </Suspense>
       </section>
    )
}