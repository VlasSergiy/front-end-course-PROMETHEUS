const area = document.getElementById("area");
const button = document.getElementById("clear");
const LOCAL_STORAGE_KEY = "ls-key";

area.value = localStorage.getItem(LOCAL_STORAGE_KEY);// реалізуйте отримання даних із local storage

area.addEventListener("input", function() {

  localStorage.setItem(LOCAL_STORAGE_KEY, area.value);

});

button.addEventListener("click", function() {

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  area.value='';

});
