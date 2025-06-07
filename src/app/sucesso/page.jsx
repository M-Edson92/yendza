"use client";

export default function Sucesso() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
      <h1 className="text-3xl text-green-600 font-bold mb-6">✅ Reserva Confirmada!</h1>

      <p className="text-center text-gray-700 mb-4">
        Obrigado por usar o <strong>YENDZA</strong>. A sua reserva foi realizada com sucesso.
      </p>

      <p className="text-center text-gray-500">
        Irá receber os detalhes por SMS ou email.
      </p>

      <a
        href="/"
        className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Voltar à página inicial
      </a>
    </div>
  );
}
