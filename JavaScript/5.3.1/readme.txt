Опис завдання

Оголосіть об’єкт hen, використовуючи літерал об’єкта.

Об’єкт повинен містити 3 параметри:
- властивість name зі значенням "Chick"
- властивість eggCount зі значенням 0
- метод layAnEgg, який збільшує значення eggCount на 1 при кожному виклику (для цього потрібно використати this) та виводить в консоль Done! після цього
Приклади викликів:

console.log(hen.name); // => "Chick"
console.log(hen.eggCount); // => 0
hen.layAnEgg() // => "Done!"
hen.layAnEgg() // => "Done!"
console.log(hen.eggCount);  // => 2