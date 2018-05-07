//Условие
var  name = 'Денис';
if (name == 'Денис'){
    console.log('да');
} else {
    console.log('нет');
}

//Цикл for
for (var i=0; i<=3; i++){
    console.log(i)
}

// функции
function sum (a, b) {
    var result = a+b;
    return result;
}
console.log(sum(5, 6));
var result=sum(2,3);
console.log(result);

//Обсласть видимости + замыкание - способность искать по всему документу
var someVar=21;
var someOtherVar=14;

function summ(a, b) {
    var result= someVar + a + someOtherVar;
    return result;
}
var result= summ(4, 7);
console.log(result);

//Всплытие объявления переменных, так же работает с функциями и циклами
console.log(aa);
var aa
if (10>100){
    aa = 10;
}

//let - НЕ высплающий var, работает только внутри видимой области
if (10>1){
    let a = 10;
    console.log(a);
}//console.log(a);

// const – let, которые нельзя перезначить
const b =10; console.log(b);
//const b=200; console.log(b);
