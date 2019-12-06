//获取所有的按键
let btn = document.querySelector('button')

//清零按键
let btn_ac = document.querySelector('.ac');

//0-9按键和dot按键，calss都是number
// let btn_0 = document.querySelector('.zero');
// let btn_1 = document.querySelector('.one');
// let btn_2 = document.querySelector('.two');
// let btn_3 = document.querySelector('.three');
// let btn_4 = document.querySelector('.four');
// let btn_5 = document.querySelector('.five');
// let btn_6 = document.querySelector('.six');
// let btn_7 = document.querySelector('.seven');
// let btn_8 = document.querySelector('.eight');
// let btn_9 = document.querySelector('.nine');
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

// .calculate-area单独列出来啦
let calculate_area = document.querySelector('.calculate-area');

//所有的数字按键，是一个数组！！！
let btn_num = document.getElementsByClassName('number');

//所有的操作符按键,包含加减乘除和equal，不一定要用，是一个数组
let btn_op = document.getElementsByClassName('operator');

//初始化一个arr，全局变量
let arr = [];

//设置arr1保存所有的操作,arr1中存放的每一个元素都是数字或者运算符
let arr1 = [];

//按下AC实现清零
btn_ac.onclick = function () {
    calculate_area.innerHTML = '0';
    arr = [];
    arr1 = [];
}

//数字显示部分
for (let i = 0; i <= 10; i++) {
    btn_num[i].onclick = function () {
        arr.push(btn_num[i].value);
        arr1.push(btn_num[i].value);
        console.log(arr1);
        calculate_area.innerHTML = arr.join('');
    }
}

//取反
btn_neg.onclick = function () {
    if (arr1[arr1.length-1][0] === '-') {
        arr = arr.slice(1);
        calculate_area.innerHTML = arr.join('');
    }
    else {
        arr.unshift('-');
        calculate_area.innerHTML = arr.join('');
    }
    arr1.push(arr.join(''));
    console.log(arr1);
}

//百分数化成小数
btn_mod.onclick = function () {
    let result = arr1[arr1.length-1];
    result = eval(result);
    result = result / 100;
    calculate_area.innerHTML = result;
    arr1.push(result);
    console.log(arr1);
    result = result.toString();
    arr = result.split('');
}

//把加减乘除四个操作都记录到arr1中
btn_plus.onclick = function(){
    arr1.push(btn_plus.value);
    calculate_area.innerHTML = '';
    arr = [];
}

btn_minus.onclick = function(){
    arr1.push(btn_minus.value);
    calculate_area.innerHTML = '';
    arr = [];
}

btn_multiple.onclick = function(){
    arr1.push(btn_multiple.value);
    calculate_area.innerHTML = '';
    arr = [];
}

btn_division.onclick = function(){
    arr1.push(btn_division.value);
    calculate_area.innerHTML = '';
    arr = [];
}

btn_equal.onclick = function(){
    let str = arr1.join('');
    calculate_area.innerHTML = eval(str);
    arr1.push(str);
    console.log(arr1);
}






