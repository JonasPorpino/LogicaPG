function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("v1").innerHTML = num1+' <- [ Variável 1 ]';
    document.getElementById("v2").innerHTML = num2+' <- [ Variável 2 ]';
    document.getElementById("v3").innerHTML = resultado+' <- [ Variável Resultado] ';
}

function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("v1").innerHTML = num1+' <- [ Variável 1 ]';
    document.getElementById("v2").innerHTML = num2+' <- [ Variável 2 ]';
    document.getElementById("v3").innerHTML = resultado+' <- [ Variável Resultado] ';
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("v1").innerHTML = num1+' <- [ Variável 1 ]';
    document.getElementById("v2").innerHTML = num2+' <- [ Variável 2 ]';
    document.getElementById("v3").innerHTML = resultado+' <- [ Variável Resultado] ';
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("v1").innerHTML = num1+' <- [ Variável 1 ]';
    document.getElementById("v2").innerHTML = num2+' <- [ Variável 2 ]';
    document.getElementById("v3").innerHTML = resultado+' <- [ Variável Resultado] ';
    } else {
        document.getElementById("resultado").innerHTML = "Erro: Divisão por zero.";
    }
}