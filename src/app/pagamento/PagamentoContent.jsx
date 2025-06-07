"use client";

import { useSearchParams } from "next/navigation";

export default function PagamentoContent() {
  const searchParams = useSearchParams();

  const empresa = searchParams.get("empresa");
  const origem = searchParams.get("origem");
  const destino = searchParams.get("destino");
  const data = searchParams.get("data");
  const hora = searchParams.get("hora");
  const preco = searchParams.get("preco");

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-500 mb-6">Confirmação de Reserva</h1>
      <div className="bg-white p-6 rounded shadow space-y-2">
        <p><strong>Empresa:</strong> {empresa}</p>
        <p><strong>Origem:</strong> {origem}</p>
        <p><strong>Destino:</strong> {destino}</p>
        <p><strong>Data:</strong> {data}</p>
        <p><strong>Hora:</strong> {hora}</p>
        <p><strong>Preço:</strong> {preco}</p>
      </div>

      <a
        href="/sucesso"
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"
      >
        Confirmar Reserva
      </a>
    </div>
  );
}
