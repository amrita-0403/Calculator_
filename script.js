let dis = document.getElementById("dis");

function append(value){
dis.value += value;
}

function clearDisplay(){
dis.value = "";
}

function backspace(){
dis.value = display.value.slice(0,-1);
}

function calculate(){
dis.value = eval(dis.value);
}