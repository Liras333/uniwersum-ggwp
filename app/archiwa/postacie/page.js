import ListaPostaci from "@/app/_components/ListaPostaci"
import Pagination from "@/app/_components/Pagination"
import Spinner from "@/app/_components/Spinner"
import { getPage } from "@/app/_lib/actions"
import { getPageParam } from "@/app/_lib/actions"
import { Suspense } from "react"

export const metadata = {
    title: "postacie"
}
export const revalidate = 3600


export default async function Page({searchParams}){
    const stronaParams = await searchParams;
    const page = Number(stronaParams.strona) ?? 1;
    const pageIndex = !page ? 0 : page;
    
    const {data, count} = await getPageParam(pageIndex - 1, 'postacie');

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