// JavaScript Document
$(document).ready(function () {
	
	$("div#main img.background").width($(window).width());
	$("div#main img.background").height($(window).height());
	$("div#button").css("backgroundPosition","left top");
	$("div#progress").hide();
	$("div#answer").hide();
	$('div#show').height($(window).height());
	$("div#show").hide();
	$("div#infoPanel").animate({opacity:0},0);
	
	$("div#button").click(function () {
		$("div#answer").hide(); 
		$(this).animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left 50%'})}).delay(500).
		animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left top'})}).delay(500).
		animate({opacity:1},0,function(){$(this).css({backgroundPosition: 'left bottom'})},0,showprogress());}
	);
		
	$("div#answer").click(function(){
			$('div#answer').fadeOut(300);
			$('div#answer').hide();
			
		
		$("img.background").attr("src","images/background.jpg");
		$("div#button").css({backgroundPosition: 'left top'});
		
			 });
			
			
			$("div#main div#info").hover(function(){$("div#infoPanel").animate({opacity:1},100);},function(){$("div#infoPanel").animate({opacity:0},100);});
			
			
			$("div#shareBlock a img").animate({opacity:0},0);
				});
			
			
			function showprogress(){$("div#progress").show(0).animate({opacity:0},0,function(){ }).delay(1200).animate({opacity:1},100,function(){$("img.background").attr("src","images/background-blur.jpg"); $("div#line").animate({width: '350px'},8000,function(){$("div#line").width("0px"); $("div#progress").hide(); $("div#answer").show();});});}
			
			
$(window).resize(function(){$("div#main img.background").width($(window).width()); $("div#main img.background").height($(window).height()); $('div#show').height($(window).height());});