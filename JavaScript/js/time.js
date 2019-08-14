var today = new Date();
var day = new Array("日", "一", "二", "三", "四", "五", "六");
var tday = today.getDay(); //返回0-6可作为数组day下标值
date.innerHTML= "今天是" + (today.getFullYear()) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日<br>星期" + day[tday];
var hr = today.getHours();
if(hr >= 23 || (hr >= 0 && hr < 6)) {
	warn.innerHTML="午夜时分，赶快休息吧！";
}
if(hr >= 6 && hr < 12) {
	warn.innerHTML="上午好，祝有愉快的一天！";
}
if(hr >= 12 && hr < 14) {
	warn.innerHTML="午饭时间，要填饱肚子！";
}
if(hr >= 14 && hr < 18) {
	warn.innerHTML="下午好,保持住工作的热情！";
}
if(hr >= 18 && hr < 23) {
	warn.innerHTML="晚上好，晚餐吃得满意吗？";
}