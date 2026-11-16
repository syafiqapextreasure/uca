export const grantPrograms = [
  {slug:'elektrik',name:'Elektrik',image:'electrician',icon:'bolt',tagline:'Kemahiran elektrik untuk dunia industri.'},
  {slug:'solar',name:'Solar',image:'solar',icon:'sun',tagline:'Terokai kemahiran dalam tenaga solar.'},
  {slug:'kimpalan',name:'Kimpalan',image:'welding',icon:'weld',tagline:'Kemahiran praktikal dalam bidang kimpalan.'},
  {slug:'kimpalan-plastik',name:'Kimpalan Plastik',image:'plastic-welding',icon:'pipes',tagline:'Terokai kemahiran sambungan dan kimpalan plastik.'},
  {slug:'scaffolding',name:'Scaffolding',image:'scaffolding',icon:'scaffold',tagline:'Terokai bidang perancah dan kemahiran industri.'}
];

export function grantOverview(h,partners){
 const {icon:i,pic:img,link:btn,title:T}=h;
 return `<section class="grant-catalogue" id="program-geran">${T('Program Latihan (Mengikut Geran)')}<p class="grant-intro">Penawaran program tertakluk kepada geran daripada pemberi dana.</p><div class="grant-grid">${grantPrograms.map(p=>`<a class="photo-card" href="/kursus/${p.slug}">${img(p.image,`Ilustrasi latihan ${p.name}`)}<div><h2>${p.name}</h2><p>Mengikut geran ${i('arrow')}</p></div></a>`).join('')}</div><div class="process panel"><div>${i('megaphone')}<strong>Geran<br>diumumkan</strong></div>${i('arrow')}<div>${i('clipboard')}<strong>Syarat program<br>disahkan</strong></div>${i('arrow')}<div>${i('users')}<strong>Pengambilan<br>dibuka</strong></div></div><section class="grid two grant-history">${img('hero-grade-1','Ilustrasi latihan boiler')}<div>${T('Program terdahulu')}<div class="icon-row">${i('boiler')}<div><h3>PLKK Boiler • 10 Ogos 2026</h3><p>Pengambilan lepas</p></div></div><div class="icon-row">${i('calendar')}<div><strong>Latihan kemahiran • Arkib 2023–2026</strong></div></div>${btn('Lihat Aktiviti & Sejarah','/aktiviti')}</div></section>${partners()}</section>`;
}

export function addGrantDetails(pages,h){
 const {icon:i,link:btn,title:T,hero:H,wrap:W}=h;
 for(const p of grantPrograms){
  const route='/kursus/'+p.slug;
  const body=H(p.name,p.tagline,p.image,`<div class="grant-status-pill">${i('clock')}Pengambilan belum dibuka</div>`,'PROGRAM MENGIKUT GERAN')+W(`<section class="panel grant-empty"><div class="empty-symbol">${i(p.icon)}<span>${i('clock')}</span></div><p class="cyan grant-kicker">PROGRAM ${p.name.toUpperCase()}</p><h2>Belum ada program<br>ditawarkan buat masa ini.</h2><p class="empty-copy">Pengambilan ${p.name.toLowerCase()} akan diumumkan apabila geran dan butiran program disahkan. Tarikh, lokasi, syarat serta kemudahan akan dikongsikan bersama tawaran baharu.</p><div class="actions">${btn(i('chat')+'Tanya program akan datang','/hubungi?program='+p.slug)}${btn('Teroka kursus lain','/kursus','button outline')}</div></section><section class="grant-next">${T('Bagaimana pengambilan diumumkan?')}<div class="grid three">${[['megaphone','01','Geran diumumkan','Penawaran bergantung pada geran pemberi dana.'],['clipboard','02','Butiran disahkan','Tarikh, lokasi dan syarat ditetapkan untuk setiap program.'],['users','03','Pengambilan dibuka','Maklumat pendaftaran dipaparkan apabila tawaran tersedia.']].map(([ic,n,t,d])=>`<article class="panel"><span class="step-number">${n}</span>${i(ic)}<h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section><div class="panel grant-bottom"><div>${i('calendar')}<h3>Mencari latihan yang sedang ditawarkan?</h3></div>${btn('Lihat Pengambilan Boiler','/pengambilan')}</div><a class="text-link" href="/kursus#program-geran">${i('arrow')}Kembali ke program mengikut geran</a>`);
  pages.push({route,t:'Program '+p.name+' | Maklumat Pengambilan',body,active:'Kursus',desc:`Program ${p.name} UCA mengikut geran. Belum ada pengambilan ditawarkan buat masa ini. Hubungi UCA untuk pertanyaan program akan datang.`});
 }
}
