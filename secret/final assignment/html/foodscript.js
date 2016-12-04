var imgCount = 5;
var dir = 'images/foodbackground/';
var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
var images = new Array
	images[1] = "background1.jpg",
	images[2] = "background2.jpg",
    images[3] = "background3.jpg",
    images[4] = "background4.jpg",
    images[5] = "background5.jpg",

document.getElementById("top").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

document.getElementById("button").onclick=function()
{	
	var searched = document.getElementById('searchbar').value;
	if (searched == "pari puri"){
		window.location.href = "paripuri.html";
	}
	else if(searched == "pani puri"){
		window.location.href = "panipuri.html";
	}
	else{
		window.location.href = "sorry.html";
	}
}