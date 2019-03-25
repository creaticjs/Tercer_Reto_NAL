function puntoQuinto() {
    var ano = document.getElementById("puntoQuinto").value;
    if (ano > 0 && (ano % 1 == 0)) {
        if (multiplo(ano, 4) && (!multiplo(ano, 100))) {

            resultadoQuinto.innerHTML = '<div class="alert alert-primary" role="alert"><h3>' + ano + ' es un Año Bisiesto<h3></div>';
        } else if (multiplo(ano, 100) && multiplo(ano, 400)) {
            resultadoQuinto.innerHTML = '<div class="alert alert-primary" role="alert"><h3>' + ano + ' es un Año Bisiesto<h3></div>';
        } else {
            resultadoQuinto.innerHTML = '<div class="alert alert-danger" role="alert"><h3>' + ano + ' no es un Año Bisiesto<h3></div>';
        }
    } else
        resultadoQuinto.innerHTML = '<div class="alert alert-danger" role="alert"><h3>El año debe ser positivo y entero<h3></div>';
}

function multiplo(num, mult) {
    var resto = num % mult;
    if (resto == 0) {
        return true;
    } else {
        return false;
    }
}