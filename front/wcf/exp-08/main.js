window.onload = function () {
    let date = new Date();
    let day;
    switch (date.getDay()) {
        case 0:
            day = "星期日";
            break;
        case 1:
            day = "星期一";
            break;
        case 2:
            day = "星期二";
            break;
        case 3:
            day = "星期三";
            break;
        case 4:
            day = "星期四";
            break;
        case 5:
            day = "星期五";
            break;
        case 6:
            day = "星期六";
            break;
    }
    let month = date.getMonth() + 1;
    document.getElementById("displaydate").innerHTML = `<span>${date.getFullYear()}年${month}月${date.getDate()}日${day}</span>`;
    let iTimerId = window.setInterval("showtime()", 1000);
    document.getElementById("a1").onmouseover = function () {
        document.getElementById("badimg").src = "images/banner1.webp";
    }

    document.getElementById("a2").onmouseover = function () {
        document.getElementById("badimg").src = "images/banner2.webp";
    }

    document.getElementById("a3").onmouseover = function () {
        document.getElementById("badimg").src = "images/banner3.jpg";
    }

    document.getElementById("a4").onmouseover = function () {
        document.getElementById("badimg").src = "images/banner4.webp";
    }
}

function showtime() {
    let date = new Date();
    let iTimerId;
    let sTime = "";
    if (date.getHours() < 10) {
        sTime += `0${date.getHours()}:`;
    } else {
        sTime += `${date.getHours()}:`;
    }
    if (date.getMinutes() < 10) {
        sTime += `0${date.getMinutes()}:`;
    } else {
        sTime += `${date.getMinutes()}:`;
    }
    if (date.getSeconds() < 10) {
        sTime += `0${date.getSeconds()}`;
    } else {
        sTime += `${date.getSeconds()}`;
    }
    document.getElementById("displaytime").innerHTML = `<span>${sTime}</span>`;
}