import "../assets/styles/About.css";
import { useTranslation } from "react-i18next";

import sandiq from "../assets/images/5.png";
import qorayon from "../assets/images/qora--yon.jpg";
import oqyon from "../assets/images/oq-yon.jpg";

import patalok from "../assets/videos/patalok.mp4";
import naqsh from "../assets/videos/naqsh.mp4";
import rover from "../assets/videos/rover.mp4";
import temir from "../assets/videos/temir.mp4";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="aboutLux">
      <section className="aboutLuxWrap" aria-label={t("about_aria_label")}>
        {/* Minimal Header */}
        <header className="aboutLuxHead">
          <p className="luxEyebrow">{t("about_eyebrow")}</p>

          <h1 className="luxTitle">
            {t("about_title")}
            <span>{t("about_title_span")}</span>
          </h1>
        </header>

        {/* Collage 1 (Big + smalls) */}
        <section className="luxCollage" aria-label={t("about_collage_aria")}>
          <figure className="luxTile luxBig">
            <img src={sandiq} alt={t("about_img_alt_hero")} loading="lazy" />
            <figcaption className="luxCap">{t("about_cap_sandiq")}</figcaption>
          </figure>

          <figure className="luxTile luxSmallTop">
            <img src={qorayon} alt={t("about_img_alt_detail")} loading="lazy" />
            <figcaption className="luxCap">{t("about_cap_dekor_1")}</figcaption>
          </figure>

          <figure className="luxTile luxSmallBottom">
            <img src={oqyon} alt={t("about_img_alt_texture")} loading="lazy" />
            <figcaption className="luxCap">{t("about_cap_dekor_2")}</figcaption>
          </figure>

          <figure className="luxTile luxWide">
            <video
              className="luxMedia"
              src={rover}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">{t("about_cap_process")}</figcaption>
          </figure>
        </section>

        {/* Collage 2 (Elegant grid) */}
        <section className="luxGrid2" aria-label={t("about_more_visuals_aria")}>
          <figure className="luxTile luxTall">
            <video
              className="luxMedia"
              src={patalok}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">{t("about_cap_patalok")}</figcaption>
          </figure>

          <figure className="luxTile">
            <video
              className="luxMedia"
              src={naqsh}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">{t("about_cap_decorative_1")}</figcaption>
          </figure>

          <figure className="luxTile">
            <video
              className="luxMedia"
              src={rover}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">{t("about_cap_decorative_2")}</figcaption>
          </figure>

          <figure className="luxTile">
            <video
              className="luxMedia"
              src={temir}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">{t("about_cap_material_panel")}</figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
}
