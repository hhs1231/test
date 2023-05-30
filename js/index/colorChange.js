//定时更改颜色滤罩
const background = document.querySelector(".backGround");
var color = "00ffff";
window.onload=function(){ 
    changeColor();
}
//颜色变化函数
function changeColor(){
    //产生rgb的值
    var rgb=color;
    while(1){
        if(color == rgb){
            var r=Math.floor(Math.random()*255);
            var g=Math.floor(Math.random()*255);
            var b=Math.floor(Math.random()*255);
            rgb=r.toString(16)+g.toString(16)+b.toString(16); 
        }else{
            color=rgb;
            break;
        }
    }
    //toString(radix) 把数字转化为radix（取值范围2~36）进制值表示的字符串
    background.style.background="#"+rgb;
    window.setTimeout("changeColor()",10000);
    
    //setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
}
