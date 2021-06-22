/* const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'Kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
};

fruits(); */


/* let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x); */



const anotherFunction = () => {
    for (var i = 0; i < 5; i++ ){
        setTimeout(() => {
            console.log(i);
        }, 3000);
    }
};

anotherFunction();