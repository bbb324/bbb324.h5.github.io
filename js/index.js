$(function(){
    $('#fullpage').fullpage({
    	afterLoad: function(anchorLink, index){
    		switch(index){
    			case 2:
    				$(".p2 .p2_word").css({"animation" : "word 1s", "opacity" : "1"})
    				break;
    			case 3:
    				$(".p3 .portrait").css({"animation" : "portrait 1s", "left" : "263px"})
					$(".p3 .p3_1").css({"animation" : "word 1s", "opacity" : "1"})
	    			setInterval(function() {
					    $(".p3 .p3_2_bg").css({"animation" : "word 1s", "opacity" : "1"})
					    typing("p3_2", p3_str1)
					}, 1000);
    				setInterval(function() {
					    $(".p3 .p3_3_bg").css({"animation" : "word 1s", "opacity" : "1"})
					}, 2000);
					setInterval(function(){
						typing("p3_3", p3_str2)
					}, 3000)
					setInterval(function() {
					    $(".p3 .p3_4_bg").css({"animation" : "word 1s", "opacity" : "1"})
					}, 3000);
					setInterval(function(){
						typing("p3_4", p3_str3)
					}, 5000)
					setInterval(function() {
					    $(".p3 .p3_6").css({"animation" : "word 1s", "opacity" : "1"})
					}, 5000);
					setInterval(function() {
					    $(".p3 .p3_5").css({"animation" : "word 1s", "opacity" : "1"})
					}, 6000);
    				break;

    		}
    	}
    });

    $(".p3_5").click(function(){
    	$(".p4").css("display", "block")
    });

    $(".p4_exit").click(function(){
    	$(".p4").css("display", "none")
    })
});

var p3_str1 = 'Gavin:</br>��������ʲô�Ƹ�Ŀ�ꣿ'
var p3_str2 = "��ϣ������Ů��18���ʱ��</br>�ܹ�Ϊ���ṩ��ѧ�ʽ�"
var p3_str3 = "Gavin:</br>�˽⣬�������������뿴pad��</br>��Ϊ�����������ʲ����ù滮��"
var i = 0;  

function typing(divname, str){
	// alert(div + str)
    var div = document.getElementById(divname);  
    if (i <=  str.length) {  
        div.innerHTML = str.slice(0, i++) + '_';  
        // setTimeout("typing()", 200);//递归调用 
        setTimeout(function(){
        	typing(divname, str)
        }, 100)
    }  
    else{  
        div.innerHTML = str;//结束打字,移除 _ 光标  
    }  
}

