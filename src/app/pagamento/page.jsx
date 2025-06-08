import { Suspense } from "react";
import PagamentoCliente from "./PagamentoCliente";

export default function Pagamento() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Carregando...</p>}>
      <PagamentoCliente />
    </Suspense>
  );
}
