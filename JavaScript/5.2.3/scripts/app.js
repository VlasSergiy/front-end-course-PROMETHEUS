function getDayOfWeek(Number) {
   const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday', 'Sunday'];
   if (Number >= '1' && Number <= '7') {
     return dayOfWeek[Number - 1];
   } else {
     return null;
   }
}