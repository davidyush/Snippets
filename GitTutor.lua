Git tutorial

2)для создания репозитория из данного каталога
>> git init

3) добавить файл в репозиторий
>> git add filename.html
>> git commit -m "First Commit"
что и зачем комит это вопрос

4) для проверки сотояния
>> git status
ну и он покажет на какой ветки находишся

5)Теперь если мы внесем изменения в файл и проверим статус,
то гит расскажет что он знает и поведует что делать далее

6)Индексация изменений.
ща проиндексируем изменения,которы сделаи на 5 шагу
>> git add filename.html
>> git status

7) Индексация и коммиты
у нас есть 3 файла a.html b.html c.html
и мы хотим закомитить изменения, так чтобы первые два были в одном коммите, а третий во втором
>> git add a.html
>> git add b.html
>> git commit -m "Changes for a and b"
>> git add c.html
>> git commit -m "Unrelated Changes for c"

8) ща будем учиться комитить изменения в репозиторий
типа если написать просто
>>git commit
то выберется консольный редактор по умолчанию

9)Изменения, а не файлы
тобишь гит работает с изменениями, а не с файлами
и когда мы пишем
>> git add filename
то это не значит добавить файл в репозиторий, а
нужно отметить текущее состояние файла, коммит которого будет приведен ниже

чтож добавим о5 изменения в наш файл
потом
>> git add filename.html

и о5 добавим изменения

и теперь посмотрим статус
>> git status
и у нас 2 темы: 1)Changes to be committed 2)Changes not staged for commit
т.е. первое изминение норм, а второе нет, т.к. оно не проиндексированно(git add)
и если сейчас мы сделаем комит, то второе изминение не зачтется
проверим:
>> git commit -m "Added standart html tags"
>> git status

теперь чтобы добавить второе изменение
>> git add.
>> git status

>> git commit -m "Added html head"

10) История
набери и увидешь
>>git log

и выведет всю историю с коммитами
это не очень удобно, можно напимер вывести так чтобы одно изменение в одной строке
>> git log --pretty=oneline

и вообще есть много вариантов как вывести историю
>>git log --pretty=oneline --max-count=2
тобишь последние два изменения
>> git log --pretty=oneline --since='5 minutes ago'
>> git log --pretty=oneline --until='5 minutes ago'
>> git log --pretty=oneline --author=<your name>
>> git log --pretty=oneline --all

короче они сами говорят за себя

можно изощряться и это круто
>> git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short

детальки:
--pretty="..." — определяет формат вывода.
%h — укороченный хэш коммита
%d — дополнения коммита («головы» веток или теги)
%ad — дата коммита
%s — комментарий
%an — имя автора
--graph — отображает дерево коммитов в виде ASCII-графика
--date=short — сохраняет формат даты коротким и симпатичным

11) алиасы
короче это конфиги в файле .gitconfig - он находится в главной папке, ну т.е. пользователя ОС
вот напимер это может облегчить жизнь:
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p

12) научимся получать старые версии
>> git hist

вот что мне выдало:
* 5320123 2014-03-31 | Added html header (HEAD, master) [fleple]
* 1683ac9 2014-03-31 | Added standart html tags [fleple]
* cbbfd9f 2014-03-31 | My First Commit [fleple]

ну и для того чтобы посмотреть что было до изменений, нам нужен хэш
вот так вот
>>git checkout <hash>
>>cat hello.html
и он выдает Hello, World

чтобы вернутся обратно
>> git checkout master
>> cat hello.html

master - это ветка по умолчанию

13)создание тегов версий
и так назовем текущую версию v1
>> git tag v1
а перед текуще назовем v1-beta
для начала нужно перейти на предидущую версию, можно не пользоваться поиском по хэшу, а вот так
^ - обозначает родителя
>> git checkout v1^

короче все гут, теперь переключатся легко
>> git checkout v1
>> git checkout v1-beta

чтобы посомотреть все теги:
>> git tag

а чтобы посмотреть теги в логах
>> git hist master --all

14) Отмена локальных изменений до индексации
убидимся что мы в мастере
>> git checkout master

ситуация такая : изменяем файл и хотим отменить последний коммит
изменим нащ файл

>>git status

покажет что файл изменен но не проиндексирован
вводим эти три команды и убеждаемся что все хорошо, благадоря первой :)
>> git checkout hello.html
>> git status
>> cat hello.html

и последнего изменения как не бывало.

15) теперь добавим изменение в файл, проиндексируем и удалим, этож пиздато
зайдем в наш файл и изменим его
>>git add hello.html
>>git status

показывает что таки да мы что-то изменили
А теперь выполним сброс буферной зоны
>> git reset HEAD hello.html
мы сбросили буферную зону в HEAD, но нежелательные изменения все еще остались
>> git checkout hello.html
>> git status
и все чистенько

16) Отмена коммитов
отменим коммит, вставив другой
Для начала о5 изменим файл
>> git add hello.html
>> git commit -m "Oops, we didn't want this commit"

и так чтобы отменить коммит, нужно сделать коммит который удалит изменения
>> git revert HEAD
лично у меня открылся редактор, наверху я изменил текст и сохранил, потом
гит выдал что типа да ок
зедсь мы ипользовали HEAD, но можно использовать просто хэш

>>git hist
показывает также отмененные коммиты

17) Удаление коммитов из ветки
удалить так чтобы даже в git log его не было

прежде всего нужно отметить последний коммит тегом
>> git tag oops

* 235745c 2014-04-01 | Revert "Oops, we didn't want this commit,no,that's ok" (HEAD, master) [fleple]
* 4ab4dfe 2014-04-01 | Oops, we didn't want this commit [fleple]
* 5320123 2014-03-31 | Added html header (v1) [fleple]
* 1683ac9 2014-03-31 | Added standart html tags (v1-beta) [fleple]
* cbbfd9f 2014-03-31 | My First Commit [fleple]
'
глядя на всю историю видно, что нежелательные коммиты идут до v1
>> git reset --hard v1
>> git hist

и все замечательно..почти
>> git hist -all
и мы видим два нежелательных коммита
т.е. коммиты все езе в репозитории, но уже не в master, однако если бы не было бы тега, то
сборщик мусора уничтожил бы это.
почему же мы оставили? говорят не безопасно!

18)удалим нахуй тег oops
>> git tag -d oops
>> git hist --all

и наконец больше их нету.

19) теперь еще внесем изменения в коммиты

для начала о5 изменим файл, добавив имя автора
>> git add hello.html
>> git commit -m "Add an author comment"

и тут мы вспоминаем , что забыли добавить email в коммент, сновно открываем и добавляем mail
но теперь нам надо изменить предидущий коммит
>> git add hello.html
>> git commit --amend -m "Add an author/email comment"
и все гут

20) Перемещение файлов..завтра..
а получилось послезавтра..
перенесем наш hello.html в папку lib

>> mkdir lib
>> git mv hello.html lib
>> git status

и у нас вот такое :
#	renamed:    hello.html -> lib/hello.html
а это значит что hello.html удален
и lib/hello.html был создан

все что мы сделали можно было бы также сдеть воттаквот:
>> mkdir lib
>> mv hello.html lib
>> git add lib/hello.html
>> git rm hello.html

21) добавим еще файл в наш репозиторий
index.html в общую папку(не lib)
>> git commit -m "Added index.html"

22) структура католога .git
>> ls -C .git

вот что выдало:
.git:
branches  COMMIT_EDITMSG  config  description  HEAD  hooks  index  info  logs  objects  ORIG_HEAD  refs

>> ls -C .git/objects
вот что дает:
0e  16  18  19  1c  23  3c  45  4a  4b  4f  53  7d  83  8e  a1  a6  b6  b9  be  cb  e2  e3  e9  f5  f8  info  pack

это файлы содержащие объекты, хранящиеся в git, они закодированы

>>cat .git/config
откроет файл кофигурации, он отдельный для каждого проекта

ветки и теги
>> ls .git/refs
>> ls .git/refs/heads
>> ls .git/refs/tags
>> cat .git/refs/tags/v1

>> cat .git/HEAD - содержит ссылку на текущую ветку

23)Работа с объектами
посмотрим последий коммит

>>git hist --max-count=1

выведем главный коммит
>> git cat-file -t <hash> --commite
>> git cat-file -p <hash>
--tree be7c0fdc5d11e5b0e173a2cdac201ce8004b720c
--parent 1c60b61f3a858ada26115affd988bd30a87e07ab
--author fleple <davidyushkov@gmail.com> 1396522565 +0400
--committer fleple <davidyushkov@gmail.com> 1396522565 +0400

поскольку у нас есть алиас, то мы можем сделать круче
>> git type <hash>
>> git dump <hash>

а теперь будем искать дерево, зачем? классно же
>> git cat-file -p be7c0fdc5d11e5b0e173a2cdac201ce8004b720c

вот что мне выдало:
100644 blob 45b8354b176f11eacb729a38d11e8e118b90cdd4	index.html
040000 tree 8e2ac4e08a74c44e94e7ebb5863c9c88b6fddc7b	lib
классно, полезно?

вывод каталога lib
>> git cat-file -p <libhash>

я сделал вот так:
>>git cat-file -p 8e2ac4
и вот что выдало:
100644 blob 0e716c860f347a8e96805e621d5e32ca5ae68120	hello.html

посмотрим на hello.html
>> git cat-file -p <hellohash> --(в данном случаи это) - 0e716c
вывод:
<!-- Author: Storoj George  sgeorge@gmail.com-->
<html>
	<head></head>
	<body>
		<h1>Hello, World</h1>
	</body>
</html>

24) создание ветки
>> git checkout -b style
--Switched to a new branch 'style'
>> git status
--# On branch style
--nothing to commit (working directory clean)
>>touch lib/style.css

добавим небольшой стиль в файл и

>> git add lib/style.css
>> git commit -m "Added css stylesheet"

поставим линк на стиль в hello.html
>> git add lib/hello.html
>> git commit -m "Hello uses style.css"

изменим index.html, добавив туда также link на стиль

>> git add index.html
>> git commit -m "Updated index.html"

25) навигация по веткам

на галвную ветвь
>> git checkout master
>> cat lib/hello.html

и выдаст файл без линка на стили

>> git checkout style
>> cat lib/hello.html

и выдаст файл с линком

26) добавим ReadMe.txt в главный файл с текстом ...
>> git checkout master
>> git add README
>> git commit -m "Added README"
























