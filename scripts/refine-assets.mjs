import fs from 'node:fs';
const p='src/pages.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace("style=\"--hero:url('${A+img}.webp')\"", "style=\"--hero:url('${A+img}.webp');--hero-medium:url('${A+img}-1280.webp');--hero-small:url('${A+img}-640.webp')\"");
s=s.replace("${list(elig(g))}</section><section>","${list(elig(g))}</section>${g===2?`<section>${title('Gambaran Kursus')}<p>Pengoperasian dan penyelenggaraan dandang stim melalui pembelajaran teori dan amali.</p></section>`:''}<section>");
s=s.replace("${faqs()}`),'Kursus');","${g===2?partners():''}${faqs()}`),'Kursus');");
fs.writeFileSync(p,s);
fs.appendFileSync('public/styles.css',`\n@media(max-width:800px){.hero-image{background-image:var(--hero-medium,var(--hero))}}@media(max-width:520px){.hero-image{background-image:var(--hero-small,var(--hero))}.course-card .fees{flex-direction:column}.course-card .fees span{font-size:16px}.course-card .fees strong{font-size:27px}.course-card .fees>div{text-align:left;padding:10px}.course-card p{font-size:17px}.course-card .button{font-size:17px}.small{font-size:16px}}\n`);
fs.copyFileSync('node_modules/@fontsource-variable/inter/LICENSE','public/assets/FONT-LICENSE.txt');
