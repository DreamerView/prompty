import list from "@/app/list";

export async function generateMetadata({ params }) {
  const { id } = params;
  const render = list.find((f) => Number(f.id) === Number(id));

  if (!render) {
    return {
      title: "Промпт не найден — Prompty.kz",
      description: "Такой промпт не найден в галерее.",
    };
  }

  return {
    title: `${render.title} — Prompty.kz`,
    description: render.desc,
    openGraph: {
      title: `${render.title} — Prompty.kz`,
      description: render.desc,
      images: [render.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${render.title} — Prompty.kz`,
      description: render.desc,
      images: [render.image],
    },
  };
}
