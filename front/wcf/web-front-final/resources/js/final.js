let drawer = new mdui.Drawer('#drawer');
let $ = mdui.JQ;
let news_tab = document.getElementById("news-tab");
let news_list_0 = document.getElementById("news-list-0");
let news_list_1 = document.getElementById("news-list-1");
let info_list_0 = document.getElementById("info-list-0");
let info_tab = document.getElementById("info-tab");
let info_list_1 = document.getElementById("info-list-1");
let info_list_2 = document.getElementById("info-list-2");

window.onload = function () {
    news_tab.addEventListener('change.mdui.tab', function (event) {
        if (event._detail.index === 0) {
            news_list_0.style.display = 'block';
            news_list_1.style.display = 'none';
        } else {
            news_list_0.style.display = 'none';
            news_list_1.style.display = 'block';
        }
    });
    info_tab.addEventListener('change.mdui.tab', function (event) {
        if (event._detail.index === 0) {
            info_list_0.style.display = 'block';
            info_list_1.style.display = 'none';
            info_list_2.style.display = 'none';
        } else if (event._detail.index === 1) {
            info_list_0.style.display = 'none';
            info_list_1.style.display = 'block';
            info_list_2.style.display = 'none';
        } else {
            info_list_0.style.display = 'none';
            info_list_1.style.display = 'none';
            info_list_2.style.display = 'block';
        }
    });
}

