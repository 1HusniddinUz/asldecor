import React from "react";
import "../assets/styles/Marketplaces.css";

import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import wildberriesLogo from "../assets/images/marketplaces-icon/wb.png";
import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";

const b2cPlatforms = [
  {
    name: "Uzum Market",
    type: "Marketplace storefront",
    focus: "Mahsulotlar, aksiya va tezkor buyurtmalar",
    url: "https://uzum.uz/uz/shop/husniddin",
    logo: uzumLogo,
    logoAlt: "Uzum Market logo",
  },
  {
    name: "Wildberries",
    type: "Catalog & orders",
    focus: "Keng auditoriya, katalog orqali savdo",
    url: "https://www.wildberries.ru/seller/250059885",
    logo: wildberriesLogo,
    logoAlt: "Wildberries logo",
  },
  {
    name: "Ozon",
    type: "Product listing",
    focus: "Tovar sahifalari va trafik orqali buyurtma",
    url: "",
    logo: ozonLogo,
    logoAlt: "Ozon logo",
  },
  {
    name: "Yandex Market",
    type: "Search-driven demand",
    focus: "Qidiruvdan keladigan talab va konversiya",
    url: "https://market.yandex.uz/business--husniddin/216503443",
    logo: yandexLogo,
    logoAlt: "Yandex Market logo",
  },
];

const Marketplaces = () => {
  return (
    <section className="marketplaces-page" aria-label="Marketplaces page">
      <div className="marketplaces-container">
        {/* HEADER */}
        <header className="marketplaces-header">
          <p className="marketplaces-eyebrow">MARKETPLACES / ASL DECOR </p>
          <h1 className="marketplaces-title">
            B2C marketplace’lar
          </h1>
          <p className="marketplaces-subtitle">
            Quyidagi platformalarda mahsulotlarimizni ko‘rishingiz va buyurtma berishingiz mumkin.
          </p>
        </header>

        {/* B2C BLOCK */}
        <section className="marketplaces-block" aria-label="B2C platforms">
          <div className="marketplaces-block-header">
            <h2 className="marketplaces-block-title">B2C platformalar</h2>
            <p className="marketplaces-block-text">
              Har bir marketplace — alohida auditoriya va alohida “traffic” manbai. Sizga qulayini tanlang.
            </p>
          </div>

          <div className="marketplaces-grid">
            {b2cPlatforms.map((mkt) => (
              <article className="marketplace-card" key={mkt.name}>
                <div className="marketplace-card-top">
                  <div className="marketplace-logo" aria-hidden="true">
                    {mkt.logo && <img src={mkt.logo} alt={mkt.logoAlt} loading="lazy" />}
                  </div>

                  <div className="marketplace-card-texts">
                    <h3 className="marketplace-name">{mkt.name}</h3>
                    <p className="marketplace-type">{mkt.type}</p>
                  </div>
                </div>

                <p className="marketplace-focus">{mkt.focus}</p>

                <div className="marketplace-footer">
                  <a
                    href={mkt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marketplace-link"
                  >
                    View
                  </a>
                  <span className="marketplace-arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOTE */}
        <section className="marketplaces-note" aria-label="Note">
          <p>
            Eslatma: Platformalardagi narx va mavjudlik marketplace siyosatiga qarab o‘zgarishi mumkin.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Marketplaces;
