$(function() {   /* 鼠标移入上升10px  离开下降10px回到原位 */
var v = 0; /*i表示当前图片的下标和当前b标签的下标（图片和圆点是对应关系）*/

 $(function(){   
    $(".ul3").eq(0).show().siblings().hide(); /*页面刚加载出来显示的是第一张图片*/
     $(".sanzuo1").hover(function(){      /*： 鼠标移入b的时候，，找到当前b的索引，改变当前显示的表格，使其变换成b对应的表格，*/
        v = $(this).index();
        go();
     }); 
 });
 	
function go(){
     $(".ul3").eq(v).fadeIn(300).siblings().stop(true, true).fadeOut(300); /*当前图片淡入，其他图片淡出*/
   
 }
	
				$(".lia").hover(function() {   /* 鼠标移入上升10px  离开下降10px回到原位 */
					
					$(this).animate({
						"top": "-10px"
					}, "slow");
				}, function() {
					$(this).animate({
						"top": "0px"
					}, "slow");
				});
				
				/* 第四部分 */
				$(".si-span-2").mousemove(function(){
				  $(".sidiv,.sidi").slideDown();  /* 当鼠标移入显示出来 */
				  });
				  $(".si-span-1,.si22,.si4,.si41,#siid").mouseout(function(){
				    $(".sidiv,.sidi").slideUp();  /* 当鼠标移出隐藏出来 */
				    });
					
			  $("#siid").mousemove(function(){
           $("#sitable").show();
			    });
			    $("#sitable,#siid").mouseout(function(){
			   $("#sitable").hide();
			    });
			 
			 
			});
			
			/* 第五部分 左边 */
			var w = 0; /*w表示当前表格的下标和当前b标签的下标（表格和b是对应关系）*/
			
			$(function(){  
			 $(".wuzuotable1").eq(0).show().siblings().hide();  /*页面刚加载出来显示的是第一张图片*/
			     $(".wuzuo-shang b").hover(function(){      /*： 鼠标移入b的时候，，找到当前b的索引，改变当前显示的表格，使其变换成b对应的表格，*/
			        w = $(this).index();
			        wu();
			     }); 
			 });
			function wu(){
			     $(".wuzuotable1").eq(w).fadeIn(300).siblings().stop(true, true).fadeOut(300); /*当前图片淡入，其他图片淡出*/
			 }
			 
			 
			/* 右边 */
			var f = 0;
            var shi;
            $(function(){
                $(".wuyoutable1").eq(0).show().siblings().hide();
                dsq();
                $(".wuyou-shang-2").hover(function(){
                    clearInterval(shi);
                    f = $(this).index();
                    huan();
                }, function(){
                    dsq();
                });
                $(".btnleft").click(function(){
                    f--;
                    if(f == -1){
                        f = 6;
                    }
                    huan();
                });
                $(".btnright").click(function(){
                    f++;
                    if(f == 7){
                        f = 0;
                    }
                    huan();
                });
            });
            function dsq(){
                shi = setInterval(function(){
                    f++;
                    if(f == 6){
                        f = 0;
                    }
                    huan();
                }, 3000);
            }
            function huan(){
                $(".wuyoutable1").eq(f).fadeIn(300).siblings().stop(true, true).fadeOut(300);
                $("wuyou-shang-2").eq(f).addClass("wuyou-shang-2").siblings().removeClass("wuyou-shang-2s");
            }
			
			/* 第六部分 */
		/* 	var g = 0;
			
			$(function(){
			    $(".liutable").eq(0).show().siblings();
			    
			   
			       
			        g = $(this).index();
			        huan(); */
			   
			  /*  $("#liubtnleft").click(function(){
			        g--;
			        if(g == -1){
			            g = 2;
			        }
			        huan();
			    });
			    $("#liubtnright").click(function(){
			        g++;
			        if(g == 3){
			            g = 0;
			        }
			        liu();
			    });
			});
			
			function liu(){
			    $(".wuyoutable1").eq(f).fadeIn(300).siblings().stop(true, true).fadeOut(300);
			    $("wuyou-shang-2").eq(f).addClass("wuyou-shang-2").siblings().removeClass("wuyou-shang-2s");
			} */
			
			      
		     /* 第八部分 */
		   	var z = 0; /*z表示当前span的下标和当前b标签的下标（表格和b是对应关系）*/
		  			
		  			$(function(){  
		  			 $(".baxia").eq(0).show().siblings().hide();  /*页面刚加载出来显示的是第一个span*/
		  			     $(".bashang-1").click(function(){      /*： 鼠标移入b的时候，，找到当前b的索引，改变当前显示的span，使其变换成b对应span，*/
		  			        z = $(this).index();
		  			        baba();
		  			     }); 
		  			 });
		  			function baba(){
		  			     $(".baxia").eq(z).fadeIn(300).siblings().stop(true, true).fadeOut(300); /*当前span淡入，其他span淡出*/
		  			 } 
		   
		  /* 第九部分 */
	
	$(function(){
	$(".jiuyou").mouseover(function(){
	
	$(this).animate({"top":"-10"});
	
	}).mouseout(function(){
	
	$(this).animate({"top":"0"});
	
	});
	});
	
	
	/* $(function(){
		$("#jiudi").mouseover(function(){$("#jiuzuidi").show();},function(){$("#jiuzuidi").hide();});
		
	}); */
	$(function(){
		$("#jiudi").mousemove(function(){
			$("#jiuzuidi").show();
		});
		$("#jiuzhong,.jiuyou").mousemove(function(){
			$("#jiuzuidi").hide();
		});
	});
	