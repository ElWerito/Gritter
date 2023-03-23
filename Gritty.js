let btnright = document.getElementById("btn-right");
let btnleft = document.getElementById("btn-left");

let degree = 0;

let right = 0;
btnright.onclick = function(){
    right ++;
    document.getElementById("grittycara").style.transform = 'rotate('+right+'deg)';
    degree= 0;
}

btnleft.onclick = function(){
    degree --;
    document.getElementById("grittycara").style.transform = 'rotate('+degree+'deg)';
    right= 0;   
}