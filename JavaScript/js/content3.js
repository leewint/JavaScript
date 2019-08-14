$(function(){
  $('.today_nav li').mouseover(function(){
	if(this.className == 'on') {
	   return false;
	  }
	$('.today_nav li').removeClass('on');
	$(this).addClass('on');	
	$('.today_main ul').hide();
	$('.today_main ul').eq($('.today_nav li').index($(this))).show();	
  });
});