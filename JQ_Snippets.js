*****************
10%

лучше всего :
$(function ($,undefined) {
	$(function () {
		$("p").css("color","#903");
	});
})(jQuery);

хотя можно так:
$(function(){
    $("article h2").css("color", "#fff");
});

или так:

jQuery(document).ready(function(){
    jQuery("article h2").css(
        "background-color",
        "green"
    );
});

последние два работают одинаково

***Селекторы***

$("#content") // для id
$("div#content") // для div с id сontent
$(".wrapper")
$("div.wrapper")
$(".wrapper.box") // только элемент с обоими классами
$("h2")
$("div, span")//вернет все div и span

$("article h2") // выбираем все теги h2 внутри тега article
$("div article h2") //все h2 внутри article , которые внутри div

$("article").find("h2") // аналогично примерам выше
$("div").find("article").find("h2")


$("h1 + h2") //выберет все h2 которые идут СРАЗУ после h1

$("#stick ~ article") // выбор всех article элементов после элемента c id=stick

также можно использовать функции:
$("#stick").prev() - выбор предидущего
$("#stick").next() - выбор следующего

$("article > h2") // все h2 которые потомки article
$("article > *") - все потомки article
$("article").children(); тоже самое

$("p").parent() - выбор всех прямых предков(не понимаю)

***Селекторы по атрибутам***

a[href] — все ссылки с атрибутом href
a[href=#] — все ссылки с href=#
a[href^=http] — ссылки начинающиеся с http
$('[class $= box]') - все элементы с именем класса заканчивающимся на box
$('[class != bomb]') - все элементы у которых класс не bomb
$('[class *= "_"]') - все элементы у которых в имени класса есть подчеркивание

короче много их, а также есть фильтры, так что для начала хватит
-------------------------------------
20%

***CSS yoyo***

css(property) — получение значения CSS свойства
css(property, value) — установка значения CSS свойства
css({key: value, key:value}) — установка нескольких значений
css(property, function(index, value) { return value }) — индекс это номер элемента, а value старое значение

$("#my").css('color') - так мы получим значение цвета у элемента с id my

Установка нескольких значений
$("#my").css({
	'color':'red',
	'font-size':'14px',
	'margin-left':'10px'
})

можно и так:
$("#my").css({
	color:'red',
	fontSize:'14px',
	marginLeft:'10px'
})

используя callback
$("#my").css('height', function(i, value){
	return parseFloat(value) * 1.2;
})

***Манипуляции с классами***

addClass(className) — добавление класса элементу
hasClass(className) — проверка на причастность к определённому классу
removeClass(className) — удаление класса
toggleClass(className) — переключение класса
//В качестве className может быть строка содержащая список классов через пробел.

attr(attrName) — получение значения атрибутаr
removeAttr(attrName) — удаление атрибута
attr(attrName, attrValue) — установка значения атрибута

var altText = $('img').attr('alt') // получаем альтернативный текст картинки
$('img').attr('src', '/images/default.png') // изменение адреса картинки

можно задать атрибуты вот так
$('a#my').attr({
	'href':'http://anton.shevchuk.name',
	'title':'My Personal Blog',
});

Также для работы со свойствами есть функции
prop(propName) — получение значения свойства
prop(propName, propValue) — установка значения свойства
-------------------------------------------------------

30% события
их много и мыши и клавы,
пример простейшего события
$("#menu li a").click(function(event){
	alert("Hello!");
	event.preventDefault(); //отмена стандартной функции элемента
})

кроме preventDefault() есть еще stopPropagation()
но лучше всего просто return false

а для того чтобы только сработал только лишь этот обработчик есть метод
event.stopImmediatePropagation();

эээ- что-то почти ничего не подчеркнуля для себя

// плохо
$first.click(function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
});

$first.hover(function(){
    $first.css('border','1px solid red');
})

// лучше
$first.on('click',function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
})

$first.on('hover',function(){
    $first.css('border','1px solid red');
})

-------------------------------------
40%
***Анимация***

// скроем все картинки
$('img').hide(); // на самом деле они здесь просто делают display:none а потом возвращают
// теперь вернём их на место
$('img').show();

// медленно спускаемся с горы и... скрываем все картинки
// slow == 600
// fast == 200
$('img').hide('slow');
// теперь вернём их на место, чуть быстрее
$('img').show(400);

также есть переключатель toggle()

здесь можно использовать callback

$('img').hide('slow', function(){
	// опосля отображаем alert
	alert("Images was hidden");
});

анимация высоты
slide – slideUp(), slideDown() и slideToggle().

манипуляция opacity
fadeIn(duration, callback) – изменяет opacity от 0 до предыдущего
fadeOut(duration, callback) – изменяет opacity от текущего до 0
fadeToggle(duration, callback) – переключатель между In и Out
fadeTo(duration, opacity, callback) – изменяет opacity до требуемого значения


// fadeOut()
$('article img').animate({
	'opacity':'hide'
})

// fadeIn()
$('article img').animate({
	'opacity':'show'
})


//сразу несколько свойств
$('article img').animate({
	'opacity':0.5,
	'height':'50px',
	'width':'250px'
})


также в функции animate() есть еще один параметр - это функции исполнения аниамции
из коробки есть только linear и swing
-----------------------------------------------------------------
50%
Манипуляции с DOM
тобишь удаление и добавление элементов

var $myDiv = $('<div>').attr({'id':'my', 'class':'some'});

//или вот так вот
var $myDiv = $('<div>', {'id':'my', 'class':'some'})

для вставки элемента есть свои функции
after(content) -- $("p").after("<hr/>") // после всех пораграфов вставить линию
insertAfter(element) -- $("<hr/>").insertAfter("p") // линия после параграфов

before(content)
insertBefore(element)

appent(content) -- $("p").append("<hr/>") // в конце параграфа линию
appentTo(element) -- $("<hr/>").appendTo("p") // линию в конец параграфа

заменители
replaceAll(target)
replaceWith(content)

для того чтобы оберунуть часть html кода во что-то wrap("<div></div>")
допустим у нас есть список .list
чтобы его обернуть $(".list").wrape("<div></div>")
также есть метод wrapInner() - он оборачивает детей, в нашем случаи li

wrapAll() - обернуть все, если у нас есть два списка,то
$(".list").wrapAll("<div></div>") - оба списка будут в div
$("li").wrapAll('<div></div>') - элементы второго списка уйдут к первому
------------------------------------------------------------------
базовые эффекты

hide() - скрыть нахуй
show() - показать нахуй
fadeOut() - скрыть за счет opacity
fadeIn() - противоположный эффект
fadeTo(millsecons,opacity) - думаю ясно
fadeToggle() - переключатель, т.е. если скрыт покажеть, если есть то скроет
slideUp() - сворачивание элемента - использует display:none
slideDown() - разворачивание элемента
slideToggle() - переключатель

-----------------------
ajax

// в элемент с id=content будет вставлен весь HTML с указанной страницы
$("#content").load("/get-my-page.html");
// в элемент с id=content будет вставлен HTML с указанной страницы
// выбранный по указанному селектору #wrapper
$("#content").load("/get-my-page.html #wrapper");

$.ajax({
	url: "/get-my-page.html", // указываем URL и
	dataType: "html",        // тип загружаемых данных
	success: function (data) {
		// вешаем свой обработчик события success
		$("#content").html(data)
	}
});


------------------------------
солнце - 109 раз больше чем Земля
длина окружности Земли 40000
луга меньше Земли в 80 раз

earth 1
mercury 0.383
venus 0.949
mars 0.533
uranus 4.01
jupiter 11.21
saturn 9.45
neptune 3.88
pluton 0.187
-----------------------------

<script>
   $.ajax({
      url: 'php/time.php', --url страницу, куда идет запрос
      cashe : false,
      success : function(html){
         $('#content-p').html(html);
      }
   });
</script>



























































