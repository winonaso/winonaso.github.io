var imgCount = 6;
var dir = 'images/background/';
var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
var images = new Array
	images[1] = "background1.jpg",
	images[2] = "background2.jpg",
    images[3] = "background3.jpg",
    images[4] = "background4.jpg",
    images[5] = "background5.jpg",
    images[6] = "background6.jpg",

document.getElementById("top").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

