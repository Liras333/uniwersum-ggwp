import { differenceInDays, format } from "date-fns"
import Link from "next/link"
import { getAktualnosci } from "@/app/_lib/service"

export default async function ListaAktualnosci(){
    const informacje = await getAktualnosci()

    return (
        !informacje.length 
            ? <p className="my-5">Brak informacji w bazie danych</p>
            : <div className="text-wrap">
                {informacje?.map(info=> (
                    <article key={info.id} className="py-7 border-b border-neutral-700">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-2xl">{info.tytul}</h3>
                            <span className="text-sm text-neutral-300">{format(info.created_at, "dd.MM.yyyy")} r.</span>
                            <span className="text-sm text-neutral-300">({differenceInDays(new Date(), info.created_at )} dni temu)</span>
                        </div>
                        <p>
                            {info.opis.slice(0,500)}...
                            {' '}
                            <Link className="text-primary-300 underline hover:text-primary-200" href={`/glowna/aktualnosci/${info.id}`}>Czytaj dalej</Link>    
                        </p>
                        
                    </article>
                ))}
            </div>
    )
}