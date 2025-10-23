
export const metadata = {
    title: "Strona główna"
}

export default function page(){
    return (
        <section className="grid  grid-cols-1 md:grid-cols-[auto_auto_auto] grid-rows-3 gap-5 gap-x-10  mx-auto ">
            <div className="col-span-full ">
                 <h2 className="text-4xl font-bold pb-5 text-primary-300 ">Czym jest Uniwersum G.G.W.P.?</h2>
                <p className="indent-5">
                    Jest to wielki zbiór historii które miały miejsce na przestrzeni ponad 5 Epok ( około 12 500 lat). Wszystkie te wydarzenia miały miejsce na różnych światach. 
                </p>
            </div>
           
           <div>
                <h3 className="text-2xl font-bold pb-5">Czym jest Świat?</h3>
                <p className="indent-5">
                    Świat to planeta na której istnieje życie (np. Ziemia jest światem). Na świat mogą się dostać istoty z innych światów jeżeli mają oni potencjał magiczny.
                </p>
           </div>

           <div  >
            <h3 className="text-2xl font-bold pb-5">Czy wymiar i świat to to samo?</h3>
            <p className="indent-5">
                Nie. Świat to planeta na której jest życia, a wymiar jest to równoległa rzeczywistość całkowicie kontrolowana przez osobę która ten wymiar stworzyła. (Ilość rzeczy zdefiniowanych w wymiarze zależy od siły posiadacza wymiaru).
            </p>
           </div>
           
           <div className="col-span-full">
                <h3 className="text-2xl font-bold pb-5">Czym jest potencjał magiczny?</h3>
                <p className="indent-5">
                    Każda istota która kiedykolwiek urodzi się w Uniwersum ma możliwość urodzenia się z tzw potencjałem magicznym.  Istniejątrzy rodzaje potencjału:
                </p>
                <ul className="list-disc ml-5 leading-7">
                        <li>Pełny potencjał magiczny - Możliwość używania magii orasz możliwość podróżowania między światami</li>
                        <li>Połowiczny potencjał magiczny-Podróżowanie -  Możliwość podróżowania między światami</li>
                        <li>Połowiczny potencjał magiczny-Magia -  Możliwość używania magii</li>
                </ul>
           </div>
           
       </section>
    )
}