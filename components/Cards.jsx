import style from "./Cards.module.css";
import Link from "next/link";

const Cards = ({ list, title ="" }) => {
  return (
    <div className="container py-4">
      {title!=="" && <h1 className="mb-5">{title}</h1>}
      <div className="row">
        {list?.map((render, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className={`${style["neon-hover"]} d-block`}>
              <Link href={`/gallery/${render['id']}`} style={{all:"unset"}}>
                <div
                  className={`w-100 h-auto ${style["gradient-border"]}`}
                  style={{ aspectRatio: 1.5 }}
                >
                  <img
                    src={render["image"]}
                    className="w-100 h-100"
                    style={{
                      aspectRatio: 1.5,
                      objectFit: "cover",
                      borderRadius: "1rem",
                    }}
                    alt=""
                  />
                </div>
                <h5 className="mt-4 mb-3">{render["title"] || "Неизвестно"}</h5>
                <p className="opacity-75">{render["desc"]}</p>
              </Link>
              <div className="d-flex flex-wrap gap-2">
                {render['key'].map(((attr,index)=><Link key={index} href={`/tags/${attr}`} className="btn btn-secondary btn-dark rounded-4" style={{fontSize:"0.9rem"}}>#{attr}</Link>))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
