const moneyBox = (coins) => {       //Este no recuerda el ámbito
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);


//Un closure debe tener una función dentro de otra y un ámbito léxico


const moneyBox = () => {        //Este sí lo recuerda
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);





function crearContador(){
    let contador = 0;

    return {
        incrementar: function() {
            contador += 1;
            return contador
        },
        decrementar: function(){
            contador -= 1;
            return contador;
        },
        obtenerValor: function(){
            return contador;
        }
    }
}

const contador1 = crearContador();
console.log(contador1.incrementar());
console.log(contador1.incrementar());
console.log(contador1.decrementar());
console.log(contador1.obtenerValor());

const contador2 = crearContador();
console.log(contador2.incrementar());
console.log(contador2.incrementar());
console.log(contador2.decrementar());
console.log(contador2.obtenerValor());