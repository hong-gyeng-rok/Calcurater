function add(char){
    var display = document.getElementById("displayJs");
    display.value = display.value + char;
}

function calcurater(){
    var display = document.getElementById("displayJs");
    var result = eval(display.value);
    document.getElementById("resultJs").value = result;
}

function reset(){
    document.getElementById("displayJs").value = ""
    document.getElementById("resetJs").value = ""
}