var speed = 20;
var tab = document.getElementById("marqueeImg");
var tab1 = document.getElementById("marqueeImg1");
var tab2 = document.getElementById("marqueeImg2");
tab2.innerHTML = tab1.innerHTML;

function Marquee() {
	if(tab2.offsetWidth - tab.scrollLeft <= 0)
		tab.scrollLeft -= tab1.offsetWidth
	else {
		tab.scrollLeft++;
	}
}
var MyMar = setInterval(Marquee, speed);
tab.onmouseover = function() {
	clearInterval(MyMar)
};
tab.onmouseout = function() {
	MyMar = setInterval(Marquee, speed)
};