"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center">
      <Image src="/logo.png" alt="Logo YENDZA" width={50} height={50} />
      <h1 className="ml-4 text-2xl font-bold text-blue-500">YENDZA</h1>
    </header>
  );
}
