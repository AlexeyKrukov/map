Q1
С точки зрения пользователя:
В хорошем приложении нет тормозов, багов, оно не закрывается само по себе, им приятно пользоваться, у него приятный интерфейс, оно бесплатное.
С точки зрения менеджера проекта:
Если на приложение нет или почти нет жалоб от клиентов и пользователей.
С точки зрения дизайнера:
Приложение выполнено в соответствии с правилами сочетаемости цветов, от его использования "не болят глаза" и нет жалоб от пользователей.
С точки зрения верстальщика:
Все элементы "на своем месте", то есть при наведении на элемент при просмотре dom-дерева выделится именно тот элемент, который описывается в дереве. Верстка не должна "разъезжаться" при изменении размера экрана, например.
C точки зрения серверного программиста:
Нет никаких проблем с выгрузкой, загрузкой данных, и, как следствие, провисаний, все, что связано с backend работает корректно и без нареканий с какой бы то ни было стороны.
Q2
Я разрабатывал сайты только с использованием технологии React/redux. Лично у меня иногда возникала такая проблема: компоненты с react принято переиспользовать, то есть использовать много раз во многих местах. Это одновременно и жирный плюс и жирный минус, по моему мнению, так как с одной стороны, это помогает уменьшить дублирование кода, а с другой, может произойти ситуация, когда ты что-то исправил в компоненте, он стал отображаться так, как требуется, но вместе с тем местом, где нужно было сделать исправления, перерисовался компонент и в других местах, то есть там, где это не нужно было делать.
Q3
Говоря по-русски, это умные компоненты и глупые компоненты. Глупые компоненты только отрисовывают то, что в них содержится и больше не делают ничего. Умные же компоненты могут манипулировать данными, менять их, например, из них можно вызвать экшен, если мы хотим поменять что-то в store
Q4
Наследование в JS было изанчально прототипным, позже, в es6, в язык добавили классы и ключевое слово extends, с помощью которого можно класс может унаследоваться от другого. Прототипный вариант я использовал только один раз здесь https://github.com/AlexeyKrukov/BlackJack-on-JS Наследование в es6 я использую постоянно, так как при создании react-компонента нужно наследоваться либо от Сomponent, либо от PureComponent.
Q5
Мне не приходилось покрывать код тестами, честно говоря. В рамках самообучения я немного освоил mocha.
Q6
Спросить у дизайнера или у старших товарищей. Никакой самодеятельности, чтобы не пришлось потом переделывать.
Q7
eslint, ide PHPStorm
Q8
stackoverflow, youtube, learn.javascript.ru, myrusakov. В основном, все мои интересы лежат в ит-сфере, ничем другим особо не интересуюсь.
Q9
У меня год опыта работы с js, с фронтом и бекендом, я студент первого курса магистратуры. Вот гитхаб: https://github.com/AlexeyKrukov Не судите строго. 
