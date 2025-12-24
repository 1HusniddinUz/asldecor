import React from "react";
import "../assets/styles/Marketplaces.css";
import { useTranslation } from "react-i18next";

import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import wildberriesLogo from "../assets/images/marketplaces-icon/wb.png";
import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";

const b2cPlatforms = [
  {
    nameKey: "mkt_uzum_name",
    typeKey: "mkt_uzum_type",
    focusKey: "mkt_uzum_focus",
    url: "https://uzum.uz/uz/shop/husniddin",
    logo: uzumLogo,
    logoAltKey: "mkt_uzum_logo_alt",
  },
  {
    nameKey: "mkt_wb_name",
    typeKey: "mkt_wb_type",
    focusKey: "mkt_wb_focus",
    url: "https://www.wildberries.ru/seller/250059885",
    logo: wildberriesLogo,
    logoAltKey: "mkt_wb_logo_alt",
  },
  {
    nameKey: "mkt_ozon_name",
    typeKey: "mkt_ozon_type",
    focusKey: "mkt_ozon_focus",
    url: "",
    logo: ozonLogo,
    logoAltKey: "mkt_ozon_logo_alt",
  },
  {
    nameKey: "mkt_yandex_name",
    typeKey: "mkt_yandex_type",
    focusKey: "mkt_yandex_focus",
    url: "https://market.yandex.uz/business--husniddin/216503443",
    logo: yandexLogo,
    logoAltKey: "mkt_yandex_logo_alt",
  },
];

const Marketplaces = () => {
  const { t } = useTranslation();

  return (
    <section className="marketplaces-page" aria-label={t("mkt_page_aria")}>
      <div className="marketplaces-container">
        {/* HEADER */}
        <header className="marketplaces-header">
          <p className="marketplaces-eyebrow">{t("mkt_eyebrow")}</p>
          <h1 className="marketplaces-title">{t("mkt_title")}</h1>
          <p className="marketplaces-subtitle">{t("mkt_subtitle")}</p>
        </header>

        {/* B2C BLOCK */}
        <section className="marketplaces-block" aria-label={t("mkt_b2c_aria")}>
          <div className="marketplaces-block-header">
            <h2 className="marketplaces-block-title">{t("mkt_b2c_title")}</h2>
            <p className="marketplaces-block-text">{t("mkt_b2c_text")}</p>
          </div>

          <div className="marketplaces-grid">
            {b2cPlatforms.map((mkt) => (
              <article className="marketplace-card" key={mkt.nameKey}>
                <div className="marketplace-card-top">
                  <div className="marketplace-logo" aria-hidden="true">
                    {mkt.logo && (
                      <img
                        src={mkt.logo}
                        alt={t(mkt.logoAltKey)}
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="marketplace-card-texts">
                    <h3 className="marketplace-name">{t(mkt.nameKey)}</h3>
                    <p className="marketplace-type">{t(mkt.typeKey)}</p>
                  </div>
                </div>

                <p className="marketplace-focus">{t(mkt.focusKey)}</p>

                <div className="marketplace-footer">
                  <a
                    href={mkt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marketplace-link"
                  >
                    {t("mkt_btn_view")}
                  </a>
                  <span className="marketplace-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NOTE */}
        <section className="marketplaces-note" aria-label={t("mkt_note_aria")}>
          <p>{t("mkt_note_text")}</p>
        </section>
      </div>
    </section>
  );
};

export default Marketplaces;
