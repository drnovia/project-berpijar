/* Vinext starter has no next/image runtime; native images retain the prototype crop
 * with explicit alt and lazy-loading attributes without adding a dependency. */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useMemo, useState } from "react";

type ModuleKey = "Overview" | "Programs" | "Impact & Analytics" | "Activities" | "Stories / Nurani Media" | "Reports";
type IconKey = "overview" | "programs" | "impact" | "activities" | "stories" | "reports";
type Status = "Ready" | "Ongoing" | "Completed" | "Data pending";

const navItems: Array<{ key: ModuleKey; label: string; icon: IconKey; helper: string }> = [
  { key: "Overview", label: "Ikhtisar", icon: "overview", helper: "Ringkasan dampak" },
  { key: "Programs", label: "Program", icon: "programs", helper: "Register program" },
  { key: "Impact & Analytics", label: "Dampak & Analitik", icon: "impact", helper: "Sinyal dan hasil" },
  { key: "Activities", label: "Kegiatan", icon: "activities", helper: "Dokumentasi lapangan" },
  { key: "Stories / Nurani Media", label: "Cerita / Nurani Media", icon: "stories", helper: "Ruang editorial" },
  { key: "Reports", label: "Laporan", icon: "reports", helper: "Tinjau dan ekspor" },
];

const programs = [
  { number: "01", title: "Life Skill untuk Teman Tuli", detail: "Salah satu program andalan yayasan untuk membekali kesiapan hidup.", state: "Ongoing" as Status, progress: 78, beneficiaries: "240", tone: "green" },
  { number: "02", title: "Pembinaan Anak Yatim Piatu", detail: "Program andalan; bentuk kegiatan menunggu data resmi.", state: "Data pending" as Status, progress: 62, beneficiaries: "326", tone: "orange" },
  { number: "03", title: "Pendidikan", detail: "Pendidikan profit dan non-profit, soft skill, dan life skill.", state: "Ready" as Status, progress: 84, beneficiaries: "510", tone: "blue" },
  { number: "04", title: "Program Sosial & Kemanusiaan", detail: "Tujuan sosial, kemanusiaan, keagamaan, dan pendidikan.", state: "Data pending" as Status, progress: 48, beneficiaries: "208", tone: "yellow" },
];

const impactMetrics = [
  { number: "04", label: "Program aktif", note: "Contoh prototipe · 4 fokus utama", accent: "green" },
  { number: "1.284", label: "Penerima manfaat", note: "Contoh prototipe · data resmi belum terhubung", accent: "mint" },
  { number: "38", label: "Kegiatan tahun ini", note: "Contoh prototipe · periode 2026", accent: "orange" },
  { number: "12", label: "Wilayah dampak", note: "Contoh prototipe · perlu verifikasi", accent: "blue" },
];

const activityRows = [
  { date: "21 Jun 2026", program: "Life Skill", location: "Kediri, Jawa Timur", activity: "Pembekalan keterampilan barber", participants: "24*", state: "Completed" as Status },
  { date: "14 Jun 2026", program: "Inklusivitas", location: "Kediri, Jawa Timur", activity: "AI Tutoring System untuk teman tuli", participants: "32*", state: "Ongoing" as Status },
  { date: "07 Jun 2026", program: "Pendidikan", location: "Kediri, Jawa Timur", activity: "Dokumentasi kegiatan komunitas", participants: "18*", state: "Ready" as Status },
];

const impactTrend = [42, 48, 51, 63, 68, 78, 86];

const contentRows = [
  { title: "AI Tutoring System untuk Pendidikan Inklusif", type: "Featured story", category: "Pendidikan / Inklusivitas", updated: "Konten lengkap menunggu" },
  { title: "Life Skill untuk Teman Tuli", type: "Program", category: "Life skill", updated: "Terdaftar" },
  { title: "Pembinaan Anak Yatim Piatu", type: "Program", category: "Pendidikan", updated: "Detail menunggu" },
  { title: "Kegiatan & dokumentasi Berpijar", type: "Activity log", category: "Community", updated: "6 foto tersedia" },
];

const storyRows = [
  { type: "Featured story", title: "AI Tutoring System untuk Pendidikan Inklusif", status: "Judul siap · konten lengkap menunggu" },
  { type: "Field story", title: "Cerita kegiatan life skill", status: "Dokumentasi tersedia · narasi menunggu" },
  { type: "Documentation", title: "Arsip foto kegiatan Berpijar", status: "6 foto lokal tersedia" },
];

const activityPhotos = [
  { src: "/berpijar/life-skill-barber.jpg", label: "01 / LIFE SKILL", title: "Belajar melalui praktik.", alt: "Peserta belajar keterampilan barber dalam kegiatan life skill Berpijar.", className: "is-tall" },
  { src: "/berpijar/community-presentation.jpg", label: "02 / INKLUSIVITAS", title: "AI Tutoring System", alt: "Tim dan peserta menunjukkan laptop dalam kegiatan AI Tutoring System untuk teman tuli.", className: "" },
  { src: "/berpijar/students-community.jpg", label: "03 / COMMUNITY", title: "Ruang untuk tumbuh.", alt: "Anak-anak bersama dalam kegiatan pendidikan Berpijar.", className: "is-wide" },
  { src: "/berpijar/life-skill-workshop.jpg", label: "04 / EDUCATION", title: "Pembekalan keterampilan.", alt: "Peserta mengikuti pembekalan keterampilan barber dalam program life skill Berpijar.", className: "" },
  { src: "/berpijar/workshop-room.jpg", label: "05 / ACTIVITIES", title: "Bersama dalam proses.", alt: "Peserta dan tim mengikuti kegiatan pengabdian kepada masyarakat untuk pendidikan inklusif.", className: "is-wide" },
];

function Icon({ name }: { name: IconKey }) {
  const glyphs: Record<IconKey, string> = { overview: "⌘", programs: "◈", impact: "⌁", activities: "◎", stories: "✦", reports: "▤" };
  return <span className="bi-icon" aria-hidden="true">{glyphs[name]}</span>;
}

function StatusPill({ status }: { status: Status }) {
  return <span className={`bi-status bi-status-${status.toLowerCase().replace(" ", "-")}`}>{status}</span>;
}

function PanelHeader({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: string }) {
  return <div className="bi-panel-header"><div>{eyebrow ? <p className="bi-panel-eyebrow">{eyebrow}</p> : null}<h2>{title}</h2></div>{action ? <button className="bi-panel-action" type="button">{action} ↗</button> : null}</div>;
}

function MetricCard({ number, label, note, accent }: { number: string; label: string; note: string; accent: string }) {
  return <article className={`bi-metric bi-metric-${accent}`}><div className="bi-metric-top"><span>{label}</span><b>↗</b></div><strong>{number}</strong><small>{note}</small></article>;
}

function Overview({ query, setQuery }: { query: string; setQuery: (value: string) => void }) {
  const filteredRows = useMemo(() => contentRows.filter((row) => `${row.title} ${row.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <>
    <section className="bi-metrics" aria-label="Ringkasan dampak Berpijar">
      {impactMetrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
    </section>
    <p className="bi-sample-note"><span>*</span> Angka pada kartu dampak adalah data contoh untuk prototipe UI dan perlu diganti dengan data resmi yayasan.</p>

    <div className="bi-overview-grid">
      <section className="bi-panel bi-program-panel"><PanelHeader eyebrow="REGISTER PROGRAM / 04" title="Program yang menggerakkan misi" action="Lihat semua" /><div className="bi-program-list">{programs.map((program) => <article className="bi-program-row" key={program.number}><span className="bi-index">{program.number}</span><div><h3>{program.title}</h3><p>{program.detail}</p><div className="bi-progress-line"><span style={{ width: `${program.progress}%` }} /><small>{program.progress}% progres</small></div></div><div className="bi-program-meta"><StatusPill status={program.state} /><small>{program.beneficiaries}* penerima</small></div><span className={`bi-program-dot bi-dot-${program.tone}`} /></article>)}</div></section>
      <section className="bi-panel bi-impact-panel"><PanelHeader eyebrow="IMPACT SNAPSHOT" title="Dampak yang ingin dipahami" action="Buka analitik" /><div className="bi-impact-copy"><p>Berpijar tidak hanya mengelola program. Ruang ini membantu membaca siapa yang dibantu, apa yang berubah, dan bukti kerja di lapangan.</p><div className="bi-impact-tags"><span>Pendidikan</span><span>Life skill</span><span>Teman tuli</span><span>Anak yatim piatu</span></div></div><div className="bi-mini-trend" aria-label="Contoh tren dampak"><div className="bi-trend-bars">{impactTrend.map((value, index) => <span key={index} style={{ height: `${value}%` }} />)}</div><div className="bi-trend-copy"><strong>+86%</strong><small>target tercapai*</small></div></div><div className="bi-chart-axis"><span>TARGET</span><span>PROGRES</span><span>HASIL</span></div></section>
    </div>

    <div className="bi-overview-grid bi-overview-lower">
      <section className="bi-panel bi-content-panel"><PanelHeader eyebrow="RUANG KERJA / KONTEN" title="Konten terbaru yang menghubungkan data dan cerita" action="Lihat semua" /><div className="bi-table-tools"><label className="bi-search-wrap"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari program atau cerita..." aria-label="Cari program dan cerita" /></label><span className="bi-prototype-label">DATA CONTOH</span></div><div className="bi-table-scroll"><table className="bi-table"><thead><tr><th>Konten</th><th>Kategori</th><th>Status</th><th /></tr></thead><tbody>{filteredRows.map((row) => <tr key={row.title}><td><strong>{row.title}</strong><small>{row.type}</small></td><td>{row.category}</td><td><span className="bi-row-state">{row.updated}</span></td><td><button className="bi-more" type="button" aria-label={`Aksi untuk ${row.title}`}>···</button></td></tr>)}{filteredRows.length === 0 ? <tr><td colSpan={4} className="bi-no-results">Konten tidak ditemukan pada prototipe ini.</td></tr> : null}</tbody></table></div></section>
      <section className="bi-panel bi-activity-panel"><PanelHeader eyebrow="DENYUT RUANG KERJA" title="Aktivitas terbaru" action="Log kegiatan" /><div className="bi-activity-list"><article><span className="bi-activity-icon">+</span><div><strong>Featured story disiapkan</strong><p>AI Tutoring System / Pendidikan inklusif</p></div><time>Hari ini</time></article><article><span className="bi-activity-icon bi-activity-orange">↗</span><div><strong>Program life skill ditambahkan</strong><p>Teman tuli / Fokus program</p></div><time>Terbaru</time></article><article><span className="bi-activity-icon bi-activity-blue">▧</span><div><strong>Arsip dokumentasi tersedia</strong><p>6 foto kegiatan lokal</p></div><time>Siap</time></article></div><div className="bi-pulse-foot"><span className="bi-live-dot" />Prototype siap dihubungkan ke data resmi yayasan.</div></section>
    </div>
  </>;
}

function ProgramsView() {
  return <div className="bi-module-layout"><section className="bi-panel"><PanelHeader eyebrow="REGISTER PROGRAM / 04" title="Program dengan tujuan dan progres" action="Tambah program" /><div className="bi-program-cards">{programs.map((program) => <article key={program.number} className="bi-program-card"><div className="bi-program-card-top"><span className="bi-index">{program.number}</span><StatusPill status={program.state} /></div><h2>{program.title}</h2><p>{program.detail}</p><div className="bi-card-meta"><span><strong>{program.progress}%</strong> progres</span><span><strong>{program.beneficiaries}*</strong> penerima</span></div><div className="bi-card-progress"><span style={{ width: `${program.progress}%` }} /></div><button type="button" className="bi-text-button">Buka program ↗</button></article>)}</div><p className="bi-panel-footnote">* Angka penerima dan progres adalah contoh data untuk prototipe, bukan laporan resmi.</p></section><aside className="bi-panel bi-side-note"><PanelHeader eyebrow="CATATAN DAMPAK" title="Jaga konteks manusianya" /><p>Setiap program dapat berkembang menjadi halaman dengan tujuan, penerima manfaat, dokumentasi, cerita, dan data dampak.</p><div className="bi-note-rule" /><span>BERPIJAR / SISTEM PROGRAM</span></aside></div>;
}

function ImpactView() {
  return <div className="bi-module-layout"><section className="bi-panel bi-impact-large"><PanelHeader eyebrow="DAMPAK &amp; ANALITIK" title="Membaca perubahan, bukan sekadar angka" action="Atur metrik" /><div className="bi-analytics-grid"><article className="bi-analytics-card"><span>Target vs realisasi</span><strong>86%</strong><div className="bi-target-track"><span /></div><small>Contoh target tahunan tercapai*</small></article><article className="bi-analytics-card"><span>Pertumbuhan penerima manfaat</span><strong>+24%</strong><div className="bi-sparkline"><span /><span /><span /><span /><span /><span /></div><small>Contoh perbandingan semester*</small></article></div><div className="bi-large-trend"><div className="bi-trend-header"><div><span className="bi-panel-eyebrow">IMPACT TREND / SAMPLE</span><h3>Perkembangan jangkauan program</h3></div><span className="bi-legend"><i /> Realisasi <i className="is-target" /> Target</span></div><div className="bi-trend-chart"><div className="bi-chart-grid" /><div className="bi-trend-area" /><div className="bi-target-line" />{impactTrend.map((value, index) => <span key={index} className="bi-trend-point" style={{ left: `${index * 16.66 + 3}%`, bottom: `${value - 8}%` }} />)}</div><div className="bi-chart-axis"><span>JAN</span><span>MAR</span><span>MEI</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div></section><aside className="bi-panel bi-side-note"><PanelHeader eyebrow="AREA DAMPAK" title="Perubahan yang dituju" /><ul className="bi-impact-list"><li><span>01</span><strong>Pendidikan</strong><small>Mendukung dan mengembangkan pendidikan.</small></li><li><span>02</span><strong>Life skill</strong><small>Membekali kesiapan menghadapi kehidupan.</small></li><li><span>03</span><strong>Inklusivitas</strong><small>Life skill untuk teman tuli.</small></li><li><span>04</span><strong>Pemberdayaan</strong><small>Mengembangkan soft skill dan bekal anak.</small></li></ul><p className="bi-panel-footnote">* Seluruh metrik analitik di halaman ini adalah data contoh.</p></aside></div>;
}

function ActivitiesView() {
  return <div className="bi-activities-stack"><section className="bi-panel bi-activities-panel"><PanelHeader eyebrow="KEGIATAN / DOKUMENTASI" title="Bukti kerja di lapangan" action="Tambah kegiatan" /><div className="bi-activity-gallery">{activityPhotos.map((photo) => <figure className={`bi-gallery-item ${photo.className}`} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><span>{photo.label}</span><strong>{photo.title}</strong></figcaption></figure>)}</div></section><section className="bi-panel bi-activity-register"><PanelHeader eyebrow="REGISTER KEGIATAN / SAMPLE" title="Kegiatan terbaru" action="Lihat semua" /><div className="bi-table-scroll"><table className="bi-table"><thead><tr><th>Tanggal</th><th>Program</th><th>Lokasi</th><th>Kegiatan</th><th>Peserta*</th><th>Status</th></tr></thead><tbody>{activityRows.map((activity) => <tr key={activity.date + activity.activity}><td>{activity.date}</td><td><strong>{activity.program}</strong></td><td>{activity.location}</td><td>{activity.activity}</td><td>{activity.participants}</td><td><StatusPill status={activity.state} /></td></tr>)}</tbody></table></div><p className="bi-panel-footnote">* Tanggal, lokasi, dan jumlah peserta di register ini adalah contoh UI; lengkapi dengan catatan kegiatan resmi.</p></section></div>;
}

function StoriesView() {
  return <div className="bi-module-layout"><section className="bi-panel bi-story-panel"><PanelHeader eyebrow="CERITA / NURANI MEDIA" title="Cerita yang membuat dampak terlihat" action="Tambah cerita" /><div className="bi-feature-story"><img src="/berpijar/community-presentation.jpg" alt="Tim dan peserta menunjukkan laptop dalam kegiatan AI Tutoring System untuk teman tuli." /><div><span className="bi-story-label">FEATURED / PENDIDIKAN &amp; INKLUSIVITAS</span><h2>AI Tutoring System untuk Pendidikan Inklusif</h2><p>Tim Pengabdian Masyarakat Universitas Negeri Malang Hadirkan Inovasi AI Tutoring System untuk Teman Tuli, Wujudkan Pendidikan Inklusif Berkualitas.</p><span className="bi-story-pending">Konten lengkap artikel belum tersedia.</span></div></div><div className="bi-story-list">{storyRows.map((story, index) => <article key={story.title}><span className="bi-index">0{index + 1}</span><div><small>{story.type}</small><strong>{story.title}</strong><p>{story.status}</p></div><button type="button" aria-label={`Buka ${story.title}`}>↗</button></article>)}</div></section><aside className="bi-panel bi-side-note"><PanelHeader eyebrow="ALUR EDITORIAL" title="Nurani Media" /><p>Ruang editorial untuk menghubungkan program, kegiatan, dan cerita manusia di balik kerja Berpijar.</p><button type="button" className="bi-text-button">Buka perpustakaan media ↗</button></aside></div>;
}

function ReportsView() {
  return <div className="bi-module-layout"><section className="bi-panel"><PanelHeader eyebrow="LAPORAN / EKSPOR" title="Laporan siap ditinjau" action="Buat laporan" /><div className="bi-report-list"><article><span className="bi-report-icon">▤</span><div><h2>Ringkasan program</h2><p>Ringkasan 4 fokus program Berpijar.</p></div><span className="bi-report-state">UI READY</span><button type="button" className="bi-text-button">Pratinjau ↗</button></article><article><span className="bi-report-icon bi-report-orange">◒</span><div><h2>Ringkasan dampak</h2><p>Template metrik dampak menunggu data resmi.</p></div><span className="bi-report-state is-muted">DATA PENDING</span><button type="button" className="bi-text-button">Pratinjau ↗</button></article><article><span className="bi-report-icon bi-report-blue">◎</span><div><h2>Dokumentasi kegiatan</h2><p>Dokumentasi foto dan cerita kegiatan.</p></div><span className="bi-report-state">UI READY</span><button type="button" className="bi-text-button">Pratinjau ↗</button></article></div></section><aside className="bi-panel bi-side-note"><PanelHeader eyebrow="CATATAN PELAPORAN" title="Dirancang untuk akuntabilitas" /><p>Report builder berikutnya dapat menggabungkan program, kegiatan, penerima manfaat, dan outcome tanpa kehilangan konteks manusia.</p></aside></div>;
}

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState<ModuleKey>("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const activeItem = navItems.find((item) => item.key === activeModule) ?? navItems[0];
  const selectModule = (module: ModuleKey) => { setActiveModule(module); setMobileOpen(false); };

  return <div className="bi-dashboard">
    <aside className={`bi-sidebar ${mobileOpen ? "is-open" : ""}`}>
      <div className="bi-brand"><span className="bi-brand-mark">B</span><div><strong>BERPIJAR</strong><small>IMPACT DASHBOARD</small></div></div>
      <div className="bi-sidebar-scroll"><p className="bi-nav-label">Ruang kerja</p><nav className="bi-nav" aria-label="Modul dashboard">{navItems.map((item) => <button key={item.key} type="button" className={activeModule === item.key ? "is-active" : ""} onClick={() => selectModule(item.key)} aria-current={activeModule === item.key ? "page" : undefined}><Icon name={item.icon} /><span><strong>{item.label}</strong><small>{item.helper}</small></span>{item.key === "Programs" ? <em>04</em> : null}</button>)}</nav></div>
      <div className="bi-sidebar-footer"><div className="bi-avatar">BP</div><div><strong>Ruang kerja yayasan</strong><small>PROTOTIPE UI / DATA CONTOH</small></div><button type="button" aria-label="Opsi ruang kerja">···</button></div>
    </aside>

    <div className="bi-main"><header className="bi-topbar"><button type="button" className="bi-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={mobileOpen}>☰</button><div className="bi-breadcrumb"><span>BERPIJAR IMPACT DASHBOARD</span><b>/</b><strong>{activeItem.label.toUpperCase()}</strong></div><div className="bi-top-actions"><span className="bi-prototype-chip"><i /> PROTOTYPE MODE</span><a className="bi-public-link" href="https://nurani-media.aldebaraniskandar.chatgpt.site/" target="_blank" rel="noreferrer">SITUS PUBLIK ↗</a><button className="bi-top-icon" type="button" aria-label="Notifikasi">◌</button><span className="bi-top-avatar">AI</span></div></header>
      <main className="bi-content"><div className="bi-page-heading"><div><p className="bi-eyebrow">YAYASAN BERPIJAR INDONESIA / 2026</p><h1>{activeModule === "Overview" ? <>Melihat Dampak,<br /><em>Menggerakkan Perubahan.</em></> : activeItem.label}</h1><p className="bi-page-description">{activeModule === "Overview" ? "Satu ruang untuk memahami program, kegiatan, penerima manfaat, dan perubahan yang dibangun Yayasan Berpijar Indonesia." : activeItem.helper + " / prototipe UI statis untuk workspace Berpijar."}</p></div><div className="bi-date-block"><span>STATUS WORKSPACE</span><strong><i /> SIAP UNTUK DATA</strong><small>21 AGU 2026 / DATA CONTOH</small></div></div>
        {activeModule === "Overview" ? <Overview query={query} setQuery={setQuery} /> : null}
        {activeModule === "Programs" ? <ProgramsView /> : null}
        {activeModule === "Impact & Analytics" ? <ImpactView /> : null}
        {activeModule === "Activities" ? <ActivitiesView /> : null}
        {activeModule === "Stories / Nurani Media" ? <StoriesView /> : null}
        {activeModule === "Reports" ? <ReportsView /> : null}
      </main></div>
  </div>;
}
