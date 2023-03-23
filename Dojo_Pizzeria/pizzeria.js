// Create a function that makes a random Pizza
var crusts = ["traditional", "hand tossed", "deep dish", "thin crust", "stuffed crust", "gluten free"]
var sauces = ["marinara", "white sauce", "traditional", "three cheese", "BBQ"]
var cheeses = ["mozzarella", "provolone", "cheddar", "sharp", "whistle pig", "colby jack", "parmesean"]
var toppings = ["sausage", "pepperoni", "ham", "onions", "mushrooms", "peppers", "bacon", "pineapples", "olives", "chicken"]

function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var customPizza = {};
    customPizza.crusts = randomPick(crusts);
    customPizza.sauces = randomPick(sauces);
    customPizza.cheeses = randomPick(cheeses);
    customPizza.toppings = randomPick(toppings);
    return customPizza;
}

console.log(randomPizza());