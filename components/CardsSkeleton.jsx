"use client";

import style from "./Cards.module.css";

/**
 * Каркас (skeleton) из 9 карточек-заглушек.
 * Никаких данных не требуется — просто показываем шиммер-рамку и серые полосы текста.
 */
export default function CardsSkeleton() {
    const placeholders = Array.from({ length: 9 });

    return (
        <div className="container py-4">
            <div className={`${style["gradient-border"]} mb-5 rounded-5`} style={{ height: 40, width:"20rem" }} />
            <div className="row">
                {placeholders.map((_, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="d-block" style={{ padding: "1rem" }}>
                            {/* картинка-заглушка со shimmer-рамкой */}
                            <div
                                className={`w-100 h-auto ${style["gradient-border"]}`}
                                style={{ aspectRatio: 1.5, borderRadius: "1rem" }}
                            />

                            {/* заголовок-скелет */}
                            <div className={`mt-4 mb-3 ${style["gradient-border"]}`} style={{ height: 24 }}>
                            </div>

                            {/* описание-скелет (две строки) */}
                            <div className={`${style["gradient-border"]} w-75 mb-2 rounded-4`} style={{ height: 16 }} />
                            <div className={`${style["gradient-border"]} w-50 mb-2 rounded-4`} style={{ height: 16 }} />

                            {/* кнопки-теги-скелет */}
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                {Array.from({ length: 3 }).map((__, k) => (
                                    <button type="button" key={k} className={`btn ${style["gradient-border"]} mb-2 rounded-4`} style={{ height: 30, width: 100 }} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
