/*******Burger******/
const mainBg = document.querySelector(".main");
const menuItem =document.querySelectorAll(".menu__item");


document.querySelector('.burger').addEventListener('click', function(){
	mainBg.classList.toggle("main-bg");
	document.querySelector('.burger','.menu').classList.toggle('active');
	document.querySelector('.menu').classList.toggle("open");
 });


 