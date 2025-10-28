import ListaSwiatow from "@/app/_components/ListaSwiatow"
import Pagination from "@/app/_components/Pagination"
import Spinner from "@/app/_components/Spinner"
import { getPageParam } from "@/app/_lib/actions"
import { Suspense } from "react"


export const metadata = {
    title: "swiaty"
}
export const revalidate = 3600

export default async function Page({searchParams}){
    const stronaParams = await searchParams;
    const page = Number( awaitstronaParams.strona) ?? 1;
    const pageIndex = !page ? 0 : page;
    const {data, count} = await getPageParam(pageIndex - 1, 'swiaty')
    return (
       <section className="divide-y divide-neutral-700 flex flex-col">
            <h2 className="text-4xl text-primary-300 py-5">Światy</h2>
            <Suspense fallback={<Spinner/>}>
                <ListaSwiatow swiaty={data}/>
            </Suspense>

            <Pagination count={count}/>
       </section>
    )
}