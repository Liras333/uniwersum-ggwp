
export const metadata = {
    title: "O uniwersum"
}

export default function Page(){
    return (
        <section className="flex flex-col gap-6">
            <div>
                <h3 className="text-4xl text-primary-300 pb-3">O Uniwersum G.G.W.P</h3>
                <p>
                    Uniwersum G.G.W.P to wielka sieć powiązanych wątków i historii. Znajdują się tutaj historie i przeróżne światy z własnymi wydarzeniami i losami postaci z nich jak i całego uniwersum 
                </p>
            </div>
            
            <div>

            <h2 className="text-2xl font-bold pb-3">Światy</h2>
            <p>
                Świat to planeta na której istnieje życie (np Ziemia jest światem) . Na świat mogą się dostać istoty z innych światów jeżeli mają oni potencjał magiczny. 
            </p>
            </div>


            <div>

            <h2 className="text-2xl font-bold pb-3">Postacie</h2>
            <p>
                Gdy postać wykonała czyn, który był jakąś zmianą w historii uniwersum, czy też wnosiła coś do cannonu historii albo w jakiś sposób łączyłą swoje wątki z inną ważną postacią, to zostaje ona zapisana w archiwum postaci.
            </p>
            </div>
            
            <div>

            <h2 className="text-2xl font-bold pb-3">Przedmioty</h2>
            <p>
                Przedmioty te mogą mieć przeróżne zastosowanie. 
            </p>
            </div>

            <div>

            <h2 className="text-2xl font-bold pb-3">Lokacje</h2>
            <p>
                Na świecie może istnieć jakaś lokacja, która odgrywała ważną rolę w uniwersum. Mogło to też być miejsce ważne, i potrzebne w historii danego świata, bez którego coś nie mogłoby powstać albo istnieć itp.
            </p>
            </div>

            <div>

            <h2 className="text-2xl font-bold pb-3">Wydarzenia</h2>
            <p>
                Wydarzenie to bardzo ważny moment, który był bądź jest wspominany, lub wpłynął na cały świat lub uniwersum. Często powiązany z jednym światem, lecz może też być powiązane z większą ilością rzeczy. 
            </p>
            </div>

        </section>
    )
}