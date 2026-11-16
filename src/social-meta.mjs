export const defaultOrigin='https://uca.mail-82f.workers.dev';
export const homeShareTitle='UCA | Kursus Boiler & Latihan Kemahiran';
export const homeShareDescription='Kursus Operator Dandang Stim Gred 1 & 2 di IKBN Pekan, Pahang, serta program kemahiran mengikut geran. Semak syarat, tarikh pengambilan dan daftar dengan UCA.';
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function socialMeta(page,origin){
 const title=page.route==='/'?homeShareTitle:page.title+' | UCA';
 const description=page.route==='/'?homeShareDescription:page.description;
 const square=origin+'/assets/uca-share-square-v1.png';
 const wide=origin+'/assets/uca-share-wide-v1.png';
 const tags={
  'og:type':'website','og:site_name':'Universal Competency Academy','og:locale':'ms_MY',
  'og:title':title,'og:description':description,'og:image':square,
  'og:image:secure_url':square,'og:image:type':'image/png','og:image:width':'800','og:image:height':'800',
  'og:image:alt':'Logo Universal Competency Academy — Drive to Deliver. Kursus Boiler dan Latihan Kemahiran.'
 };
 return Object.entries(tags).map(([property,value])=>`<meta property="${property}" content="${escape(value)}">`).join('')+
  Object.entries({'twitter:card':'summary_large_image','twitter:title':title,'twitter:description':description,'twitter:image':wide,'twitter:image:alt':tags['og:image:alt']}).map(([name,value])=>`<meta name="${name}" content="${escape(value)}">`).join('');
}
