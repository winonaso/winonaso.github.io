function scrollTo(potato, to, duration){
	if (duration<= 0) return;

	if (potato == "top"){
		element = document.body;
	}
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function backtotop(){
	scrollTo("top", 0, 600);
}

function poscheck(){
	var doc = document.documentElement;
	var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	var topbutton = document.getElementById("backtotoparrow");
	if (top>282){
		topbutton.style.opacity = 1;
	}
	else {
		topbutton.style.opacity= 0;
	}
}