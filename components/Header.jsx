"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

/* статический импорт даёт width / height + blurDataURL */
import logo from "@/public/logo.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.stickyGlass}>
      <div className="container-xl py-3 my-lg-4 my-2">
        <div className="row align-items-center">
          {/* левая колонка */}
          <div className="col-md-4 col-3 d-flex gap-3">
            {pathname !== "/" ? (
              <button
                className="btn btn-dark btn-lg rounded-4 d-flex gap-3"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left" />
                <span className="d-md-block d-none">Back</span>
              </button>
            ) : (
              <button className="btn btn-dark btn-lg rounded-4 d-flex gap-3" data-bs-toggle="modal" data-bs-target="#categoriesModal">
                <i className="bi bi-list" />
                <span className="d-md-block d-none">Categories</span>
              </button>
            )}
          </div>

          {/* центр — логотип */}
          <div className="col-md-4 col-6 d-flex justify-content-center">
            <Link className={styles.logoHover} href="/">
              {/* Заполняем контейнер по ширине, но ограничиваем maxWidth через класс */}
              <div style={{ width: "100%", maxWidth: 200, position: "relative" }}>
                <Image
                    src={logo}            /* src, width, height, blurDataURL */
                  alt="Prompty Logo"
                  sizes="(max-width: 991px) 150px, 200px"
                  placeholder="blur"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Link>
          </div>

          {/* правая колонка — поиск */}
          <div className="col-md-4 col-3 d-flex justify-content-end">
            <button className="btn btn-dark btn-lg rounded-4 d-flex gap-3">
              <i className="bi bi-search" />
              <span className="d-md-block d-none">Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
