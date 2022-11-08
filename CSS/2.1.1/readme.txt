Опис завдання:
Згрупуйте CSS селектори з однаковими стилями, де можливо, таким чином, щоб відображення розмітки не змінилось.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS селектори</title>
    <style>
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px; 
        color: black;
        text-align: center;
      }
      p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px; 
        color: black;
      }
      a {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-decoration: none;
        color: black;
      }
      .article1 {
        border: 2px solid grey;
        padding: 10px;
        margin: 5px;
        width: 300px;
        display: inline-block;
      }
      .article2 {
        border: 2px solid grey;
        padding: 10px;
        margin: 5px;
        width: 300px;
        display: inline-block;
      }
      .article3 {
        border: 2px solid grey;
        padding: 10px;
        margin: 5px;
        width: 300px;
        display: inline-block;
      }
    </style>
  </head>
  
  <body>
    <article class="article1" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  
    <article class="article2" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  
    <article class="article3" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  </body>
</html>

Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на Вашу реалізацію:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS селектори</title>
    <style>
      h3, p, a {
  
        /* додайте CSS стилі, якщо потрібно */
  
      }
      h3 {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      p {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      a {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      .article1, .article2, .article3 {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      .article1 {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      .article2 {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
      .article3 {
  
        /* додайте CSS стилі, якщо потрібно  */
  
      }
    </style>
  </head>
  
  <body>
    <article class="article1" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  
    <article class="article2" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  
    <article class="article3" >
      <h3>Заголовок</h3>
      <p>Текст</p>
      <a href="#">Детальніше</a>
    </article>
  </body>
</html>