//Типы данных и переменные
var myName = 'Денис';
console.log(myName);
var myName = 'Коля';
console.log(myName);

//Условный оператор i
var numb;
if (1 > 1) {
    numb = 'Условие верно';
} else {
    numb = 'Условие ложно';
}
console.log(numb);

//Циклический оператор for:
for (var i = 20; i >= 10; i--) {
    console.log(i)
}

//Функции
function sum(p1, p2, p3) {
    var summ = p1 + p2 + p3;
    return summ;
}

var summ = sum(10, 20, 30);
console.log(summ);
var summ = sum(1000, 20, 30);
console.log(summ);

//Массивы и объекты:
var array = ['привет', 'loftscool'];
array.push('я изучаю', 'javascript');
console.log(array.length);
for (i=0; i<4; i++){
    console.log(array[i]);
}

var numb_array=[75, 51, 194, 89, 44, 181, 165, 178, 108, 184];
    console.log(numb_array.length);
    for (i=0; i<numb_array.length; i++){
        if (numb_array[i]>100){
        console.log(numb_array[i]);
        }
}



function hello(human) {
    var human = {
        name : 'Денис',
        lastName : 'Андреев',
        age: 29,
    };
    return 'меня зовут ' + human.name + ' ' + human.lastName + ' мой возраст '+human.age;
}
var hell = hello();
    console.log(hell)