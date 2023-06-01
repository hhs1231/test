//修改背景图片
changeBg();

function changeBg(){
    const headerbg = document.querySelector('.header');
    var files = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg" ,"07.jpg" ,"08.jpg" ,"09.jpg"]
    var i = 0;
    changeBackGround(headerbg, files, i);
}

function changeBackGround(headerbg, files, i){
    var bg = headerbg.style.backgroundImage.slice(-8,-6);
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
    headerbg.style.backgroundImage = "url(./img/background/" +files[i] + ")";  
    window.setTimeout(
        function(){
            changeBackGround(headerbg, files, i);
        }, 
        7200000
    );
}




