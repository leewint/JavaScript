//设置初始变量，setp为移动步长，delay延迟时间
var x = 50,
	y = 60; // x，y记录浮动广告的初始位置
var xin = true,
	yin = true; // xin和yin分别表示广告移动的方向，如果xin为真则表示向右运动，否则向左运动；yin为真向下运动，否则向上运动
var step = 1; // step表示移动的距离
var delay = 20; //delay表示移动的时间间隔，时间越短，移动的频率越高
//获取移动元素
var obj = document.getElementById("ad");
//漂浮广告函数
function floatAD() {
	var L = T = 0; //L左边界，T上边界
	var R = document.body.clientWidth - obj.offsetWidth; //层移动的右边界
	var B = document.body.clientHeight - obj.offsetHeight; //层移动的下边界
	obj.style.left = x + document.body.scrollLeft; //层移动后的右边界
	obj.style.top = y + document.body.scrollTop; //层移动后的上边界
	x = x + step * (xin ? 1 : -1) //判断水平方向
	if(x < L) {
		xin = true;
		x = L
	} //到达边界后的处理
	if(x > R) {
		xin = false;
		x = R
	}
	y = y + step * (yin ? 1 : -1)
	if(y < T) {
		yin = true;
		y = T
	}
	if(y > B) {
		yin = false;
		y = B
	}
}
//隐藏函数
function hidead() {
	document.getElementById("ad").style.display = "none";
}
//按照指定的周期（以毫秒计）来调用函数
var itl = setInterval("floatAD()", delay);
obj.onmouseover = function() {
	clearInterval(itl)
};
obj.onmouseout = function() {
	itl = setInterval("floatAD()", delay)
};