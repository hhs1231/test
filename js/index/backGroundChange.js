const headerbg = document.querySelector('.header');
var files = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg" ,"07.jpg" ,"08.jpg" ,"09.jpg"]
var i = 0;

window.onload = function(){
    changeBackGround();
}

function changeBackGround(){
    var bg = getComputedStyle(headerbg, "style").backgroundImage.slice(-8,-6);
    alert(bg)
    while(1){
        if(i==bg){
            break;
        }else if(i >= files.length){
            i=0;
        }else{
            i++;
        }
    }
    if(i == bg){
        i++;
        if(i >= files.length){
            i=0;
        }
    }
    alert(files[i]);
    background.style.background = "url(https://github.com/hhs1231/test/tree/master/img/background/" +files[i] + ") no-repeat 0 center";  
    window.setTimeout("changeBackGround()", 1000)
}




