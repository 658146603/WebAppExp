let $ = jQuery;
let drawer = new mdui.Drawer('#drawer');
let news_tab = document.getElementById("news-tab");
let news_list_0 = document.getElementById("news-list-0");
let news_list_1 = document.getElementById("news-list-1");
let info_list_0 = document.getElementById("info-list-0");
let info_tab = document.getElementById("info-tab");
let info_list_1 = document.getElementById("info-list-1");
let info_list_2 = document.getElementById("info-list-2");
let pic_index = 0;

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

    let newsPics = [
        "image/banner/20191119025726.jpg",
        "image/banner/20200206071934.jpg",
        "image/banner/20200305094918.jpg",
        "image/banner/20200330082141.jpg",
        "image/banner/20200402082628.jpg",
        "image/banner/20200408022457.jpg",
        "image/banner/20200410102256.jpg",
        "image/banner/20200415052132.jpg"
    ];

    let bannerTimer = window.setInterval(function () {
        $('#news-banner').attr('src', newsPics[(++pic_index) % newsPics.length])
    }, 3000);
}