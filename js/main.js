let collapse = document.getElementById("navbar-collapse");
let navbar = document.getElementById("navbar");

collapse.addEventListener("click", collapseNavBar);

function collapseNavBar() {

	let navbarContainer = document.getElementById("navbar-container");

	if (navbarContainer.style.height != "100%") {
		navbarContainer.style.height = "100%";
		navbar.style.height = "25%"
	}

	else {
		navbarContainer.style.height = "0";
		navbar.style.height = "10%"
		
	}
	
}

/**********************************************************************************************/

let body = document.getElementsByTagName("body")[0];

body.addEventListener("scroll", hideNavbar);

function hideNavbar() {
	if (body.scrollTop >= 500) {
		navbar.style.transform = "translateY(-300%)";
	}

	else {
		navbar.style.transform = "translateY(0)";
	}
}

/**********************************************************************************************/

let slider = document.getElementById("slider-items");

let sliderButton1 = document.getElementById("slider-button1"),
	sliderButton0 = document.getElementById("slider-button0"),
	sliderButton_1 = document.getElementById("slider-button-1");

sliderButton1.addEventListener("click", () => {
	slider.style.transform = "translateX(100%)";
	activeButton()
	

})

sliderButton0.addEventListener("click", () => {
	slider.style.transform = "translateX(0%)";
	activeButton()
})

sliderButton_1.addEventListener("click", () => {
	slider.style.transform = "translateX(-100%)";
	activeButton()
})

window.setInterval(sliderSlide, 8000)

function sliderSlide() {
	if(slider.style.transform == "" || slider.style.transform == "translateX(100%)") {
		slider.style.transform = "translateX(0%)";
		activeButton()
	}

	else if (slider.style.transform == "translateX(-100%)") {
		slider.style.transform = "translateX(100%)";
		activeButton()
	}

	else  {
		slider.style.transform = "translateX(-100%)";
		activeButton()
	}

}

function activeButton() {
	if (slider.style.transform == "translateX(100%)") {
		sliderButton1.style.backgroundColor = "#15ae88";
		sliderButton0.style.backgroundColor = "#073a2d";
		sliderButton_1.style.backgroundColor = "#073a2d";
	}

	else if (slider.style.transform == "translateX(0%)") {
		sliderButton1.style.backgroundColor = "#073a2d";
		sliderButton0.style.backgroundColor = "#15ae88";
		sliderButton_1.style.backgroundColor = "#073a2d";
	}

	else {
		sliderButton1.style.backgroundColor = "#073a2d";
		sliderButton0.style.backgroundColor = "#073a2d";
		sliderButton_1.style.backgroundColor = "#15ae88";
	}
}

/**********************************************************************************************/
let btt = document.getElementById("btt");

body.addEventListener("scroll", showbtt);

function showbtt() {
	if (body.scrollTop > 400) {
		btt.style.transform = "translateX(-20px)";
	}

	else if (body.scrollTop < 400) {
		btt.style.transform = "translateX(100px)";
	}
}

btt.addEventListener("click" , () => {
	var bttInterval = window.setInterval(()=> {
	if (body.scrollTop == 0) {
		clearInterval(bttInterval);
	}
	else {
		body.scrollTop = body.scrollTop - 100
	}
	},20);
})

