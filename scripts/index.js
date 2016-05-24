/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-02 22:45:34
 * @version $Id$
 */
$(function(){
	$(".fg .acTitle").animate({
		top: '+=120px'
		/*param2: value2*/},
		700, function() {
			$(".fg .person1").css({opacity:'0.95'});
			$(".fg .person1").css({filter:'alpha(opacity=95)'});
			$(".fg .person1").css({'transform':'scale(1)'}),
			$(".fg .person1").css({'transition':'all 1.2s'});

			$(".fg .logo").css({opacity:'0.95'});
			$(".fg .logo").css({filter:'alpha(opacity=95)'});
			$(".fg .logo").css({'transform':'scale(1)'}),
			$(".fg .logo").css({'transition':'all 1.2s'});
	});
});

$(window).scroll(function() {
/*	console.log($(window).scrollTop());*/
	if($(window).scrollTop()>=200){
		$(".person2").animate({opacity:1,top:'65px'},'slow');
	};

	if($(window).scrollTop()>=450){
		$(".person3Box").animate({opacity:1,right:'-34px'},'slow',function(){
			$(".person3").animate({opacity:1},'slow');
		});
	}
});