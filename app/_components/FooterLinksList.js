import {
  najnowsze,
  archiwa,
  sersjaRPG,
  gatewayBloodshed,
  serial,
} from "@/app/_lib/listsOfNavigations";
import FooterSubNavigation from "./FooterSubNavigation";

export default function FooterLinksList() {
  return (
    <section className="flex md:gap-15 flex-col md:flex-row justify-between">
      <nav className="flex flex-col gap-2 my-5 ">
        <h3 className="text-xl ">Główna strona</h3>
        <FooterSubNavigation links={najnowsze} />
      </nav>

      <nav className="flex flex-col gap-2 my-5 ">
        <h3 className="text-xl ">Archiwa</h3>
        <FooterSubNavigation links={archiwa} />
      </nav>

      <div>
        <nav className="flex flex-col gap-2 my-5 ">
          <h3 className="text-xl ">Sekcja RPG</h3>
          <FooterSubNavigation links={sersjaRPG} />
        </nav>

        <nav className="flex flex-col gap-2 my-5 ">
          <h3 className="text-xl ">Serial G.G.W.P.</h3>
          <FooterSubNavigation links={serial} />
        </nav>
      </div>
    </section>
  );
}
