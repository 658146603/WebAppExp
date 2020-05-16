let $ = jQuery;
let drawer = new mdui.Drawer('#drawer');
let news_tab = document.getElementById("news-tab");
let news_list_0 = document.getElementById("news-list-0");
let news_list_1 = document.getElementById("news-list-1");
let info_list_0 = document.getElementById("info-list-0");
let info_tab = document.getElementById("info-tab");
let info_list_1 = document.getElementById("info-list-1");
let info_list_2 = document.getElementById("info-list-2");
let pic_banner_index = 0;
let pic_news_index = 0;
let pic_banner_flag = true;
let pic_news_flag = true;

const accent = '#ff4081';
const normal = '#fefefe';

const square_normal = 'rgba(255,255,255,0)';
const square_accent = 'rgba(255,64,129,1)';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = () => {
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

    let pic_banner_list = [
        "image/banner/20191119025726.jpg",
        "image/banner/20200206071934.jpg",
        "image/banner/20200305094918.jpg",
        "image/banner/20200330082141.jpg",
        "image/banner/20200402082628.jpg",
        "image/banner/20200408022457.jpg",
        "image/banner/20200410102256.jpg",
        "image/banner/20200415052132.jpg"
    ];

    let pic_news_list = [
        {
            picture: 'image/news/1588170411953002848.jpg',
            title: '春意正浓，学校2020年春季学期错峰开学',
            subtitle: '文 党委宣传部 王臻<br>图 袁九生 黄捷 沈欣媛 孙滢璐',
            content: '花香正浓，春意正旺。4月27日，我校迎来了2020年春季学期错峰开学的第一批返校学生'
        },
        {
            picture: 'image/news/1583997302671044478.jpg',
            title: '学校与德清县在莫干山校区开展植树活动',
            subtitle: '文  党委宣传部 文 徐小芸 <br>图 陈钊',
            content: '春和景明，水暖风煦，生机勃发。3月12日上午，学校与德清县在莫干山校区开展植树活动。'
        },
        {
            picture: 'image/news/1587627065906001946.jpg',
            title: '我校开展学生开学返校演练',
            subtitle: '文 学生工作部 朱皆笑<br>图 人文学院 袁九生 程宸',
            content: '4月20日上午，学校在屏峰校区举行2020年春季学期学生开学返校演练。'
        },
        {
            picture: 'image/news/1587343366734009840.jpg',
            title: '学校返校复学思政第一课在线开讲',
            subtitle: '文 党委宣传部 王臻<br>图 李铮铮',
            content: '4月18日下午，学校2020春季学期战疫·返校复学思政第一课在云端开讲'
        },
        {
            picture: 'image/news/1576032031984009328.jpg',
            title: '建筑工程学院举行建院40周年院庆系列活动',
            subtitle: '图 建筑工程学院<br>文 建筑工程学院',
            content: '近日，建筑工程学院建院四十周年院庆系列活动在屏峰举行，校党委书记蔡袁强出席活动'
        }
    ];

    let pic_banner_little_dots = [
        document.getElementById('little-dot-0'),
        document.getElementById('little-dot-1'),
        document.getElementById('little-dot-2'),
        document.getElementById('little-dot-3'),
        document.getElementById('little-dot-4'),
        document.getElementById('little-dot-5'),
        document.getElementById('little-dot-6'),
        document.getElementById('little-dot-7')
    ];

    let pic_news_little_dots = [
        document.getElementById('little-dot-1-0'),
        document.getElementById('little-dot-1-1'),
        document.getElementById('little-dot-1-2'),
        document.getElementById('little-dot-1-3'),
        document.getElementById('little-dot-1-4'),
    ];

    pic_banner_little_dots[0].style.backgroundColor = accent;
    pic_news_little_dots[0].style.backgroundColor = square_accent;

    let pic_banner_handler = () => {
        if (!pic_banner_flag) return;
        let banner = $('#news-banner');
        banner.attr('src', pic_banner_list[(++pic_banner_index) % pic_banner_list.length]);
        pic_banner_little_dots.forEach(function (dot, index) {
            if (index === pic_banner_index % pic_banner_list.length) {
                dot.style.backgroundColor = accent;
            } else {
                dot.style.backgroundColor = normal;
            }
        });
    }

    let pic_news_handler = () => {
        if (!pic_news_flag) return;
        $('#pic_news_picture').attr('src', pic_news_list[++pic_news_index % pic_news_list.length].picture);
        $('#pic_news_title').html(pic_news_list[pic_news_index % pic_news_list.length].title);
        $('#pic_news_subtitle').html(pic_news_list[pic_news_index % pic_news_list.length].subtitle);
        $('#pic_news_content').html(pic_news_list[pic_news_index % pic_news_list.length].content);
        pic_news_little_dots.forEach(function (dot, index) {
            if (index === pic_news_index % pic_news_list.length) {
                dot.style.backgroundColor = square_accent;
            } else {
                dot.style.backgroundColor = square_normal;
            }
        });
    }

    pic_banner_little_dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
            pic_banner_flag = false;
            console.log('mouse over');
            pic_banner_index = index;
            $('#news-banner').attr('src', pic_banner_list[pic_banner_index % pic_banner_list.length]);
            pic_banner_little_dots.forEach(function (dot, index) {
                if (index === pic_banner_index % pic_banner_list.length) {
                    dot.style.backgroundColor = accent;
                } else {
                    dot.style.backgroundColor = normal;
                }
            });
        });

        dot.addEventListener('mouseout', () => {
            pic_banner_flag = true;
            console.log('mouse out');
        });
    });

    pic_news_little_dots.forEach((dot, index) => {
        dot.addEventListener('mouseover', () => {
            pic_news_flag = false;
            console.log('mouse over');
            pic_news_index = index;
            $('#pic_news_picture').attr('src', pic_news_list[pic_news_index % pic_news_list.length].picture);
            $('#pic_news_title').html(pic_news_list[pic_news_index % pic_news_list.length].title);
            $('#pic_news_subtitle').html(pic_news_list[pic_news_index % pic_news_list.length].subtitle);
            $('#pic_news_content').html(pic_news_list[pic_news_index % pic_news_list.length].content);
            pic_news_little_dots.forEach(function (dot, index) {
                if (index === pic_news_index % pic_news_list.length) {
                    dot.style.backgroundColor = square_accent;
                } else {
                    dot.style.backgroundColor = square_normal;
                }
            });
        });
        dot.addEventListener('click', (event) => {
            event.stopPropagation();
        });
        dot.addEventListener('mouseout', () => {
            pic_news_flag = true;
            console.log('mouse out');
        });
    });

    let pic_banner_timer = window.setInterval(pic_banner_handler, 3000);
    let pic_news_timer = window.setInterval(pic_news_handler, 3000);
}