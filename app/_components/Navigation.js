import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex align-middle gap-10 text-secondary-100">
        <li className=" hover:text-secondary-300  transition-all ">
          <Link href="/glowna">Główne informacje</Link>
        </li>
        <li className=" hover:text-secondary-300  transition-all ">
          <Link href="/archiwa">Archiwa</Link>
        </li>
        <li className=" hover:text-secondary-300 transition-all ">
          <Link href="/rpg">Sekcja RPG</Link>
        </li>
        <li className=" hover:text-secondary-300 transition-all ">
          <Link href="/serial">Serial G.G.W.P.</Link>
        </li>
      </ul>
    </nav>
  );
}
