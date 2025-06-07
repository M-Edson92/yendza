"use client";
import { useState } from "react";

export default function HeroSection() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [viagens, setViagens] = useState([]);

  const viagensSimuladas = [
    {
      id: 1,
      empresa: "TransMoz",
      origem: "Maputo",
      destino: "Beira",
      data: "2025-06-08",
      preco: "1000 MT",
      hora: "07:00",
    },
    {
      id: 2,
      empresa: "Etrago",
      origem: "Maputo",
      destino: "Xai-Xai",
      data: "2025-06-08",
      preco: "700 MT",
      hora: "10:00",
    },
  ];

  function buscarViagens(e) {
    e.preventDefault();
    const resultados = viagensSimuladas.filter(
      (v) =>
        v.origem.toLowerCase().includes(origem.toLowerCase()) &&
        v.destino.toLowerCase().includes(destino.toLowerCase()) &&
        v.data === data
    );
    setViagens(resultados);
  }

  return (
    <section className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <form onSubmit={buscarViagens} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Buscar Viagem
        </button>
      </form>

      {/* Lista de viagens */}
      {viagens.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-blue-600">Viagens encontradas:</h3>
          <ul className="space-y-4">
            {viagens.map((v) => (
              <li key={v.id} className="p-4 border border-gray-200 rounded shadow-sm">
                <p><strong>Empresa:</strong> {v.empresa}</p>
                <p><strong>De:</strong> {v.origem} → <strong>Para:</strong> {v.destino}</p>
                <p><strong>Data:</strong> {v.data} | <strong>Hora:</strong> {v.hora}</p>
                <p><strong>Preço:</strong> {v.preco}</p>
                <a
                href={`/pagamento?empresa=${v.empresa}&origem=${v.origem}&destino=${v.destino}&data=${v.data}&hora=${v.hora}&preco=${v.preco}`}
                className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Reservar
                </a>
                </li>
            ))}
          </ul>
        </div>
      )}

      {viagens.length === 0 && (
        <p className="mt-6 text-gray-500">Nenhuma viagem encontrada. Tente outra combinação.</p>
      )}
    </section>
  );
}
