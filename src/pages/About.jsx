import "../assets/styles/About.css";
import { NavLink } from "react-router-dom";

import sandiq from "../assets/images/5.png";
import qorayon from "../assets/images/qora--yon.jpg";
import oqyon from "../assets/images/oq-yon.jpg";

import patalok from "../assets/videos/patalok.mp4";
import naqsh from "../assets/videos/naqsh.mp4";
import rover from "../assets/videos/rover.mp4";
import temir from "../assets/videos/temir.mp4";
export default function About() {
  return (
    <div className="aboutLux">
      <section className="aboutLuxWrap" aria-label="About AslDecor">
        {/* Minimal Header */}
        <header className="aboutLuxHead">
          <p className="luxEyebrow">ABOUT / ASL DECOR</p>
          <h1 className="luxTitle">
            Precision craft. <span>Luxury finish.</span>
          </h1>
        </header>

        {/* Collage 1 (Big + smalls) */}
        <section className="luxCollage" aria-label="Visual collage">
          <figure className="luxTile luxBig">
            <img src={sandiq} alt="AslDecor hero work" loading="lazy" />
            <figcaption className="luxCap">Signature work</figcaption>
          </figure>

          <figure className="luxTile luxSmallTop">
            <img src={qorayon} alt="Detail shot" loading="lazy" />
            <figcaption className="luxCap">Detail</figcaption>
          </figure>

          <figure className="luxTile luxSmallBottom">
            <img src={oqyon} alt="Material texture" loading="lazy" />
            <figcaption className="luxCap">Texture</figcaption>
          </figure>

          <figure className="luxTile luxWide">
            <video
              className="luxMedia"
              src={rover} // bu yerga qaysi videoni qo'ymoqchi bo'lsangiz, o'shani bering
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="luxCap">Process</figcaption>
          </figure>
        </section>

        {/* Collage 2 (Elegant grid) */}
        <section className="luxGrid2" aria-label="More visuals">
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
            <figcaption className="luxCap">Clean edges</figcaption>
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
            <figcaption className="luxCap">Geometry</figcaption>
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
            <figcaption className="luxCap">Balance</figcaption>
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
            <figcaption className="luxCap">Material</figcaption>
          </figure>
        </section>

        {/* Minimal CTA */}
        <section className="luxCta" aria-label="Call to action">
          <div className="luxCtaCard">
            <div className="luxCtaLeft">
              <p className="luxCtaMini">Ready when You are</p>
              <p className="luxCtaLine">
                One message — and we align size, material, and finish.
              </p>
            </div>

            <div className="luxCtaRight">
              <NavLink to="/contact" end className="btnPrimary">
                Contact
              </NavLink>
              <NavLink to="/products" end className="btnGhost">
                Products
              </NavLink>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
