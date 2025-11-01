import Link from "next/link";
import FooterLinksList from "./FooterLinksList";
import Image from "next/image";


export default function Footer(){
    return (
        <footer className=" bg-neutral-900 py-12 ">
            <section className="w-3/4 mx-auto flex flex-col md:flex-row  justify-between items-center text-sm">

            <section className="flex flex-col  gap-2 my-5">
                <Image src="/favicon.ico" width={50} height={50} alt="footer_icon" className="mx-auto"/>
                <h3 className="text-xl ">
                    Uniwersum G.G.W.P.
                </h3>
                <p className="w-40 text-neutral-400">
                    Uniwersum G.G.W.P. Jest to wielki zbiór historii które miały miejsce na przestrzeni ponad 5 Epok ( około 12 500 lat). <br/>
                    <Link href="/glowna/" className="text-primary-400 hover:text-primary-600"><span>Czytaj dalej &gt;&gt;&gt;</span></Link>
                </p>
            </section>

            <FooterLinksList/>

            </section>

            <section className="mx-auto my-5 w-3/4 text-neutral-500  text-center">
                <p>© 2025 <b>Uniwersum G.G.W.P.</b> Wszelkie prawa zastrzeżone | Strona utworzona przez: <b>liras</b></p>
            </section>
        </footer>

    )
}