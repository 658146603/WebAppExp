let $ = jQuery;

let color = {
    normal: '#fefefe',
    accent: '#535353',
    border: '#535353',
    transparent: 'rgba(255,255,255,0)'
}

let headlines_news = [
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

let headlines_news_dot = [
    document.getElementById('headlines_index_dot_1'),
    document.getElementById('headlines_index_dot_2'),
    document.getElementById('headlines_index_dot_3'),
    document.getElementById('headlines_index_dot_4'),
    document.getElementById('headlines_index_dot_5')
];

function set_headlines_selected_news(target) {
    target = target % headlines_news_dot.length;
    headlines_news_dot.forEach((item, index) => {
        if (target === index) {
            item.style.backgroundColor = color.accent;
            item.style.color = color.normal;
        } else {
            item.style.backgroundColor = color.transparent;
            item.style.color = color.accent;
        }
    });
    $('#headlines_news_picture').attr('src', headlines_news[target].picture)
    $('#headlines_news_title').html(headlines_news[target].title)
    $('#headlines_news_subtitle').html(headlines_news[target].subtitle)
    $('#headlines_news_content').html(headlines_news[target].content)
}

let home_or_menu = false;

function toggle_button() {

}

window.onload = () => {
    set_headlines_selected_news(0);
    headlines_news_dot.forEach((item, index) => {
        item.addEventListener('click', () => {
            set_headlines_selected_news(index);
        })
    });
}
