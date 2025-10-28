'use client'


export default function Error({error, reset}){
    return (
        <section className="flex flex-col items-center gap-5 ">
            <h2 className="text-primary-400 text-4xl">Poszło coś nie tak</h2>
            <p>{error.message}</p>
            <button onClick={reset} className="bg-primary-400 text-neutral-950 px-4 py-1 cursor-pointer ">Ponów </button>
        </section>
    )
}