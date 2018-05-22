var isOpen = false;
$('.nav-button').click(function(){
	if(!isOpen){
		$(this).siblings("ul").show();

	}else{
		$(this).siblings("ul").hide();
	}
	isOpen = !isOpen
})
$('.headerNav>ul').find("a").click(function(){
	$(this).addClass("active").parent().siblings('li').children('a').removeClass('active')
})
// 核心团队介绍
// $('.peopleList li').click(function(){
// 	alert(222)
// })
$('.peopleList li').hover(function(){
	if(document.documentElement.clientWidth>970){
		$(this).addClass("on");	
		return false;
	}
	$(this).css('borderColor','#E78338');
	$(this).children('.tro').css('top','0')
	$(this).children('.picture').css(
		{
			height:'100%'
		}
	)
},function(){
	if(document.documentElement.clientWidth>970){
		$(this).removeClass("on");
		return false;
	}
	$(this).css('borderColor','transparent')
	$(this).children('.tro').css('top','-7rem');
	$(this).children('.picture').css(
		{
			height:'5rem'
		}
	)
})

//底部合作伙伴
$('.hp-con li').hover(function(){
	$(this).children('.mb').hide();
},function(){
	$(this).children('.mb').show();
})
if(document.documentElement.clientWidth<=970){
	$('.history_L').hide();
	$('.history_R').hide();
}

$(window).scroll(function(){
	var msg = $(".history-img");
	var iteml = $(".history_L");
	var items = $(".history_R");
	var windowHeight = $(window).height();
	var Scroll = $(document).scrollTop();
	if((msg.offset().top - Scroll -windowHeight)<=0){
		msg.fadeIn(1500);
	}
	if(document.documentElement.clientWidth>970){
		for(var i=0;i<iteml.length;i++){
			if(($(iteml[i]).offset().top - Scroll - windowHeight)<= -100){
				$(iteml[i]).animate({marginRight:'0px'},'50','swing');	
			}
		}
		for(var i=0;i<items.length;i++){
			if(($(items[i]).offset().top - Scroll - windowHeight)<= -100){
				$(items[i]).animate({marginLeft:'0px'},'50','swing');
			}
		}
	}else{
		
		for(var i=0;i<iteml.length;i++){
			if(($(iteml[i]).offset().top - Scroll - windowHeight)<= -100){
				$(iteml[i]).fadeIn(50);
				$(iteml[i]).animate({marginRight:'0px'},'50','swing');	
			}
		}
		for(var i=0;i<items.length;i++){
			if(($(items[i]).offset().top - Scroll - windowHeight)<= -100){
				$(items[i]).fadeIn(50);
				$(items[i]).animate({marginLeft:'0px'},'50','swing');
			}
		}
	}
})
