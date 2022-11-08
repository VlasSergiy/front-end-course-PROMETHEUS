Опис завдання

Маємо елемент <textarea> та кнопку "Clear".

- після кожного введеного символу у <textarea> все значення має зберігатись у local storage
- при натисканні кнопки "Clear" потрібно видалити значення з <textarea> та local storage. Але тільки ті дані, які ввів користувач (тобто звертатися за LOCAL_STORAGE_KEY)
- коли користувач закриє сторінку, а потім відкриє її знову - він повинен побачити останнє введене значення
Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на Вашу реалізацію:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Local Storage</title>
  </head>
  
  <body>
    <textarea id="area" placeholder="Your message..."></textarea>
    <button id="clear">Clear</button>
  
    <script>
      const area = document.getElementById("area");
      const button = document.getElementById("clear");
      const LOCAL_STORAGE_KEY = "ls-key";

      area.value = // реалізуйте отримання даних із local storage

      area.addEventListener("input", function() {
  
        // реалізуйте зберігання введеного користувачем значення у local storage
  
      });
  
      button.addEventListener("click", function() {
  
        // реалізуйте видалення значення з local storage
        // та <textarea>
  
      });
    </script>
  </body>
</html>