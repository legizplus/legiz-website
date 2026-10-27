# Sistem Artikel LEGIZ.ID

## Cara menambah artikel baru

1. Salin `templates/artikel-baru.md` → `artikel/<nama-artikel>.md`.
2. Isi metadata (title, date, summary, cover) + isi artikel.
3. Taruh foto di `public/images/artikel/`.
4. Commit + push → Vercel auto-deploy (±1 menit).

## Struktur folder

- `artikel/` — isi artikel (satu file per artikel, nama file = slug URL)
- `templates/` — template yang AMAN untuk disalin (tidak ikut tampil)
- `../../public/images/artikel/` — foto artikel
