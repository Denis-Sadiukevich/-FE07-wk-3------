console.log('Денис');
console.log('23 марта 1990 года!');
console.log('Добро пожаловать в мир Java Script');

// alert("2021");
// alert('888-345');

document.getElementById('one').innerHTML = 'Hello World!';
let one = document.getElementById('one');
one.innerHTML = 'Мой первый вывод на страницу!';

document.getElementById('two').innerHTML = 12*12;
let two = 12*12;
document.getElementById('two').innerHTML = two;

document.querySelector('.one').innerHTML = 'Вывод элемента по классу';
let oneClass = document.querySelector(".one");
oneClass.innerHTML = "Вывод элемента по классу";

document.querySelector('span').innerHTML = 'world';
let span = document.querySelector("span");
span.innerHTML = "world";

// Task #10
document.querySelector('.three').innerHTML = `<h3>У меня все получилось!</h3>`;
let three = document.querySelector(".three");
three.innerHTML = "<h3>У меня все получилось!</h3>";

// Task #11
document.querySelector('.four').innerHTML = `<h4>Произвольный текст!<p>Еще текст</p></h4>`;
// document.querySelector('.four').innerHTML += `<h4>Произвольный текст!<p>Еще текст</p></h4>`;

let four = document.querySelector(".four");
four.innerHTML += "<h4>Произвольный заголовок</h4>";
four.innerHTML += "<p>Произвольный текст</p>";

// Task #12
let five = document.querySelector('.five');
five.innerHTML = 3.1415;

// Task #13
let six = document.querySelector('.six');
six.innerHTML = '<img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt=""></img>';

// Task #14
z1 = 6;
z2 = 3;
let seven = document.querySelector('.seven');
seven.innerHTML = z1*z2;

// Task #15
y1 = 6;
y2 = 3;
let eight = document.querySelector('.eight');
eight.innerHTML = y1/y2;

// Task #16
x1 = 'Hello';
x2 = 5;
let nine = document.querySelector('.nine');
nine.innerHTML = x1+x2;

// Task #17
let d1 = document.querySelector('.test-1');
console.log(d1);

// Task #18
let d2 = document.querySelector('.test-2');
console.log(d2);
d2 = 5;
console.log(d2);

// Task #19
let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);

// Task #20
// document.querySelector('body').innerHTML = '';