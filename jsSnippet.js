lesson 5 numbers
console.log(10);
console.log(0xabcde); //703710
console.log(012345); //5349
console.log(08); //8

toFixed() кол-во знаков после точки с небольшим округлением
var N = new Number(10.123);
console.log(N.toFixed(1));//10.1
var a = 12.587;
console.log(a.toFixed(1));//133
console.log(a.toFixed(2));//12.6
console.log(2.34.toFixed(4));//2.3400
console.log(2.toFixed(4));//error
console.log(2 .toFixed(4));//2.0000

toPrecision() вывод с определенной точностью т.е. сколько вообще знаков, без округления

console.log(N.toPrecision(3));//10.1

console.log(typeof Infinity); // number
console.log(0/0);//NaN
console.log(Infinity/0);//Infinity
console.log(5/0);//Infinity
console.log(isNaN(0/0));//true

console.log(parseInt('12px'));//12
console.log(parseFloat('.6'));//0.6

Округление
console.log(Math.floor(3.8));//3
console.log(Math.ceil(3.4));//4
console.log(Math.round(3.54));//4


isFinite(n) //озвращает true, если n - inifinty,-infinity,NaN
------------------------------------------------

leson 6 strings

var string = "Summertime sadness";
console.log(string.length);//18
var longString = "another \
long \
string";
console.log(longString);
console.log(string.charAt(6));//t
console.log(string[6]);//t
console.log(string.substring(11));//sadness
console.log(string.substring(6,11));//time
console.log(string.substr(6,4));//time
console.log(string.slice(-7));//sadness - 7 символов с конца
console.log(string.indexOf('time'));//6
console.log(string.replace("sadness","happiness"));//summertime happiness
console.log(string.split(" "));// [ 'Summertime', 'sadness' ]


метод indexOf() - может иметь второй аргумент, указывающий на индекс начала поиска
indexOf() - возвращает -1 если не нашел подстроку

substring с отрицательным числом превращается в 0
например:
var test = "testme";
console.log(test.substring(-2));//-2 будет 0 и выведется testme
console.log(test.substring(4,-1));//сначала -1 превратитсяв 0, потом 4 и 0 поменяются местами и выведет test


--------------------------------------------------
lesson 7 boolean

console.log(true);//true
console.log(false);//false
console.log(5===5);//true
console.log(5!==5);//false
//все значения можно преобразовать в булеан
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(''));//false
//другие значения будут true
console.log("lol" === "lol");//true
console.log(100 !== 50);//true
console.log(!false);//true
//Применение
var a = 0,
	isTrue = true;
isTrue && (a = 100);
console.log(a);//100

var str = "";
var newStr = str || "default";
console.log(newStr);//default


if(0)//false
if(-100),(100),(1),(-1)(Infinity)//true
if("0")//true

приоритет &&  больше чем ||
alert( 5 || 1 && 0) //сначала 1 && 0, потом 5 || 1// exit 5
---------------------------------------------

lesson 8 null & undefined
console.log(typeof null);//object - пустое значение
console.log(typeof undefined); //indefined - отсутствие какого-либо значения

//при строгом сравнение они конечно будут не равны и вернуть false
//а при сравнение с приведением типов, они равны
//undefined мы можем встретить в слудующих ситуация
var a;
console.log(a);

var obj = {};
console.log(obj.name);

var array = [1,2,3,4];
console.log(array[4]);

function greet (name) {
	return "hello, " + name;
}
console.log(greet());
//or
function greetSecond (name){}
console.log(greetSecond());

---------------------------------------
lesson 9 converting-type

console.log(5+"5");//"55" of type string
console.log("5" * 4);//20 of type number
console.log("5" * "hi");// NaN of type number

console.log("5"==5);//true
console.log("0"==false);//true
console.log(0==false);//true
console.log("5"==true);//false i don't know why
console.log(""==false);//true
console.log(null==false);//false
console.log(null==true);//false
console.log(undefined==false);//false
console.log(undefined==true);//false
console.log(null==undefined);//true

//explicit conversion
console.log(Number("222"));//222 of type number
console.log(String(2222));//"2222" of type string
console.log(Boolean(1));// true of type boolean

console.log(!!5);//true
console.log(!!0);//false
console.log("" + 2222);//"2222"
console.log(+"1234");//1234 of type number

var num = 90;
console.log(num.toString());//"90"
//метод toString() может принимать аргумент, который показывает на систему счисления
console.log(false.toString());//"false"

//parseInt() and parseFloat()
console.log(parseInt("45px"));//45 of type number. можно добавить второй параметр - это основание системы счисления
console.log(parseFloat("12.45em"));//12.45

console.log(+"");// 0 of type number

console.log(!!"");//false
console.log(!!NaN);//false
console.log(!!0);//false
console.log(!!null);//false
console.log(!!undefined);//false
console.log(!!"Hi");//true
console.log(+"     4");//4
console.log(+"   g   4");//NaN
console.log(+"  4   g");//NaN

console.log(+true);//1
console.log(+false);//0

//преобразование простых типов в объекты через обертки
var n = 5;
console.log(n.value);//undefined
n = "hello";
console.log(n.value);//undefined
n = null;
console.log(n.value);//error

-----------------------------------------------
lesson 10 условные инструкции

if (true) {console.log("its true");}//"its true"
if (false) {console.log("something");};//...nothing

var n = 5;
if(n > 3){
	n *= 3;
	console.log(n);
}//15

if (n<3) {
	console.log(n);
	console.log("hello");
} else if(n > 4){
	console.log("n is more than 4");
}

var name = "john", homecity;
if (name === "john") {
	homecity = "Boston";
}else if(name === "poul"){
	homecity = "London";
}else if(name === "jack"){
	homecity = "Dallas";
}
console.log(homecity);//"Boston"

//switch

switch(name){
	case "john":homecity = "Boston";break;
	case "poul":homecity = "London";break;
	case "jack":homecity = "Dallas";break;
	default: homecity = "Moscow";
}

------------------------------
lesson 11 условный оператор - единственный тернарный оператор в языке

boolean ? statement1 : statement2;
statement1 - if true
statement2 - if false

var x = 15;
var text = x > 10 ? "x more then 10" : "x less then 10";
console.log(text);

//в качестве 2-го statement может быть и другой тернарый оператор
var z = 1;
var text2 = z > 10 ? "z more then 10" : z < 10 ? "z less then 10" : "z equals to 10";
console.log(text2);

//оператор запятая
//выражение, выражение - сначала вычисляет левую часть, затем правую, и возвращает правую
var test = (10,20);
console.log(test);//20
console.log((test,"hello"));//hello

------------------------------------------

lesson 12 loops
//for(инициализация;тест;инкримент) тело цикла

//for(;;); - бесконечный цикл
var i = 0;
for (i = 0; i < 10; i++) {
	console.log(i);
};
//после первой итерации i становится 1, а не сразу.

var z = 10;
while(z--){
	console.log(z);
}

var x = 0;
do
console.log(x++);
while(x < 10)//на удивление работает

---------------------------------------------
//lesson 13 function

function идентификатор(аргументы){
	интсрукции
	return выражение
}

function greet (name) {
	return "Hello " + name;
}
//or
var greet = function (name) {
	return "Hello " + name;
}; это анонимная функция

//console.log(greet("Jack"));

//можно передавать больше аргументов, чем функция ожидает и это не вызовет никакой ошибки
//однако ими можно воспользоваться
var hate = function(name){
	console.log(arguments[0]);//чтобы вывести все нужно написать просто arguments - это просто массив
	return "I hate " + name;
}
console.log(hate("Gena",34,23,26));
//Gena
//I hate Gena

//поскольку функции это объекты, то фу-ия может принимать как аргумент другую ф-ию или возвращать ее
//callback - передача ф-ии, которая будет выполнена после выполнения функции, в которую она переданна
var func = function(callback){
	var name = "Gena";
	callback(name);
};

func(function(n){
	console.log("Gay " + n);
});
//Gena Gay

var func = function(callback){
	callback();
	console.log("Main function");
};

func(function(){
	console.log("Inset function");
});
//Inset function
//Main function

//возврат
var fu = function(){
	return function(){
		console.log("hi");
	}
};
fu()();//"hi"

//анонимная самовызывающаяся функция
var hello = (function(name){
	return "Hello " + name;
}("Gena"));//здесь идет присвоение значения функции, а не сама функция, поэтому лучше брать в круглые скобки
console.log(hello);//"Hello Gena"

--------------------------------

lesson 14 scope and scope chain
//есть глобальные и локальные переменные
//глобальные, те что не в функции

var i = 10;
var func = function() {
	var i = 100;
	console.log(i);
	var innerFun = function() {
		var i = 1000;
		console.log(i);
	}
	innerFun();
}
func();//100 т.к. локальные приоритетнее глобальных, а потом 1000

//и все это создает цепочку областей видимости
//когда интерпринатор видит console.log(i) то он ищет сначала в функции, потом во внешней функции итд

//еще при объявлении локальных переменных обязательно писать var,иначе это будет менять
//переменную во внешней области видимости

//hoisting

var a = 1;

var b = function(){
	console.log(a);
	var a = 10;
}
b();//undefined
//т.к это тоже самое что и
var b = function(){
	var a;
	console.log(a);
	a = 10;
}
//т.е. интерпиртатор поднимает все объявления переменных в начало
--------------------------

lesson 16 exceptions

throw - прерывает скрипт и ищет ближайший обработчик исключений
var myError = new Error("My Error Message");
console.error(myError.message);

var calculate = function(n){
	if(n > 10) throw new Error("n should be less than 10");
	return n + 100;
}
calculate(20);

try{
	calculate(100);
}catch(e){
	console.error("Can't excute " + e.message);
}

---------------------------------------

lesson 17 objects

var person = {
	name: "Jojo",
	age : 100500,
	gender : "male"
}
console.log(person.name);
//or
console.log(person["age"]);

//2
var obj = new Object();
object.property = "value";

//3
var object = Object.create({x :10,y: 20})//принимает объект, который будет прототипом первого объекта
console.log(object);// {x: 10, y : 20} но это не его свойства, а свойства его родителя
console.log(object.hasOwnProperty("x"));//false
//можно добавить также его
object.x = 20;
console.log(object); // {x: 20, x:10 , y:20}
console.log(object.x);//20  т.е. родное

//удаление
delete object.x;//удаляет только родные свойства

//проверка свойства в объекте

console.log("x" in object);//true
console.log("o" in object);//false
//ему все равно, наследуемо оно или нет

console.log(object.z);
console.log("z" in object);//false

object.z = undefined;
console.log(object.z);//undefined
console.log("z" in object);//true

--------------------------------------------

18 lesson this

var person = {
	name: "John",
	greet: function () {
		return "Hi, my name is " + this.name;
	}
};
console.log(person.greet());//Hi my name is John

var greet = function(){
	return "Hello, my name is " + this.name;
}

var obj1 = {
	name: "john",
	greet : greet
};

var obj2 = {
	name: "Elvis",
	greet: greet
};

console.log(obj1.greet());//john
console.log(obj2.greet());//elvis

//call and apply
//у каждой функции есть свои функции, так например мы можем указать на что вызывать функцию

console.log(obj2.greet.call(obj1))//john
//если у функции есть аргументы, то они передаются через запятую после obj1
//метод apply , это то же самое , только аргументы передаются массивом

//также есть метод bind , он принимает в аругмент объект на который и будет вызван
var bound = greet.bind(obj2);
console.log(bound());//elvis

-------------------------------------------

lesson 19 accessors and atributes

var person = {
	name: "alex",
	_age: 20,
	get age(){
		return _age;
	},
	set age(value){
		this._age = value < 0 ? 0 : value > 122 ? 122 : value;
	}
};

console.log(person.age);

//каждое свойство объекта имеет 3 атрибута : writable,enumberable, configurable
//их можно получать через дескриптор свойства
Object.getOwnPropertyDescriptor(person,"name");
Object.getOwnPropertyDescriptor(person,"age");

//для определения или переопределения этих свойств
Object.defineProperty(person,"gender",{
	value: "male",
	writeble: false,
	enumberable: false,
	configurable: false
});

console.log(person.gender);//male
person.gender = "female";//ибо false
console.log(person.gender);//male

//теперь выведим все свойства объекта
for(property in person) {
	console.log(property);
}
//выведет все, кроме gender, т.к. у него enumberable стоит false, также будет и с
console.log(Object.keys(person));

//также можно узать у самого объекта его enumerable
console.log(person.propertyIsEnumberable("gener"));//false

//configurable - отвечает за изменение атрибутов свойств
//напрмер, если мы хотим сейчас изменить writable, то получим ошибку
Object.defineProperty(person,"gender",{
	writable: true
});

//расширяемость объектов
var obj = {};
Object.preventExtensions(obj);
Object.isExtensible(obj);//false
obj.x = 22;
console.log(obj.x);//undefined
//но добавлять свойства к протатипу возможно и тогда эти свойства будут и у дочернего объекта

Object.seal(obj);//также делает нерасширяемым объект и делает атрибут writable всех свойств false
//т.е. нельзя будет даже удалить свойство
console.log(Object.isSealed(obj));//true

Object.freeze(obj)//доступ только для чтения
Object.isFrozen(obj);

--------------------------
lesson 20 Prototype and inherit

//различием между переменными и ссылочными переменными
var a = 10;
var b = 20;
a = b;
b = 40;
console.log(a);//20 т.е. присваивание 40 к b не повлияло на а.
//а ссылочные переменные могут указывать на один объект
var a = {x:10},b = {x:20};
a = b;
b.x = 15;
console.log(a);//x:15
a.x = 50;
console.log(b);//x:50

//Прототипы
//каждый объект имеет прототип, и объект наследует свойства прототипа
//и свойства прототипа, могут быть доступны также через дочерний объект

var ObjectProto = {
	name: "Alex"
};

var object = Object.create(ObjectProto);
console.log(object.name);//Alex

var Person = {
	constructor : function(name,age,gender){
		this.name =name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	greet : function(){
		console.log("Hello, my name is " + this.name);
	}
};

var person,anotherPerson,thirdPerson;
person = Object.create(Person).constructor("John",35,"male");
anotherPerson = Object.create(Person).constructor("Jessica",23,"female");
thirdPerson = Object.create(Person).constructor("Elvis",32,"male");

console.log(person.name);
console.log(anotherPerson.age);
thirdPerson.greet()

console.log(Person.isPrototypeOf(person));//true

//oop
var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name,age,gender,skills){
	Person.constructor.apply(this,arguments);
	this.skills = skills || [];
	return this;
};
WebDeveloper.develop = function(){
	console.log("Working");
}

var developer = Object.create(WebDeveloper).constructor("Jack",21,"male",["html","css","js","ruby","nodejs"]);
console.log(developer.skills);//["html","css","js","ruby","nodejs"]
developer.develop();
developer.greet();
console.log(developer.age);

---------------------------------
lesson 21 constructors and classes

var Person, person, anotherPerson, Developer, developer;
//это конструктор :)
Person = function(name) {
	this.name = name;
};


//конструкторы ничем не отличаются от обычных функций
//любая функция это потонециальный конструктор
//и любую функцию можно вызывать со словом new
//конструкторы начинаются с большой буквы
person = new Person("Jack");
console.log(person.name);

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);

//у каждой функции есть прототип, который будут наследовать дочерние объекты
console.log(Person.prototype);
//изначально это пустой объект, но на него можно вешать функции и свойства и они будут унаследованы
Person.prototype.greet = function() {
	console.log("Hello, my name is " + this.name);
}

person.greet();//Hello, my name is Jack

//при создании объектов такм путем, у кажого объекта есть свойство constructor
console.log(person.constructor);
console.log(Person.constructor);

//можно проверить   объект на принадлежность классу
console.log(anotherPerson instanceof Person);
//or
console.log(Person.prototype.isPrototypeOf(anotherPerson));

для получения прототипа объекта
console.log(anotherPerson.__proto__);//не рекомендуется к использованию
//а свойство prototype есть только у конструктора

//создание дочерних классов

Developer = function(name,skills) {
	Person.apply(this,arguments);
	this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer = new Developer("John",["ruby","RoR","python"]);
console.log(developer.name);
console.log(developer.skills);
developer.greet();

console.log(developer instanceof Person);//true

//переопределение методов
Person.prototype.toString = function() {
	return this.name;
};

console.log("The name is " + developer.toString());

-------------------------------------------------------------

lesson 22 method chain

var string, newString;

string = "Sometimes the same is different";
newString = string.replace("is","isn't").concat(" actually").toUpperCase().replace(/ /g,"\n").slice(10);
console.log(newString);

//какой-то движок для какой-то двухмерной игры

//класс для работы с двухмерными векторами
var Vec2 = function(x,y) {
	this.x = x;
	this.y = y;
};

Vec2.prototype.add = function(vec) {
	this.x += vec.x;
	this.y = vec.y;
	return this;
};

var world = {
	gravity: new Vec2(0,1)
};

//объект у которого позиция задается вектором
var obj = {
	position: new Vec2(10,20),
	speed new Vec(1,3),
	update: function() {
		this.position
		.add(this.speed)
		.add(world.gravity)
	}
};

console.log(object.position);
object.update();
console.log(object.position);
-------------------------------------------
lesson 23 JSON 
Сереализация объектов - это преобразование объектов в строки
удобство хранения и удобная передача информации
например получение данных с сервера тогда XML, JSON
можно хранить локально исползуя localStorage

можно хранить объекты,массивы,строки, числа,true,false,null, другие будут преобразованны в null

var user = {
	name : "Frank",
	id : 13123,
};
var userData = JSON.stringify(user);//для преобразования в JSON
console.log(userData);
console.log(typeof userData);//string

JSON.parse(userData)//обратное преобразование

JSON нет в IE<=7
и чтобы его подключить нужнен скрипт 

если в объекте есть метод toJSON, то то что он вернет и будет преобразованно в строку.

var user = {
	name: "Frank",
	id : 45234,
	lastVisit: Date.now(),
	friends: [233,234,4543],
	toJSON : function  (argument) {
		return {//допустип не хотимхранить его id и id его друзей
			name : this.name,
			lastVisit: this.lastVisit
		}
	}
};
-------------------------------
lesson 24 arrays

var array = [1,2,3,4];
var months = ["January", "February","March","April"];

console.log(months[0]);//January
console.log(months[4]);//undefined

можно создавать и менять элементы
months[4] = "May";
console.log(months);// it will print all of them
console.log(months.length);//5

добавить в конец
months[months.length] = "June";

элементы не всегда идут по порядковым номерам

months[100]  = "Stepa";

и на самом деле длина массива -это индекс последнего элемента + 1

массивы это объекты
console.log(typeof months);//object

var myArrr = new Array(3,34,4,34);
console.log(myArrr);
но если только один элемент массива, то это будет означать длинну массива

массивы в js - только динамические 

можно так
var thirdArray = [,,,23];
console.log(thirdArray);//[3:23] а до него все undefined

var strange = [,,];
console.log(strange.length);//2 т.к. в литералах массивов допускается лишняя запятая в конце

в качестве индексов массивов можно использовать строки
months["someProperty"] = "someValue";

свойство length можно присвоить
months.length = 5;
теперь все эелементы выше индекса 4 будут удалены

если удалить delete - то элементы не сдвигаются и длина не меняеться, т.е. мы как будто
присвоили элементу undefined

delete months[3]
console.log(months);


методы Array

Array.isArray(months)//true

var array = ["Some String","Another String", "Third String"];

console.log(array.join());//вернет сконкотенируемую строку массива
по умолчанию используется запятая как разделитель элементов массива, но можно в
аргумент join поставить другю строку и она будет разделителем join(" {} ")

console.log(array.reverse());//вернет обратный массив, изменяет изначальный массив

console.log(array.sort());//сортирует в алфавитном порядке и для этого каждый элемент пре-
образуется в строку, этот метод может принимать функцию, которая будет как-то по другому сортировать

console.log(array.concat("Hello", ["Even","More"]));//складывает массив с другими эелементами или с даже с другим масивом
//этот метод не изменяет исходный массив

console.log(array.slice(1));//работает как строчный slice, не изменяет исходный массив

array.splice(1,1,"dodo","dudu");//изменяет массив 1- индекс элемента с которого будет удаление 
//2-количество элементов для удаления 3 и далее - элементы которые будут втсавленны в туда
//и он возвращает удаленные эелементы

array.push("JS")//добавление в конец массива
array.unshift("Ruby")//добавление в начало

array.pop() //удаление последнего элемента массива и вовращает этот элемент
array.shift() //удаляет элемент сначала и также возвращает его
----------------------------
lesson 25 array methods in ecmaScript5

все методы не изменяют исходный массив

var array = ["Some string","Another string","Third string","javaScript","Ruby"];

array.forEach(function(element,index,array){
	console.log(element);
	array[index] = element.toUpperCase();
});
console.log(array);//elements in uppercase, т.к. было присваивание внутри callback

//тоже самое
console.log(array.map(function(e){return e.toUpperCase()}));

//метод filter отсеивает элементы по каким-нибудь критериям
var filtred = array.fileter(function(e) {
	//должна вернуть true or false
	return e.indexOf('o') === -1;
});

//every проверяет все элементы заданому условию, и если хоть один не соответсвует, то вернет false
array.every(function(e){return e.length > 4});

//метод some также работает, но если один удоволетворяет условию то вернет true
array.some(function(e) {return e.indexOf("z") !== -1});

var numbers = [1,2,3,4,5,6];
var reduced = array.reduce(function(a,b){//a - промежуточное значение, b - текущее значение
	//return a+b; сложить все эелементы
	return a * (b % 3 === 0 ? b : 1);//меремножить все кратные трем
});

//также есть метод reduceRight - который идет по массиву справа на лево

numbers.indexOf(3)//2
//также есть lastIndexOf
//если этого элемента не оказалось то вернет -1
-----------------------------------------
lesson 26 Math

Math.pow(2,5)//32
Math.sqrt(400)//20
Math.abs(300)//300 module
Math.abs(-300)//300

Math.round(9.6)//10 если первое чилсо после точки >= 5, то округяется в большую степень
//для принудительного округления в большую или меньшую сторону есть Math.ceil() и Math.floor()

Math.min(6,9,2,5)//2
Math.max(6,9,2,4)//9

Math.exp(2) //7.3.... возводит число е в указанную степень
Math.log(5) //1.609.... возвращает натуральный логорифм числа

//все принимают значения в радианах
Math.sin()
Math.cos()
Math.tan()
Math.asin()
Math.acos()
Math.atan()

Math.E
Math.LN10
Math.LN2
Math.SQRT2
Math.SQRT1_2

Math.random() - от 0 до 1

-10 + Math.random() * 20 // вернет число [-10;10]

var getRandom = function(min,max) {
	return Math.random() * (max-min) + min;
};


-----------------------------------------
lesson 27 Date

var date = new Date();
console.log(date);//d m dayOfMonth year h m s gmt
//и он преобразуется в строку и эта дата взята с компьютера пользователя

аргументы
var newDate = new Date(1990,0,1,10 ,24,22,345)// 1 января 1990 10:24:22
//милисекунды не отображаются и чтобы их узнать
newDate.getMilliseconds();//345

//также есть
newDate.getHours();
newDate.getMinutes();
newDate.getSeconds();

newDate.getDay()//день недели
newDate.getDate()//день месяца
newDate.getMonth()//получение месяца
newDate.getYear()//получение года, возвращает последние 2 цифры
newDate.getFullYear()//полный год

и в соответсвии с каждым геттером есть сеттеры, кроме дня недели

количество милисекунд с янаваря 1970 года
newDate.getTime();

//если дата ниже 1970 то этот метод вернет отрицательное число
new Date(1945,0,1).getTime();/-788....

//передавая один аргумент конструктору Date он будет считаться timeStamp

//все эти методы идут по гринвичу GMT
//для UTC есть теже методы, только после слоа get нужно писать UTC

//также для более удобно вывода даты есть методы
date.toTimeString();//10:24:22 GMT
date.toDateString();//Sun Apr 15 1990
date.toLocalTimeString(); // 9:24:22 AM
date.toLocalDateString();// 4/15/1990

Date.now()//текущее время timestamp, часто используется чтобы определить отрезки времени.

----------------------------------------------------------------

Все что мы хотели знать о функциях, но жо сих пор не знали.

1) функция - это такое же значение, как строка или число, и код функции можно вывести в самой программе.

var fun = function() {
	console.log("Hello, darling");
};
console.log(fun);

2)функция - это объект и она может хранить свойства.

fun.testValue = 5;
console.log(fun.testValue);

3) функция это объект и поэтому она передается по ссылке.

var funny = fun;
т.е. теперь переменная funny указывает на ту же функцию что и fun

4)Function Decloration

	function zozo() {
		//code
	}
а)это объявление функции говорит интерпиртатору создать переменную zozo и положить туда функцию,
т.е. название ни каким образом не связанно с самой функцией, поэтому теперь если создать
пременную с таким же именем и что-нибудь ей присвоить, то функция исчезнет, т.е. ничто на нее не
указывает и это боль.

function f() { }
var f = 5;
console.log(f);//5

б)функции FD создаются интерпиртатором, до выполнения программы, поэтому использовать их можно, до их
объявления.

saySome("Jhon");

function saySome(name) {
	console.log("Fuck you " + name);
}

в) если мы хотим в соответсвии с условием дать тело одной и той же функции, то в FD возникнут проблемы

var age = 20;

if(age >= 18)
	function sayHi() { console.log("Welcome!");}
else
	function sayHi() { console.log("fuck you!");}

sayHi();

так вот , поскольку интерпиртатор создает функцию до выполнения то он создаст последнюю, таким образом
все условие не имеет вообще никакого смысла, этот код равен

	function sayHi() { console.log("Welcome!");}
	function sayHi() { console.log("fuck you!");}

5) Function Expression
	var f = function () {
		//code
	};

таукую функцию можно объявить везде где ожидается обычное значение, например в массиве.
FE создается при выполнении программы, когда до них доходит выполнение, т.е. использовать
их до объявления нельзя, однако их можно поставить в условный оператор

6) функия с вызовом на месте
(function() {
	var a = 1, b = 2;
})();

это работает только с FE, поэтому нужны внешнии скобки, т.к. если браузер увидит чистое function, то
прочтет как FD, также просто из сображений стиля лучше скобки.

7) Named Function Expression
var f = function zozo() {
	//code
}
в данном случаи zozo являеться настоящим именем функции, но оно доступно только внутри самой функции.
вообщем-то потенциал у этой темы небольшой - рекурсия.

function f(n) {
	return n ? n*f(n-1) : 1;
}

alert(f(5))//120

var g = f;
f = null;
g(5)//error

однако если мы сделаем так:
var f = function factorial(n) {
	return n ? n*factorial(n-1) : 1;
}

8) gloabal object - все переменные и функции, которые не объявленны в других функциях являются глобальными,
а значит являются свойствами глобального объекта

var a = 10;
alert(window.a)//10
window.b = 100;
alert(b)//100

самое время узнать как выполняется скрипт.
1-ая фаза) Инициализация - сканируется скрипт на предмет function declaration и переменные var, потом все они добавляются
в global  object, функции fd создаются сразу , а всем var присваивается undefined.
2-ая фаза) Выполнение - всем переменным делается присваивание их значений

var a = 5;
function f(arg) {  }
var g = function (arg) { }

так вот после первой фазы и до начала второй фазы.
window = {f: function, a: undefined, g : undefined}

если создать переменную без var , а просто написать a = 10;, то эта переменная появиться только во второй фазе

9)Все переменные внутри функции - это свойства внутреннего объекта lexicalEnvironment.
При запуске функции , создается объект lexicalEnvironment, туда записываются все переменные,аргументы,
функции текущей функции, и процесс инициализации здесь такой же как и в gloabal object.

При запуске функции, но до ее выполнения создается объект lexicalEnvironment, туда записываются только аргументы,
а локальные перменные undefined,а уже во время выполнения программы присваивается локальным переменным их настоящее значение
function sayHi(name) {
	//phase#1 LixicalEnvironment = {name:John, phrase: undefined }
	var phrase = "Hello, " + name;
	//phase#2 LexicalEnvironment = {name:John, phrase: "Hello, John"}
	console.log(phrase);
}
sayHi("John");
//после выполнения функции объект с переменными исчезает

10) также у функции есть доступ к внешним переменным - и когда есть обращение к переменной,интерпиртатор
сначала ищет в самой функции т.е. в текущем lexicalEnvironment, а потом во внешнем lexicalEnvironment и так до global object.
Это возможно благадоря тому что в у каждой функции есть свойство [Scope], указывающее на lexicalEnvironment в котором
созданна функция, это свойство создается во время создания функции, чтобы функция смогла обратиться ко внешним переменным.

var a =5;
function f() {
	alert(a);
}
//lexicalEnvironment этого кода - window{ a: .. , f: .. }

когда выполняется функция, интерпритотор создает объект переменных для функции,используя scope,
он получает ссылку на внешнее лексическое окружение, эта ссылка исользуется для поиска переменных, которых
нет в текущей функции.

11) Короче говоря
a)каждая функция при создании получает свойство scope указывающее на lexicalEnvironment, в котором написана функция
б)при запуске функции создается lexicalEnvironment самой функции, в нем находятся все аргументы и переменные функции,
а также в него копируется ссылка на внешний объект из свойства [scope].
в) при поиске переменных, сначала ищется в самой функции, если нет то идут в lexicalEnvironment функции и тд.


12) вложеные функции, в основном используются для вспомогательных операций

function sayHi(person) {
	var message = makeMessage(person);
	console.log(message);

	function getHello(age) {
		return age >= 18 ? "Hello" : "hi, darling";
	}

	function makeMessage(person) {
		return getHello(person.age) + ", " + person.name;
	}
}

sayHi({
	name: "Petya",
	age: 17
});

фишка в том что вложенные функции создаются как свойства lexicalEnvironment внешней функции,
т.е. в этом примере функции getHello и makeMessage являются свойствами lexicalEnvironment функции sayHi
тобишь
LexicalEnvironment = {
	person: "Petya",
	message: undefined,
	getHello: function,
	makeMessage: function
}

при создании вложенная функция также получает свойство [scope] указывающее на lexicalEnvironment внешней функции,
а при запуске она будет искать переменные сначала у себя а потом у внешней функции.

получаеться что в makeMessage можно не передавать аргумент person, он и так его найдет.

13) Вложеную функцию можно возвратить
function sayHi(person) {
  return function() {
    var message = makeMessage(person);
    alert( message );
  };

  function getHello(age) {
    return age >= 18 ? 'Здравствуйте' : 'Привет';
  }
  function makeMessage() {
    return getHello(person.age) + ', ' + person.name;
  }
}

var sayHiPete = sayHi({ name: 'Петька', age: 17 });
var sayHiOther = sayHi({ name: 'Василий Иванович', age: 35 });

sayHiPete(); // эта функция может быть вызвана позже

Возвращаемая функция имеет доступ к аргументам внешней функции и к другим вложеным функциям

14)Замыкание - это функция плюс вся цепочка lexicalEnvironment,которые при этом образуются.

можно говорить и учить тонкости работы js дальше но заебало,
это ж ни как не связано с практикой.
----------------------------------------------------------------------
BOM

4 основных объекта - navigator, screen , location , frames.

navigator - общая инфо о браузере и системе.
navigator.userAgent - инфо о браузере.
navigator.platform - инфо о ОС

screen - инфо об экране
screen.width
screen.height

location - инфо о текущем url
location.toString() - полный адресс
location.reload(true)
location.href
location.hostname

history.back()
history.forward()

-----------

DOM

document.getElementsByTagName('p')
document.getElementsByClassName("someClassName")
document.getElementById('')
document.querySelector(".className") //#id
document.querySelectorAll("div ul li a")

var links = document.querySelectorAll("div ul li a");
links[2].parentNode // li
links[2].parentNode.parentNode // ul
links[2].parentNode.parentNode.parentNode // div
links[2].parentNode.parentNode.parentNode.parentNode // body


таймер:
setTimeout(function or code, milliseconds);

setTimeout(function() {
	console.log("hello");
}, 2000);//через 2 секунды запкуститься

отмена таймера:
var timer = setTimeout(console.log("hello"), 2000);
clearTimeout(timer);

setInterval - запускает функцию	регулярно, периодично в заданный период.
а синтаксис тайкой же как у таймера
var timer = setInterval(function() {
	console.log("againg and again");
},3000);//и так каждые 3 секунды

----------------------------------------

Вообще в браузере есть 3 способа как запускать javaScript
<script>
html атрибуты(типа onlick и все такое)
url - можно прописать в строке javascript: document.body.innerHTML = "Some Text"
а из этого следует что можно вставлять код js прямо в ссылки
<a href ="javascript: alert('Ololo')">Show Something</a>
лучше всего прописывать тег script перед закрытием body

но неважно как подключать скрипты, они все равно разделяют одну облать видимости
 <input type="text" onchange="myVar = this.value">
  <input type="button" onclick="doSomething()" value="Action!"></input>
  <script>
    var myVar,doSomething;
    doSomething = function() {
      alert("You typed: " + myVar);
    }
  </script>

js браузера выполняется в два этапа
1) все находящиеся в тегах script, по очередно сверху вниз
2) ассинхронный этап - бесконечный цикл обработки событий event loop

обработчики событий,
например
window.addEventListener("mousemove", function(e) {
	console.log("X: " + e.offsetX, "Y: " + e.offsetY);
});

-------------------------------------
объект window- окно браузера
самые важные объекты :
document
location
navigator
screen
history

setTimeout(function callback(){}, milliseconds);
example:
setTimeout(function(){
	console.log("2 seconds passed");
}, 2000);

setInterval(function callback(){},milliseconds);//выполянеться многократно
example:
var i = 0,
	timer;
tiemer = setInterval(function() {
	console.log(i++);
},200);

window.onclick = function() { clearInterval(timer);};

функции setTimeout() и setInterval()  возвращают значение и его можно использовать чтобы их остановить
var timer = setTimeout(function, milliseconds);
clearTimeout(timer);//clearInterval()
------------------

объект location - позволяет работать с адресной строкой браузера
hash - то что будет в адресной строке
location.hash = "something" - вообще это способ сохранения сосотояния в однастраничных приложениях
и для этого есть событие onhashchange
window.onhashchange = function() {
	console.log(location.hash.slice(1));
};

location.href = "http://google.com";//для перехода, можно даже без href

location.search() - значение которое передается на сервер get запросом
location.reload() - перезагузка
assing(addres s) - просто переход
replace(address) - переход с удалением предидущей страницы

var encoded = encodeURI("http://google.com/page/жопа");
//принимает строку и заменяет все не ASCII символы на какие-то последовательности
decodeURI(encoded); берет esc-последовательности и возвращает нормальную строку.

---------------------------

screen

screen.width
screen.height - разрешение экрана
screen.availWidth
screen.availHeight - размеры доступной области
screen.colorDepth - глубина цвета(кол-во бит/px);

history.length - доступная длина истории
history.back()
history.forward()

чтобы скокать через страницы по истории
history.go(-2)//(2)

в отнастраничных приложнениях кнопочки назад-вперед не работают
и есть 2 метода решения этой проблемы
1) Хэши в url
2) Html5 history API

раньше хэши были единсвенным способом сохранения
состояния в одностраничных приложнениях, но сейчас
все можно сделать лучше
histiry.pushState()
------------------------
события.
//есть зеленый квадрат
//поменяем цвет на клик
var el = document.getElementById('box');
el.onclick = function() {
	this.style.backgroundColor = "yellow";
};

	function randomColor() {
    	return "#"+((1<<24)*Math.random()|0).toString(16);
	}//непонимаю как это работает

------------------------------------
jsLog

15
DOM - document object model
BOM - browser object model

window.navigator - инфа о браузере и системе
navigator.userAgent - browser
navigator.platform - os

window.screen
screen.width
screen.height

window.location
location.reload()
location.toString() - absolute address
location.href

frames

history
------------------
16
dom
-------------------
пох, ебашим события, все остальное тщета.
20
основы

green box 100x100


version 1
(function(){
	var el = document.getElementById('box');
	el.onclick = function(){
		this.style.background = "yellow";
	};
});

version 2
<div id="box" onclick="alert('something')"></div>

21

version 3 - kosher
2 buttons(day,night);

var changeColor = function(){
	if(this.id === 'day') {
		document.body.className = 'day';
	}else if(this.id === 'night') {
		document.body.className = "night";
	}
};
var sayHi = function(){
	alert("Hi!");
}
for (var i = 0,len = buttons.length; i < len; i++) {
	buttons[i].addEventListener('click',changeColor,false);
	buttons[i].addEventListener('click',sayHi,false);

	buttons[i].removeEventListener('click',sayHi,false);

};

захват на стадии всплытия
в функции идет объект ивента
event.type
event.target - элемент который спровоцировал события
event.currentTarget - элемент на котором весит событие (можно просто this, но так лучше не делать, а хз почему.)

evemt.preventDefault()

22
модель события для IE 8--

1)attachEvent вместо addEventListener
2)event.returnValue = false вместо event.preventDefault()
3) this будет указывать на другой объект, поэтому нужно создать новую переменную
var elem = e.srcElement
4) 3-ий параметр не нужен.

var changeColor = function(){
	if(elem.id === 'day') {
		document.body.className = 'day';
	}else if(elem.id === 'night') {
		document.body.className = "night";
}
for (var i = 0,len = buttons.length; i < len; i++) {
	buttons[i].attachEvent('onclick',changeColor);
	buttons[i].detachEvent('onclick',changeColor);
};

23
кросбарузерные события

var eventsObj = {
	addEvent : function(el, type, fn) {
		if(typeof addEventListener !== 'undefined') {
			el.addEventListener(type,fn,false);
		}else if( typeof attachEvent !== 'undefined'){
			el.attachEvent('on' + type,fn);
		}else {
			el['on' + type] = fn;
		}
	},

	removeEvent : function(el,type,fn) {
		if(typeof removeEventListener !== 'undefined') {
			el.removeEventListener(type,fn,false);
		}else if( typeof detachEvent !== 'undefined'){
			el.detachEvent('on' + type,fn);
		}else {
			el['on' + type] = null;
		}
	},

	getTarget : function(event) {
		if(typeof event.target !== 'undefined') {
			return event.target;
		}else {
			return event.srcElement;
		}
	},

	preventDefault : function( event) {
		if( typeof event.preventDefault !== 'undefined'){
			event.preventDefault(e);
		}else {
			event.returnValue = false;
		}
	}

};

var buttons = document.getElementsByTagName('button');
var changeColor = function(e) {
	eventObj.preventDefault();
	var elem = eventObj.getTarget(e);

	if( elem.id === 'day') {
		document.body.className = 'day';
	}else if(elem.id === 'night') {
		document.body.className = 'night';
	}
}

for( var i = 0, len = buttons.length; i < len; i++) {
	eventObj.addEvent(buttons[i],'click',changeColor);
};
------------------------------
24 делегирование событий
смысл - вешать события на родителя, тогда и на дочерние элементы распрострониться

var changeColor = function(e) {
	eventsObj.preventDefault(e);

	var elem = eventsObj.getTarget(e),
		colorData = elem.getAttribute('data-color');

	if(colorData) {
		document.body.className = colorData;
	}
}

var testFunc = function() {
	alert('click!');
}
eventsObj.addEvent(document,'click', testFunc);


<style>
	.night{
		color: #fff;
		background:#000;
	}
	.day {
		color: #000;
		background: #fff;
	}
	.hello-dos{
		color: #fff;
		background: blue;
	}
</style>
<button data-color='day' id='day'>Day</button>
<button data-color='night' id='night'>Night</button>
<a data-color='hello-dos' href='ya.ru'></a>
---------------------------------------
JSON - сереализация объектов в сроки.
localStorage - для хранения локально

можно хранить
объекты, строки, массивы , числа, true, false, null
другие будут null

var user = {
	name : "Frank",
	id : 43255
};

для преобразования в JSON есть сппециальный метод JSON.stringify

var userData = JSON.stringify(user);
console.log(userData);

а для получения из строки объект есть метод JSON.parse

JSON.parse(userData);

ниже IE8 не работает

кроме того можно указать в объекте метод toJSON и то что он возвращает и будет сереализоваться

var user = {
	name : "Frank",
	id : 12312312,
	friends : ['Nikola',"Simon",'Bro'],
	lastVisit : Date.now()
};
















