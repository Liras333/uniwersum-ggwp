'use client'

import { useState } from "react"

export default function Pagination(){
    const [page, setPage] = useState(0)

    function getFromTo(){
        const ITEM_PER_PAGE = 5;
        let from = page * ITEM_PER_PAGE;
        let to = page * ITEM_PER_PAGE;

        if(page > 0){
            from += 1;
        }

        return {from, to}
    }

    return (
        <div></div>
    )
}