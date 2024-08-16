const navmenu =document.querySelector(".navmenu");
const nav=document.querySelector(".nav");
  
navmenu.addEventListener("click",() =>{
	navmenu.classList.toggle("active");
	nav.classList.toggle("active");

})