const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

//No podemos disponer de la variable saveName fuera de la función
//DEBEMOS utilizar los métodos propios de ella para acceder a esa variable

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Oscar");
console.log(newPerson.getName());