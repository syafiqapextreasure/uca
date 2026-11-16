import fs from 'node:fs';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
import {socialMeta,homeShareTitle,homeShareDescription} from '../src/social-meta.mjs';
for(const page of pages){
 const html=fs.readFileSync(page.route==='/'?'dist/index.html':`dist${page.route}.html`,'utf8');
 for(const key of ['og:title','og:description','og:image','og:url','twitter:card','twitter:title','twitter:description','twitter:image']){
  const matches=[...html.matchAll(new RegExp(`<meta (?:name|property)="${key}" content="([^"]+)"`,'g'))];
  assert.equal(matches.length,1,`${page.route}: missing/duplicate ${key}`);
  assert(!matches[0][1].includes('undefined'));
  if(key.endsWith(':image')||key==='og:url')assert(matches[0][1].startsWith('https://'));
 }
 assert(!html.includes('<!--SOCIAL-->'));
}
const home=pages.find(p=>p.route==='/');
assert.equal(home.title,homeShareTitle);
assert.equal(home.description,homeShareDescription);
assert(socialMeta(home,'https://example.com').includes('https://example.com/assets/uca-share-square-v1.png'));
for(const [name,width,height] of [['square',800,800],['wide',1200,630]]){
 const png=fs.readFileSync(`dist/assets/uca-share-${name}-v1.png`);
 assert.equal(png.readUInt32BE(16),width);assert.equal(png.readUInt32BE(20),height);
}
console.log(`Social metadata verified: ${pages.length} pages, two PNG images, custom origin support.`);
