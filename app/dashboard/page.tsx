"use client";

import { useMemo, useState } from "react";

type ContentItem = { title: string; type: string; category: string; updated: string; status: "Live" | "Draft" | "Pending" };

const navGroups = [
  { label: "Workspace", items: [["Overview", "▦", ""], ["Articles", "◒", "01"], ["Featured Article", "✦", ""], ["Categories", "◇", "04"]] },
  { label: "Content", items: [["Programs", "⊞", "04"], ["Media Library", "▧", "06"], ["Analytics", "⌁", ""], ["Publication Status", "◌", ""]] },
];

const contentItems: ContentItem[] = [
  { title: "Tim Pengabdian Masyarakat Universitas Negeri Malang Hadirkan Inovasi AI Tutoring System untuk Teman Tuli", type: "Featured article", category: "Pendidikan / Inklusivitas", updated: "20 Aug 2026", status: "Draft" },
  { title: "Life Skill untuk Teman Tuli", type: "Program", category: "Life skill", updated: "19 Aug 2026", status: "Live" },
  { title: "Pembinaan Anak Yatim Piatu", type: "Program", category: "Pendidikan", updated: "19 Aug 2026", status: "Pending" },
  { title: "Berpijar — Menyalakan Potensi, Membuka Masa Depan", type: "Landing page", category: "Publication", updated: "18 Aug 2026", status: "Live" },
];

function Status({ value }: { value: ContentItem["status"] }) {
  return <span className={`nm-status ${value === "Live" ? "is-live" : value === "Draft" ? "is-draft" : "is-pending"}`}>{value}</span>;
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All content");
  const filteredItems = useMemo(() => contentItems.filter((item) => {
    const matchesQuery = `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All content" || item.type === filter;
    return matchesQuery && matchesFilter;
  }), [filter, query]);

  return (
    <div className="nm-shell">
      <aside className="nm-sidebar">
        <div className="nm-brand"><span className="nm-brand-mark">N</span><div><strong>NURANI</strong><small>MEDIA WORKSPACE</small></div></div>
        {navGroups.map((group) => <div key={group.label}><p className="nm-nav-label">{group.label}</p><nav className="nm-nav" aria-label={group.label}>{group.items.map(([label, icon, count]) => <button key={label} className={activeNav === label ? "is-active" : ""} onClick={() => setActiveNav(label)}><span className="nm-nav-icon">{icon}</span><span>{label}</span>{count ? <span className="nm-nav-count">{count}</span> : null}</button>)}</nav></div>)}
        <div className="nm-sidebar-footer"><div className="nm-workspace"><span className="nm-avatar">NW</span><div><strong>Nurani Workspace</strong><small>CONTENT EDITOR</small></div></div></div>
        <div className="nm-mobile-menu"><span>Content workspace</span><button aria-label="Open dashboard menu">MENU +</button></div>
      </aside>

      <main className="nm-main">
        <header className="nm-topbar"><div className="nm-breadcrumb">NURANI MEDIA <span>/</span> <strong>{activeNav.toUpperCase()}</strong></div><div className="nm-top-actions"><span className="nm-live">PUBLIC SITE LIVE</span><button className="nm-icon-button" aria-label="Notifications">◌</button><button className="nm-primary-button">+ NEW CONTENT</button></div></header>
        <div className="nm-content">
          <section className="nm-title-row"><div><p className="nm-eyebrow">CONTENT OPERATIONS / 01</p><h1>Good morning,<br /><em>media desk.</em></h1></div><p>Kelola seluruh ekosistem konten Nurani Media dari satu ruang kerja.</p></section>
          <section className="nm-summary" aria-label="Content summary">
            <article className="nm-summary-card"><div className="nm-summary-label">Published articles <span>↗</span></div><strong className="nm-summary-number">01</strong><small className="nm-summary-foot">1 featured story ready</small></article>
            <article className="nm-summary-card"><div className="nm-summary-label">Active programs <span>↗</span></div><strong className="nm-summary-number">04</strong><small className="nm-summary-foot">Across core initiatives</small></article>
            <article className="nm-summary-card"><div className="nm-summary-label">Media assets <span>↗</span></div><strong className="nm-summary-number">06</strong><small className="nm-summary-foot">Local documentation files</small></article>
            <article className="nm-summary-card"><div className="nm-summary-label">Visitors <span>↗</span></div><strong className="nm-summary-number">—</strong><small className="nm-summary-foot">Analytics connection pending</small></article>
          </section>

          <div className="nm-grid">
            <section className="nm-panel"><div className="nm-panel-head"><div><h2 className="nm-panel-title">Content management</h2><p className="nm-panel-meta">Artikel, program, dan halaman yang paling baru diperbarui.</p></div><button className="nm-view-link">VIEW ALL ↗</button></div><div className="nm-table-tools"><input className="nm-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search content..." aria-label="Search content" /><select className="nm-filter" value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="Filter content"><option>All content</option><option>Featured article</option><option>Program</option><option>Landing page</option></select></div><div className="nm-table-wrap"><table className="nm-table"><thead><tr><th>Content</th><th>Category</th><th>Updated</th><th>Status</th><th aria-label="Actions" /></tr></thead><tbody>{filteredItems.map((item) => <tr key={item.title}><td><strong className="nm-content-title">{item.title}</strong><small className="nm-content-sub">{item.type}</small></td><td>{item.category}</td><td>{item.updated}</td><td><Status value={item.status} /></td><td><button className="nm-kebab" aria-label={`More actions for ${item.title}`}>···</button></td></tr>)}</tbody></table></div></section>
            <div className="nm-side-stack"><section className="nm-panel"><div className="nm-panel-head"><div><h2 className="nm-panel-title">Visitor analytics</h2><p className="nm-panel-meta">Last 30 days</p></div><button className="nm-view-link">DETAILS ↗</button></div><div className="nm-chart"><div className="nm-chart-top"><p className="nm-chart-number">—</p><p className="nm-chart-note">Connect analytics to see visitor trends.</p></div><div className="nm-chart-area" /><div className="nm-chart-axis"><span>01 AUG</span><span>08</span><span>15</span><span>22</span><span>30 AUG</span></div></div></section>
              <section className="nm-panel nm-activity"><div className="nm-panel-head"><div><h2 className="nm-panel-title">Recent activity</h2><p className="nm-panel-meta">Latest workspace changes</p></div><button className="nm-view-link">LOG ↗</button></div><div className="nm-activity-list"><article className="nm-activity-item"><span className="nm-activity-mark">+</span><div className="nm-activity-copy"><strong>Featured article prepared</strong><span>AI Tutoring System story</span></div><time className="nm-activity-time">2h</time></article><article className="nm-activity-item"><span className="nm-activity-mark">↗</span><div className="nm-activity-copy"><strong>Program content updated</strong><span>Life Skill untuk Teman Tuli</span></div><time className="nm-activity-time">1d</time></article><article className="nm-activity-item"><span className="nm-activity-mark">▧</span><div className="nm-activity-copy"><strong>Media added</strong><span>6 documentation assets</span></div><time className="nm-activity-time">2d</time></article></div></section></div>
          </div>
          <section className="nm-publication"><article className="nm-pub-card"><strong>Public site</strong><span>Yayasan Berpijar Indonesia</span><div className="nm-pub-bar"><i /></div></article><article className="nm-pub-card"><strong>Featured article</strong><span>Content completion pending</span><div className="nm-pub-bar"><i /></div></article><article className="nm-pub-card"><strong>Analytics</strong><span>Not connected</span><div className="nm-pub-bar"><i /></div></article></section>
        </div>
      </main>
    </div>
  );
}
