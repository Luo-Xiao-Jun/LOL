
 var i = 0; /*i表示当前图片的下标和当前b标签的下标（图片和圆点是对应关系）*/

 $(function(){   
     $("table").eq(0).show().siblings().hide();  /*页面刚加载出来显示的是第一张图片*/
     $("b").hover(function(){      /*： 鼠标移入b的时候，，找到当前b的索引，改变当前显示的表格，使其变换成b对应的表格，*/
        i = $(this).index();
        change();
     }); 
 });
 	
function change(){
     $("table").eq(i).fadeIn(300).siblings().stop(true, true).fadeOut(300); /*当前图片淡入，其他图片淡出*/
   
 }