var ulCont = document.getElementById("ulContent");
var liPnl = document.getElementById("liPanel");
var liAltnv = document.getElementById("liAlternative");
liAltnv.innerHTML = liPnl.innerHTML; //将li所在div的innerHTML赋给下面的div
function charList() {
	if(liAltnv.offsetHeight - ulCont.scrollTop <= 0) //如果ul的scrollTop大于li列表的高度

		ulCont.scrollTop -= liPnl.offsetHeight; //ul的scrollTop减去li列表的高度
	else
		ulCont.scrollTop++; //ul元素的scrollTop递增
}
var charListIntvl = setInterval(charList, 100); //设置时间间隔事件，每100毫秒触发一次charList()事件
ulCont.onmouseover = function() {
	clearInterval
		(charListIntvl);
}; //鼠标进入的事件
ulCont.onmouseout = function() {
	charListIntvl =
		setInterval(charList, 100);
}; //鼠标离开的事件