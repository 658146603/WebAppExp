window.onload = function () {
    document.getElementById("name").focus();
    document.getElementById("contact").onsubmit = function () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("dzyj").value;
        let tel = document.getElementById("telephone").value;
        let company = document.getElementById("company").value;
        let _age = document.getElementById("age");
        let _sex = document.getElementsByName("sex");
        let _interest = document.getElementsByName("interest");
        let sex, age, interest = "";
        for (let i = 0; i < _sex.length; i++) {
            if (_sex.item(i).checked) {
                sex = _sex.item(i).value;
            }
        }
        for (let i = 0; i < _age.options.length; i++) {
            if (_age.options[i].selected) {
                age = _age.options[i].firstChild.nodeValue;
            }
        }

        for (let i = 0; i < _interest.length; i++) {
            if (_interest.item(i).checked) {
                interest += `${_interest.item(i).value} `;
            }
        }

        document.getElementById("message").style.visibility = "visible";
        document.getElementById("submitmessage").innerHTML = `<strong>姓名：${name}<br>性别：${sex}<br>年龄范围：${age}<br>爱好：${interest}<br>电子邮件：${email}<br>固定电话：${tel}<br>公司：${company}</strong>`;
        return false;
    }
}