Опис завдання
В розмітці 6 <li> елементів, двоє з яких мають клас "highlight". Використовуючи JavaScript та властивість classList, зберіть всі <li> елементи за допомогою селектора querySelectorAll, проітеруйте за ними (використовуючи forEach), додайте клас "highlight" там, де він відсутній та видаліть, де присутній (використовуючи той самий метод для обидвох завдань - видалення та додавання).

Зараз розмітка має вигляд:


Після виконання завдання:


Шаблон в робочу область копіювати НЕ потрібно. Додайте тільки реалізацію.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>DOM</title>
    <style>
      .highlight {
        background-color: lightgreen;
      }
    </style>
  </head>
  
  <body>
    <ul>
      <li>Hello World</li>
      <li class="highlight" >Hello World</li>
      <li>Hello World</li>
      <li>Hello World</li>
      <li class="highlight" >Hello World</li>
      <li>Hello World</li>
    </ul>
  </body>
</html>