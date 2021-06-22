//El hoisting sucede cuando se compila nuestro código antes
//de ser interpretado por la computadora

//Sí funciona
a = 2;
var a;
console.log(a);

//No funciona porque no se está generando el valor, 
//si no se está intentando acceder a él
console.log(a);
var a = 2;

//JS solo utiliza el hoisting en declaraciones y no en las inicializaciones

nameOfDog('Elmo');      //Se llama a la función antes de declarar la función

function nameOfDog(name) {      //En compilación, esta función se eleva
    console.log(name);
}

