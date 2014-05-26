console.log "hello,<coffee></coffee>"

#flag compile and watch
coffee -w -o ./ *.coffee
coffee -cw fileName.coffee

можно подключить компилятор coffeeScript в браузер, это будет выглядеть так
<script src="http://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/coffee-script.min.js"></script>
<script type="text/coffeescript">
	console.log "hello, coffee is here"
</script>



#3

#Однострочный коммент

###
many lines
can be
here
###

variables

a = 10
b = 20
c = true

в числах ничего нового от инта до восьмиричного

boolean
a = true yes on
b = false no off

string
some = "some string"
secondString =
"this is 
the second string"


Экронирование строк как pre в html
heredocString = """
Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Debitis, quae, atque,
  delectus ad optio provident reprehenderit eum deserunt
   obcaecati temporibus fugit dolor ullam minima sapiente
    facere officia cum dolorum eligendi?
"""

Инторполяция строк
name = "Bobby"
greeting = "Hello " + name + "!"
greeting = "Hello #{name.toUpperCase()}!" #работает только с двойными кавычками

массивы
можно как обычно, можно в любом месте перенести строку на новую

#бывает что запятые не нужны
array = [
	1, 2, 3
	4, 5, 6
	7, 8, 9
]

range = [0..10] #включительно
range = [0...10] #не включая

если рейндж будет больше двадцати то скомпилируется в цикл

range = [0..25]

range[0..10] = range.slice(0,11)
range[..8] = range.slice(0,9)
range[5..] = range.slice(5)


#object
user =
	name: "Joe Doe"
	age: 24
	status: "WebDev"
	skills:
		html:10
		css:9
		javascript:7
		coffeescript:8


#regExp
visa = /^4[0-9]{12}(?:[0-9]{3})?$/
masterCard = /^5[1-5][0-9]{14}$/
americanExpress = /^3[47][0-9]{13}$/

для разбитя на несколько строк
visa = ///^4 #start with 4
		[0-9]{12} #12 digits
		(?:[0-9]{3})?$ #new card have 16 digits
		///

masterCard = ///^5[1-5]  # start with51-55
				[0-9]{14}$  #14 digits
			///


#4 Operations

first && second = first and second
first || second = first or second

!first = not first

== и есть ===, можно также записать как is, а != будет isnt

=== - будет ошибкой

10 < a < 20 = (10 < a && a < 20)

для проверки поля-ключа у объекта
user =
	name: "Alex"
	age: 20
	lastVisit: do Date.now

"age" of user # ("age" in user) -> true

range = [10..20]
14 in range # проверка на сущьность -> true

#экзестенциальный оператор
book = 0
open book if book?

все это превратиться
if(book != null) {
	open(book);
}


помнишь object.speed = object.speed || 100
можно короче
object.speed ||= 100

object.speed or= 100 = (object.speed) || (object.speed = 100)

#functions
greet = (name) ->
	do something
	do change
	"Hello, #{name}!"
	do cooking

another = -> console.log("Hello!")

joke = (olo) ->
	if olo
		"hello"
	else
		"change"

#По возможности в CoffeeScript все является выражением
#Если хоти чтобы все таки небыло return в функции, то
darling = (name) ->
	"Hello, dear #{name}!"
	return

#Можно делать присваивание прямо в аргументе функции
yo = (name="Ilian",greeting="Bonjour") ->
	"#{greeting}, #{name}"

#arguments
normalize = (length,vectors...) ->

#вызвов функции
show update object
show update(object,10,20), "fast"

#the same
show()
do show

#it will be function!danger!
a +b

#анонимные самовызывающиеся функции

do -> do something

#if-else-then- -------------
#условия - это выражение

if isReady
	activate something
	if not isFull
		append something
else
	do prepare

#if not === unless

#the same
if isReady then activate something
activate something if isReady

#the same
unless isReady then do something
do prepare unless isReady


#ternary
action = if mode is "idle" then "sleep" else "wander"

#with function
show if message then message else warning

#switch
message = switch state
	when 0 then message = "request not initialized"
	when 1 then message = "server connection established"
	when 2 then message = "request received"
	when 3 then message = "processing request"
	when 4 then message = "request finished and response is ready"
	else message = "unknown state"

#loops
#while

#the same
while isReady
	do something

while isReady then do something

do something while isReady

#the same
while not isReady
	do prepare

until isReady
	do prepare

do prepare until isReady

#for in
#[0..10] - included
#[0...10] - not included
for i in [0..10]
	update i

#one string
for i in [0...10] then update i

#change increament by int
update i for i in [0..10] by 4

console.log i for i in [0..100] when isPrimy i

#проверить элементы массива и записать их в другой массив
primeNumbers  = (i for i in [0..100] when isPrimy i by 2)

#дополнитльная логика
show element for elemnet in array when element in rightElements

remove_index for element, index in array when element in leftElements

#for of

console.log  property for property of object

console.log value for property,value of object

#for in в js проходит по всем свойсвам объекта, включая наследуемые
#т.е. по всей цепочке прототипов, чтобы получить только родные свойства
#мы должны использовать метод hasOwnProperty
# в CoffeeScript проще

console.log value for own property, value of object

#bonus!
#функции в цикле
for event in ['click','mouseover','mouseout','focus']
	do (event) ->
		mySuperLibrary::["on#{event}"] = (callback) ->
			mySuperLibrary::on event,callback
			return
		return

#-----oop---------------------------

class Person
	constructor: (@name,@age) ->
		#@name = name
		#@age = age
	getInfo: ->
		"Name: #{@name}, Age: #{age}"
	#static method
	@myStatic: ->
		do something
	@myStaticNum: 123

class WebDev extends Person
	constructor: ->
		#we can call constrictor of parent
		super 10,20,30
		do something
	getInfo: ->
		super arg1,arg2
		"My Custom Info"

	#the problem is this doesn't point on object
	#to solve the problem someFunc =>
	problemThis:->
		someFunc =>
			process @age

	solveProblem: ->
		_this = this
		someFunc ->
			process _this.age


#call Prototype
Person::myMethod = -> say "hi"

petr = new Person("Petr",20)

#--------------------------------











