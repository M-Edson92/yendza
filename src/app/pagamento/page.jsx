import { Suspense } from "react";
import PagamentoContent from "./PagamentoContent";

export default function PagamentoPage() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <PagamentoContent />
    </Suspense>
  );
}
