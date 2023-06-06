//博客首页菜单栏渐出动画
// animationM();

// function animationM(){
    const playground = document.querySelector('.playground');
    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.list-item');
    const aMap =new Map();
    // updateMap(aMap, list, items, playground);
    // updateStyles(aMap);
    // window.addEventListener('scroll',function(){
    //     return updateStyles(aMap);
    // });
    updateMap();
    updateStyles();
    window.addEventListener('scroll', updateStyles);
// }
    
function updateStyles(){
	const scroll = window.scrollY;
	for(let [dom,value] of aMap){
		for(const cssProp in value){
			dom.style[cssProp]= value[cssProp](scroll);
		}
	}
}

function updateMap(){
	aMap.clear();
	const playGroundRect = playground.getBoundingClientRect();//获取容器位置以及几何信息
	const aStart = playGroundRect.top + window.screenY;//触顶
	const aEnd = playGroundRect.bottom + window.screenY - window.innerHeight;//触底
	for(const item of items){
		aMap.set(item,auxiliaryUM(aStart, aEnd, item));
	}
}

function auxiliaryUM(aStart, aEnd, dom){
    aStart = aStart;
    const tcw = notChange(aStart, aEnd, 0, 1);
    const tc = function(scroll){return notChange(aStart, aEnd, 0, 1)(scroll);}
    const xlcw = notChange(aStart, aEnd, list.clientWidth/2 - dom.offsetLeft - dom.clientWidth/2, 0);
    const ylcw = notChange(aStart, aEnd, list.clientHeight/2 - dom.offsetTop - dom.clientHeight/2, 0);
    const slcw = notChange(aStart, aEnd, 0.5, 1);
    const lc = function(scroll){ 
        return `translate(${xlcw(scroll)}px, ${ylcw(scroll)}px) scale(${slcw(scroll)})`;
    };
    return {
        tc, lc
    };
}

function notChange(aStart, aEnd, vStart, vEnd){
    return function(scroll){
        if(scroll <= aStart){
            return vStart;
        }else if(scroll >= aEnd){
            return vEnd;
        }
        return vStart + (vEnd - vStart)*(scroll - aStart)/(aEnd - aStart);
    }
}
