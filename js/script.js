const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const themeIcon=document.getElementById('themeIcon');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
function setTheme(theme){root.setAttribute('data-theme',theme);themeIcon.textContent=theme==='dark'?'☀':'☾';try{localStorage.setItem('ppu-theme',theme)}catch(e){}}
let saved=null;try{saved=localStorage.getItem('ppu-theme')}catch(e){}
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
f_name:'Nama',f_email:'Email kantor',f_msg:'Apa yang bisa kami bantu?',f_send:'Kirim pesan',top:'Kembali ke atas ↑'};
const MSG={en:{bad:'Please fill in your name, a valid email, and a message.',ok:'Opening your email app with your message ready to send.'},id:{bad:'Isi nama, email yang valid, dan pesan Anda.',ok:'Membuka aplikasi email dengan pesan Anda siap dikirim.'}};
const i18n=[...document.querySelectorAll('[data-i18n]')];i18n.forEach(el=>el.dataset.en=el.innerHTML);
const langToggle=document.getElementById('langToggle');let lang='en';
function setLang(l){lang=l;root.lang=l;i18n.forEach(el=>{const v=l==='id'?ID[el.dataset.i18n]:el.dataset.en;if(v!=null)el.innerHTML=v});
  langToggle.innerHTML=l==='id'?'<b>ID</b> / EN':'<b>EN</b> / ID';langToggle.setAttribute('aria-label',l==='id'?'Ganti ke bahasa Inggris':'Switch to Indonesian');
  try{localStorage.setItem('ppu-lang',l)}catch(e){}}
let sl=null;try{sl=localStorage.getItem('ppu-lang')}catch(e){}
setLang(sl||((navigator.language||'').toLowerCase().startsWith('id')?'id':'en'));
langToggle.addEventListener('click',()=>setLang(lang==='en'?'id':'en'));

/* ---------- Contact form (opens visitor's email client; no backend needed) ---------- */
const form=document.getElementById('contactForm'),status=document.getElementById('formStatus');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
  if(d.get('website'))return;
  const n=(d.get('name')||'').trim(),m=(d.get('email')||'').trim(),msg=(d.get('message')||'').trim();
  const valid=n&&msg&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
  [...form.elements].forEach(f=>f.setAttribute&&f.removeAttribute('aria-invalid'));
  if(!valid){['name','email','message'].forEach(k=>{const f=form.elements[k];if(!(k==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m):(d.get(k)||'').trim()))f.setAttribute('aria-invalid','true')});
    status.className='status err';status.textContent=MSG[lang].bad;form.querySelector('[aria-invalid]').focus();return}
  status.className='status ok';status.textContent=MSG[lang].ok;
  location.href='mailto:sales@ppu.co.id?subject='+encodeURIComponent('Website inquiry from '+n)+'&body='+encodeURIComponent(msg+'\n\n— '+n+' ('+m+')');
  form.reset()});
