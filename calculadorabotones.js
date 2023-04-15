var string = '';
function calculadora(dato){
    string = string + dato;
    document.getElementById('calculo').innerHTML = string;
}

function resultado(){
    document.getElementById('calculo').innerHTML = eval(string); //eval toma los números como números y lo demás como string
}

function remove(){
    string = string.slice(0, -1);
    document.getElementById('calculo').innerHTML = string;
}

function borradoTotal(){
    string = string.slice(0, 0,);
    document.getElementById('calculo').innerHTML = string;
}