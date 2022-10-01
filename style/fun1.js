    function Times() {
    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let result1 = date.getFullYear() + '-' + month + '-' + day+ '\t08:27';
    let result2 = date.getFullYear() + '-' + month + '-' + day + '\t23:34';
    let result3 = date.getFullYear() + '-' + month + '-' + day + '\t08:34';
    document.getElementById('settime1').innerText = result1;
    document.getElementById('settime2').innerText = result2;
    document.getElementById('settime3').innerText = result1;
    document.getElementById('settime4').innerText = result3;
}

function Name() {
    let list1 = ['李', '王', '张', '陈', '林', '黄']
    let list2 = ['晓', '鑫', '宇', '磬', '嗣', '凯']
    let myname = list1[Math.floor(Math.random() * list1.length)] + list2[Math.floor(Math.random() * list2.length)] + list2[Math.floor(Math.random() * list2.length)];
    document.getElementById('myname').innerText = myname;
}
Times()
Name()