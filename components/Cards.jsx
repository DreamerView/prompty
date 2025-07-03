"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Cards.module.css";

const CardItem = ({ render }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isWindowReady, setIsWindowReady] = useState(false);

  // Проверим, доступен ли window
  useEffect(() => {
    setIsWindowReady(true);
  }, []);

  // Загружаем картинку только когда window доступен
  useEffect(() => {
    if (isWindowReady) {
      const img = new window.Image();
      img.src = render.image;
      img.onload = () => setImgSrc(render.image);
    }
  }, [render.image, isWindowReady]);

  return (
    <div className="col-lg-4 col-md-6">
      <div className={`${style["neon-hover"]} d-block`}>
        <Link href={`/gallery/${render.id}`} style={{ all: "unset" }}>
          <div
            className={`w-100 h-auto ${!imgSrc ? style["gradient-border"] : ""}`}
            style={{ aspectRatio: 1.5, position: "relative" }}
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={render.title || ""}
                fill
                sizes="(max-width: 992px) 100vw, 33vw"
                style={{
                  objectFit: "cover",
                  borderRadius: "1rem",
                  transition: "none",
                }}
              />
            )}
          </div>

          <h5 className="mt-4 mb-3">{render.title || "Неизвестно"}</h5>
          <p className="opacity-75">{render.desc}</p>
        </Link>

        <div className="d-flex flex-wrap gap-2">
          {render.key.map((attr, idx) => (
            <Link
              key={idx}
              href={`/tags/${attr}`}
              className="btn btn-secondary btn-dark rounded-4"
              style={{ fontSize: "0.9rem" }}
            >
              #{attr}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------ Грид карточек ------------ */
const Cards = ({ list, title = "" }) => (
  <div className="container-xl py-4">
    {title && <h1 className="mb-5">{title}</h1>}

    <div className="row">
      {list?.map((render, i) => (
        <CardItem key={i} render={render} />
      ))}
    </div>
  </div>
);

export default Cards;
