function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado da soma: " + resultado;
}

function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = "Resultado da subtração: " + resultado;
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado da multiplicação: " + resultado;
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = "Resultado da divisão: " + resultado;
    } else {
        document.getElementById("resultado").innerHTML = "Erro: Divisão por zero.";
    }
}
