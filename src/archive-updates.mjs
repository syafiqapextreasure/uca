export function updateArchives(pages,h){
const {icon:i,pic:img,link:btn,title:T,wrap:W,records}=h;
const details={
 '2024':{name:'Kursus Pemantapan<br>Drebar Enjin Stim',place:'ADTEC Jerantut, Pahang',duration:'4 hari',fee:'RM3,000',summary:'Kursus pemantapan drebar enjin stim (Boilerman), seperti diiklankan dalam poster asal bagi 26–29 Februari 2024.'},
 '2025':{name:'Boilerman &<br>PPT SKM Level 3',place:'ADTEC Jerantut, Pahang',duration:'27–31 Julai 2025',fee:'RM4,500',summary:'Program pemantapan operator dandang stim (Boilerman) dan PPT SKM Level 3. Poster menyenaraikan bidang Boiler Operation and Maintenance [ME-011-3:2014].'},
 '2026':{name:'Boiler Operation<br>and Maintenance',place:'IKBN Pekan, Pahang',duration:'3 bulan: 1 bulan di IKBN, 2 bulan di industri',summary:'Rekod tawaran latihan Boiler Operation and Maintenance yang diiklankan bermula 6 Julai 2026 di IKBN Pekan. Rekod ini berasingan daripada tawaran PLKK bertarikh 10 Ogos 2026.'}
};
for(const [slug,t,date,year] of records.slice(1,4)){
 const d=details[year],asset='poster-archive-'+year;
 const row=(ic,text)=>`<div class="icon-row">${i(ic)}<div>${text}</div></div>`;
 // Each original poster identifies its own record. No unrelated cohort photograph is assigned to a date.
 const hero=`<header class="archive-heading"><div class="wrap"><p class="eyebrow">ARKIB PROGRAM • ${year}</p><span class="badge past">Rekod promosi terdahulu</span><h1>${d.name}</h1><p class="hero-sub">${i('calendar')} ${date}</p><p>${d.place}</p><span class="archive-year" aria-hidden="true">${year}</span></div></header>`;
 const related=records.filter(r=>r[0]!==slug).slice(0,2);
 pages.find(p=>p.route==='/aktiviti/'+slug).body=hero+W(`<div class="grid two archive-detail archive-verified"><figure><a href="/assets/${asset}.webp" target="_blank" rel="noopener">${img(asset,'Poster promosi asal '+t+' — '+date,'poster')}</a><figcaption>Poster promosi asal • ${date}<br>Klik poster untuk paparan penuh.</figcaption></figure><article><h2>Maklumat program</h2>${row('pin',d.place)}${row('clock',d.duration)}${d.fee?row('coins','Yuran pada poster: <strong>'+d.fee+'</strong>'):''}${T('Ringkasan program')}<p>${d.summary}</p><p class="archive-note">Maklumat ini ialah rekod promosi terdahulu. Tarikh iklan tidak mengesahkan kehadiran atau penyempurnaan program.</p><div class="stack">${btn('Lihat pengambilan semasa','/pengambilan')}${btn('Kembali ke arkib','/aktiviti','button outline')}</div></article></div><div class="panel info-strip">${i('info')}<p>Maklumat arkib tidak mewakili harga atau pengambilan semasa.</p></div>${T('Rekod berkaitan')}<div class="grid two">${related.map(([s,n,d])=>`<a class="panel related-record" href="/aktiviti/${s}">${i('calendar')}<div><h3>${n}</h3><p>${d}</p></div>${i('arrow')}</a>`).join('')}</div>`);
}
}
