var age = 17
var answer = document.getElementById('pergjigja')

if (age >= 18){
    answer.innerHTML='Ti ke te drejt vote'
}
else{
    answer.innerHTML='Ti ske te drejt vote '
}


var input = document.getElementById('input')
var buton = document.getElementById('btn_id')
var answer = document.getElementById('pergjigjja')


buton.onclick = function(){
if (input.value > 10) {
    answer.innerHTML='value is greater than 10'
}
else if(input.value <10) {
    answer.innerHTML='value is lower tha 10'
}
else{
    answer.innerHTML='value is equal to 10'
}
}