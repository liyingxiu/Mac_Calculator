//清零按键
let btn_ac = document.querySelector('.ac');

//小数点按键
let btn_dot = document.querySelector('.dot');

//取反和百分数计算
let btn_mod = document.querySelector('.mod');
let btn_neg = document.querySelector('.negate');

//加减乘除以及等号
let btn_multiple = document.querySelector('.multiple');
let btn_division = document.querySelector('.division');
let btn_minus = document.querySelector('.minus');
let btn_plus = document.querySelector('.plus');
let btn_equal = document.querySelector('.equal');

// .calculate-area单独列出来
let calculate_area = document.querySelector('.calculate-area');

//所有的数字按键，是一个数组！！！
let btn_num = document.getElementsByClassName('number');

//所有的操作符按键,包含加减乘除和equal，没有用到，是一个数组
let btn_op = document.getElementsByClassName('operator');

//设置arr1保存所有的操作,arr1中存放的每一个元素都是数字或者运算符
let arr1 = [];

//计数dot出现的次数
let dot = 0;

//按下AC实现清零
btn_ac.onclick = function () {
    calculate_area.innerHTML = '0';
    arr1 = [];
    dot = 0;
}

//数字显示部分
for (let i = 0; i < 10; i++) {
    btn_num[i].onclick = function () {
        arr1.push(btn_num[i].innerText);
        console.log(arr1);
        calculate_area.innerHTML = arr1.join('');
    }
}

//不允许输入两次dot
btn_dot.onclick = function () {
    dot++;
    if (arr1[arr1.length - 1] === '.') {
        return arr1;
    }
    else if (dot > 1) {
        return arr1;
    }
    else {
        arr1.push(btn_dot.value);
        console.log(arr1);
        calculate_area.innerHTML = arr1.join('');
    }
}

//取反
btn_neg.onclick = function () {
    arr1[0] = arr1[0] * (-1);
    calculate_area.innerHTML = arr1[0];
    let temp = arr1[0];
    arr1 = [];
    arr1.push(temp);
    console.log(arr1);
}

//百分数化成小数
btn_mod.onclick = function () {
    let result = arr1.join('');
    result = result / 100;
    calculate_area.innerHTML = result;
    arr1 = [];
    arr1.push(result);
    console.log(arr1);
    result = result.toString();
    arr = result.split('');
}

//把加减乘除四个操作都记录到arr1中，四个运算符的操作是一样的
btn_plus.onclick = function () {
    if (eval(arr1[arr1.length - 1]) != /[1-9]/) {
        arr1.push(btn_plus.value);
    }
    calculate_area.innerHTML = '';
    arr = [];
    dot = 0;
}

btn_minus.onclick = function () {
    if (eval(arr1[arr1.length - 1]) != /[1-9]/) {
        arr1.push(btn_minus.value);
    }
    calculate_area.innerHTML = '';
    arr = [];
    dot = 0;
}

btn_multiple.onclick = function () {
    if (eval(arr1[arr1.length - 1]) != /[1-9]/) {
        arr1.push(btn_multiple.value);
    }
    calculate_area.innerHTML = '';
    arr = [];
    dot = 0;
}

btn_division.onclick = function () {
    if (eval(arr1[arr1.length - 1]) != /[1-9]/) {
        arr1.push(btn_division.value);
    }
    calculate_area.innerHTML = '';
    arr = [];
    dot = 0;
}

//按下等号
btn_equal.onclick = function () {
    let str = arr1.join('');
    calculate_area.innerHTML = eval(str);
    arr1 = [];
    arr1.push(eval(str));
    console.log(arr1);
    if (arr1.indexOf('=') > -1) {
        arr1.splice(num, 1);
    }
}