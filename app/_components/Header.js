import Navigation from "@/app/_components/Navigation";
import Image from "next/image"
import Link from "next/link";

export default function Header(){
    return(
        <header className="text-neutral-100  z-100 text-xl flex items-center p-5 mx-5 justify-between  ">
            <Link href="/">
                <div className="flex gap-3 items-center">
                    <Image className="rounded" src="/favicon.ico" width={42} height={42} alt="logo-Uniwersum"/>
                    <h1>Uniwersum G.G.W.P.</h1>
                </div>
            </Link>
            <Navigation/>
        </header>
    )
}