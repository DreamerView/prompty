"use client";

import { useCallback } from "react";
import Link from "next/link";

/**
 * Bootstrap modal. При клике на тег-кнопку модалка закрывается
 * через JS-API (onClick → bootstrap.Modal.hide()).
 *
 * @param {{ list: { title: string; keys: string[] }[] }} props
 */
export default function Modal({ list }) {
  /** Закрыть модалку по ID — сработает и при CDN-версии, и при import */
  const handleClose = useCallback(() => {
    const el = document.getElementById("categoriesModal");
    if (!el) return;

    // bootstrap может быть в window или как глобальная переменная
    const bs = window.bootstrap || window.bootstrap?.Modal ? window.bootstrap : bootstrap;
    if (!bs?.Modal) return;

    const instance = bs.Modal.getInstance(el) ?? new bs.Modal(el);
    instance.hide();
  }, []);

  return (
    <div
      className="modal fade"
      id="categoriesModal"
      tabIndex="-1"
      aria-labelledby="categoriesModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
        <div className="modal-content border-0">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="categoriesModalLabel">
              ❤️‍🔥 Categories
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            {list.map((render, index) => (
              <div key={index}>
                <h3 className="d-flex gap-3 align-items-center">
                  {render.title.charAt(0).toUpperCase() + render.title.slice(1)} 
                  <Link onClick={handleClose} href={`/categories/${render.title}`} className="btn btn-secondary rounded-4 d-flex gap-2"><i className="bi bi-box-arrow-up-right"></i>View more</Link>
                </h3>

                <div className="d-flex flex-wrap gap-2 my-4">
                  {render.keys.map((attr, idx) => (
                    <Link
                      key={idx}
                      href={`/tags/${attr}`}
                      className="btn btn-light rounded-4"
                      style={{ fontSize: "0.9rem" }}
                      onClick={handleClose}         /* ⬅️ закрываем модалку */
                    >
                      #{attr}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
