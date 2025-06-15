"use client";
import Image from "next/image";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-[80vh] flex flex-col justify-center">
      {/* Menu */}
     
      {/* Conteúdo central */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 mt-32">
        <Image
          src="/homem-mala.png"
          alt="Homem com mala"
          width={300}
          height={300}
          priority
        />

        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">Viagens</h1>
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-full max-w-md mx-auto">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Procurar distritos, e muito mais"
              className="bg-transparent outline-none px-2 flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}