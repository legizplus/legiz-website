import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';

// ── Ambil semua file artikel .md dari folder konten ──────────────────────────
// Cara kerja: setiap file .md di src/content/artikel/ otomatis terbaca.
// Menambah artikel = cukup menaruh file .md baru di folder itu.
const modules = import.meta.glob('./content/artikel/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const MONTHS_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

// ── Parsing frontmatter + isi artikel ────────────────────────────────────────
function parseArticle(fileName, raw) {
  // Blok "---" di awal file berisi metadata: title, date, summary, cover
  const fm = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/.exec(raw);
  const meta = {};
  let body = raw;

  if (fm) {
    fm[1].split('\n').forEach((line) => {
      const idx = line.indexOf(':');
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
        meta[key] = value;
      }
    });
    body = fm[2];
  }

  const slug = fileName.replace(/\.md$/, '');
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: meta.title || 'Tanpa Judul',
    date: meta.date || '',
    summary: meta.summary || '',
    cover: meta.cover || '',
    body,
    readMinutes: Math.max(1, Math.round(wordCount / 200)),
  };
}

// Daftar artikel, diurutkan dari terbaru
export const articles = Object.entries(modules)
  .map(([path, raw]) => {
    const fileName = path.split('/').pop();
    return parseArticle(fileName, raw);
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function formatDateID(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return iso;
  return `${parseInt(d, 10)} ${MONTHS_ID[parseInt(m, 10) - 1]} ${y}`;
}

function renderMarkdown(md) {
  return marked.parse(md);
}

// ── Halaman daftar artikel (/artikel) ────────────────────────────────────────
export function ArticlesPage() {
  return (
    <section className="articles page-section">
      <div className="section-header">
        <p className="section-kicker">Artikel & Edukasi</p>
        <div>
          <h2>Insight legalitas untuk bisnis</h2>
          <p>Catatan singkat, penjelasan praktis, dan edukasi hukum untuk membantu Anda mengambil keputusan yang lebih baik.</p>
        </div>
      </div>

      <div className="article-grid">
        {articles.map((a) => (
          <Link className="article-card" to={`/artikel/${a.slug}`} key={a.slug}>
            {a.cover && (
              <div className="article-cover">
                <img src={a.cover} alt={a.title} loading="lazy" />
              </div>
            )}
            <div className="article-card-body">
              <p className="article-meta">{formatDateID(a.date)} · {a.readMinutes} menit baca</p>
              <h3>{a.title}</h3>
              {a.summary && <p>{a.summary}</p>}
            </div>
          </Link>
        ))}
        {articles.length === 0 && (
          <p className="empty-articles">Belum ada artikel. Tambahkan file .md ke folder src/content/artikel/.</p>
        )}
      </div>
    </section>
  );
}

// ── Halaman detail artikel (/artikel/:slug) ───────────────────────────────────
export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <section className="page-section">
        <div className="section-header">
          <p className="section-kicker">404</p>
          <div>
            <h2>Artikel tidak ditemukan.</h2>
            <p>Silakan kembali ke daftar artikel.</p>
          </div>
        </div>
        <Link className="button primary" to="/artikel">Lihat Semua Artikel</Link>
      </section>
    );
  }

  return (
    <article className="article-detail page-section">
      {article.cover && (
        <figure className="article-detail-cover">
          <img src={article.cover} alt={article.title} />
        </figure>
      )}

      <header className="article-detail-head">
        <p className="article-meta">{formatDateID(article.date)} · {article.readMinutes} menit baca</p>
        <h2>{article.title}</h2>
        {article.summary && <p className="article-summary">{article.summary}</p>}
      </header>

      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(article.body) }}
      />
    </article>
  );
}
