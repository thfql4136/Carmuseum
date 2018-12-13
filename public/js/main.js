function autoHeight(){
    $(".hei-wrap").imagesLoaded().done(heiCalc);
    $(window).resize(heiCalc);
}
autoHeight();

function heiCalc(){
	$(".hei-wrap").each(function(){
			$(this).height($(this).find(".hei-elem").height());
	});
	var banHei = 10000;
	$(".ban").each(function(){
		if($(this).height() < banHei){
			banHei = $(this).height();
		} 
	});
	$(".ban_wrap").height(banHei);
	//$(".tire_box").css({"top":$(".ban_wrap").height()+"px"});
}

var n4 = 0;
var interval4;
var depth = -1;
var interval4 = setInterval(slide4, 3000);
function slide4(){
  $(".ban").eq(n4).css({"display":"none", "z-index":depth++}).stop().fadeIn(1000, function(){
    if(n4 == 5) n4 = -1;
    n4++;
  });
}
function paging4(obj){ 
  n4 = $(obj).index(); 
   clearInterval(interval4); 
   slide4(); 
   interval4 = setInterval(slide4, 3000);
 }
 $(".ban_wrap").hover(function (){
clearInterval(interval4);
 }, function (){
   interval4 = setInterval(slide4, 3000);
 });
  

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

// $('.movie_bg').tubular({ 
//   videoId: 'mAKsZ26SabQ',
// 	repeat:true
//  });

 $(".museum").hover(function(){
	 $("ul",$(this)).slideDown();
 }, function(){
	$("ul",$(this)).slideUp();
 });

var obj = null;
var car = [];
var carTemp = [];
$(".car_img > li").each(function(i){
	car[i] = $(this).remove();
});
var carNum = 3; 
var carEnd = car.length - 1;
var scale = [];
var left = 0;
var interval = null;
var direction = -1;

function carInit() {
	$(".car_img").empty();
	carTemp[3] = carNum;
	for(var i=3; i>0; i--) {
		if(carTemp[i] - 1 >= 0) carTemp[i-1] = carTemp[i] - 1;
		else carTemp[i-1] = carEnd;
	}
	for(var i=3; i<6; i++) {
		if(carTemp[i] + 1 <= carEnd) carTemp[i+1] = carTemp[i] + 1;
		else carTemp[i+1] = 0;
	}
	for(var i=0; i<7; i++) {
		obj = car[carTemp[i]].clone().appendTo(".car_img");
		left = (i-3)*20+"%";
		if(direction == -1) scale[i] = (1 - (Math.abs(i-3)*0.3)).toFixed(2);
		else scale[i] = (1 - (Math.abs(i-3)*0.3)).toFixed(2);
		obj.css({"left":left});
		obj.find("img").css({"width":(100*scale[i])+"%"});
	}
	$(".car_img > li").eq(0).css({"text-align":"right"});
	$(".car_img > li").eq(1).css({"text-align":"right"});
	$(".car_img > li").eq(2).css({"text-align":"center"});
	$(".car_img > li").eq(3).css({"text-align":"center"});
	$(".car_img > li").eq(4).css({"text-align":"center"});
	$(".car_img > li").eq(5).css({"text-align":"left"});
	$(".car_img > li").eq(6).css({"text-align":"left"});
}
carInit();

function carAni() {
	for(var i=0; i<7; i++) {
		if(direction == -1) $(".car_img > li").eq(i).find("img").stop().animate({"width":(100*scale[i-1])+"%"}, 1000);
		else  $(".car_img > li").eq(i).find("img").stop().animate({"width":(100*scale[i+1])+"%"}, 1000);
	}
	$(".car_img > li").eq(0).css({"text-align":"right"});
	if(direction == -1) $(".car_img > li").eq(1).css({"text-align":"right"});
	else $(".car_img > li").eq(1).css({"text-align":"center"});
	if(direction == -1) $(".car_img > li").eq(2).css({"text-align":"right"});
	else  $(".car_img > li").eq(2).css({"text-align":"center"});
	$(".car_img > li").eq(3).css({"text-align":"center"});
	if(direction == -1) $(".car_img > li").eq(4).css({"text-align":"center"});
	else $(".car_img > li").eq(4).css({"text-align":"left"});
	if(direction == -1) $(".car_img > li").eq(5).css({"text-align":"center"});
	else $(".car_img > li").eq(5).css({"text-align":"center"});
	if(direction == -1) $(".car_img > li").eq(6).css({"text-align":"left"});
	else $(".car_img > li").eq(6).css({"text-align":"left"});
	$(".car_box").stop().animate({"left":(20*direction)+"%"}, 1000, function(){
		if(direction == 1) {
			if(carNum == 0) carNum = carEnd;
			else carNum--;
		}
		else {
			if(carNum == carEnd) carNum = 0;
			else carNum++;
		}
		carInit();
		$(this).css({"left":0});
	});
}

$(".che_left").click(function(){
	direction = -1;
	carAni();
});

$(".che_right").click(function(){
	direction = 1;
	carAni();
});

var mNum = 0;
var imgs = [];
var decTit = [];
var decCont = [];
imgs[0] = "../img/facility1.png";
imgs[1] = "../img/facility2.png";
imgs[2] = "../img/facility3.png";
imgs[3] = "../img/facility4.png";
imgs[4] = "../img/facility5.png";
decTit[0] = "전시관";
decTit[1] = "박물관";
decTit[2] = "전시관1";
decTit[3] = "전시관2";
decTit[4] = "전시관3";
decCont[0] = "박물관에 들어서는 순간, 로비관에서는 전설의 명차로 기억되는 'Benz300SL','Patent', 'Bayard'을 만날 수 있습니다.";
decCont[1] = "순간, 로비관에서는 전설의 명차로 기억되는 'Benz300SL','Patent', 'Bayard'을 만날 수 있습니다.";
decCont[2] = "박물관에 들어서는 순간, 로비관에서는 'Benz300SL','Patent', 'Bayard'을 만날 수 있습니다.";
decCont[3] = "박물관에 들어서는 순간, 로비관에서는 기억되는 'Benz300SL','Patent', 'Bayard'을 만날 수 있습니다.";
decCont[4] = "박물관에 들어서는 순간,  'Benz300SL','Patent', 'Bayard'을 만날 수 있습니다.";
var mEnd = imgs.length - 1;
var mPic = $(".fac_img > li").eq(1);
var pPic = $(".fac_img > li").eq(0);
var lPic = $(".fac_img > li").eq(2);

function mInit() {
	$("img", ".fac_img").addClass( "fac_img_show" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(this).removeClass( "fac_img_show" );
	});
	if(mNum == 0) {
		$("img", pPic).attr("src", imgs[mEnd]);
		$("img", mPic).attr("src", imgs[mNum]);
		$("img", lPic).attr("src", imgs[mNum+1]);
	}
	else if(mNum == mEnd) {
		$("img", pPic).attr("src", imgs[mNum-1]);
		$("img", mPic).attr("src", imgs[mNum]);
		$("img", lPic).attr("src", imgs[0]);
	}
	else {
		$("img", pPic).attr("src", imgs[mNum-1]);
		$("img", mPic).attr("src", imgs[mNum]);
		$("img", lPic).attr("src", imgs[mNum+1]);
	}
	$(".black_txt").children("h4").html(decTit[mNum]);
	$(".black_txt").children("p").html(decCont[mNum]);
}

$(".fac_left").click(function(){
	if(mNum == 0) mNum = mEnd;
	else mNum--;
	mInit();
});

$(".fac_right").click(function(){
	if(mNum == mEnd) mNum = 0;
	else mNum++;
	mInit();
});
mInit();

var rimInterval = setInterval(rimAni, 20);
function rimAni(){
	var wid = $(".rim").width()/2;
	var left = $(".rim").position().left;
	console.log(wid, left);
	if(wid + left <= 0) $(".rim").css({"left":0}); 
	$(".rim").stop().css({"left":"-=1px"});
}

var prdNum = 0;
/* $.ajax({
	url:"../json/prds.json",
	datatype:"json",
	type:"post",
	data:{id:0},
	success: function(data){
		console.log()
	},
	error: function(xhr, status, error){// 통신 상태, 지금 상태, 에러
		alert("통신이 원할하지않습니다. \n 잠시후 다시 시도해주세요.");
		console.log(xhr, status, error);
	}
}); */

$(".news_title > li").click(function(){ //이벤트 선언
	$(".news_cont").eq(prdNum).stop().animate({"top":"5%", "opacity":0}, 500 , function(){
		$(this).css({"display":"none"});
		
	});
 prdNum = $(this).index(); //클릭 된 애 값을 받아올꺼야, index는 값을 가져올때 사용
 $(".news_cont").eq(prdNum).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500 );
 $(".news_title > li").css({"color":"#999"});
$(".news_title div").css({"width":0});
$(this).css({"color":"#4b6054"});
$(this).children("div").css({"width":"100%"});
});

$(".news_title > li").hover(function(){//이벤트 선언
	if($(this).index() !=prdNum){ //현재 선택된 애는 제외 시킨다
		$(this).css({"color":"#4b6054"});
		$(this).children("div").stop().animate({"width":"100%"}, 100);
	}
},function(){
	if($(this).index() !=prdNum){
		$(this).css({"color":"#999"});
		$(this).children("div").stop().animate({"width":"0%"}, 100);
	}
});
$(".news_title > li").eq(0).trigger("click");





















	var container = document.getElementById('map');
	var options = {
		center: new daum.maps.LatLng(33.284181, 126.349815),
		level: 3
	};

	var map = new daum.maps.Map(container, options);

	
	$(function() {
		function swing() {
			$('.circle').animate({'top':'5px', 'opacity':'1'},1000).animate({'top':'20px', 'opacity':'0'},1000, swing);
		}
		swing();
	});

	