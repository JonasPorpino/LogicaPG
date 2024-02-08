function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result = document.getElementById("result");
    result.innerHTML = "";

    if (num1 > num2) {
        result.innerHTML += num1 + " é maior que " + num2 + "<br>";
    } else if (num1 < num2) {
        result.innerHTML += num1 + " é menor que " + num2 + "<br>";
    } else {
        result.innerHTML += num1 + " é igual a " + num2 + "<br>";
    }

    if (num1 !== num2) {
        result.innerHTML += num1 + " é diferente de " + num2;
    }
}