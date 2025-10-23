export const metadata = {
    title: "Dodawanie rzeczy"
}

export default function page(){
    return (
        <section className=" flex flex-col gap-6 mx-auto  ">
                 <h2 className="text-4xl font-bold pb-5 text-primary-300">Jak dodawać do rzeczy do Uniwersum G.G.W.P.?</h2>
                <p>
                    Każdy ma prawo do dodania czegoś do Uniwersum, zazwyczaj jeżeli coś zostanie stworzone dodaję to do archiwum gdzie znajdują się kanoniczne informacje o uniwersum.
                </p>
                <p>
                    Podczas tworzenia czegoś do uniwersum, można korzystać z już istniejących postaci, wydarzeń, światów. Należy pamiętać o chronologii oraz o ważnych i podstawowych wątkach w świecie Uniwersum.
                </p>
                
                <div>
                    <p>
                        Kategorie rzeczy które można stworzyć to:
                    </p>
                    <ul className="list-disc ml-5 leading-7">
                        <li>Postać</li>
                        <li>Miejsce</li>
                        <li>Przedmiot</li>
                        <li>Wydarzenie</li>
                        <li>Świat</li>
                    </ul>

                </div>
                <div>

                <p>
                     Jednak nie przyjmuję wszystkich pomysłów. Oto dlaczego nie dodaje niektórych rzeczy do archiwum:
                </p>
                <ul className="list-disc ml-5 leading-7">
                    <li>pomysł kompletnie odstaje od już zdefiniowanych praw i wydarzeń w uniwersum (w tym przypadku chętnie pomogę poprawić postać tak by pasowała)</li>   
                    <li>postać jest niepotrzebnie wulgarna  (w tym przypadku chętnie pomogę poprawić postać tak by pasowała)</li>
                    <li>Pomysł podlega prawom autorskim</li>
                </ul>
                </div>

           
       </section>
    )
}