'use client'

import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState } from "react"

export default function Pagination({count}){
    const [page, setPage] = useState(0);

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const aktywnaStrona = Number(searchParams.get('strona') ) + 1;

    const maxPage = Math.ceil((count || 0) / 5) - 1;


    function next() {
        setPage((p) => {
            if(p >= maxPage) return 0;
            else return p + 1
        });

        const params = new URLSearchParams(searchParams);

        if(page >= maxPage){
            params.set('strona', 0);
            router.replace(`${pathname}?${params.toString()}`)
        }
        else{
            params.set('strona', page + 1 );
            router.replace(`${pathname}?${params.toString()}`)
        }

    }

    function prev() {
        setPage((p) => {
            if(p <= 0) return maxPage;
            else return p - 1;
        });
        

        const params = new URLSearchParams(searchParams);

        if(page <= 0){
            params.set('strona', maxPage);
		    router.replace(`${pathname}?${params.toString()}`)
        }
        else{
            params.set('strona', page - 1 );
            router.replace(`${pathname}?${params.toString()}`)
        }
    }

    return (
        <div className="py-5 text-neutral-300 flex items-center justify-center gap-2">
            
            <button className="cursor-pointer" onClick={prev}><ChevronLeft/></button>
            <span>Strona {aktywnaStrona } - {maxPage + 1}</span>
            <button className="cursor-pointer"  onClick={next}><ChevronRight/></button>
        </div>
    )
}