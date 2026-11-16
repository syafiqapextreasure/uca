import fs from 'node:fs';
const p='src/pages.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace('<form id="registration">${fields}', '<noscript><p>JavaScript diperlukan untuk menyediakan mesej. Hubungi UCA melalui nombor telefon di sebelah.</p></noscript><form id="registration" method="post" action="/hubungi">${fields}');
s=s.replace('data-year="2026" data-kind="kerjasama"','data-year="2024,2026" data-kind="kerjasama"');
s=s.replace('<main id="main">${p.body}</main>', '<main id="main">${p.route!==\'/\'?`<nav class="wrap breadcrumbs" aria-label="Jejak halaman"><a href="/">Utama</a><span>›</span><span>${esc(p.t)}</span></nav>`:\'\'}${p.body}</main>');
fs.writeFileSync(p,s);
const j='public/app.js';s=fs.readFileSync(j,'utf8').replace("el.dataset.year===y","el.dataset.year?.split(',').includes(y)");fs.writeFileSync(j,s);
fs.appendFileSync('public/styles.css','\n.breadcrumbs{display:flex;align-items:center;gap:12px;padding-block:12px;font-size:.75em;overflow-wrap:anywhere}.breadcrumbs a{font-size:inherit}.breadcrumbs span:last-child{color:#7fccc9}fieldset{border:0;padding:0;margin:0}\n');
