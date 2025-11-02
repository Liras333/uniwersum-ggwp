"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterSubNavigation({ links }) {
  const pathname = usePathname();

  return (
    <ul className="text-neutral-400 flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={`${link.href}${link.isPaginating ? "?strona=1" : ""}`}
            className={`hover:text-neutral-300  transition-colors block`}
          >
            {link.nazwa}
          </Link>
        </li>
      ))}
    </ul>
  );
}
