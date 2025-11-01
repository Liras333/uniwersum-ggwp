
export const metadata = {
    title: "Archiwa"
}

export default function page(){
    return (
        <section className="flex flex-col gap-3">
           <h2 className="text-4xl  text-primary-300 py-2">Ogólne informacje</h2>
           <p>Znajdują się tutaj archiwa i różne historie i wydarzenia w świecie <b>Uniwersum G.G.W.P</b> takie jak:</p>
           <ul className="list-disc pl-5">
            <li>Postacie</li>
            <li>Śwaty</li>
            <li>Wydarzenia</li>
            <li>Lokacje</li>
            <li>Przemdioty</li>
           </ul>
       </section>
    )
}