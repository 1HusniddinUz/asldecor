import "../assets/styles/Products.css";
import { useTranslation } from "react-i18next";

import img1 from "../assets/images/4.png";
import img2 from "../assets/images/5.png";
import img3 from "../assets/images/6.png";
import img4 from "../assets/images/grey.png";
import img5 from "../assets/images/kor-kond.jpg";
import img6 from "../assets/images/molochniy.png";
import img7 from "../assets/images/oq.png";
import img8 from "../assets/images/oq-opp.jpg";
import img9 from "../assets/images/naqsh.jpg";

const PRODUCTS = [
  { id: 1, titleKey: "products_item_1", img: img1 },
  { id: 2, titleKey: "products_item_2", img: img2 },
  { id: 3, titleKey: "products_item_3", img: img3 },
  { id: 4, titleKey: "products_item_4", img: img8 },
  { id: 5, titleKey: "products_item_5", img: img9 },
  { id: 6, titleKey: "products_item_6", img: img5 },
  { id: 7, titleKey: "products_item_7", img: img7 },
  { id: 8, titleKey: "products_item_8", img: img4 },
  { id: 9, titleKey: "products_item_9", img: img6 },
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="productsPage">
      <section className="productsWrap" aria-label={t("products_aria_grid")}>
        <div className="productsGrid">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="productCard"
              tabIndex={0}
              aria-label={t(p.titleKey)}
            >
              <img
                className="productImg"
                src={p.img}
                alt={t(p.titleKey)}
                loading="lazy"
                onError={(e) => {
                  // Agar rasm topilmasa, tile buzilib qolmasin (fallback)
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("noImg");
                }}
              />

              <div className="productOverlay" aria-hidden="true">
                <p className="productTitle">{t(p.titleKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
