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
