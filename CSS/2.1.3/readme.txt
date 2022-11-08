Опис завдання:
Стилізуйте меню за допомогою CSS стилів, звертаючись до елементів ТІЛЬКИ за допомогою селекторів атрибутів

- Замініть фоновий колір поля <input type="text"> на сірий колір (використовуйте ключове слово grey)
- Всім елементам <a>, значення атрибутів href яких починається з “https://” задайте чорний колір тексту (використовуйте ключове слово black)
- Елементу <a>, що містить слово “login” у значенні атрибута href замініть колір тексту на зелений (використовуйте ключове слово green) і відобразіть його перекресленим

Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на відповідні стилі:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CSS селектори атрибутів</title>
    <style>
      a {
        text-decoration: none;
        font-size: 18px;
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