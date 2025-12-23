import "../assets/styles/Products.css";
import img1 from "../assets/images/4.png"
import img2 from "../assets/images/5.png"
import img3 from "../assets/images/6.png"
import img4 from "../assets/images/grey.png"
import img5 from "../assets/images/kor-kond.jpg"
import img6 from "../assets/images/molochniy.png"
import img7 from "../assets/images/oq.png"
import img8 from "../assets/images/oq-opp.jpg"
import img9 from "../assets/images/naqsh.jpg"
const PRODUCTS = [
  { id: 1, title: "CONCURSO | ECO RESORT DAS BARCAS", img: img1 },
  { id: 2, title: "PROJECT | MDF DECOR PANEL", img: img2 },
  { id: 3, title: "CUT | ACRYLIC SIGNAGE", img: img3 },
  { id: 4, title: "CUSTOM | INTERIOR DECOR", img: img8 },
  { id: 5, title: "LIGHT | NEON ELEMENTS", img: img9 },
  { id: 6, title: "PROCESS | CNC WORKFLOW", img: img5 },
  { id: 7, title: "BRANDING | WALL LOGO", img: img7 },
  { id: 8, title: "DETAIL | GOLD TEXTURE", img: img4 },
  { id: 9, title: "MATERIAL | STONE PATTERN", img: img6 },
];

export default function Products() {
  return (
    <div className="productsPage">
      <section className="productsWrap" aria-label="AslDecor products grid">
        <div className="productsGrid">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="productCard"
              tabIndex={0}
              aria-label={p.title}
            >
              <img
                className="productImg"
                src={p.img}
                alt={p.title}
                loading="lazy"
                onError={(e) => {
                  // Agar rasm topilmasa, tile buzilib qolmasin (fallback)
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("noImg");
                }}
              />

              <div className="productOverlay" aria-hidden="true">
                <p className="productTitle">{p.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
