               $(function(){     
					$(".ul1").mouseover(function(){//鼠标移入到文字 弹出框
						$(".yc").show();		
					});
					$(".lun").mouseout(function(){
					  $(".yc").hide();
					});
					$(".shouji").mouseover(function(){  //鼠标移入手机 弹出框
						$(".zhang").show(300);		
					});
					$(".shouji").mouseout(function(){
					  $(".zhang").hide();
					});
					$(".span2").mouseover(function(){  //鼠标移入个人信息 弹出框
					  $(".ge").show();
					});
					$(".ckxq").mouseover(function(){  //鼠标移入个人信息 弹出框
					  $(".ge").hide();
					});
				});