// class Dog {
//     constructor(name,breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// }

// let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
// let bigFluffyDog2 = new Dog("Woody", "labrador");


// console.log(bigFluffyDog1);
// console.log(bigFluffyDog2);


class Breakfast {
    constructor(food,drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad,soup,entree,dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let dinnerTonight = new Dinner("Ceasar", "Split Pea", "Ceviche", "Creme Brulee");
console.log(dinnerTonight)
