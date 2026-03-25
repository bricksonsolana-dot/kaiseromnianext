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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
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
          <a href="tel:+302103000155" className={styles.infoCellLink}>
            +30 210 300 0155
          </a>
          <span className={styles.infoCellMeta}>{t.info.phone.hours}</span>
        </div>

        {/* Email */}
        <div className={styles.infoCell}>
          <span className={styles.infoCellLabel}>{t.info.email.title}</span>
          <a href="mailto:info@kaiseromnia.gr" className={styles.infoCellLink}>
            info@kaiseromnia.gr
          </a>
          <a href="mailto:sales@kaiseromnia.gr" className={styles.infoCellLink}>
            sales@kaiseromnia.gr
          </a>
        </div>

      </div>

      {/* ── Form Section ──────────────────────────────────────── */}
      <section className={styles.formSection} data-testid="contact-form-section">
        <div className={styles.formHeader}>
          <span className={styles.sectionBadge}>{t.form.sectionLabel ?? t.breadcrumb.contact}</span>
          <h2 className={styles.sectionTitle}>{t.form.sectionTitle}</h2>
        </div>

        {submitted ? (
          <div className={styles.successBlock}>
            <p className={styles.successText}>{t.form.successMessage}</p>
            <p className={styles.successDesc}>{t.form.successDescription}</p>
            <button className={styles.resetBtn} onClick={handleReset}>
              {t.form.resetBtn ?? 'Send another message'}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12563.876539012345!2d23.5833!3d38.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a7f2c1e5d5b7%3A0x400bd2ce2b980a0!2z0JHPg9C/z4HPjM-Az4XPgc6/z4I!5e0!3m2!1sel!2sgr!4v1"
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