//Requiere express
const express = require('express');
//Inicializa express
const app = express();
//Definición del puerto 8080 en una constante
const port = 8080;
//Definición de la frase en una constante
const frase = 'Hola mundo cómo están'



//Definicón de HOME

app.get("/", (req, res) => {
    res.send("Home page")
})

//URL que retorna la frase definida en la constante

app.get("/api/getFrase", (req, res) => {
    res.send(frase)
})

//Retorna la letra que corresponda según el número enviado

app.get("/api/getLetra/:num", (req, res) => {
    const num = req.params.num;
    if(num <= frase.length){
        res.send(frase[num - 1])
    }else{
        res.send('El valor ingresado está fuera de rango')
    }
    
})

//Retorna la palabra que corresponda según el número

app.get("/api/getPalabra/:num", (req, res) => {
    const num = req.params.num;
    palabras = frase.split(" ")
    if (num <= palabras.length) {
        res.send(palabras[num - 1])
    } else {
        res.send('El valor ingresado está fuera de rango')
    }

})



//Definimos el puerto a usar
app.listen(port, () => {
    console.log(`Puerto ${port} escuchando...`)
})