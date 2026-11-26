const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const themeIcon=document.getElementById('themeIcon');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
function setTheme(theme){root.setAttribute('data-theme',theme);themeIcon.textContent=theme==='dark'?'☀':'☾';try{localStorage.setItem('ppu-theme-v2',theme)}catch(e){}}
let saved=null;try{saved=localStorage.getItem('ppu-theme-v2')}catch(e){}
setTheme(saved||'dark');
themeToggle.addEventListener('click',()=>setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'));
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation')}));
document.getElementById('year').textContent=new Date().getFullYear();

/* ---------- Active nav + scroll progress + navbar state ---------- */
const progress=document.getElementById('progress'),navbar=document.querySelector('.navbar');
const links=[...navLinks.querySelectorAll('a[href^="#"]')];
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(max>0?scrollY/max:0)+')';navbar.classList.toggle('scrolled',scrollY>20)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver' in window){
  const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current')});const a=map.get(e.target.id);if(a){a.classList.add('active');a.setAttribute('aria-current','true')}}}),{rootMargin:'-45% 0px -50% 0px'});
  map.forEach((_,id)=>{const s=document.getElementById(id);if(s)io.observe(s)});
}

/* ---------- Language toggle (EN / ID) ---------- */
const ID={n_sol:'Solusi',n_prod:'Produk',n_ind:'Industri',n_cli:'Klien',n_about:'Tentang',n_con:'Kontak',
h1:'Inovasi<br>menuju <span>kecerdasan.</span>',hero_p:'Memberdayakan bisnis melalui teknologi cerdas, solusi terintegrasi, dan inovasi yang bertujuan.',hero_btn:'Jelajahi solusi kami ↗',hero_b:'Teknologi dengan tujuan',
l1:'01 / TENTANG KAMI',intro_h:'Mengubah tantangan kompleks menjadi <span>peluang cerdas.</span>',intro_p:'Perkasa Pilar Utama menghadirkan solusi berbasis teknologi yang membantu organisasi meningkatkan operasional, menghubungkan proses, dan melangkah maju dengan percaya diri.',
st1b:'Terintegrasi',st1s:'Solusi teknologi',st2b:'Lintas industri',st2s:'Pengalaman bisnis',st3b:'Berorientasi tujuan',st3s:'Inovasi digital',
l2:'02 / YANG KAMI KERJAKAN',sol_h:'Solusi <span>cerdas.</span>',sol_p:'Teknologi yang dirancang untuk menjawab tantangan bisnis nyata.',
c1h:'Transformasi Digital',c1p:'Modernisasi proses bisnis dan ciptakan pengalaman digital yang terhubung.',c2h:'Kecerdasan Data',c2p:'Ubah data bisnis menjadi wawasan bermakna dan keputusan yang lebih baik.',c3h:'Integrasi Sistem',c3p:'Hubungkan platform, aplikasi, dan alur kerja di seluruh organisasi.',
l3:'03 / EKOSISTEM KAMI',pr_h:'Produk yang dibangun untuk <span>kemajuan.</span>',pr_p:'Ekosistem teknologi yang mendukung beragam kebutuhan bisnis.',
p1c:'PEMBIAYAAN',p1d:'Sistem Originasi Pinjaman yang Fleksibel',p2c:'REKONSILIASI',p2d:'Solusi rekonsiliasi data',p3c:'KECERDASAN DOKUMEN',p3d:'OCR dan pemrosesan dokumen cerdas',p4c:'PENDANAAN',p4d:'Core Financing',p5c:'OPERASIONAL LAPANGAN',p5d:'Operasional Lapangan Mobile',
l4:'04 / TEKNOLOGI DENGAN TUJUAN',te_h:'Teknologi bukan tujuan akhir. <span>Kemajuan adalah tujuannya.</span>',te_p:'Kami bekerja dengan teknologi yang terus berkembang untuk menciptakan nilai praktis bagi bisnis.',
l5:'05 / DAMPAK LINTAS INDUSTRI',in_h:'Satu mitra. <span>Banyak peluang.</span>',in_p:'Mendukung organisasi di berbagai industri.',
i1:'Jasa Keuangan',i2:'Pemerintah',i3:'Manufaktur',i4:'Ritel &amp; Distribusi',i5:'Energi',i6:'Pertanian',i7:'Peternakan Unggas',sp_s:'SOROTAN INDUSTRI',sp_h:'Teknologi yang berdampak langsung di lapangan.',
l6:'06 / KLIEN KAMI',cl_h:'Dibangun di atas <span>hubungan yang dipercaya.</span>',cl_p:'Bekerja sama untuk menciptakan hasil bisnis yang bermakna.',cl_n:'Placeholder — ganti dengan logo klien resmi yang telah disetujui.',
l7:'07 / ORANG-ORANG DI BALIK KEMAJUAN',pe_h:'Teknologi hebat dimulai dari <span>orang-orang hebat.</span>',pe_p:'Tim kami memadukan keahlian, rasa ingin tahu, dan komitmen untuk menghadirkan solusi yang berarti.',
l8:'08 / PENGHARGAAN SEPANJANG TAHUN',aw_h:'Kemajuan yang <span>layak diapresiasi.</span>',l9:'09 / EKOSISTEM TEKNOLOGI',pa_h:'Didukung ekosistem <span>teknologi yang kuat.</span>',
ct_l:'MARI BANGUN LANGKAH BERIKUTNYA',ct_h:'Punya tantangan<br>untuk dipecahkan? <span>Mari bicara.</span>',ct_p:'Hubungi tim kami untuk menjajaki bagaimana teknologi dapat memajukan bisnis Anda.',ph:'TELEPON',of:'KANTOR',addr:'Komplek Rukan Artha Gading Niaga Blok D No. 19-20<br>Jl. Boulevard Artha Gading, Kelapa Gading, Jakarta 14240<br>Indonesia',
f_name:'Nama',f_email:'Email kantor',f_msg:'Apa yang bisa kami bantu?',f_send:'Kirim pesan',top:'Kembali ke atas ↑'};ID.p_more='Lihat detail ↗';Object.assign(ID,{"l_cl": "KLIEN KAMI", "cl_h": "Dipercaya oleh <span>institusi terkemuka.</span>", "cl_p": "Dari bank nasional hingga multifinance dan telekomunikasi, organisasi di seluruh Indonesia bekerja sama dengan PPU.", "g1": "Perbankan", "g2": "Multifinance", "g3": "Telekomunikasi, asuransi &amp; fintech", "cl_more": "Dan masih banyak lagi di berbagai industri."});Object.assign(ID,{"skip": "Lewati ke konten", "n_tech": "Teknologi", "n_cta": "Mari berkolaborasi ↗", "h_eye": "MITRA KECERDASAN BERIKUTNYA · JAKARTA, SEJAK 1996", "h_btn2": "Diskusikan ide Anda →", "hero_p": "Mengubah kompleksitas menjadi keunggulan. Kami membangun aplikasi cerdas untuk masa depan bisnis Anda.", "hero_b": "Dibangun untuk bisnis. Dirancang untuk langkah berikutnya.", "l1": "TENTANG KAMI", "l2": "YANG KAMI KERJAKAN", "l3": "EKOSISTEM PRODUK KAMI", "l4": "TEKNOLOGI DENGAN TUJUAN", "l5": "DAMPAK LINTAS INDUSTRI", "l6": "ORANG-ORANG DI BALIK KEMAJUAN", "l7": "PENGHARGAAN SEPANJANG TAHUN", "l8": "EKOSISTEM TEKNOLOGI", "st1b": "Sejak 1996", "st1s": "Membangun solusi teknologi", "st2b": "Financial-first", "st2s": "Pola pikir enterprise, lintas industri", "st3b": "End-to-end", "st3s": "Dari strategi hingga operasional", "sol_h": "Bisnis bergerak cepat. <span>Teknologi Anda juga.</span>", "sol_p": "Dari proses finansial yang kompleks hingga pengalaman pelanggan yang sederhana, temukan fondasi digital untuk langkah berikutnya.", "c1h": "Solusi finansial", "c1p": "Platform pembiayaan, rekonsiliasi, dan pendanaan untuk lembaga keuangan.", "c2h": "Aplikasi enterprise", "c2p": "Aplikasi web dan mobile yang sesuai dengan cara kerja organisasi Anda.", "c3h": "AI &amp; Kecerdasan data", "c3p": "Ubah dokumen dan data bisnis menjadi wawasan dan keputusan yang lebih baik.", "c4h": "Bisnis terhubung", "c4p": "Integrasikan platform, aplikasi, dan alur kerja di seluruh organisasi.", "pr_h": "Dirancang khusus. <span>Siap untuk bisnis.</span>", "pr_p": "Produk PPU yang menghubungkan proses, data, dan keputusan, dari layanan finansial hingga ekosistem pangan.", "p1d": "Sistem Originasi Pinjaman yang Fleksibel", "p1x": "Permohonan hingga persetujuan kredit dalam satu alur digital.", "p2d": "Bangun alurnya. Tutup pembukuan.", "p2x": "Pencocokan dan rekonsiliasi transaksi dari beragam sumber data.", "p3d": "OCR dan pemrosesan dokumen cerdas", "p3x": "Ubah dokumen menjadi data digital yang terstruktur.", "p4d": "Core Financing", "p5d": "Operasional Lapangan Mobile", "p_link": "Diskusikan produk ini ↗", "al": "Juga dalam ekosistem kami", "te_h": "Bangun lebih cerdas. <span>Berpikir lebih jauh.</span>", "te_p": "Kecepatan pengembangan bertemu kedalaman kecerdasan. Teknologi dipilih sesuai kebutuhan bisnis, dengan ruang untuk terus berinovasi.", "t1p": "Percepat pengembangan aplikasi enterprise dengan pendekatan visual dan integrasi sistem yang terarah.", "t2p": "Rancang otomasi proses dan prototipe bersama tim bisnis, dengan tata kelola sebagai fondasi.", "t3h": "Kecerdasan buatan", "t3p": "Hubungkan dokumen, data, dan analitik untuk alur kerja dan keputusan yang lebih cerdas.", "t4h": "Teknologi kuantum", "t4p": "Horizon eksplorasi untuk optimasi dan komputasi masa depan, mulai dari pemetaan use case dan kesiapan bisnis.", "in_h": "Berakar di finansial. <span>Peluang di mana-mana.</span>", "i7": "Peternakan ayam petelur", "i8": "Sektor lainnya", "sp_s": "SOROTAN INDUSTRI · AGRIKULTUR &amp; PETERNAKAN", "sp_h": "Kecerdasan yang tumbuh, dari lahan hingga peternakan.", "s1c": "AGRIKULTUR", "s1p": "Ekosistem tanam padi, dari perencanaan lahan, penanaman, dan perawatan hingga panen serta distribusi hasil. Menghubungkan petani, koperasi, bank, dan investor dalam Ekosistem Pangan Indonesia.", "s1a": "Perencanaan lahan", "s1b": "Tanam &amp; rawat", "s1d": "Panen &amp; distribusi", "s1l": "Jelajahi Lapangan ↗", "s2c": "PETERNAKAN AYAM PETELUR", "s2p": "Aplikasi untuk sektor peternakan ayam petelur, menghadirkan pendekatan digital untuk pengelolaan usaha peternakan.", "s2l": "Jelajahi IstanaTelur ↗", "pe_h": "Teknologi berkembang. <span>Komitmen kami tetap.</span>", "pe_p": "Didirikan pada 1996 di Jakarta, PT Perkasa Pilar Utama membantu organisasi membangun solusi digital. Konsultasi IT, aplikasi web dan mobile, integrasi, serta AI menjadi bagian dari perjalanan kami.", "pe_btn": "Bangun langkah berikutnya bersama PPU ↗", "aw_l": "Lihat profil dan pengakuan di situs PPU ↗", "ct_l": "MARI CIPTAKAN LANGKAH BERIKUTNYA", "ct_h": "Ide besar Anda.<br><span>Langkah cerdas berikutnya.</span>", "ct_p": "Mulai percakapan tentang tantangan, peluang, dan masa depan bisnis Anda.", "f_h": "Mari mulai dari sebuah percakapan.", "f_name": "Nama lengkap", "f_email": "Email bisnis", "f_co": "Perusahaan", "f_topic": "Bidang yang ingin didiskusikan", "f_msg": "Ceritakan kebutuhan Anda", "f_send": "Siapkan email konsultasi ↗", "f_note": "Form ini menyiapkan draf di aplikasi email Anda. Pesan terkirim setelah Anda menekan kirim di sana.", "src": "Sumber profil: ppu.co.id ↗", "o1": "Solusi finansial", "o2": "Low-code / No-code", "o3": "AI &amp; Kecerdasan data", "o4": "Enterprise &amp; Integrasi sistem", "o5": "Agrikultur — Lapangan", "o6": "Ayam petelur — IstanaTelur", "o7": "Eksplorasi kuantum", "o8": "Lainnya"});
const MSG={en:{bad:'Please fill in your name, a valid email, and a message.',ok:'Opening your email app with your message ready to send.'},id:{bad:'Isi nama, email yang valid, dan pesan Anda.',ok:'Membuka aplikasi email dengan pesan Anda siap dikirim.'}};
const i18n=[...document.querySelectorAll('[data-i18n]')];i18n.forEach(el=>el.dataset.en=el.innerHTML);
const langToggle=document.getElementById('langToggle');let lang='en';
function setLang(l){lang=l;root.lang=l;i18n.forEach(el=>{const v=l==='id'?ID[el.dataset.i18n]:el.dataset.en;if(v!=null)el.innerHTML=v});
  langToggle.innerHTML=l==='id'?'<b>ID</b> / EN':'<b>EN</b> / ID';langToggle.setAttribute('aria-label',l==='id'?'Ganti ke bahasa Inggris':'Switch to Indonesian');
  try{localStorage.setItem('ppu-lang',l)}catch(e){}}
let sl=null;try{sl=localStorage.getItem('ppu-lang')}catch(e){}
setLang(sl||((navigator.language||'').toLowerCase().startsWith('id')?'id':'en'));
langToggle.addEventListener('click',()=>setLang(lang==='en'?'id':'en'));

/* ---------- Contact form (prepares an email in the visitor's mail app; no backend needed) ---------- */
const form=document.getElementById('contactForm'),status=document.getElementById('formStatus'),topic=document.getElementById('topic');
document.querySelectorAll('[data-topic]').forEach(a=>a.addEventListener('click',()=>{const o=[...topic.options].find(o=>o.value===a.dataset.topic.replace('&amp;','&'));if(o)topic.value=o.value}));
const okMail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);if(d.get('website'))return;
  const v={name:(d.get('name')||'').trim(),email:(d.get('email')||'').trim(),message:(d.get('message')||'').trim()};
  const bad=['name','email','message'].filter(k=>k==='email'?!okMail(v.email):!v[k]);
  ['name','email','message'].forEach(k=>form.elements[k].removeAttribute('aria-invalid'));
  if(bad.length){bad.forEach(k=>form.elements[k].setAttribute('aria-invalid','true'));status.className='status err';status.textContent=MSG[lang].bad;form.elements[bad[0]].focus();return}
  const co=(d.get('company')||'').trim(),tp=topic.options[topic.selectedIndex].value;
  status.className='status ok';status.textContent=MSG[lang].ok;
  location.href='mailto:sales@ppu.co.id?subject='+encodeURIComponent('Consultation: '+tp+' — '+v.name)+'&body='+encodeURIComponent(v.message+'\n\n— '+v.name+(co?', '+co:'')+' ('+v.email+')\nTopic: '+tp);
  form.reset()});

/* ---------- Product dialog ---------- */
const PD={
 ui:{en:{eye:'PPU PRODUCT ECOSYSTEM',close:'Close',discuss:'Discuss this product ↗',note:'Product information is based on the PPU profile and company direction. Implementation details are discussed with the PPU team.',visit:n=>'Visit '+n+' ↗'},
     id:{eye:'EKOSISTEM PRODUK PPU',close:'Tutup',discuss:'Diskusikan produk ini ↗',note:'Informasi produk berdasarkan profil PPU dan arahan perusahaan. Detail implementasi dibahas bersama tim PPU.',visit:n=>'Kunjungi '+n+' ↗'}},
 items:{
  beaverflow:{name:'Beaverflow',mark:'B',url:'https://beaverflow.devoutsys.com',topic:'Financial solutions',
   en:{tag:'Build the flow. Close the books.',desc:'Reconciliation built on a visual workflow: data retrieval, normalization, matching, exception marking, and delivery of results.',chips:['Visual workflow','Exception handling','On-premise deployment']},
   id:{tag:'Bangun alurnya. Tutup pembukuan.',desc:'Rekonsiliasi berbasis workflow visual: pengambilan data, normalisasi, pencocokan, penandaan pengecualian, dan penyampaian hasil.',chips:['Alur kerja visual','Penanganan pengecualian','Implementasi on-premise']}},
  flos:{name:'FLOS',mark:'F',topic:'Financial solutions',
   en:{tag:'Flexible Loan Origination System',desc:'Takes credit from application to approval in one digital flow.',chips:[]},
   id:{tag:'Sistem Originasi Pinjaman yang Fleksibel',desc:'Permohonan hingga persetujuan kredit dalam satu alur digital.',chips:[]}},
  oksara:{name:'OKSARA',mark:'O',topic:'AI & Data intelligence',
   en:{tag:'OCR and intelligent document processing',desc:'Turns documents into structured digital data.',chips:[]},
   id:{tag:'OCR dan pemrosesan dokumen cerdas',desc:'Ubah dokumen menjadi data digital yang terstruktur.',chips:[]}}}};
const dlg=document.getElementById('pdialog');let curP=null,opener=null;
function renderP(){if(!curP)return;const p=PD.items[curP],t=p[lang],u=PD.ui[lang],$=id=>document.getElementById(id);
  $('pdEyebrow').textContent=u.eye;$('pdMark').textContent=p.mark;$('pdName').textContent=p.name;$('pdTag').textContent=t.tag;$('pdDesc').textContent=t.desc;
  $('pdChips').innerHTML='';t.chips.forEach(c=>{const li=document.createElement('li');li.textContent=c;$('pdChips').appendChild(li)});$('pdChips').hidden=!t.chips.length;
  const v=$('pdVisit');v.hidden=!p.url;if(p.url){v.href=p.url;v.textContent=u.visit(p.name)}else{v.removeAttribute('href');v.textContent=''}
  $('pdDiscuss').textContent=u.discuss;$('pdNote').textContent=u.note;$('pdClose').setAttribute('aria-label',u.close)}
document.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>{curP=b.dataset.product;opener=b;renderP();dlg.showModal()}));
document.getElementById('pdClose').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',()=>{if(opener)opener.focus()});
document.getElementById('pdDiscuss').addEventListener('click',()=>{const tp=PD.items[curP].topic;opener=null;dlg.close();const o=[...topic.options].find(o=>o.value===tp);if(o)topic.value=o.value;location.hash='#contact'});
langToggle.addEventListener('click',renderP);

/* ---------- Hero: connected lattice (slow, theme-aware, pauses off-screen) ---------- */
(function(){
  const cv=document.getElementById('lattice');if(!cv)return;
  const ctx=cv.getContext('2d'),hero=document.getElementById('home'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TH={dark:{ink:[196,212,234],acc:[72,184,232]},light:{ink:[22,34,58],acc:[8,127,181]}};
  const rgba=(c,a)=>'rgba('+c[0]+','+c[1]+','+c[2]+','+a+')';
  function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
  let W=0,H=0,dpr=1,N=[],E=[],adj=[],hub=[],hot=[],P=[],R,small=null;
  function build(count){
    R=rng(11);N=[];let tries=0;
    while(N.length<count&&tries<4000){tries++;const x=(R()*2-1)*1.7,y=(R()*2-1)*1.05,z=(R()*2-1)*1.2;
      if(x*x/2.89+y*y/1.1+z*z/1.44>1)continue;
      if(N.some(q=>(q[0]-x)**2+(q[1]-y)**2+(q[2]-z)**2<0.34))continue;N.push([x,y,z])}
    E=[];adj=N.map(()=>[]);const seen={};
    N.forEach((p,i)=>{N.map((q,j)=>[j,(p[0]-q[0])**2+(p[1]-q[1])**2+(p[2]-q[2])**2]).filter(o=>o[0]!==i&&o[1]<1.5).sort((a,b)=>a[1]-b[1]).slice(0,3).forEach(o=>{
      const a=Math.min(i,o[0]),b=Math.max(i,o[0]),k=a+'-'+b;if(!seen[k]){seen[k]=1;E.push([a,b]);adj[a].push(E.length-1);adj[b].push(E.length-1)}})});
    const top=N.map((_,i)=>i).sort((a,b)=>adj[b].length-adj[a].length).slice(0,4);hub=N.map((_,i)=>top.includes(i)&&adj[i].length>=3);
    hot=N.map(()=>0);P=[];
    const live=E.map((_,i)=>i).filter(i=>true);
    for(let k=0;k<(count<24?4:5);k++){P.push({e:live[Math.floor(R()*live.length)],d:R()<.5?1:-1,t:R(),v:.14+R()*.08})}
  }
  function size(){const r=cv.getBoundingClientRect();W=r.width;H=r.height;dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    const s=W<520;if(s!==small){small=s;build(s?20:30)}}
  let px=0,py=0,tx=0,ty=0,time=reduce?7:0;
  function proj(p,ay,ax){const c=Math.cos(ay),s=Math.sin(ay),x=p[0]*c+p[2]*s,z=-p[0]*s+p[2]*c,c2=Math.cos(ax),s2=Math.sin(ax),y2=p[1]*c2-z*s2,z2=p[1]*s2+z*c2,f=Math.min(W/4.5,H/3.0)*4.6/(z2+4.6);return[W/2+x*f/1.0,H/2+y2*f,z2,f]}
  function draw(dt){
    const th=TH[document.documentElement.dataset.theme==='light'?'light':'dark'];
    px+=(tx-px)*.03;py+=(ty-py)*.03;time+=dt;
    const ay=time*.07+px*.32,ax=-.2+py*.2,Q=N.map(p=>proj(p,ay,ax));
    ctx.clearRect(0,0,W,H);ctx.lineCap='round';
    E.forEach(e=>{const a=Q[e[0]],b=Q[e[1]],al=Math.max(.08,Math.min(.5,.3-(a[2]+b[2])/2*.16)),h=Math.max(hot[e[0]],hot[e[1]]);
      ctx.strokeStyle=rgba(th.ink,al*(1-h*.6));ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();
      if(h>.02){ctx.strokeStyle=rgba(th.acc,h*.7);ctx.lineWidth=1.5;ctx.stroke()}});
    N.map((_,i)=>i).sort((a,b)=>Q[b][2]-Q[a][2]).forEach(i=>{const q=Q[i],r=Math.max(1.8,q[3]*.021*(hub[i]?1.5:1)),al=Math.max(.3,Math.min(1,.8-q[2]*.2));
      ctx.fillStyle=rgba(th.ink,al);ctx.beginPath();ctx.arc(q[0],q[1],r,0,6.283);ctx.fill();
      if(hub[i]){ctx.strokeStyle=rgba(th.acc,.9);ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(q[0],q[1],r+3.5,0,6.283);ctx.stroke()}
      if(hot[i]>.02){ctx.fillStyle=rgba(th.acc,hot[i]);ctx.beginPath();ctx.arc(q[0],q[1],r+1,0,6.283);ctx.fill()}});
    P.forEach(p=>{const e=E[p.e];if(!e)return;const a=Q[p.d>0?e[0]:e[1]],b=Q[p.d>0?e[1]:e[0]],t=p.t,t0=Math.max(0,t-.2);
      ctx.strokeStyle=rgba(th.acc,.95);ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(a[0]+(b[0]-a[0])*t0,a[1]+(b[1]-a[1])*t0);ctx.lineTo(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t);ctx.stroke();
      ctx.fillStyle=rgba(th.acc,1);ctx.beginPath();ctx.arc(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,3,0,6.283);ctx.fill()});
    if(!reduce){hot=hot.map(h=>Math.max(0,h-dt*.5));
      P.forEach(p=>{p.t+=dt*p.v;if(p.t>=1){const e=E[p.e],to=p.d>0?e[1]:e[0];hot[to]=1;const o=adj[to];if(!o.length){p.t=0;return}const ne=o[Math.floor(R()*o.length)],ee=E[ne];p.e=ne;p.d=ee[0]===to?1:-1;p.t=0}})}
  }
  let running=false,last=0;
  function loop(ts){if(!running)return;const dt=Math.min(.05,(ts-last)/1000||0);last=ts;draw(dt);requestAnimationFrame(loop)}
  function start(){if(reduce||running)return;running=true;last=performance.now();requestAnimationFrame(loop)}
  function stop(){running=false}
  size();draw(0);
  if(reduce){new MutationObserver(()=>draw(0)).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})}
  new ResizeObserver(()=>{size();if(reduce||!running)draw(0)}).observe(cv);
  if('IntersectionObserver' in window)new IntersectionObserver(es=>es[0].isIntersecting?start():stop()).observe(cv);else start();
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*2});
  hero.addEventListener('pointerleave',()=>{tx=0;ty=0});
})();
