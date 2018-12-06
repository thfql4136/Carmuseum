function autoHeight(){
    $(".hei-wrap").imagesLoaded().done(heiCalc);
    $(window).resize(heiCalc);
    function heiCalc(){
        $(".hei-wrap").each(function(){
            $(this).height($(this).find(".hei-elem").height());
        });
    }
}
autoHeight();

  $(window).resize(function(){resizeYoutube();
});
  $(function(){resizeYoutube();
});
  function resizeYoutube(){ $("iframe").each(function(){ if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 1200 / 2000 ) + "px");} }); }



출처: http://sometimes-n.tistory.com/42 [종종 올리는 블로그]


$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	if(gap > 100) {
		if($("header").hasClass("dn_bg") == false) {
			$("header").css({"top":"-15%"}).addClass("dn_bg");
			$(".logo_tit").css({"color":"#c8c47b"});
			$(".mo_tit").css({"color":"#c8c47b"});
			$("header").stop().animate({"top":"0%"}, 500);
		}
	}
	else {
		$("header").css({"top":"-15%"}).removeClass("dn_bg");
		$(".logo_tit").css({"color":"#fbf8c7"});
		$(".mo_tit").css({"color":"#fbf8c7"});
		$("header").stop().animate({"top":"0%"}, 500);
	}
});

$(".fa-bars").click(function(){
	$(".navs_sub").stop().slideToggle(100);
});

$('.movie_bg').tubular({ 
    videoId: 'mAKsZ26SabQ',
	repeat:true
 });

 $(".museum").hover(function(){
	 $("ul",$(this)).slideDown();
 }, function(){
	$("ul",$(this)).slideUp();
 });

 var cNum = 0;	//현재의 index
 var cLen = $(".car_img > li").length - 1;	//마지막 index (예:5개라면 0,1,2,3,4 -> 4)
 var duration = 500;	//animate 속도
 //최초 한번 실행
 $(window).resize(function(){
	 //본 작업을 진행하는 이유는 absolute 되어 있는 객체의 높이를 계산하기 위해서..
	 $(".car_img").height($(".car_img > li").eq(cNum).height()+30);
 }).trigger("resize");

 carPos();
 $(".car_img > li").each(function(i){

	 carPos();
 });
 function carAni(val) {
	 $(".car_img").height($(".car_img > li").eq(cNum).height() +30);
	 $(".car_img > li").eq(cNum).css({"animation-name":"carAni", "animation-duration":duration*0.001+"s"});
	 $(".car_img").stop().animate({"left":val}, duration, fbanPos);
 }
 function carPos() {
	 $(".car_img > li").hide().css({"animation-name":""});
	 $(".car_img > li").eq(cNum).show().css({"left":"44%","opacity":"1"});
	 
	 if(cNum == 0) {
		$(".car_img > li").eq(cLen).show().css({"left":"10%"});
		$(".car_img > li").eq(1).show().css({"left":"70%"});
	 }
	 else if(cNum == cLen) {
		 $(".car_img > li").eq(cNum - 1).show().css({"left":"20%", "width":"45%"});
		 $(".car_img > li").eq(0).show().css({"left":"70%", "width":"45%"});
	 }
	 else {
		 $(".car_img > li").eq(cNum - 1).show().css({"left":"5%", "width":"45%"});
		 $(".car_img > li").eq(cNum + 1).show().css({"left":"90%", "width":"45%"});
		
	 }
 }
 $(".che_left").click(function(){
	 if(cNum == cLen) cNum = 0;
	 else cNum++;
	 carAni("100%");
 });
 $(".che_right").click(function(){
	 if(cNum == 0) cNum = cLen;
	 else cNum--;
	 carAni("-50%");
 });

 var fNum = 0;	//현재의 index
	var fLen = $(".fban > li").length - 1;	//마지막 index (예:5개라면 0,1,2,3,4 -> 4)
	var duration = 500;	//animate 속도
	//최초 한번 실행
	$(window).resize(function(){
		//본 작업을 진행하는 이유는 absolute 되어 있는 객체의 높이를 계산하기 위해서..
		$(".fac_img").height($(".fac_img > li").eq(fNum).height()+30);
	}).trigger("resize");

	fbanPos();
	$(".fac_img > li").each(function(i){
		fbanPos();
	});
	function fbanAni(val) {
		$(".fac_img").height($(".fac_img > li").eq(fNum).height() +30);
		$(".fac_img > li").eq(fNum).css({"animation-name":"fbanAni", "animation-duration":duration*0.001+"s"});
		$(".fac_img").stop().animate({"left":val}, duration, fbanPos);
	}
	function fbanPos() {
		var fac = $(".fac_dec > li").index();
		$(".fac_img > li").hide().css({"animation-name":""});
		$(".fac_img").css({"left":0});
		$(".fac_img > li").eq(fNum).show().css({"left":"30%", "width":"50%", "top":"40%", "opacity":"1"});
		$(".fac_dec > li").eq(fNum).show();
		
		if(fNum == 0) {
			$(".fac_img > li").eq(fLen).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(1).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
		else if(fNum == fLen) {
			$(".fac_img > li").eq(fNum - 1).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(0).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
		else {
			$(".fac_img > li").eq(fNum - 1).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(fNum + 1).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
	}
	$(".fac_left").click(function(){
		if(fNum == fLen) fNum = 0;
		else fNum++;
		fbanAni("30%");
	});
	$(".fac_right").click(function(){
		if(fNum == 0) fNum = fLen;
		else fNum--;
		fbanAni("-30%");
	});