const a = 10
const b = 5
const c = 15

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);    

if (a > b) {
    console.log (" a é maior que b")
} else {
    console.log (" b é maior que a")
}           

if ( a > b && a > c) {
    console.log( a, 'é o maior numero')
} else if ( b > a && b> c) {
    console.log ( b, 'é o maior numero')
} else {
    console.log ( c, 'é o maior numero')
}

if (a > 0) {
    console.log ('positive')
}else if (a < 0){
    console.log ('negativo')
}else {
    console.log ('zero')
}

const lado1 = 65;
const lado2 = 60;
const lado3 = 60;

let somaDosAngulos = lado1 + lado2 + lado3;

let todosAngulosPositivos = lado1 > 0 && lado2 > 0 && lado3 > 0;

if (todosAngulosPositivos) {
    if (somaDosAngulos === 180){
    console.log (true);
      }  else {
    console.log (false);
    }
} else {
    console.log ('invalido');
}

let pecaXadrez = 'torre';
switch (pecaXadrez){
    
    case 'bispo': console.log ('bispo -> diagonal');
    break;
    case 'rainha': console.log ('rainha -> diagonal, vertical, horizontal');
    break;
    case 'torre' :console.log ( 'torre -> horizontal e vertical');
    break;

        

}

    