function clear(){
    document.getElementById('result').value = " "
}
function display(value){
    document.getElementById('result').value += value;
}
function solve(){
    var a= document.getElementById('result').value;
    var b = eval(a)
    document.getElementById('result').value = b
}