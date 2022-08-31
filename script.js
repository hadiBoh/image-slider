//vraibles
const slider = document.querySelector(".slider");
let images = Array.from(document.querySelectorAll(".img"));
const dotsContainer = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
var sliderId;
//config
const sliderCount = images.length; // how many images in slider
var currentImageIndex = 0; //starting image
var time = 5000; //slider moving time

function addDots(sliderCount){
	for (let index = 0; index < sliderCount; index++) {
		var dot = document.createElement("div");
		dot.classList.add("dot");
		dot.classList.add(index);
		dotsContainer.appendChild(dot);
	}
}addDots(sliderCount);
let alldots = Array.from(document.querySelectorAll(".dot"));

//next btn click
nextBtn.addEventListener("click",nextAction);
//prev btn click
prevBtn.addEventListener("click",prevAction);

function nextAction(){
	clearInterval(sliderId); // when clicked timer start from the begining prevent rapid image slide
	currentImageIndex ++;
	if (currentImageIndex == images.length) {//when goes 1 more than images count by ++ make it 0 to jump to the first image
		currentImageIndex = 0;
	}	
	images.forEach(img=>{
		img.classList.remove("active");
	})
	images[currentImageIndex].classList.add("active");
	sliderId = setInterval(autonextAction,time);
	dotsBackground();
}

function prevAction(){
	clearInterval(sliderId);// when clicked timer start from the begining prevent rapid image slide
	currentImageIndex --;
	if (currentImageIndex == -1) { //when goes 1 below zero (first image index) by -- make it 2 to jump to the last image
		currentImageIndex = images.length-1;
	}	
	images.forEach(img=>{
		img.classList.remove("active");
	})
	images[currentImageIndex].classList.add("active");
	sliderId = setInterval(autonextAction,time);
	dotsBackground();
}

function autonextAction(){
	currentImageIndex ++;
	if (currentImageIndex == images.length) {//when goes 1 more than images count by ++ make it 0 to jump to the first image
		currentImageIndex = 0;
	}	
	images.forEach(img=>{
		img.classList.remove("active");
	})
	images[currentImageIndex].classList.add("active");	
	dotsBackground();
}

sliderId = setInterval(autonextAction,time);

//dots background shift
alldots[currentImageIndex].style.background = "rgb(28, 91, 218)";
function dotsBackground(){
	alldots.forEach(dot=>{
		dot.style.background = "#fff";
	})
	alldots[currentImageIndex].style.background = "rgb(28, 91, 218)";
}
//dots click handle
alldots.forEach(dot=>{
	dot.addEventListener("click",()=>{
		currentImageIndex = parseInt(dot.classList[1]);
		clearInterval(sliderId);// when clicked timer start from the begining prevent rapid image slide
		sliderId=null;
		images.forEach(img=>{
			img.classList.remove("active");
		})
		images[currentImageIndex].classList.add("active");
		sliderId = setInterval(autonextAction,time);
		dotsBackground();		
	})
})