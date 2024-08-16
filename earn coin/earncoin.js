const hamburger =document.querySelector(".hamburger");
const navmanu1=document.querySelector(".navmanu1");
  
hamburger.addEventListener("click",() =>{
	hamburger.classList.toggle("active");
	navmanu1.classList.toggle("active");

})