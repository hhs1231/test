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
