function Hamster() {
this.food = [];
}


Hamster.prototype.foundFood = function(something) {
    this.food.push(something);
};
      