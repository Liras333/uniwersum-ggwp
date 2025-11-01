import Image from "next/image"
import Link from "next/link"

export default function ListaPostaci({postacie}){
    return (
        postacie.map((postac) => (
                
            <Link  href={`/archiwa/postacie/${postac.id}`} key={`${postac.id} postac`} className="grid grid-cols-1 grid-rows-2 lg:grid-cols-[auto_1fr] lg:grid-rows-1 justify-items-center items-center gap-5 p-5  hover:bg-secondary-800 transition-colors rounded">
                <div className="relative h-40 w-50">
                    {postac?.obraz
                    ? <Image fill  quality={40} className="object-scale-down" src={postac.obraz}  alt={`obraz ${postac.nazwa}`}/>
                    : <div className=" text-neutral-400 h-full flex justify-center items-center">
                        <span>{postac.nazwa}</span>
                    </div>
                    }
                </div>

                <div >
                    <h2 className="text-2xl pb-1">{postac.nazwa}</h2>
                    <p className="whitespace-pre-wrap">{postac.historia.slice(0,300)} ...
                    {' '}
                    <span className="text-primary-300 underline hover:text-primary-200">Czytaj dalej</span>
                    </p>
                </div>
            </Link>
        ))
            
    )
}