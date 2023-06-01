//修改座右铭
changeMo();

function changeMo(){
    const motto = document.querySelector('[name = header-motto]');
    var allMotto = ["Everything has its time and that time must be watched", "万物皆有时，时来不可失"]
    var i = 0;
    var j = 0;
    var aORd = "add";
    changeMotto(i, j, aORd, motto, allMotto);
}

function changeMotto(i, j, aORd, motto, allMotto){
    if(aORd == "add"){
        motto.innerHTML += allMotto[i].charAt(j++);
        var time = setTimeout(
            function(){
                changeMotto(i, j, aORd, motto, allMotto);
            }, 
            80
        );
    }else if(aORd == "dec"){
        motto.innerHTML = motto.innerText.slice(0,j--);
        var time = setTimeout(
            function(){
                changeMotto(i, j, aORd, motto, allMotto);
            }, 
            80
        );
    }
    if(j < 0 || j >= allMotto[i].length){
        clearTime(time);
        if( j<0 ){
            aORd = "add";
            i++;
            j = 0;
            if(i >= allMotto.length){
                i=0;
            }
        }else if(j >= allMotto[i].length){
            aORd = "dec";
        }
        window.setTimeout(
            function(){
                changeMotto(i, j, aORd, motto, allMotto);
            }, 
            1000
        );
    }
}

function clearTime(time){
    clearTimeout(time);
}

function changeStr(){
    i++;
    if(i >= allMotto.length){
        i = 0;
    }
}

