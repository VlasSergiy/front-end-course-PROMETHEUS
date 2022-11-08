Опис завдання:
Відштовхуючись від отриманих знань про препроцесори, замініть коментарі на відповідні директиви.

Для виконання завдання скопіюйте шаблон в робочу область та замініть коментарі на Вашу реалізацію:

<style>
  $primary-color: #FFFFFF;
  $standard-font-size: 14px;

  @mixin radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }
  %text-box {
    color: /* ваше рішення */;
    font-size: /* ваше рішення */;
  }
  .box {
    /* ваше рішення */ %text-box;
    /* ваше рішення */ radius(5px);
    box-shadow: 1px 1px 3px 4px #777777;
  }
</style>