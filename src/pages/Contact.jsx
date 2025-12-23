import { useMemo, useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../assets/styles/Contact.css";

export default function Contact() {
  // Shu joylarni keyin real ma'lumotga almashtirasiz
  const CONTACT = useMemo(
    () => ({
      brand: "ASL DECOR",
      phone: "+998 91 418 18 84",
      email: "thjobir@gmail.com",
      telegramUsername: "https://t.me/AslDecor", // faqat username: t.me/your_username
      instagram: "https://instagram.com/asldecor_patalok",
      locationText: "Bukhara , Vobkent region Charimgaron MFY Galaba street 199",
      mapLink: "https://maps.google.com/maps?q=40.019565,64.528622&ll=40.019565,64.528622&z=16",
    }),
    []
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Rover kesish",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const buildTelegramLink = () => {
    const text =
      `Salom, ${CONTACT.brand}!\n\n` +
      `Ism: ${form.name || "-"}\n` +
      `Telefon: ${form.phone || "-"}\n` +
      `Xizmat: ${form.service}\n\n` +
      `Xabar:\n${form.message || "-"}`;

    return `https://t.me/${CONTACT.telegramUsername}?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Telegram username bo'lsa — Telegramga yo'naltiramiz
    if (
      CONTACT.telegramUsername &&
      CONTACT.telegramUsername !== "your_username"
    ) {
      window.open(buildTelegramLink(), "_blank", "noopener,noreferrer");
      return;
    }

    // Aks holda — emailga mailto fallback
    const subject = encodeURIComponent(`${CONTACT.brand} | Contact`);
    const body = encodeURIComponent(
      `Ism: ${form.name}\nTelefon: ${form.phone}\nXizmat: ${form.service}\n\nXabar:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contactLux">
      <section className="contactWrap" aria-label="Contact AslDecor">
        <header className="contactHead">
          <p className="cEyebrow">CONTACT / ASL DECOR </p>
          <h1 className="cTitle">
            Let’s keep it clean. <span>One message.</span>
          </h1>
          <p className="cSub">
            O‘lcham, material, rasm/namuna yuboring — biz tezda variant va narx
            yo‘nalishini aytamiz.
          </p>
        </header>

        <div className="contactGrid">
          {/* LEFT: Info */}
          <aside className="contactInfo" aria-label="Contact details">
            <div className="infoCard">
              <div className="infoRow">
                <span className="infoIcon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="infoLabel">Phone</p>
                  <a
                    className="infoValue"
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="divider" />

              <div className="infoRow">
                <span className="infoIcon">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="infoLabel">Email</p>
                  <a className="infoValue" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="divider" />

              <div className="infoRow">
                <span className="infoIcon">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="infoLabel">Location</p>
                  <a
                    className="infoValue"
                    href={CONTACT.mapLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {CONTACT.locationText}
                  </a>
                </div>
              </div>
            </div>

            <div className="socialCard">
              <p className="socialTitle">Social</p>
              <div className="socialBtns">
                <a
                  className="sBtn"
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  className="sBtn"
                  href={
                    CONTACT.telegramUsername
                      ? `https://t.me/AslDecor`
                      : "#"
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <FaTelegramPlane />
                </a>
              </div>

              <p className="socialHint">
                Tezkor aloqa uchun Telegram ideal: skrin, o‘lcham, namuna —
                hammasi bir joyda.
              </p>
            </div>

            <div className="noteCard">
              <p className="noteTitle">Tip</p>
              <p className="noteText">
                Eng tez hisob-kitob: <b>o‘lcham</b> + <b>material</b> +{" "}
                <b>rasm</b>. Qolganini biz “yes” qilib ketamiz 😄
              </p>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <section className="contactForm" aria-label="Send a message">
            <form className="formCard" onSubmit={handleSubmit}>
              <div className="formHead">
                <p className="formEyebrow">REQUEST</p>
                <h2 className="formTitle">Project details</h2>
              </div>

              <div className="formGrid">
                <label className="field">
                  <span>Ism</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Ismingiz"
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>Telefon</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+998 ..."
                    autoComplete="tel"
                  />
                </label>

                <label className="field fieldFull">
                  <span>Xizmat</span>
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                  >
                    <option>Rover kesish</option>
                    <option>Gravirovka</option>
                    <option>Dizayn & maket</option>
                    <option>Yakuniy ishlov</option>
                  </select>
                </label>

                <label className="field fieldFull">
                  <span>Xabar</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="O‘lcham, material, nechta dona, muddat..."
                    rows={6}
                  />
                </label>
              </div>

              <div className="formActions">
                <button className="cBtn" type="submit">
                  Send
                </button>

                <a
                  className="cBtn cBtnGhost"
                  href={
                    CONTACT.telegramUsername
                      ? `https://t.me/AslDecor`
                      : "#"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>

              <p className="formFoot">
                “Send” bosilsa: Telegram username to‘g‘ri bo‘lsa — Telegramga
                message bilan ochadi, bo‘lmasa email.
              </p>
            </form>
          </section>
        </div>
        <section className="contactMap" aria-label="Location map">
          <div className="mapFrame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6111.004459666683!2d64.528622!3d40.019565!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAxJzEwLjQiTiA2NMKwMzEnNDMuMCJF!5e0!3m2!1sru!2s!4v1766497131206!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AslDecor location"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
