function nav_dialog() {
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
}