//所有图片初始化
init();

function init(){
    welcome();
    //overflow();
    imgInit();
}

function welcome(){
    const text = '欢迎来到hhs1231的博客';
    const letters = text.split('');
    const container = document.querySelector('.init');
    while(document.querySelectorAll('.welcome').length == 0){
        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];
            const letterElement = createLetterElement(letter);
            letterElement.style.setProperty("--delay", `${i*200}ms`);
            letterElement.style.color = 
            container.appendChild(letterElement);
        }
    }
    window.setTimeout(welcome, 3000);
}

function createLetterElement(letter) {
    const letterElement = document.createElement('span');
    letterElement.innerText = letter;
    letterElement.classList.add('welcome');
    return letterElement;
}

function overflow(){ 
// 禁止整个页面的滚动
document.body.style.overflow = 'hidden';

// 禁止某个元素的滚动
document.querySelector('.element-selector').addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
}

function imgInit(){
    // 监听页面加载完成的事件
window.onload = function() {
    // 定义一个图片列表
    const images = [
      'allIcon/首页.png',
      'allIcon/其他.png',
      'allIcon/关于我.png',
      'allIcon/技术服务.png',
      'allIcon/彩色-向下.png',
      'allIcon/github.png',
      'background/0.jpg',
      'background/1.jpg',
      'background/2.jpg',
      'background/3.jpg',
      'background/4.jpg',
      'background/5.jpg',
      'background/6.jpg',
      'background/7.jpg',
      'background/8.jpg',
      'background/9.jpg',
      'background/10.jpg',
      'background/11.jpg',
      'background/12.jpg',
      'background/13.jpg',
      'background/14.jpg',
      'mousePointer/normal.cur'
      // 这里继续添加所有需要加载的图片
    ];
  
    // 定义一个计数器，用来记录已经加载的图片数量
    let loadedImages = 0;
  
    // 遍历图片列表，逐个使用Image对象来加载图片
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = './img/' + images[i];
      img.onload = function() {
        // 每当一张图片加载完成，计数器就加1
        loadedImages++;
        //alert(i)
        // 如果所有图片都加载完成了，就执行其他需要初始化的操作
        if (loadedImages === images.length) {
            window.location.href = './html/home.html'
          // 在这里执行其他初始化操作
        }
      };
    }
  };
}