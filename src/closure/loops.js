const anotherFunction = () => {
    for (let i = 0; i < 10; i++ ){      //Ten cuidado con poner la palabra reservada
        setTimeout(() => {              //var porque puede que no trabaje de la forma esperada
            console.log(i);
        }, 1000);
    }
};

anotherFunction();