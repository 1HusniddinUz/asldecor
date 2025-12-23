import "../assets/styles/About.css";
import sandiq from "../assets/images/5.png"
import qorayon from "../assets/images/qora--yon.jpg"
import oqyon from "../assets/images/oq-yon.jpg"
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
            <img src="/about/process.jpg" alt="Process / workshop" loading="lazy" />
            <figcaption className="luxCap">Process</figcaption>
          </figure>
        </section>

        {/* Collage 2 (Elegant grid) */}
        <section className="luxGrid2" aria-label="More visuals">
          <figure className="luxTile luxTall">
            <img src="/about/work-1.jpg" alt="Cut work 1" loading="lazy" />
            <figcaption className="luxCap">Clean edges</figcaption>
          </figure>

          <figure className="luxTile">
            <img src="/about/work-2.jpg" alt="Cut work 2" loading="lazy" />
            <figcaption className="luxCap">Geometry</figcaption>
          </figure>

          <figure className="luxTile">
            <img src="/about/work-3.jpg" alt="Cut work 3" loading="lazy" />
            <figcaption className="luxCap">Balance</figcaption>
          </figure>

          <figure className="luxTile">
            <img src="/about/material.jpg" alt="Material" loading="lazy" />
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
              <a className="luxBtn" href="/contact">Contact</a>
              <a className="luxBtn luxBtnGhost" href="/products">Products</a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
