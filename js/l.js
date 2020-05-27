 var l = 0;
 var timere;
 $(function() {
 	$(".a1").eq(0).show().siblings().hide();
 	kais();
 	$("a").hover(function() {
 		clearInterval(timere);
 		l = $(this).index();
 		dong();
 	}, function() {
 		kais();
 	});
 
 });
 
 function kais() {
 	timere = setInterval(function() {
 		l++;
 		if (l == 5) {
 			l = 0;
 		}
 		dong();
 	}, 2400);
 }
 
 function dong() {
 	$(".a1").eq(l).fadeIn(300).siblings().stop(true, true).fadeOut(300);
 	$("a").eq(l).addClass("current1").siblings().removeClass("current1");
 }