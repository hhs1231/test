const background = document.querySelector('.header');
var files = ["00", "01", "02", "03", "04", "05", "06" ,"07" ,"08" ,"09"] //遍历的文件全push进这个数组，方便后续操作（记住，push进去的是文件路径，后续需读取）
var i = 0;

window.onload = function(){
    changeBackGround();
}

function changeBackGround(){
    var bg = background.style.backgroundImage.slice(-6,-4);
    if(i == bg){
        i++;
        if(i >= files.length){
            i=0;
        }
    }
    background.style.background = "url(https://github.com/hhs1231/test/tree/master/img/background/" +files[i] + ".jpg) no-repeat 0 center";  
    window.setTimeout(changeBackGround, 1000)
}




