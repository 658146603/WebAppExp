let $ = jQuery;
let drawer = new mdui.Drawer('#drawer');
let news_tab = document.getElementById("news-tab");
let news_list_0 = document.getElementById("news-list-0");
let news_list_1 = document.getElementById("news-list-1");
let info_list_0 = document.getElementById("info-list-0");
let info_tab = document.getElementById("info-tab");
let info_list_1 = document.getElementById("info-list-1");
let info_list_2 = document.getElementById("info-list-2");
let banner_pic_index = 0;
let pic_news_index = 0;

const accent = '#ff4081';
const normal = '#fefefe';

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

    let little_dots = [
        document.getElementById('little-dot-0'),
        document.getElementById('little-dot-1'),
        document.getElementById('little-dot-2'),
        document.getElementById('little-dot-3'),
        document.getElementById('little-dot-4'),
        document.getElementById('little-dot-5'),
        document.getElementById('little-dot-6'),
        document.getElementById('little-dot-7')
    ];

    little_dots.forEach(function (dot, index) {
        dot.addEventListener('mouseover', function () {
            banner_pic_index = index;
            $('#news-banner').attr('src', newsPics[banner_pic_index % newsPics.length]);

            little_dots.forEach(function (dot, index) {
                if (index === banner_pic_index % newsPics.length) {
                    dot.style.backgroundColor = accent;
                } else {
                    dot.style.backgroundColor = normal;
                }
            });
        });
    });

    let pic_banner_timer = window.setInterval(function () {
        $('#news-banner').attr('src', newsPics[(++banner_pic_index) % newsPics.length]);
        little_dots.forEach(function (dot, index) {
            if (index === banner_pic_index % newsPics.length) {
                dot.style.backgroundColor = accent;
            } else {
                dot.style.backgroundColor = normal;
            }
        });
    }, 3000);

    let pic_news_list = [
        {
            picture: 'image/1588170411953002848.jpg',
            title: '春意正浓，学校2020年春季学期错峰开学',
            subtitle: '文 党委宣传部 王臻|图 袁九生 黄捷 沈欣媛 孙滢璐',
            content: '花香正浓，春意正旺。4月27日，我校迎来了2020年春季学期错峰开学的第一批返校学生。学校党政领导班子成员来到现场，亲切看望了返校复学的教师、同学以及现场的工作人员和志愿者。'
        },
        {
            picture: 'image/1589179113765069534.jpg',
            title: '我校与航天科技集团五院五〇八所、桐乡市人民政府签订三方战略合作协议',
            subtitle: '文 党委宣传部 徐小芸|图 李铮铮',
            content: '5月9日下午，中国航天科技集团有限公司第五研究院第五〇八所、桐乡市人民政府和我校战略合作协议云签约仪式在屏峰校区举行'
        },
        {
            picture: 'image/1587627065906001946.jpg',
            title: '我校开展学生开学返校演练',
            subtitle: '文 学生工作部 朱皆笑|图 人文学院 袁九生 程宸',
            content: '4月20日上午，学校在屏峰校区举行2020年春季学期学生开学返校演练。校长李小年，校党委副书记陈杰到场指导演练。'
        }
    ];

    let pic_news_banner = window.setInterval(function () {
        $('#pic_news_title').innerText = pic_news_list[pic_news_index % pic_news_list.length].title;
    })
}