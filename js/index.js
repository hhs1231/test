const items = document.querySelectorAll('.list-item');
const playGround = document.querySelector('.playground');
const list = document.querySelector('.list');

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  console.log("This is a mobile device");
  alert("手机");
} else {
  console.log("This is not a mobile device");
  alert("电脑");
}

function createAnimation(scrollStart,scrollEnd,valueStart,valueEnd){//主要函数，判断当前位置
	return function(scroll){
		if(scroll<scrollStart){
			return valueStart
		}
		if(scroll>=scrollEnd){
			return valueEnd
		}
		return ((valueEnd-valueStart)*((scroll-scrollStart)/(scrollEnd-scrollStart)))
			+valueStart
	}
}

//节点以及对应的样式属性
const animationMap = new Map()

//辅助方法，生成每个节点应该更新的属性
function getDomAnimation(scrollStart,scrollEnd,dom){
	scrollStart=scrollStart+dom.dataset.order*300
	const opacityAnimation = createAnimation(scrollStart,scrollEnd,0,1)
	const opacity = function(scroll){
		return opacityAnimation(scroll)
	}
	
	const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1)
	
	const xAnimation = createAnimation(scrollStart, scrollEnd, list.clientWidth/2 - dom.offsetLeft - dom.clientWidth/2, 0)
			
	const yAnimation = createAnimation(scrollStart, scrollEnd, list.clientHeight/2 - dom.offsetTop - dom.clientHeight/2, 0)
	
	const transform = function(scroll){
		return `translate(${xAnimation(scroll)}px, ${yAnimation(scroll)}px) scale(${scaleAnimation(scroll)})`
	}
	
	return {
		opacity, 
		transform
	}
}

//填充animationMap
function updateMap(){
	animationMap.clear()
	const playGroundRect = playGround.getBoundingClientRect()//获取容器位置以及几何信息
	const scrollStart = playGroundRect.top + window.screenY//触顶
	const scrollEnd = playGroundRect.bottom + window.screenY - window.innerHeight//触底
	for(const item of items){
		animationMap.set(item,getDomAnimation(scrollStart,scrollEnd,item))
	}
}

//更新样式属性
function updateStyles(){
	const scroll = window.scrollY;
	for(let [dom,value] of animationMap){
		for(const cssProp in value){
			dom.style[cssProp]= value[cssProp](scroll)
		}
	}
}

updateMap()
updateStyles()

window.addEventListener('scroll',updateStyles)