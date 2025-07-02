import list from "@/app/list";
import Cards from "@/components/Cards";
import { notFound } from "next/navigation";

export default async function TagsPage({ params }) {
  const id = params.id.toLowerCase();          // /human → "human"

  // 1) показываем все элементы, чей type === id
  const filtered = list.filter(item => item.type.toLowerCase() === id);

  if (filtered.length === 0) {
    notFound();                                // 404, если ни одного не нашли
  }

  return (
    <>
      <div className="container">
        <h1 className="mb-4">
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </h1>
        <p className="text-muted">Найдено: {filtered.length}</p>
      </div>

      <Cards list={filtered} />                {/* выводим карточки */}
    </>
  );
}
