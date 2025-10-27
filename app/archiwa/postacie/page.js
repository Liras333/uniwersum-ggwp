import ListaPostaci from "@/app/_components/ListaPostaci"
import Pagination from "@/app/_components/Pagination"
import Spinner from "@/app/_components/Spinner"
import { getPostacie } from "@/app/_lib/service"
import { Suspense } from "react"

export const metadata = {
    title: "postacie"
}
export const revalidate = 3600


export default async function Page({searchParams}){
    const {strona: stronaParam} = await searchParams;
    const page = Number(stronaParam);
    const pageIndex = Number.isNaN(page) ? 0 : Math.max(0, page);
    const {data, count} = await getPostacie(pageIndex )

    return (
       <section className="divide-y divide-neutral-700 flex flex-col">
            <h2 className="text-4xl text-primary-300 py-5">Postacie</h2>
            <Suspense fallback={<Spinner/>}>
                <ListaPostaci postacie={data}/>
            </Suspense>
            
            <Pagination count={count}/>
       </section>
    )
}