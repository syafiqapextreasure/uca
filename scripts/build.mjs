import fs from 'node:fs';
import path from 'node:path';
import {pages} from '../src/pages.mjs';
import {socialMeta,defaultOrigin} from '../src/social-meta.mjs';
fs.mkdirSync('dist',{recursive:true});
// Remove the obsolete standalone page; _redirects preserves incoming links.
if(fs.existsSync('dist/program-geran.html'))fs.unlinkSync('dist/program-geran.html');fs.cpSync('public','dist',{recursive:true});
const font='node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2';
if(fs.existsSync(font))fs.copyFileSync(font,'dist/assets/inter.woff2');
const origin=(process.env.SITE_URL||defaultOrigin).replace(/\/$/,'');
for(const p of pages){let html=p.html.replace('<!--SOCIAL-->',socialMeta(p,origin));html=html.replace('<!--CANONICAL-->',`<link rel="canonical" href="${origin}${p.route}"><meta property="og:url" content="${origin}${p.route}">`);const file=p.route==='/'?'dist/index.html':`dist${p.route}.html`;fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,html);}
fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nDisallow: /teruskan-whatsapp\n${origin?`Sitemap: ${origin}/sitemap.xml\n`:''}`);
if(origin)fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.filter(p=>!['/404','/teruskan-whatsapp'].includes(p.route)).map(p=>`<url><loc>${origin}${p.route}</loc></url>`).join('')}</urlset>`);
console.log(`Built ${pages.length} static pages. ${origin?'Canonical host: '+origin:'Set SITE_URL to your deployed domain for canonical URLs and sitemap.'}`);
