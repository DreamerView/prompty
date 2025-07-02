"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.stickyGlass}>
      <div className="container py-2 my-lg-4 my-4">
        <div className="row align-items-center">
          {/* левая колонка */}
          <div className="col-md-4 col-3 d-flex gap-3">
            {pathname !== "/" ? (
              <button
                className="btn btn-dark btn-lg rounded-4 d-flex gap-3"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left" /><span className="d-md-block d-none">Back</span>
              </button>
            ) : (
              <button className="btn btn-dark btn-lg rounded-4 d-flex gap-3">
                <i className="bi bi-list" /><span className="d-md-block d-none">Categories</span>
              </button>
            )}
          </div>

          {/* центр — логотип */}
          <div className="col-md-4 col-6 d-flex justify-content-center">
            <Link className={styles.logoHover} href="/">
              <img
                src="/logo.png"
                alt="Prompty Logo"
                style={{ maxWidth: 200, width: "100%", height: "auto" }}
              />
            </Link>
          </div>

          {/* правая колонка — поиск */}
          <div className="col-md-4 col-3 d-flex justify-content-end">
            {/* <input
              type="search"
              className="form-control bg-body-secondary rounded-5 px-5 py-2 border-0"
              placeholder="Search"
            /> */}
                <button className="btn btn-dark btn-lg rounded-4 d-flex gap-3">
                    <i className="bi bi-search" /><span className="d-md-block d-none">Search</span>
                </button>
          </div>
        </div>
      </div>
    </header>
  );
}
