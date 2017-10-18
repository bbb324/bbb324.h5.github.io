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
					    $(".p3 .p3_2").css({"animation" : "word 1s", "opacity" : "1"})
					    typing("p3_2", p3_str1)
					}, 1000);
    				setInterval(function() {
					    $(".p3 .p3_3").css({"animation" : "word 1s", "opacity" : "1"})
					}, 2000);
					setInterval(function(){
						typing("p3_3", p3_str2)
					}, 3000)
					setInterval(function() {
					    $(".p3 .p3_4").css({"animation" : "word 1s", "opacity" : "1"})
					}, 4000);
					setInterval(function(){
						typing("p3_4", p3_str3)
					}, 5000)
					setInterval(function() {
					    $(".p3 .p3_6").css({"animation" : "word 1s", "opacity" : "1"})
					}, 6000);
					setInterval(function() {
					    $(".p3 .p3_5").css({"animation" : "word 1s", "opacity" : "1"})
					}, 7000);
    				break;
    			case 4:
    				$(".p5 .portrait").css({"animation" : "portrait_p5 1s", "left" : "425px"})
    				$(".p5 .p5_1").css({"animation" : "word 1s", "opacity" : "1"})
    				setInterval(function(){
    					$(".p5 .p5_2").css({"animation" : "word 1s", "opacity" : "1"})
    				}, 1000)
    				break;
    			case 5:
    				$(".p6 .p6_1").css({"animation" : "word 1s", "opacity" : "1"})
    				setInterval(function(){
    					$(".p6 .p6_3").css({"animation" : "word 1s", "opacity" : "1"})
    				}, 1000)
    				break;
    			case 6:
					$(".p7 .p7_1").css({"animation" : "word 1s", "opacity" : "1"})
	    			setInterval(function() {
					    $(".p7 .p7_2").css({"animation" : "word 1s", "opacity" : "1"})
					    typing("p7_2", p7_str1)
					}, 1000);
    				setInterval(function() {
					    $(".p7 .p7_3").css({"animation" : "word 1s", "opacity" : "1"})
					}, 2000);
					setInterval(function(){
						typing("p7_3", p7_str2)
					}, 3000)
					setInterval(function() {
					    $(".p7 .p7_4").css({"animation" : "word 1s", "opacity" : "1"})
					}, 4000);
					setInterval(function(){
						typing("p7_4", p7_str3)
					}, 5000)
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

    $(".p6_3").click(function(){
    	$(".p6 .p6_2").css({"animation" : "word 1s", "opacity" : "1"})
    })    
});

var p3_str1 = 'Gavin:</br>请问您有什么财富目标？'
var p3_str2 = "林先生:</br>我希望在我女儿18岁生日的时候</br>能够为她提供留学资金。"
var p3_str3 = "Gavin:</br>了解，根据您的需求，请看pad上</br>我为您度身定做的资产配置规划。"

var p7_str1 = "Julie:</br>顺利抵达美国，花旗账户</br>已经开好啦～"
var p7_str2 = "林先生:</br>好的宝贝。我刚刚把生活费</br>打到你账上了。遇到什么问</br>题随时和我或你妈妈说。"
var p7_str3 = "Julie:</br>转账收到！谢谢爸爸！"

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