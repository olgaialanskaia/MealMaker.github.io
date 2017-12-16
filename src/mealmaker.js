const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

  get appetizers() {
  	return this._appetizers;
},
  set appetizers(appetizersIn) {
  	this._appetizers = appetizersIn;
},
  get mains() {
  	return this._mains;
},
  set mains(mainsIn) {
  	this._mains = mainsIn;
},
  get desserts() {
  	return this._desserts;
},
  set desserts(dessertsIn) {
  	this._desserts = dessertsIn;
},
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses_desserts
  };
},
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
},

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
},

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', '`Calamari`', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 12.98);
menu.addDishToCourse('mains', 'Pasta Puttanesca', 9.57);
menu.addDishToCourse('mains', 'Parmigiana', 10.95);

menu.addDishToCourse('desserts', 'Tiramisu', 4.50);
menu.addDishToCourse('desserts', 'Panna Cotta', 4.25);
menu.addDishToCourse('desserts', 'Sfogliatella', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);
