'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "@deemlol/next-icons"
import { useState } from "react";

export default function SubNavigation({links, isPaginating = false}){
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname()

    return (
        <nav>
            <ul className="flex flex-col gap-3 align-middle text-secondary-100 text-xl border-2 md:border-0 md:border-r-2 border-secondary-800">
                <li onClick={() => setIsOpen(isOpen => !isOpen)} className="flex flex-row-reverse md:hidden items-center justify-between  bg-secondary-800 transition-colors p-5">
                    {!isOpen
                        ? <><ChevronDown/>Rozwiń menu</>
                        : <><ChevronUp/>Zwiń menu</>
                    }
                </li>
                {isOpen &&
                    links.map(link=> (
                        <li key={link.href}>
                           <Link
                            href={`${link.href}${isPaginating ? '/?strona=1' : ''}`}
                            className={`${pathname === link.href && 'bg-secondary-800'} hover:bg-secondary-800 transition-colors block p-5`}
                            >
                                {link.nazwa}
                           </Link> 
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}