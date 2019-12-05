// 先把所有按键选择出来，，未必有用。。看来是真的没用
let btn_ac = document.querySelector('.ac');
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

let btn_mod = document.querySelector('.mod');
let btn_neg = document.querySelector('.negate');
// let btn_multiple = document.querySelector('.multiple');
// let btn_division = document.querySelector('.division');
// let btn_minus = document.querySelector('.minus');
// let btn_plus = document.querySelector('.plus');
// let btn_dot = document.querySelector('.dot');
let btn_equal = document.querySelector('.equal');

// .calculate-area单独列出来啦
let calculate_area = document.querySelector('.calculate-area');

//所有的数字按键，是一个数组！！！
let btn_num = document.getElementsByClassName('number');

//所有的操作符按键,没有mod和negate和=，但是包含加减乘除和dot，注意！！！
let btn_op = document.getElementsByClassName('operator')

let arr = [];

//按下AC实现清零
btn_ac.onclick = function () {
    calculate_area.innerHTML = '0';
    arr = [];
}

//数字显示部分
for (let i = 0; i <= 10; i++) {
    btn_num[i].onclick = function () {
        arr.push(btn_num[i].value);
        console.log(arr);
        calculate_area.innerHTML = arr.join('');
    }
}

//取反
btn_neg.onclick = function(){
    if(arr[0]==='-'){
        arr = arr.slice(1);
        calculate_area.innerHTML = arr.join('');
    }
    else{
        arr.unshift('-');
        calculate_area.innerHTML = arr.join('');
    }
}




