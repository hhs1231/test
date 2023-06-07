//设备判断
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	var needHidden = document.querySelectorAll('[name = animation]');
	for(var nHidden of needHidden){
		nHidden.hidden = true;
	}
  	console.log("This is a mobile device");
} else {
	
	console.log("This is not a mobile device");
}

allOnClick();

function allOnClick(){
	document.querySelector('[name = home]').addEventListener('click', function(){
		window.location.href = 'index.html'
	}, false);//首页
	document.querySelector('[name = classify]').addEventListener('click', function(){
		window.location.href = 'classify.html'
	}, false);//分类
	document.querySelector('[name = pigeonhole]').addEventListener('click', function(){
		window.location.href = 'pigeonhole.html'
	}, false);//归档
	document.querySelector('[name = about]').addEventListener('click', function(){
		window.location.href = 'about.html'
	}, false);//关于
	document.querySelector('[name = read]').addEventListener('click', function(){
		window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
	}, false);//开始阅读
	document.querySelector('[name = github]').addEventListener('click', function(){
		window.location.href = 'https://github.com/hhs1231'
	}, false);//跳转github
}
