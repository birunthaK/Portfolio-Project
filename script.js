const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const menuShow=document.querySelectorAll("#nav-links a");
hamburger.addEventListener('click', () => {
  
    hamburger.classList.toggle('open'); 
    navLinks.classList.toggle('active');
});
menuShow.forEach(link => {
  link.addEventListener("click", () => {
   navLinks.classList.remove("active");
     hamburger.classList.remove("open");
  });
});
