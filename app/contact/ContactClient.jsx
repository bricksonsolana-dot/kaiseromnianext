'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';
import translations from './translations';
import styles from './ContactPage.module.css';
import { AnimatedDivider } from '@/app/components/AnimatedDivider/AnimatedDivider';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  sqm: '',
  location: '',
  message: '',
};

export default function ContactClient() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setSubmitted(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.page} data-testid="contact-page">

      {/* ── Header ────────────────────────────────────────────── */}
      <header className={styles.header} data-testid="contact-hero">
        <span className={styles.eyebrow}>{t.breadcrumb.contact}</span>
        <h1 className={styles.pageTitle}>{t.hero.title}</h1>
        <p className={styles.pageSubtitle}>{t.hero.subtitle}</p>
      </header>

      {/* ── Hero Image ────────────────────────────────────────── */}
      <div className={styles.heroImageWrap}>
        <Image
          src="/contact/contact1.png"
          alt="Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ── Info Strip ────────────────────────────────────────── */}
      <div className={styles.infoStrip} data-testid="contact-info-strip">

        {/* Address */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>{t.info.address.title}</span>
          <span className={styles.infoCellValue}>
            {t.info.address.lines[0]}
          </span>
          <span className={styles.infoCellMeta}>
            {t.info.address.lines.slice(1).join('\n')}
          </span>
        </div>

        {/* Phone */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>{t.info.phone.title}</span>
          <a
            href={`tel:${t.info.phone.number.replace(/\s/g, '')}`}
            className={styles.infoCellLink}
          >
            {t.info.phone.number}
          </a>
          <span className={styles.infoCellMeta}>{t.info.phone.hours}</span>
        </div>

        {/* Email */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>{t.info.email.title}</span>
          {t.info.email.addresses.map((addr) => (
            <a key={addr} href={`mailto:${addr}`} className={styles.infoCellLink}>
              {addr}
            </a>
          ))}
        </div>

      </div>

      {/* ── Form Section ──────────────────────────────────────── */}
      <section className={styles.formSection} data-testid="contact-form-section">
        <div className={styles.formHeader}>
          <span className={styles.sectionBadge}>{t.form.sectionLabel}</span>
          <h2 className={styles.sectionTitle}>{t.form.sectionTitle}</h2>
        </div>

        {submitted ? (
          <div className={styles.successBlock}>
            <p className={styles.successText}>{t.form.successMessage}</p>
            <p className={styles.successDesc}>{t.form.successDescription}</p>
            <button className={styles.resetBtn} onClick={handleReset}>
              {t.form.resetBtn}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            data-testid="contact-form"
          >
            {/* Row 1 — Name + Email */}
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.name.label}
                </label>
                <input
                  data-testid="input-name"
                  className={styles.input}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.fields.name.placeholder}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.email.label}
                </label>
                <input
                  data-testid="input-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.fields.email.placeholder}
                  required
                />
              </div>
            </div>

            {/* Row 2 — Phone + Project Type */}
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.phone.label}
                </label>
                <input
                  data-testid="input-phone"
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.fields.phone.placeholder}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.projectType.label}
                </label>
                <select
                  data-testid="select-project-type"
                  className={styles.select}
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {t.form.fields.projectType.placeholder}
                  </option>
                  {t.projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3 — Sqm + Location */}
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.sqm.label}
                </label>
                <input
                  data-testid="input-sqm"
                  className={styles.input}
                  type="number"
                  name="sqm"
                  value={formData.sqm}
                  onChange={handleChange}
                  placeholder={t.form.fields.sqm.placeholder}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  {t.form.fields.location.label}
                </label>
                <input
                  data-testid="input-location"
                  className={styles.input}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={t.form.fields.location.placeholder}
                />
              </div>
            </div>

            {/* Message */}
            <div className={styles.fieldGroupFull}>
              <label className={styles.label}>
                {t.form.fields.message.label}
              </label>
              <textarea
                data-testid="input-message"
                className={styles.textarea}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.fields.message.placeholder}
                rows={5}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              data-testid="submit-btn"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? t.form.submittingBtn : t.form.submitBtn}
            </button>
          </form>
        )}
      </section>

      {/* ── Map ───────────────────────────────────────────────── */}
      <section data-testid="map-section">
        <div className={styles.mapWrap}>
          <iframe
            src={t.map.src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t.map.title}
          />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className={styles.faqSection} data-testid="faq-section">
        <span className={styles.sectionBadge}>{t.faq.sectionLabel}</span>
        <h2 className={styles.sectionTitle}>{t.faq.sectionTitle}</h2>

        <div className={styles.faqList} data-testid="faq-accordion">
          <AnimatedDivider />
          {t.faq.items.map((item, index) => (
            <div key={index} className={styles.faqEntry}>
              <button
                className={`${styles.faqRow} ${openFaq === index ? styles.faqRowOpen : ''}`}
                onClick={() => toggleFaq(index)}
                data-testid={`faq-trigger-${index}`}
                aria-expanded={openFaq === index}
              >
                <span className={styles.faqQuestion}>{item.question}</span>
                <span
                  className={`${styles.faqIcon} ${openFaq === index ? styles.faqIconOpen : ''}`}
                >
                  +
                </span>
              </button>

              <div
                className={`${styles.faqContent} ${openFaq === index ? styles.faqContentOpen : ''}`}
                aria-hidden={openFaq !== index}
              >
                <div className={styles.faqContentInner}>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>

              <AnimatedDivider delay={(index + 1) * 80} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}