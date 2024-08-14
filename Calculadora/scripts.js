const display = document.getElementById("resultado")
console.log(display)

function inserirdisplay(valor){
    display.value+=valor
}
function limpardisplay(){
    display.value=""
}
function calcular(){
    display.value = eval(display.value)
}