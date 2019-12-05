// 先把所有按键选择出来，，未必有用。。
let btn_ac = document.querySelector('.ac');
let btn_0 = document.querySelector('.zero');
let btn_1 = document.querySelector('.one');
let btn_2 = document.querySelector('.two');
let btn_3 = document.querySelector('.three');
let btn_4 = document.querySelector('.four');
let btn_5 = document.querySelector('.five');
let btn_6 = document.querySelector('.six');
let btn_7 = document.querySelector('.seven');
let btn_8 = document.querySelector('.eight');
let btn_9 = document.querySelector('.nine');
let btn_mod = document.querySelector('.mod');
let btn_multiple = document.querySelector('.multiple');
let btn_division = document.querySelector('.division');
let btn_minus = document.querySelector('.minus');
let btn_plus = document.querySelector('.plus');
let btn_dot = document.querySelector('.dot');
let btn_equal = document.querySelector('.equal');

// .calculate-area单独列出来啦
let calculate_area = document.querySelector('.calculate-area');

//按下AC实现清零
btn_ac.onclick = function(){
    calculate_area.innerHTML = '0';
}