import React from "react";
import "../assets/styles/Home.css";
import qorayon from "../assets/images/qora--yon.jpg";
import eshik from "../assets/images/oq2.png";
import sandiq from "../assets/images/4.png";
import korabka from "../assets/images/oq-opp.jpg";
import naqsh from "../assets/images/naqsh.jpg";
const FEATURED = [
  {
    id: 1,
    title: "CNC Decor Panel",
    subtitle: "Clean edges • Sharp finish",
    img: eshik,
  },
  {
    id: 2,
    title: "Acrylic Sign",
    subtitle: "Minimal • Premium look",
    img: naqsh,
  },
  { id: 3, title: "Wall Logo", subtitle: "Balance • Geometry", img: korabka },
  {
    id: 4,
    title: "Detail Close-up",
    subtitle: "Texture • Precision",
    img: sandiq,
  },
];

export default function Home() {
  return (
    <section className="homePage" aria-label="AslDecor home page">
      <div className="homeWrap">
        {/* HERO */}
        <header className="homeHero">
          <div className="heroLeft">
            <p className="heroEyebrow">ASL DECOR / ROVER • CNC</p>

            <h1 className="heroTitle">
              Showroom-level <span>precision.</span>
              <br />
              Minimal design, maximum <span>impact.</span>
            </h1>

            <p className="heroSub">
              Buyurtma jarayoni sodda: o‘lcham + material + namuna. Qolganini
              biz “clean” qilib beramiz.
            </p>

            <div className="heroActions">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/products"
                end
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Products
              </NavLink>
            </div>

            <div className="heroChips" aria-label="Quick highlights">
              <span className="chip">±0.5mm aniqlik</span>
              <span className="chip">MDF / Akril / Fanera</span>
              <span className="chip">Tez muddat</span>
            </div>
          </div>

          <div className="heroRight" aria-label="Hero visual">
            <div className="heroFrame">
              <img
                src={qorayon}
                alt="AslDecor featured work"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("noImg");
                }}
              />
              <div className="heroOverlay" aria-hidden="true" />
              <div className="heroStamp">
                <p className="stampTop">ASL DECOR</p>
                <p className="stampMid">PRECISION • DETAIL</p>
                <p className="stampBot">ROVER / CNC CUT</p>
              </div>
            </div>
          </div>
        </header>

        {/* FEATURED GRID (showroom tiles) */}
        <section className="homeSection" aria-label="Featured works">
          <div className="sectionHead">
            <h2 className="sectionTitle">Featured</h2>
            <p className="sectionText">
              4 ta ish — showroom “vibe” uchun yetarli. Ortiqcha shovqin yo‘q.
            </p>
          </div>

          <div className="featuredGrid">
            {FEATURED.map((item) => (
              <article
                className="tile"
                key={item.id}
                tabIndex={0}
                aria-label={item.title}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("noImg");
                  }}
                />
                <div className="tileOverlay" aria-hidden="true" />
                <div className="tileText">
                  <p className="tileTitle">{item.title}</p>
                  <p className="tileSub">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES (minimal, showroom labels) */}
        <section className="homeSection" aria-label="Services">
          <div className="sectionHead">
            <h2 className="sectionTitle">Services</h2>
            <p className="sectionText">
              3 ta asosiy yo‘nalish — aniq, qisqa, premium.
            </p>
          </div>

          <div className="servicesRow">
            <div className="serviceCard">
              <p className="serviceTop">01</p>
              <p className="serviceTitle">Rover kesish</p>
              <p className="serviceText">
                Toza qirra, aniq kesim, stabil natija.
              </p>
            </div>

            <div className="serviceCard">
              <p className="serviceTop">02</p>
              <p className="serviceTitle">Gravirovka</p>
              <p className="serviceText">
                Logo, yozuv, pattern — minimal, lekin kuchli.
              </p>
            </div>

            <div className="serviceCard">
              <p className="serviceTop">03</p>
              <p className="serviceTitle">Maket & ishlov</p>
              <p className="serviceText">
                Fayl tayyorlash + yakuniy finish (lux look).
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS (tiny showroom steps) */}
        <section className="homeSection" aria-label="Process steps">
          <div className="sectionHead">
            <h2 className="sectionTitle">Process</h2>
            <p className="sectionText">
              4 qadam — boshqasi unnecessary drama 😄
            </p>
          </div>

          <div className="stepsRow">
            <div className="step">
              <p className="stepNo">01</p>
              <p className="stepTitle">Brief</p>
              <p className="stepText">O‘lcham + material + namuna</p>
            </div>
            <div className="step">
              <p className="stepNo">02</p>
              <p className="stepTitle">Layout</p>
              <p className="stepText">Maket tekshiruv</p>
            </div>
            <div className="step">
              <p className="stepNo">03</p>
              <p className="stepTitle">Cut</p>
              <p className="stepText">Rover / CNC kesish</p>
            </div>
            <div className="step">
              <p className="stepNo">04</p>
              <p className="stepTitle">Finish</p>
              <p className="stepText">Yakuniy ishlov & topshirish</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="homeCta" aria-label="Call to action">
          <div className="ctaBar">
            <div>
              <p className="ctaMini">READY</p>
              <p className="ctaLine">
                Buyurtma tayyormi? 1 ta xabar — va biz boshlaymiz.
              </p>
            </div>
            <div className="ctaBtns">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/marketplaces"
                end
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                Marketplaces
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
