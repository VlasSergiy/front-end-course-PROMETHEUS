Опис завдання:
Реалізуйте зміну кольору елемента, використовуючи ПСЕВДОКЛАСИ

- Змінюйте колір тексту на синій, коли курсор миші знаходиться над посиланням (елеметом <a>). Використовуйте ключове слово blue)
- Змінюйте фоновий колір елементів <input> на #E0FFFF, коли вони у фокусі

Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на відповідні стилі:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS псевдоселектори</title>
    <style>
      a {
        text-decoration: none;
        font-size: 18px;
        color: black;
      }
  
      /* додайте CSS стилі */
  
    </style>
  </head>
  
  <body>
    <nav>
      <a href="https://prometheus.org.ua/">Головна</a>
      <ul>
        <li><a href="https://prometheus.org.ua/about-us/">Про нас</a></li>
        <li><a href="https://prometheus.org.ua/courses-catalog/">Курси</a></li>
        <li><a href="https://prometheus.org.ua/partnership/">Співпраця</a></li>
        <li>
          <a href="login.php">Увійти до кабінету:</a>
          <input type="text" name="login">
          <input type="password" name="password">
        </li>
      </ul>
    </nav>
  </body>
</html>