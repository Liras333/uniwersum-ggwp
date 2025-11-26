import { Airplay, Archive, House, Layers } from "@deemlol/next-icons";
import Link from "next/link";

export default function MobileNavigation() {
  return (
    <nav className="fixed bottom-0 w-full bg-neutral-900 lg:hidden">
      <ul className="flex justify-evenly gap-3  items-center h-full text-xs py-3">
        <Link href="/glowna">
          <li className="flex flex-col items-center gap-1">
            <House size={22} />
            Główna
          </li>
        </Link>
        <Link href="/archiwa">
          <li className="flex flex-col items-center gap-1">
            <Archive size={22} />
            Archiwa
          </li>
        </Link>
        <Link href="/sekcja-rpg">
          <li className="flex flex-col items-center gap-1">
            <Layers size={22} />
            Sekcja RPG
          </li>
        </Link>
        <Link href="/serial">
          <li className="flex flex-col items-center gap-1">
            <Airplay size={22} />
            Serial G.G.W.P.
          </li>
        </Link>
      </ul>
    </nav>
  );
}
