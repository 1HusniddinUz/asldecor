import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/Home.css";

import eshik from "../assets/images/oq2.png";
import sandiq from "../assets/images/4.png";
import korabka from "../assets/images/oq-opp.jpg";
import naqsh from "../assets/images/naqsh.jpg";
import heroVideo from "../assets/videos/rover.mp4";

const FEATURED = [
  {
    id: 1,
    titleKey: "home_featured_1_title",
    subtitleKey: "home_featured_1_subtitle",
    img: eshik,
  },
  {
    id: 2,
    titleKey: "home_featured_2_title",
    subtitleKey: "home_featured_2_subtitle",
    img: naqsh,
  },
  {
    id: 3,
    titleKey: "home_featured_3_title",
    subtitleKey: "home_featured_3_subtitle",
    img: korabka,
  },
  {
    id: 4,
    titleKey: "home_featured_4_title",
    subtitleKey: "home_featured_4_subtitle",
    img: sandiq,
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="homePage" aria-label={t("home_aria_page")}>
      <div className="homeWrap">
        {/* HERO */}
        <header className="homeHero">
          <div className="heroFrame heroVideoFrame">
            <video
              className="heroVideo"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="heroOverlay" aria-hidden="true" />

            <div className="heroStamp">
              <p className="stampTop">{t("home_stamp_top")}</p>
              <p className="stampMid">{t("home_stamp_mid")}</p>
              {/* <p className="stampBot">PRECISION • DETAIL</p> */}
            </div>
          </div>
        </header>

        {/* FEATURED GRID */}
        <section className="homeSection" aria-label={t("home_aria_featured")}>
          <div className="sectionHead">
            <h2 className="sectionTitle">{t("home_featured_title")}</h2>
          </div>

          <div className="featuredGrid">
            {FEATURED.map((item) => (
              <article
                className="tile"
                key={item.id}
                tabIndex={0}
                aria-label={t(item.titleKey)}
              >
                <img
                  src={item.img}
                  alt={t(item.titleKey)}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("noImg");
                  }}
                />
                <div className="tileOverlay" aria-hidden="true" />
                <div className="tileText">
                  <p className="tileTitle">{t(item.titleKey)}</p>
                  <p className="tileSub">{t(item.subtitleKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="homeSection" aria-label={t("home_aria_services")}>
          <div className="sectionHead">
            <h2 className="sectionTitle">{t("home_services_title")}</h2>
            <p className="sectionText">{t("home_services_subtitle")}</p>
          </div>

          <div className="servicesRow">
            <div className="serviceCard">
              <p className="serviceTop">01</p>
              <p className="serviceTitle">{t("home_service_1_title")}</p>
              <p className="serviceText">{t("home_service_1_text")}</p>
            </div>

            <div className="serviceCard">
              <p className="serviceTop">02</p>
              <p className="serviceTitle">{t("home_service_2_title")}</p>
              <p className="serviceText">{t("home_service_2_text")}</p>
            </div>

            <div className="serviceCard">
              <p className="serviceTop">03</p>
              <p className="serviceTitle">{t("home_service_3_title")}</p>
              <p className="serviceText">{t("home_service_3_text")}</p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="homeSection" aria-label={t("home_aria_process")}>
          <div className="sectionHead">
            <h2 className="sectionTitle">{t("home_process_title")}</h2>
          </div>

          <div className="stepsRow">
            <div className="step">
              <p className="stepNo">01</p>
              <p className="stepTitle">{t("home_step_1_title")}</p>
              <p className="stepText">{t("home_step_1_text")}</p>
            </div>

            <div className="step">
              <p className="stepNo">02</p>
              <p className="stepTitle">{t("home_step_2_title")}</p>
              <p className="stepText">{t("home_step_2_text")}</p>
            </div>

            <div className="step">
              <p className="stepNo">03</p>
              <p className="stepTitle">{t("home_step_3_title")}</p>
              <p className="stepText">{t("home_step_3_text")}</p>
            </div>

            <div className="step">
              <p className="stepNo">04</p>
              <p className="stepTitle">{t("home_step_4_title")}</p>
              <p className="stepText">{t("home_step_4_text")}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="homeCta" aria-label={t("home_aria_cta")}>
          <div className="ctaBar">
            <div>
              <p className="ctaMini">{t("home_cta_mini")}</p>
              <p className="ctaLine">{t("home_cta_line")}</p>
            </div>

            <div className="ctaBtns">
              <NavLink to="/contact" end className="btnPrimary">
                {t("home_cta_btn_contact")}
              </NavLink>
              <NavLink to="/products" end className="btnGhost">
                {t("home_cta_btn_products")}
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
