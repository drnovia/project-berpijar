/* The Vinext starter does not include next/image. Native images are intentionally kept
 * with explicit alt/loading attributes and existing object-fit styling to preserve the
 * current crop, layout, and responsive behavior without adding a dependency. */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const focusAreas = [
  { number: "01", title: "PENDIDIKAN", text: "Bergerak di bidang pendidikan profit dan non-profit, dengan komitmen mendukung dan mengembangkan pendidikan." },
  { number: "02", title: "LIFE SKILL", text: "Membekali anak dengan life skill untuk membantu mempersiapkan diri menghadapi realita kehidupan dan dunia kerja." },
  { number: "03", title: "PEMBERDAYAAN", text: "Mengembangkan soft skill dan bekal yang membantu anak bertumbuh serta menghadapi masa depan." },
  { number: "04", title: "INKLUSIVITAS", text: "Menghadirkan pembekalan life skill untuk teman tuli sebagai salah satu program andalan yayasan." },
];

const programs = [
  { number: "01", title: "LIFE SKILL UNTUK TEMAN TULI", text: "Salah satu program andalan Berpijar: pembekalan life skill agar peserta lebih siap berjuang, bertahan, dan meningkatkan taraf kehidupan yang lebih layak.", featured: true },
  { number: "02", title: "PEMBINAAN ANAK YATIM PIATU", text: "Pembekalan untuk anak yatim piatu merupakan salah satu program andalan yayasan. Informasi bentuk kegiatan akan diperbarui." },
  { number: "03", title: "PENDIDIKAN", text: "Yayasan bergerak dalam pendidikan profit dan non-profit, dengan komitmen mendukung serta mengembangkan pendidikan, soft skill, dan life skill." },
  { number: "04", title: "PROGRAM SOSIAL & KEMANUSIAAN", text: "Tujuan yayasan mencakup bidang sosial, kemanusiaan, keagamaan, pendidikan, dan kegiatan terkait lainnya. Informasi program akan diperbarui." },
];

const newsItems = [
  { number: "01", category: "PENDIDIKAN / INKLUSIVITAS", title: "Tim Pengabdian Masyarakat Universitas Negeri Malang Hadirkan Inovasi AI Tutoring System untuk Teman Tuli, Wujudkan Pendidikan Inklusif Berkualitas", date: "TANGGAL BELUM TERSEDIA" },
];

function Placeholder({ label, className = "", src, alt }: { label: string; className?: string; src?: string; alt?: string }) {
  return <div className={`placeholder ${className} ${src ? "has-image" : ""}`} role={src ? undefined : "img"} aria-label={src ? undefined : label}>
    {src ? <img src={src} alt={alt ?? label} className="placeholder-image" loading={className.includes("hero") ? "eager" : "lazy"} /> : null}
    {src ? <div className="placeholder-scrim" /> : null}
    <span>{src ? "BERPIJAR / KEGIATAN" : "IMAGE PLACEHOLDER"}</span><small>{label}</small>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = reduceMotion ? null : new Lenis({ autoRaf: false, anchors: true, duration: 1.05, smoothWheel: true, syncTouch: false });
    const lenisRaf = (time: number) => lenis?.raf(time * 1000);

    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(lenisRaf);
      gsap.ticker.lagSmoothing(0);
    }

    const context = gsap.context(() => {
      const imageTargets = ".bp-program-feature img, .bp-activity-rail img";
      const motionTargets = ".bp-focus-item, .bp-program-item, .bp-small-stories article, .bp-metrics div";
      const sectionTargets = ".bp-focus, .bp-program, .bp-stories, .bp-impact, .bp-cta, .bp-footer";

      if (reduceMotion) {
        return;
      }

      gsap.from(".bp-hero-copy", { opacity: 0, y: 18, duration: 0.75, ease: "power2.out" });
      gsap.from(".bp-hero-visual", { opacity: 0, y: 14, duration: 0.85, delay: 0.08, ease: "power2.out" });
      gsap.set(motionTargets, { opacity: 0, y: 18 });
      gsap.set(imageTargets, { clipPath: "inset(0 0 10% 0)", opacity: 0.72, scale: 1.025 });

      ScrollTrigger.batch(sectionTargets, {
        start: "top 84%",
        once: true,
        onEnter: (elements) => gsap.from(elements, { opacity: 0, y: 18, duration: 0.68, stagger: 0.06, ease: "power2.out", overwrite: true }),
      });
      ScrollTrigger.batch(motionTargets, {
        start: "top 88%",
        once: true,
        onEnter: (elements) => gsap.to(elements, { opacity: 1, y: 0, duration: 0.62, stagger: 0.07, ease: "power2.out", overwrite: true }),
      });
      ScrollTrigger.batch(imageTargets, {
        start: "top 86%",
        once: true,
        onEnter: (elements) => gsap.to(elements, { clipPath: "inset(0 0 0% 0)", opacity: 1, scale: 1, duration: 0.9, stagger: 0.08, ease: "power2.out", overwrite: true }),
      });
      ScrollTrigger.batch(".bp-label-line", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => gsap.fromTo(elements, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.65, stagger: 0.06, ease: "power2.out", overwrite: true }),
      });
      ScrollTrigger.batch(".bp-item-number, .bp-program-number, .bp-story-index, .bp-cta-index", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => gsap.from(elements, { opacity: 0, x: -8, duration: 0.55, stagger: 0.05, ease: "power2.out", overwrite: true }),
      });

      const compactMotion = window.matchMedia("(max-width: 680px)").matches;
      const revealDuration = compactMotion ? 0.52 : 0.7;
      const revealEase = "power2.out";
      const aboutSection = document.querySelector<HTMLElement>("#tentang");
      const newsSection = document.querySelector<HTMLElement>("#artikel");
      const featuredSection = document.querySelector<HTMLElement>("#featured-article");

      if (aboutSection) {
        const aboutLabel = aboutSection.querySelector<HTMLElement>(".bp-section-label");
        const aboutHeading = aboutSection.querySelector<HTMLElement>(".bp-intro h2");
        const aboutDescription = aboutSection.querySelector<HTMLElement>(".bp-intro-side > p");
        const aboutMedia = aboutSection.querySelector<HTMLElement>(".bp-about-media");
        const aboutImage = aboutSection.querySelector<HTMLImageElement>(".bp-about-media img");
        const aboutLink = aboutSection.querySelector<HTMLElement>(".bp-intro-side > .bp-text-link");

        if (aboutLabel && aboutHeading && aboutDescription && aboutMedia && aboutImage && aboutLink) {
          gsap.set([aboutLabel, aboutHeading, aboutDescription, aboutMedia, aboutLink], { autoAlpha: 0, y: compactMotion ? 12 : 20 });
          gsap.set(aboutImage, { clipPath: "inset(0 0 12% 0)", opacity: 0.82, scale: compactMotion ? 1.012 : 1.02 });

          const aboutTimeline = gsap.timeline({ scrollTrigger: { trigger: aboutSection, start: compactMotion ? "top 88%" : "top 80%", once: true } });
          aboutTimeline
            .to(aboutLabel, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase })
            .to(aboutHeading, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.3")
            .to(aboutDescription, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.3")
            .to(aboutMedia, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.22")
            .to(aboutImage, { clipPath: "inset(0 0 0% 0)", opacity: 1, scale: 1, duration: compactMotion ? 0.72 : 0.92, ease: revealEase }, "-=0.48")
            .to(aboutLink, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.42 : 0.52, ease: revealEase }, "-=0.32");
        }
      }

      if (newsSection) {
        const newsLabel = newsSection.querySelector<HTMLElement>(".bp-section-label");
        const newsHeading = newsSection.querySelector<HTMLElement>(".bp-news-heading h2");
        const newsDescription = newsSection.querySelector<HTMLElement>(".bp-news-heading p");
        const newsRows = gsap.utils.toArray<HTMLElement>(".bp-news-list article", newsSection);

        if (newsLabel && newsHeading && newsDescription && newsRows.length) {
          gsap.set([newsLabel, newsHeading, newsDescription, ...newsRows], { autoAlpha: 0, y: compactMotion ? 14 : 24 });
          const newsTimeline = gsap.timeline({ scrollTrigger: { trigger: newsSection, start: compactMotion ? "top 88%" : "top 78%", once: true } });
          newsTimeline
            .to(newsLabel, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase })
            .to(newsHeading, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.36")
            .to(newsDescription, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.34")
            .to(newsRows, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.46 : 0.62, stagger: compactMotion ? 0.06 : 0.1, ease: revealEase }, "-=0.16");
        }
      }

      if (featuredSection) {
        const featuredLabel = featuredSection.querySelector<HTMLElement>(".bp-section-label");
        const featuredMedia = featuredSection.querySelector<HTMLElement>(".bp-article-media");
        const featuredCopy = featuredSection.querySelector<HTMLElement>(".bp-article-copy");
        const featuredMainImage = featuredSection.querySelector<HTMLImageElement>(".bp-article-main-image");
        const featuredSecondaryImage = featuredSection.querySelector<HTMLImageElement>(".bp-article-secondary-image");
        const featuredCaption = featuredSection.querySelector<HTMLElement>(".bp-article-media p");
        const featuredMeta = featuredSection.querySelector<HTMLElement>(".bp-article-copy .bp-meta");
        const featuredTitle = featuredSection.querySelector<HTMLElement>(".bp-article-copy h2");
        const featuredButton = featuredSection.querySelector<HTMLElement>(".bp-article-button");
        const featuredPlaceholder = featuredSection.querySelector<HTMLElement>(".bp-article-placeholder");

        if (featuredLabel && featuredMedia && featuredCopy && featuredMainImage && featuredSecondaryImage && featuredCaption && featuredMeta && featuredTitle && featuredButton && featuredPlaceholder) {
          gsap.set([featuredLabel, featuredMedia, featuredCopy], { autoAlpha: 0, y: compactMotion ? 14 : 24 });
          gsap.set([featuredCaption, featuredMeta, featuredTitle, featuredButton, featuredPlaceholder], { autoAlpha: 0, y: compactMotion ? 12 : 18 });
          gsap.set([featuredMainImage, featuredSecondaryImage], { clipPath: "inset(0 0 12% 0)", opacity: 0.8, scale: compactMotion ? 1.015 : 1.03 });

          const featuredTimeline = gsap.timeline({ scrollTrigger: { trigger: featuredSection, start: compactMotion ? "top 88%" : "top 80%", once: true } });
          featuredTimeline
            .to(featuredLabel, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase })
            .to(featuredMedia, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.28")
            .to(featuredMainImage, { clipPath: "inset(0 0 0% 0)", opacity: 1, scale: 1, duration: compactMotion ? 0.7 : 1, ease: "power2.out" }, "-=0.42")
            .to(featuredSecondaryImage, { clipPath: "inset(0 0 0% 0)", opacity: 1, scale: 1, duration: compactMotion ? 0.62 : 0.84, ease: "power2.out" }, "-=0.66")
            .to(featuredCopy, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.55")
            .to(featuredMeta, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.42 : 0.52, ease: revealEase })
            .to(featuredTitle, { autoAlpha: 1, y: 0, duration: revealDuration, ease: revealEase }, "-=0.22")
            .to(featuredButton, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.42 : 0.52, ease: revealEase }, "-=0.18")
            .to(featuredPlaceholder, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.42 : 0.52, ease: revealEase }, "-=0.16")
            .to(featuredCaption, { autoAlpha: 1, y: 0, duration: compactMotion ? 0.42 : 0.52, ease: revealEase }, "-=0.34");
        }
      }

      const nav = document.querySelector(".bp-nav-wrap");
      ScrollTrigger.create({
        start: "top -24px",
        end: 99999,
        onEnter: () => nav?.classList.add("is-scrolled"),
        onLeaveBack: () => nav?.classList.remove("is-scrolled"),
      });

      if (!window.matchMedia("(max-width: 680px)").matches) {
        gsap.to(".hero-placeholder", { yPercent: 3, ease: "none", scrollTrigger: { trigger: ".bp-hero", start: "top top", end: "bottom top", scrub: 0.6 } });
        gsap.to(".bp-hero h1", { yPercent: -2.5, scale: 0.99, transformOrigin: "left top", ease: "none", scrollTrigger: { trigger: ".bp-hero", start: "top top", end: "bottom top", scrub: 0.7 } });
        gsap.to(".bp-article-main-image", { yPercent: -3, ease: "none", scrollTrigger: { trigger: ".bp-featured-article", start: "top bottom", end: "bottom top", scrub: 0.8 } });
      }
    }, ".bp-site");

    return () => {
      context.revert();
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
        gsap.ticker.remove(lenisRaf);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <main className="bp-site">
      <header className="bp-nav-wrap">
        <nav className="bp-nav" aria-label="Navigasi utama">
          <a href="#top" className="bp-wordmark" onClick={closeMenu}><span>BERPIJAR</span><small>YAYASAN BERPIJAR INDONESIA</small></a>
          <div className={`bp-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#tentang" onClick={closeMenu}>Tentang</a>
            <a href="#program" onClick={closeMenu}>Program</a>
            <a href="#dampak" onClick={closeMenu}>Dampak</a>
            <a href="#kegiatan" onClick={closeMenu}>Kegiatan</a>
            <a href="#artikel" onClick={closeMenu}>Artikel</a>
            <a href="#kontak" onClick={closeMenu}>Kontak</a>
            <a className="bp-nav-dashboard" href="/dashboard" onClick={closeMenu}>Dashboard ↗</a>
          </div>
          <a className="bp-support" href="#dukung">DUKUNG KAMI <span>↗</span></a>
          <button className={`bp-menu-button ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}><span /><span /></button>
        </nav>
      </header>

      <div id="top" className="bp-page">
        <section className="bp-hero bp-grid-section">
          <div className="bp-hero-copy">
            <p className="bp-eyebrow"><span className="bp-rule" /> YAYASAN PENDIDIKAN BERPIJAR INDONESIA</p>
            <h1>Menyalakan<br /><i>Potensi.</i><br />Membuka<br /><i>Masa Depan.</i></h1>
            <p className="bp-lede">Bergerak melalui pendidikan, soft skill, life skill, dan pemberdayaan untuk mempersiapkan generasi menghadapi masa depan.</p>
            <div className="bp-actions"><a className="bp-button bp-button-dark" href="#program">LIHAT PROGRAM <span>→</span></a><a className="bp-text-link" href="#tentang">TENTANG BERPIJAR <span>↗</span></a></div>
          </div>
          <div className="bp-hero-visual"><Placeholder src="/berpijar/students-community.jpg" alt="Anak-anak bersama dalam kegiatan pendidikan Berpijar" label="OUR COMMUNITY / PENDIDIKAN" className="hero-placeholder" /><div className="bp-hero-index"><b>01 / 04</b><span>EDUCATION<br />LIFE SKILL<br />SOCIAL IMPACT</span></div><div className="bp-hero-caption">MEMBUKA AKSES<br />UNTUK BERTUMBUH</div></div>
        </section>

        <section className="bp-intro bp-grid-section" id="tentang">
          <div className="bp-section-label"><span>01</span><span className="bp-label-line" />TENTANG BERPIJAR</div>
          <div className="bp-intro-content"><h2>Pendidikan bukan hanya<br />tentang pengetahuan.<br /><i>Tetapi tentang kesiapan<br />menghadapi kehidupan.</i></h2><div className="bp-intro-side"><p>Yayasan Pendidikan Berpijar Indonesia bergerak di dunia pendidikan profit dan non-profit, dengan komitmen mendukung dan mengembangkan pendidikan untuk masa depan yang lebih baik. Berpijar membekali soft skill dan life skill untuk membantu pengembangan anak serta mempersiapkan mereka menghadapi realita dunia kerja.</p><figure className="bp-about-media"><img src="/berpijar/training-room.jpg" alt="Peserta dan tim mengikuti suasana kegiatan pembekalan di ruang belajar Berpijar." loading="lazy" /><figcaption>OUR COMMUNITY / RUANG BELAJAR</figcaption></figure><a className="bp-text-link" href="#kegiatan">READ OUR STORY <span>↗</span></a></div></div>
        </section>

        <section className="bp-focus bp-grid-section" id="fokus">
          <div className="bp-section-label light-label"><span>02</span><span className="bp-label-line" />FOKUS KAMI</div>
          <div className="bp-focus-heading"><h2>Bekal untuk<br /><i>hari esok.</i></h2><p>Pendidikan yang baik tidak hanya mengajarkan pengetahuan, tetapi juga membangun keberanian untuk melangkah.</p></div>
          <div className="bp-focus-list">{focusAreas.map((item) => <article className="bp-focus-item" key={item.number}><span className="bp-item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="bp-arrow">↗</span></article>)}</div>
        </section>

        <section className="bp-program bp-grid-section" id="program">
          <div className="bp-section-label"><span>03</span><span className="bp-label-line" />PROGRAM</div>
          <div className="bp-program-heading"><h2>Program yang hadir<br /><i>untuk memberi bekal.</i></h2><p>Program andalan Berpijar berangkat dari kepedulian pada pendidikan, life skill, dan pembekalan anak untuk menghadapi kehidupan.</p><figure className="bp-program-feature"><img src="/berpijar/life-skill-workshop.jpg" alt="Peserta mengikuti pembekalan keterampilan barber dalam program life skill Berpijar." loading="lazy" /><figcaption><span>03 — LIFE SKILL</span><strong>Belajar melalui praktik.</strong></figcaption></figure></div>
          <div className="bp-program-list">{programs.map((program) => <article className={`bp-program-item ${program.featured ? "is-featured" : ""}`} key={program.number}><div className="bp-program-number">{program.number}</div><div className="bp-program-main"><h3>{program.title}</h3><p>{program.text}</p></div><a className="bp-arrow" href={program.featured ? "/program/life-skill-teman-tuli" : "/program"} aria-label={`Lihat ${program.title}`}>↗</a></article>)}</div>
        </section>

        <section className="bp-stories bp-grid-section" id="kegiatan">
          <div className="bp-section-label"><span>04</span><span className="bp-label-line" />CERITA &amp; KEGIATAN</div>
          <div className="bp-stories-heading"><h2>Setiap program dimulai<br /><i>dari kepedulian.</i></h2><a className="bp-text-link" href="#artikel">LIHAT KABAR <span>↗</span></a></div>
          <article className="bp-feature-story"><Placeholder src="/berpijar/workshop-room.jpg" alt="Komunitas berkumpul dalam kegiatan pendidikan dan pembekalan Berpijar" label="OUR COMMUNITY / KEGIATAN BERPIJAR" className="story-placeholder" /><div className="bp-feature-copy"><p className="bp-meta">CERITA &amp; KEGIATAN</p><h3>Ruang untuk cerita Berpijar</h3><p>Dokumentasi kegiatan Berpijar hadir melalui ruang belajar, kebersamaan, dan pembekalan keterampilan.</p><a className="bp-text-link" href="#artikel">LIHAT PEMBARUAN <span>↗</span></a></div></article>
          <div className="bp-small-stories"><article><span className="bp-story-index">01</span><div><p className="bp-meta">PROGRAM</p><h3>Informasi program akan diperbarui.</h3></div><span className="bp-arrow">↗</span></article><article><span className="bp-story-index">02</span><div><p className="bp-meta">PEMBELAJARAN</p><h3>Informasi kegiatan akan diperbarui.</h3></div><span className="bp-arrow">↗</span></article><article><span className="bp-story-index">03</span><div><p className="bp-meta">KOMUNITAS</p><h3>Cerita Berpijar akan diperbarui.</h3></div><span className="bp-arrow">↗</span></article></div>
          <div className="bp-activity-rail" aria-label="Dokumentasi kegiatan Berpijar"><figure className="bp-activity-large"><img src="/berpijar/life-skill-barber.jpg" alt="Peserta belajar keterampilan barber dalam kegiatan life skill Berpijar." loading="lazy" /><figcaption><span>01</span><strong>LIFE SKILL</strong><small>Belajar melalui praktik.</small></figcaption></figure><figure><img src="/berpijar/training-room.jpg" alt="Suasana kegiatan pembekalan di ruang belajar Berpijar." loading="lazy" /><figcaption><span>02</span><strong>PEMBELAJARAN</strong></figcaption></figure><figure><img src="/berpijar/life-skill-workshop.jpg" alt="Peserta mengikuti suasana pelatihan keterampilan bersama Berpijar." loading="lazy" /><figcaption><span>03</span><strong>KEBERSAMAAN</strong></figcaption></figure></div>
        </section>

        <section className="bp-news bp-grid-section" id="artikel">
          <div className="bp-section-label"><span>05</span><span className="bp-label-line" />KABAR TERBARU</div>
          <div className="bp-news-heading"><h2>Kabar<br /><i>terbaru.</i></h2><p>Artikel yang relevan dengan kerja pendidikan dan inklusivitas, siap dilengkapi dengan sumber lengkap.</p></div>
          <div className="bp-news-list">{newsItems.map((item) => <article key={item.number}><span className="bp-item-number">{item.number}</span><span className="bp-news-category">{item.category}</span><h3>{item.title}</h3><span className="bp-news-date">{item.date}</span><a className="bp-arrow" href="#featured-article" aria-label={`Baca ${item.title}`}>↗</a></article>)}</div>
        </section>

        <section className="bp-impact bp-grid-section" id="dampak">
          <div className="bp-section-label light-label"><span>06</span><span className="bp-label-line" />DAMPAK</div>
          <div className="bp-impact-heading"><h2>Kerja yang<br /><i>berarti.</i></h2><p>Data dampak akan ditampilkan setelah angka resmi yayasan tersedia.</p></div>
          <div className="bp-metrics"><div><strong>PENDIDIKAN</strong><span>MENDUKUNG &amp; MENGEMBANGKAN</span></div><div><strong>LIFE SKILL</strong><span>MEMBEKALI KESIAPAN</span></div><div><strong>TEMAN TULI</strong><span>PROGRAM ANDALAN</span></div><div><strong>ANAK YATIM PIATU</strong><span>PROGRAM ANDALAN</span></div></div>
        </section>

          <section className="bp-featured-article bp-grid-section" id="featured-article"><div className="bp-section-label"><span>07</span><span className="bp-label-line" />FEATURED ARTICLE</div><div className="bp-article-wrap"><div className="bp-article-media"><img className="bp-article-main-image" src="/berpijar/workshop-room.jpg" alt="Peserta dan tim mengikuti kegiatan pengabdian kepada masyarakat untuk pendidikan inklusif." loading="lazy" /><img className="bp-article-secondary-image" src="/berpijar/community-presentation.jpg" alt="Tim dan peserta menunjukkan laptop dalam kegiatan AI Tutoring System untuk teman tuli." loading="lazy" /><p>AI TUTORING SYSTEM / PENDIDIKAN INKLUSIF</p></div><div className="bp-article-copy"><p className="bp-meta">PENDIDIKAN / INKLUSIVITAS</p><h2>Tim Pengabdian Masyarakat Universitas Negeri Malang Hadirkan Inovasi AI Tutoring System untuk Teman Tuli, Wujudkan Pendidikan Inklusif Berkualitas</h2><a className="bp-button bp-button-dark bp-article-button" href="#featured-article">BACA ARTIKEL <span>→</span></a><div className="bp-article-placeholder"><span>Konten lengkap artikel belum tersedia di project.</span><small>Sumber, tanggal, dan materi artikel akan ditambahkan setelah tersedia.</small></div></div></div></section>

        <section className="bp-cta bp-grid-section" id="dukung"><span className="bp-cta-index">08 / 08</span><div className="bp-cta-main"><h2>Karena masa depan<br /><i>dimulai dari kesempatan.</i></h2><p>Berpijar terus berupaya menghadirkan pendidikan dan pembekalan yang dapat membantu anak berkembang dan menghadapi kehidupan dengan lebih siap.</p></div><div className="bp-actions"><a className="bp-button bp-button-light" href="#kontak">DUKUNG BERPIJAR <span>→</span></a><a className="bp-text-link light-link" href="#program">LIHAT PROGRAM <span>↗</span></a></div></section>
      </div>

      <footer className="bp-footer bp-grid-section" id="kontak"><div className="bp-footer-brand"><a href="#top" className="bp-wordmark"><span>BERPIJAR</span><small>YAYASAN PENDIDIKAN INDONESIA</small></a><p>Bergerak melalui pendidikan,<br />soft skill, life skill, dan pemberdayaan.</p><div className="bp-footer-identity" aria-label="Identitas dan kontak"><a href="mailto:noviaanggraini054@gmail.com"><span>Email</span><strong>noviaanggraini054@gmail.com</strong></a><a href="https://www.instagram.com/sentraai" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>@sentraai ↗</strong></a><a href="https://www.linkedin.com/company/sentra-ai/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>@sentraai ↗</strong></a><p><span>Role</span><strong>Principal of Sentra Integration</strong></p></div></div><div><p className="bp-footer-label">NAVIGASI</p><a href="#tentang">Tentang</a><a href="#program">Program</a><a href="#kegiatan">Kegiatan</a><a href="#artikel">Artikel</a><a href="#kontak">Kontak</a></div><div><p className="bp-footer-label">KONTAK</p><a href="mailto:indonesiashalawat@gmail.com">indonesiashalawat@gmail.com</a><a href="tel:088789489">088789489</a><p>Kediri, Jawa Timur</p></div><div><p className="bp-footer-label">SOCIAL</p><a href="#instagram">Instagram ↗</a><a href="#facebook">Facebook ↗</a><a href="#youtube">YouTube ↗</a></div><div className="bp-footer-bottom"><span>© 2026 Yayasan Pendidikan Berpijar Indonesia</span><span>LANDING PAGE / 01</span></div></footer>
    </main>
  );
}
