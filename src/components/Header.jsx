"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-4 py-2 rounded-full text-sm font-medium border ${
      pathname === path
        ? "bg-orange-500 text-white border-orange-500"
        : "border-blue-500 text-blue-500 hover:bg-blue-100"
    }`;

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Logotipo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Yendza"
          width={80}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Links de navegação */}
      <nav className="flex space-x-4">
        <Link href="/" className={linkClass("/")}>
          Viagens
        </Link>
        <Link href="/precos" className={linkClass("/precos")}>
          Preços
        </Link>
        <Link href="/comprar" className={linkClass("/comprar")}>
          Comprar bilhete
        </Link>
      </nav>
    </header>
  );
}