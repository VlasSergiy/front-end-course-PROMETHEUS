Опис завдання
Зробіть так, щоб по кліку на посилання не відбувалося переходу на іншу сторінку та за допомогою alert виникало повідомлення: "Ви не можете перейти за цим посиланням!".

Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на Вашу реалізацію:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>DOM</title>
  </head>
  
  <body>
    <a href="/some-link.html" id="link">My URL</a>
    <script>
      const link = document.getElementById("link");
      link.addEventListener("click", function(event) {
  
          /* ваша реалізація */
  
      });
    </script>
  </body>
</html>