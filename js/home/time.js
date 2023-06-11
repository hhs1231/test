//获取实时时间
getTime();

function getTime(){
    const now = new Date();
    const headerTime = document.querySelector('.header-time');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    headerTime.innerHTML = "当前时间：" + hour + ":" + minute + ":" + second;
    window.setTimeout(getTime, 100);
}