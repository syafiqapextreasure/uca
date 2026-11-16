import {chromium} from '@playwright/test';import fs from 'node:fs';import {pages} from '../src/pages.mjs';
fs.mkdirSync('../work/uca-qa',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
const results=[];
for(const [label,width,height] of [['desktop',1440,1000],['wide',2560,1440],['tablet',768,1024],['phone',390,844]]){
 const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
 for(let i=0;i<pages.length;i++){const p=pages[i];await page.goto('http://127.0.0.1:4173'+p.route);await page.evaluate(()=>document.fonts.ready);await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{img.loading='eager';return img.decode().catch(()=>{})})));await page.screenshot({path:`../work/uca-qa/${label}-${String(i).padStart(2,'0')}.png`,fullPage:true});results.push({viewport:label,route:p.route,...await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,bodyFont:getComputedStyle(document.body).fontSize,missingImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),height:document.documentElement.scrollHeight}))});}
 await page.close();
}
await browser.close();fs.writeFileSync('../work/uca-qa/layout-results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results.filter(r=>r.overflow||r.missingImages.length),null,2));
