var hello = 'Hello';    //Con var podemos declarar nuevamente una variable y se reasigna el nuevo valor;
var hello = 'Hello';    //Es una mala práctica


console.log(hello);

let world = 'Hello World';

const helloworld = 'Hello World';

console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

/* Malas prácticas
const helloworld = () => {
    globalVar = "I'm global";       //Si no tiene palabras reservadas var, let o const si establece como variable global
}

helloworld();
console.log(globalVar);


const anotherFunction = () => {
    var localVar = globalVar = "I'm Global";        //La doble asignación es una mala práctica
}

anotherFunction();
console.log(localVar);
*/