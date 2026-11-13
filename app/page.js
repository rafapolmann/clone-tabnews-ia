import { Suspense } from "react";
import Celebration from "./celebration";

export const dynamic = "force-dynamic";

async function getContentCount() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { cache: "no-store", signal: AbortSignal.timeout(10000) },
    );
    if (!response.ok) return null;

    const total = response.headers.get("x-pagination-total-rows");
    if (total === null || !/^\d+$/.test(total)) return null;

    const count = Number(total);
    return Number.isSafeInteger(count) ? count : null;
  } catch {
    return null;
  }
}

async function ContentCount() {
  const contentCount = await getContentCount();

  return contentCount === null ? (
    <p>O total de conteúdos está temporariamente indisponível.</p>
  ) : (
    <p>
      <strong>{contentCount.toLocaleString("pt-BR")}</strong>
      <span>conteúdos publicados no TabNews</span>
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <Celebration />
      <p className="eyebrow">TabNews</p>
      <h1>Em Construção</h1>
      <p className="description">
        Estamos neste exato momento reconstruindo o TabNews, um lugar na internet
        para quem trabalha com tecnologia e precisa consumir conteúdos com valor
        concreto
      </p>
      <div className="content-count">
        <Suspense fallback={<p role="status">Carregando total de conteúdos…</p>}>
          <ContentCount />
        </Suspense>
      </div>
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial →</a>
    </main>
  );
}
