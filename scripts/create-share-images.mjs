// Run manually with sharp available; generated PNGs are committed for dependency-free builds.
import fs from 'node:fs';
import sharp from 'sharp';
const logo=await sharp('public/assets/logo.webp').png().toBuffer();
for(const [name,w,h,logoWidth,logoY] of [['square',800,800,704,270],['wide',1200,630,700,180]]){
 const logoHeight=Math.round(logoWidth*305/1095);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
 <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#103d49"/><stop offset="1" stop-color="#031923"/></linearGradient></defs>
 <rect width="${w}" height="${h}" fill="url(#bg)"/>
 <path d="M0 20H${w}M0 ${h-20}H${w}" stroke="#2be9e2" stroke-width="5"/>
 <path d="M${w-190} 20L${w-330} ${h-20}M${w-80} 20L${w-220} ${h-20}" fill="none" stroke="#2be9e2" stroke-opacity=".08" stroke-width="45"/>
 <text x="${w/2}" y="${logoY-55}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${name==='square'?32:34}" font-weight="700" letter-spacing="3" fill="#58eee4">UNIVERSAL COMPETENCY ACADEMY</text>
 <image href="data:image/png;base64,${logo.toString('base64')}" x="${(w-logoWidth)/2}" y="${logoY}" width="${logoWidth}" height="${logoHeight}"/>
 <text x="${w/2}" y="${logoY+logoHeight+90}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${name==='square'?42:44}" font-weight="700" fill="#f4fafb">Kursus Boiler</text>
 <text x="${w/2}" y="${logoY+logoHeight+145}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${name==='square'?36:38}" fill="#f4fafb">&amp; Latihan Kemahiran</text>
 </svg>`;
 await sharp(Buffer.from(svg)).png({compressionLevel:9}).toFile(`public/assets/uca-share-${name}-v1.png`);
 console.log(name,fs.statSync(`public/assets/uca-share-${name}-v1.png`).size);
}
