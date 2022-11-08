Опис завдання

Розподіліть елементи рівномірно, вздовж головної осі контейнера, використовуючи Flexbox:
1. Відстані між кожною парою сусідніх елементів рівні, перший елемент притиснутий до початку контейнера по головній осі, а останій до кінця
2. Елементи розташовуються по центру контейнера
3. Якщо елементи не поміщаються в одному рядку, то переносяться в наступний


Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на Вашу реалізацію:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Flexbox</title>
    <style>
      .container {
        height: 300px;
        position: relative;
        border: 1px solid #DCDCDC;
        background-color: #F5F5F5;
        display: /* додайте відповідне значення */;
        justify-content: /* додайте відповідне значення */;
        align-items: /* додайте відповідне значення */;
        flex-wrap: /* додайте відповідне значення */;
      }
      .item {
        width: 300px;
        height: 35px;
        margin: 10px;
        padding-top: 15px;
        border-radius: 5px;
        background-color: #ADD8E6;
        text-align: center;
        color: #333;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="item">Flexbox Item 1</div>
      <div class="item">Flexbox Item 2</div>
      <div class="item">Flexbox Item 3</div>
      <div class="item">Flexbox Item 4</div>
    </div>
  </body>
</html>