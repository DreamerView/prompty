import list from "@/app/list";
import Cards from "@/components/Cards";
import { notFound } from "next/navigation";

const TagsPage = async({ params }) => {
  const {id} = await params;

  // Фильтрация по ключам
  const filtered = list.filter(item => item.key.includes(id));

  if (filtered.length === 0) {
    notFound(); // автоматически вызывает 404 страницу Next.js
  }

  return (
    <>
        <div className="container-xl">
            <h1 className="mb-4">#{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            <p className="text-muted">Найдено: {filtered.length}</p>
        </div>
        <Cards list={filtered} />
    </>
  );
};

export default TagsPage;
