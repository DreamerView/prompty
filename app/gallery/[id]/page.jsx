import list from "@/app/list";
import Image from "next/image";
import Cards from "@/components/Cards"
import Link from "next/link";
import CopySection from "./CopySelection";
import Modal from "./Modal";

export async function generateMetadata({ params }) {
  const { id } = await params;
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

const GalleryPage = async({ params }) => {
    const {id} = await params;
    const render = list.find((f) => Number(f.id) === Number(id));
    const keys = render['key'];

    const related = list.filter(item =>
        item.id !== render.id &&
        item.key.some(k => keys.includes(k))
    );

    if (!render) {
        return (
            <div className="container py-5 text-center">
                <h2>Промпт не найден 😢</h2>
            </div>
        );
    }

    return (
        <>
            <Modal title={render.title} image={render.image} />
            <div className="container py-lg-5 py-4">
                <div className="row">
                    <div className="col-lg-5">
                        <div
                            className="w-100 h-auto rounded-4 overflow-hidden position-relative"
                            style={{ aspectRatio: 1.5 }}
                        >
                            <Image
                                src={render.image}
                                alt={render.title}
                                fill
                                className="rounded-4 object-fit-cover"
                                loading="lazy"
                                style={{cursor: "zoom-in"}}
                                data-bs-toggle="modal" data-bs-target="#previewModal"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7 px-lg-5 mt-lg-0 mt-5 d-flex flex-column justify-content-center">
                        <h1>{render.title}</h1>
                        <p className="text-muted my-4">{render.desc}</p>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {render['key'].map(((attr,index)=><Link key={index} href={`/tags/${attr}`} className="btn btn-secondary btn-dark rounded-4" style={{fontSize:"0.9rem"}}>#{attr}</Link>))}
                        </div>
                        <CopySection prompt={render.prompt} />
                    </div>
                </div>
            </div>
            <Cards title="You might also like 💖" list={related} />
        </>
    );
};

export default GalleryPage;
