import ListaAktualnosci from "@/app/_components/ListaAktualnosci"
import SkeletonLoader from "@/app/_components/SkeletonLoader"
import { Suspense } from "react"

export const metadata = {
    title: "aktualności"
}

export const revalidate = 3600

export default function Page(){
    

    return (
       <section className="whitespace-pre ">
            <h2 className="text-4xl text-primary-300">Aktualności i Informacje</h2>

        <Suspense fallback={<SkeletonLoader/>}>
            <ListaAktualnosci/>
        </Suspense>

       </section>
    )
}