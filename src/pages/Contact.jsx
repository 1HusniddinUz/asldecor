import { useMemo, useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../assets/styles/Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  // Shu joylarni keyin real ma'lumotga almashtirasiz
  const CONTACT = useMemo(
    () => ({
      brand: "ASL DECOR",
      phone: "+998 91 418 18 84",
      email: "thjobir@gmail.com",
      telegramUsername: "https://t.me/AslDecor", // username yoki to'liq link bo'lishi mumkin
      instagram: "https://instagram.com/asldecor_patalok",
      locationText:
        "Bukhara , Vobkent region Charimgaron MFY Galaba street 199",
      mapLink:
        "https://maps.google.com/maps?q=40.019565,64.528622&ll=40.019565,64.528622&z=16",
    }),
    []
  );

  const normalizeTelegramUsername = (value) => {
    if (!value) return "";
    return String(value)
      .trim()
      .replace(/^https?:\/\/t\.me\//i, "")
      .replace(/^@/, "")
      .replace(/\?.*$/, "")
      .replace(/\/$/, "");
  };

  const tgUser = normalizeTelegramUsername(CONTACT.telegramUsername);
  const tgProfileUrl = tgUser ? `https://t.me/${tgUser}` : "#";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceKey: "contact_service_rover",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const buildTelegramLink = () => {
    const text =
      `${t("contact_tg_greeting", { brand: CONTACT.brand })}\n\n` +
      `${t("contact_tg_name")}: ${form.name || "-"}\n` +
      `${t("contact_tg_phone")}: ${form.phone || "-"}\n` +
      `${t("contact_tg_service")}: ${t(form.serviceKey)}\n\n` +
      `${t("contact_tg_message")}:\n${form.message || "-"}`;

    return tgUser ? `https://t.me/${tgUser}?text=${encodeURIComponent(text)}` : "#";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Telegram bo'lsa — Telegramga yo'naltiramiz
    if (tgUser) {
      window.open(buildTelegramLink(), "_blank", "noopener,noreferrer");
      return;
    }

    // Aks holda — emailga mailto fallback
    const subject = encodeURIComponent(`${CONTACT.brand} | Contact`);
    const body = encodeURIComponent(
      `${t("contact_tg_name")}: ${form.name}\n` +
        `${t("contact_tg_phone")}: ${form.phone}\n` +
        `${t("contact_tg_service")}: ${t(form.serviceKey)}\n\n` +
        `${t("contact_tg_message")}:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contactLux">
      <section className="contactWrap" aria-label={t("contact_aria_page")}>
        <header className="contactHead">
          <p className="cEyebrow">{t("contact_eyebrow")}</p>

          <h1 className="cTitle">
            {t("contact_title")} <span>{t("contact_title_span")}</span>
          </h1>

          <p className="cSub">{t("contact_sub")}</p>
        </header>

        <div className="contactGrid">
          {/* LEFT: Info */}
          <aside className="contactInfo" aria-label={t("contact_aria_details")}>
            <div className="infoCard">
              <div className="infoRow">
                <span className="infoIcon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="infoLabel">{t("contact_label_phone")}</p>
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
                  <p className="infoLabel">{t("contact_label_email")}</p>
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
                  <p className="infoLabel">{t("contact_label_location")}</p>
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
              <p className="socialTitle">{t("contact_social_title")}</p>

              <div className="socialBtns">
                <a
                  className="sBtn"
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("contact_aria_instagram")}
                  title={t("contact_aria_instagram")}
                >
                  <FaInstagram />
                </a>

                <a
                  className="sBtn"
                  href={tgProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("contact_aria_telegram")}
                  title={t("contact_aria_telegram")}
                >
                  <FaTelegramPlane />
                </a>
              </div>

              <p className="socialHint">{t("contact_social_hint")}</p>
            </div>

            <div className="noteCard">
              <p className="noteTitle">{t("contact_note_title")}</p>
              <p className="noteText">
                {t("contact_note_prefix")}{" "}
                <b>{t("contact_note_size")}</b> +{" "}
                <b>{t("contact_note_material")}</b> +{" "}
                <b>{t("contact_note_image")}</b>.{" "}
                {t("contact_note_suffix")}
              </p>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <section className="contactForm" aria-label={t("contact_aria_form")}>
            <form className="formCard" onSubmit={handleSubmit}>
              <div className="formHead">
                <p className="formEyebrow">{t("contact_form_eyebrow")}</p>
                <h2 className="formTitle">{t("contact_form_title")}</h2>
              </div>

              <div className="formGrid">
                <label className="field">
                  <span>{t("contact_field_name")}</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={t("contact_ph_name")}
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>{t("contact_field_phone")}</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={t("contact_ph_phone")}
                    autoComplete="tel"
                  />
                </label>

                <label className="field fieldFull">
                  <span>{t("contact_field_service")}</span>
                  <select
                    name="serviceKey"
                    value={form.serviceKey}
                    onChange={onChange}
                  >
                    <option value="contact_service_rover">
                      {t("contact_service_rover")}
                    </option>
                    <option value="contact_service_grav">
                      {t("contact_service_grav")}
                    </option>
                    <option value="contact_service_design">
                      {t("contact_service_design")}
                    </option>
                    <option value="contact_service_finish">
                      {t("contact_service_finish")}
                    </option>
                  </select>
                </label>

                <label className="field fieldFull">
                  <span>{t("contact_field_message")}</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder={t("contact_ph_message")}
                    rows={6}
                  />
                </label>
              </div>

              <div className="formActions">
                <button className="cBtn" type="submit">
                  {t("contact_btn_send")}
                </button>

                <a
                  className="cBtn cBtnGhost"
                  href={tgProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("contact_btn_telegram")}
                </a>
              </div>

              <p className="formFoot">{t("contact_form_foot")}</p>
            </form>
          </section>
        </div>

        <section className="contactMap" aria-label={t("contact_aria_map")}>
          <div className="mapFrame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6111.004459666683!2d64.528622!3d40.019565!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAxJzEwLjQiTiA2NMKwMzEnNDMuMCJF!5e0!3m2!1sru!2s!4v1766497131206!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contact_map_title")}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
