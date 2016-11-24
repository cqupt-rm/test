window.onload=function(){
	var area = document.getElementById('moocBox');
 var con1 = document.getElementById('con1');
 var con2 = document.getElementById('con2');
 var speed = 50;
 area.scrollTop = 0;
 con2.innerHTML = con1.innerHTML;


 var myScroll = setInterval("scrollUp()",speed);
area.onmouseover = function(){
	 clearInterval(myScroll);
	}
area.onmouseout = function(){
	 myScroll = setInterval("scrollUp()",speed);
	}
}
// 有名函数必须放在onload外面
function scrollUp(){
	var area = document.getElementById('moocBox');
 var con1 = document.getElementById('con1');
	if (area.scrollTop>=con1.scrollHeight) {
		area.scrollTop=0;

	}
	else{
		area.scrollTop++;
	}
}


