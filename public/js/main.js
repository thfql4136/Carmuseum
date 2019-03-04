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


var SpaAni = (function(){
	function SpaAni(_page, _elem, _gap){  //생성자 만들기
		var obj = this;
	this.page = $(_page);
	this.elem = _elem;
	this.scTop = 0; //scroll이 변화한 값들은 여기에 넣어진다.
	this.pos = []; //페이지사이즈가 변화한 값들이 여기에 넣어진다.
	this.now = 0;
	this.gap = _gap;
	$(window).resize(function(){
		for(var i = 0; i<obj.page.length; i++){ //여기서는 this를 쓰면 안됨. 왜냐면 this는 window를 의미해주기 때문에 obj로 써야함
			obj.pos[i] = $(obj.page[i]).position().top;
		}
		//console.log(obj.pos); // 현재페이지가 위로부터 얼마나 떨어져 있는지에 대한 값
		
	}).trigger("resize");
	$(window).scroll(function(){ //스크롤을 할때마다 init을 실행해라
		obj.scTop = $(this).scrollTop();
		obj.init(obj);
		
	}).trigger("scroll");
	}
	SpaAni.prototype.init = function(obj){
		for(var i = 0; i<obj.page.length; i++){
			if(obj.scTop+obj.gap > obj.pos[i]) obj.now = i;
		}
		$(obj.page[obj.now]).find(obj.elem).each(function(){
		var cls = $(this).data("ani");
		$(this).addClass(cls);
		});
		console.log(obj.now);
	};
	return SpaAni;
}())

var pages = new SpaAni(".page", ".ani", 500);

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
var carTitle= [];
var carCont= [];
carTitle[0] = "Chrysler Windsor";
carTitle[1] = "Ford tourer ";
carTitle[2] = "MG TD";
carTitle[3] = "Bentley Mark 6";
carTitle[4] = "Lincoln Continental";
carCont[0] = "월터 크라이슬러의 첫 번째 자동차";
carCont[1] = "농민들에게 적합한 자동차";
carCont[2] = "미국인이 사랑한 스포츠카";
carCont[3] = "롤스로이스보다 많이 판매된 자동차";
carCont[4] = "미국 대통령의 전용차";


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
		$(".dec_tit").children("h3").html(carTitle[carNum]);
		$(".dec_tit").children("p").html(carCont[carNum]);
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

var Ajax = (function () { //ajax라는 객체를 만든다
	function Ajax(_file) { //통신이 일어나면 success가 일어나는 함수
		this.file = _file;
		this.data = {}; //내가 전달해준 데이터값으로 변한다
	}
	Ajax.prototype.addData = function (_data) {
		this.data = _data;

	}
	Ajax.prototype.send = function (_fn) {
		this.fn = _fn;
		$.ajax({
			url: this.file,
			type: "post",
			dataType: "json",
			data: this.data,
			success: this.fn,
			error: function (xhr, status, error) {
				alert("통신이 원활하지 않습니다.\n 잠시후 다시 시도해주세요.");
				console.log(xhr, status, error);
			}
		});
	}
	return Ajax;
}());

var prdNum = 0;

var prds = new Ajax("../json/prds.json");
	prds.send(resultFn);
	function resultFn(data){
		var html = '';
		var li;
		for(var i = 0; i<data.result.length; i++){
			html = '<ul class="prd_wrap clear hei-elem">';
			for(var j=0; j<data.result[i].data.length; j++){
				li = data.result[i].data[j];
				html += '<li class="prd">';
				html += '<div class="prd_img">';
				html += '<img src="'+li.img[0]+'" class="img">';
				html += '</div>';
				html += '<div class="prd_tit">'+li.title+'</div>';
				html += '<div class="prd_cate">'+li.cate+'</div>';
				html += '<div class="prd_hover">';
				html += '<div class="prd_img">';
				html += '<img src="'+li.img[1]+'" class="img prd_hover_img">';
				html += '</div>';
				html += '<ul>';
				html += '<li class="prd_tit">'+li.title+'</li>';
				html += '<li class="prd_cate">'+li.cate+'</li>';
				html += '<li class="prd_cont">';
				html += li.cont;
				html += '<div><i class="fa fa-ellipsis-h"></i></div>';
				html += '</li>';
				html += '</ul>';
				html += '</div>';
				html += '</li>';
		}
			html += '</ul>';
			$(".prd_out_wrap").append(html);
			autoHeight();
		}
		//생성완료된 후 이벤트 처리
		$(".prd_nav > li").click(function(){ //이벤트 선언
			$(".prd_wrap").eq(prdNum).stop().animate({"top":"5rem", "opacity":0}, 500 , function(){
				$(this).css({"display":"none"});
				
			});
		 prdNum = $(this).index(); //클릭 된 애 값을 받아올꺼야, index는 값을 가져올때 사용
		 $(".prd_wrap").eq(prdNum).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500 );
		 $(".prd_nav > li").css({"color":"#666"});
		$(".prd_nav div").css({"width":0});
		$(this).css({"color":"#222"});
		$(this).children("div").css({"width":"100%"});
		});
		
		$(".prd_nav > li").hover(function(){//이벤트 선언
			if($(this).index() !=prdNum){ //현재 선택된 애는 제외 시킨다
				$(this).css({"color":"#222"});
				$(this).children("div").stop().animate({"width":"100%"}, 100);
			}
		},function(){
			if($(this).index() !=prdNum){
				$(this).css({"color":"#666"});
				$(this).children("div").stop().animate({"width":"0%"}, 100);
			}
		});
		$(".prd_nav > li").eq(0).trigger("click");//이벤트 실행, eq는 나의 순서를 달라고 할때 사용
		
		
		
		$(".prd").hover(function(){
			$(this).children(".prd_hover").stop().fadeIn(300);
			$(this).find(".prd_compare").find("div").stop().animate({"top":"-43px"},300);
			if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight){ //실제 높이 = scrollHeight, 주어진 높이 =offsetHeight
				//$(".prd_cont")[0] >이부분은 html을 의미한다
				 //overflow가 발생한 상태
				 console.log("overflow");
				 $(this).find(".prd_cont").children("div").stop().animate({"bottom":0}, 200);
				 $(this).find(".prd_cont").children("div").click(function(){
					 $(this).parent().css({"height":"auto"});
					 $(this).hide(0);
				 });
			}
			$(this).find(".prd_detail").children("ul").hover(function(){
				$(this).children(":first-child").stop().animate({"margin-top":"-38px"}, 200);
			}, function(){
				$(this).children(":first-child").stop().animate({"margin-top":0}, 200);
			});
		
			},function(){
				$(this).children(".prd_hover").stop().fadeOut(300);
				$(this).find(".prd_compare").find("div").stop().animate({"top":0},300);
				if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight){ //실제 높이 = scrollHeight, 주어진 높이 =offsetHeight
					//$(".prd_cont")[0] >이부분은 html을 의미한다
					 //overflow가 발생한 상태
					 console.log("overflow");
					 $(this).find(".prd_cont").children("div").stop().animate({"bottom":"-20px"}, 200);
				}
			});
			$(".prd_hover_img").hover(function(){
				$(this).stop().animate({"opacity":1}, 200).css({"animation-name":"prdImg"});
			}, function(){
				$(this).stop().animate({"opacity":0}, 200).css({"animation-name":"prdImgBack"});
			});
			
	}

// $(".ne_img img").hover(function(){
// 	$(this).stop().animate({"opacity":1}, 200).css({"animation-name":"prdImg"});
// }, function(){
// 	$(this).stop().animate({"opacity":1}, 200).css({"animation-name":"prdImgBack"});
// });


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

