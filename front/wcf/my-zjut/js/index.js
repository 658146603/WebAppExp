let drawer = new mdui.Drawer('#drawer');
let $ = mdui.JQ;
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

    $('#footer-chip-location').on('click', function () {
        mdui.dialog({
            title: '导航到浙江工业大学',
            content: '你希望用什么地图软件导航',
            buttons: [
                {
                    text: '百度地图', onClick: function () {
                        window.location.href = "baidumap://map/direction?mode=driving&destination=name%3A%E6%B5%99%E6%B1%9F%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6(%E6%9C%9D%E6%99%96%E6%A0%A1%E5%8C%BA)%7Clatlng%3A30.295924%2C120.173455&src=webapp.car.carroutelistpg.drivenavibtn";
                    }
                },
                {
                    text: '高德地图', onClick: function () {
                        window.location.href = "androidamap://route?sourceApplication=mo&dlat=30.292937&dlon=120.165978&dname=%E6%B5%99%E6%B1%9F%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6%E6%9C%9D%E6%99%96%E6%A0%A1%E5%8C%BA&dev=0&m=0&t=2";
                    }
                },
                {
                    text: '系统选择', onClick: function () {
                        window.location.href = "geo:30.293774,120.162363?q=%E6%B5%99%E6%B1%9F%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6";
                    }
                }
            ]
        })
    })
}