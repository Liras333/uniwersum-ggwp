'use client'

import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react"

export default function Pagination({count}){
    const [page, setPage] = useState(1);
    const [isPending, startTransition] = useTransition();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const aktywnaStrona = Number(searchParams.get('strona') ) ;

    const maxPage = Math.ceil((count || 0) / 5) - 1;

    useEffect(()=> {
        setPage(aktywnaStrona);

    }, [aktywnaStrona])


    function next() {
        startTransition(async()=> {
            setPage((p) => {
                if(p > maxPage) return 1;
                else return p + 1
            });

            const params = new URLSearchParams(searchParams);

            if(page > maxPage){
                params.set('strona', 1);
                router.replace(`${pathname}?${params.toString()}`)
            }
            else{
                params.set('strona', page + 1 );
                router.replace(`${pathname}?${params.toString()}`)
            }
        }) 

    }

    function prev() {
        startTransition(async()=> {
            setPage((p) => {
            if(p <= 1) return maxPage + 1;
            else return p - 1;
        });

        const params = new URLSearchParams(searchParams);

        if(page <= 1){
            params.set('strona', maxPage +1 );
		    router.replace(`${pathname}?${params.toString()}`)
        }
        else{
            params.set('strona', page - 1 );
            router.replace(`${pathname}?${params.toString()}`)
        }
        })
    }

    return (
        <div className="flex flex-col justify-center items-center text-neutral-300">
            <div className="py-5  flex items-center justify-center gap-2">
                <button disabled={isPending} className="cursor-pointer hover:text-neutral-200 disabled:text-neutral-700 disabled:cursor-wait" onClick={prev}><ChevronLeft/></button>
                <span>Strona { aktywnaStrona } - {maxPage + 1}</span>
                <button  disabled={isPending}className="cursor-pointer hover:text-neutral-200 disabled:text-neutral-700 disabled:cursor-wait"  onClick={next}><ChevronRight/></button>
            </div>
            {isPending && <span>Ładowanie...</span>}
        </div>


    )
}