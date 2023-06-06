//钉钉官网特效
const items = document.querySelectorAll('.list-item');
const playGround = document.querySelector('.playground');
const list = document.querySelector('.list');

function createAnimation(scrollStart/*页面起始位置*/,scrollEnd,valueStart/*图标起始位置*/,valueEnd){//主要函数，判断当前位置
	return function(scroll){
		console.log(scroll+"<"+scrollEnd+"<"+scrollStart)
		if(scroll<scrollStart){
			return valueStart;
		}
		if(scroll>=scrollEnd){
			return valueEnd;
		}
		return ((valueEnd-valueStart)*((scroll-scrollStart)/(scrollEnd-scrollStart)))
			+valueStart;
	}
}

//节点以及对应的样式属性
const animationMap = new Map();

//辅助方法，生成每个节点应该更新的属性
function getDomAnimation(scrollStart,scrollEnd,dom){
	scrollStart=scrollStart//+dom.dataset.order*600;
	const opacityAnimation = createAnimation(scrollStart,scrollEnd,1,1);//透明度变化
	const opacity = function(scroll){
		return createAnimation(scrollStart,scrollEnd,0,1)(scroll);
	}
	
	const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1);//大小调节
	
	const xAnimation = createAnimation(scrollStart, scrollEnd, list.clientWidth/2 - dom.offsetLeft - dom.clientWidth/2, 0);//宽度调节
			
	const yAnimation = createAnimation(scrollStart, scrollEnd, list.clientHeight/2 - dom.offsetTop - dom.clientHeight/2, 0);//高度调节
	
	const transform = function(scroll){
		return `translate(${xAnimation(scroll)}px, ${yAnimation(scroll)}px) scale(${scaleAnimation(scroll)})`;
	}
	
	return {
		opacity, 
		transform
	};
}

//填充animationMap
function updateMap(){
	animationMap.clear()
	const playGroundRect = playGround.getBoundingClientRect();//获取容器位置以及几何信息
	const scrollStart = playGroundRect.top + window.screenY;//触顶
	const scrollEnd = playGroundRect.bottom + window.screenY - window.innerHeight;//触底
	for(const item of items){
		animationMap.set(item,getDomAnimation(scrollStart,scrollEnd,item));
	}
}

//更新样式属性
function updateStyles(){
	const scroll = window.scrollY;
	for(let [dom,value] of animationMap){
		for(const cssProp in value){
			dom.style[cssProp]= value[cssProp](scroll);
		}
	}
}

updateMap()
updateStyles()

window.addEventListener('scroll',updateStyles);

