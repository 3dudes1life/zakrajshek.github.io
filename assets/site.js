
const menuButton=document.querySelector(".menu-button"),mobileMenu=document.querySelector(".mobile-menu");
const closeMenu=()=>{if(!mobileMenu||!menuButton)return;mobileMenu.classList.remove("open");menuButton.setAttribute("aria-expanded","false");document.body.style.overflow=""};
if(menuButton&&mobileMenu){menuButton.addEventListener("click",()=>{const open=!mobileMenu.classList.contains("open");mobileMenu.classList.toggle("open",open);menuButton.setAttribute("aria-expanded",String(open));document.body.style.overflow=open?"hidden":""});mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));}
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));}else{document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));}

if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('/service-worker.js').catch(()=>{}));
document.querySelectorAll('a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');
