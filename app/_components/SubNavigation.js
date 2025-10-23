'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavigation({links}){
    const pathname = usePathname()
    return (
        <nav className=" ">
            <ul className="flex flex-col gap-3 align-middle text-secondary-100 text-xl border-r-2 border-secondary-800">
                {
                    links.map(link=> (
                        <li key={link.href}>
                           <Link
                            href={link.href}
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