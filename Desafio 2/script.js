
/*
Desafio 2-Digitalers

Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/

var form = document.getElementById('form')
var contr = document.getElementById('passw')

function validacionContra() {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        var passValue = contr.value;

        var result = /(?=\w*[A-Z])(?=\w*[a-z])\S{12,25}/;

        if (result.test(passValue)) {
            console.log("La contraseña es correcta")
        } else {
            console.log("La contraseña no es correcta")
        }
    })
}
validacionContra()
