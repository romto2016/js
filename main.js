var myNum = 10;
console.log(myNum);
// имя переменной: myNum, значение: 10
var myStr = 'строка';
// имя переменной: myStr, значение: 'строка'
var myBool = true;
// имя переменной: myBool, значение: true
var myArr = [1, 2, 3, 4, 5]
    // имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};
var decimal2 = myNum + 55.33;
//#3
var i;
++i;
i++;
--i;
i--;
var myTest = 20;
myTest += 20;
myTest -= 20;
myTest *= 20;
myTest /= 20;
myTest %= 20;
var myPi;
myPi = Math.PI;
var myRound = Math.round(89.279);
var myRandom = Math.random() * 10;
var myPow = Math.pow(3, 5);
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
}
str = strObj.length;


// console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */
var myNum = 10;
console.log(myNum);
// имя переменной: myNum, значение: 10
var myStr = 'строка';
// имя переменной: myStr, значение: 'строка'
var myBool = true;
// имя переменной: myBool, значение: true
var myArr = [1, 2, 3, 4, 5]
    // имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

// var myNum = 55.3334;
decimal2 = myNum.toFixed(2);
console.log(decimal2);
// decimal2

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i;
++i;
i++;
// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */
var myTest = 20;
myTest += 20;
myTest -= 20;
myTest *= 20;
myTest /= 20;
myTest %= 20;
// myTest

// +=

// –=

// *=

// /=

// %=

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi

// округленное значение числа 89.279 → myRound

// случайное число между 0..10 → myRandom

// 3 в 5 степени → myPow
var myPi;
myPi = Math.PI;


var myRound = Math.round(89.279);
console.log(myPi);
var myRandom = Math.random() * 10;
console.log(myRandom);
var myPow = Math.pow(3, 5);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',

};
strObj.length = strObj.str.length;


console.log(str);
// Мама мыла раму, рама мыла маму

// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
console.log()


var strReplace;
strReplace1 = strObj.str.replace("мыла", "моет");
strReplace2 = strReplace1.replace("рама", "Рама");
strReplace3 = strReplace2.replace("мыла", "держит");
strReplace = strReplace3;
console.log(strReplace);

// isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
var upperCase = strObj.str.toUpperCase();
console.log(upperCase);
var lowerCase = strObj.str.toLowerCase();
console.log(lowerCase);
