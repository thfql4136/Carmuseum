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

/*
$(window).resize(function(){resizeYoutube();
});
  $(function(){resizeYoutube();
});
  function resizeYoutube(){ $("iframe").each(function(){ if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 1200 / 2000 ) + "px");} }); }
*/


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
		scale[i] = (1 - (Math.abs(i-3)*0.3)).toFixed(2);
		obj.css({"left":left});
		obj.find("img").css({"width":(100*scale[i])+"%"});
	}
	console.log(scale);
}
carInit();

function carAni() {
	for(var i=0; i<7; i++) {
		$(".car_img > li").eq(i).find("img").stop().animate({"width":(100*scale[i-1])+"%"}, 1000);
	}
	$(".car_box").stop().animate({"left":"-20%"}, 1000, function(){
		if(carNum == carEnd) carNum = 0;
		else carNum++;
		carInit();
		$(this).css({"left":0});
	});
}

interval = setInterval(carAni, 3000);

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
	$(".rim").stop().css({"left":"-=1px"});
}


/*
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
		
		// for(var i = 0; i<$(".fac_dec > li").length; i++){
		// 	$(".fac_dec >li").find(".wh_line").eq(i).show();
		// }
		$(".fac_img > li").hide().css({"animation-name":""});
		$(".fac_img").css({"left":0});
		$(".fac_img > li").eq(fNum).show().css({"left":"30%", "width":"50%", "top":"40%", "opacity":"1"});
		$(".fac_dec > li").eq(fNum).show();
		
		if(fNum == 0) {
			$(".fac_img > li").eq(fLen).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(1).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
		else if(fNum == fLen) {
			$(".fac_img > li").eq(1).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(fLen).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
		else {
			$(".fac_img > li").eq(fNum - 1).show().css({"left":"-17%", "width":"45%", "top":"44%","opacity":"0.4"});
			$(".fac_img > li").eq(fNum + 1).show().css({"left":"80%", "width":"45%", "top":"44%","opacity":"0.4"});
		}
	}
	$(".fac_left").click(function(){
		if(fNum == fLen) fNum = 0;
		else fNum++;
		fbanAni("-30%");
	});
	$(".fac_right").click(function(){
		if(fNum == 0) fNum = fLen;
		else fNum--;
		fbanAni("30%");
	});

	var container = document.getElementById('map');
	var options = {
		center: new daum.maps.LatLng(33.284181, 126.349815),
		level: 3
	};

	var map = new daum.maps.Map(container, options);

	*/
