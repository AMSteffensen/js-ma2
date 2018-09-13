//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function talk () {
    console.log(this.sound)
}
let animal = {
    talk: talk
}
let cat = {
    sound: 'meow!'
}
let dog = {
    sound: 'woof!'
}
let fox = {
    sound: 'Wa-pa-pa-pa-pa-pa-pow!'
}
let prarieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}

Object.setPrototypeOf(cat, animal)

animal.talk = function() {
    console.log('I say: ' + this.sound)
}
Object.setPrototypeOf(dog, animal)
cat.talk()
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
Object.setPrototypeOf(fox, animal)
fox.talk()


var john = {
    name: 'Andreas',
    yearOfBirth: 1989,
    job: 'Digital Nomad'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth)
    }
    
}

var andreas = new Person('Andreas', 1989, 'Digital Nomad');
andreas.calculateAge();
var sara = new Person('Sara', 1972, 'Designer');
sara.calculateAge();

var terry = new Person('Tery', 2004, 'Student');
terry.calculateAge();
 
Person.prototype.calculateAge = 
    function() {
        console.log(2019 - 
            this.yearOfBirth);
};

    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth)
    }

andreas.calculateAge();

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function() {
    console.log('HI!' + this.name.first + '.');
}


/*

function Person(first, last, age, gender, interests) {
    this.name
}

/*
function Bear(type){
    this.type = type
}

Bear.prototype.growl = function() {
    console.log('The ' + this.type + ' bear says');
}

function Grizzly() {
    Bear.call(this, 'grizzly');
}
Grizzly.prototype = Object.create(Bear.prototype);

console.log(grizzly.growl(), polar.growl())

//var grizzly = new Bear('grizzly');
//var polar = new Bear('polar');

//grizzly is now an instance of Bear
//console.log(grizzly instanceof Bear ) 
//polar is now an instance of Bear
//console.log(polar instanceof Bear ) 

//console.log(grizzly, polar);
//console.log(grizzly.growl());

*/


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var leftSlice = numbers.slice(0,4);
var rightSlice = numbers.slice(5,10);
var slicedNumbers = leftSlice + ',' + rightSlice;
console.log(slicedNumbers);

//3. Delete the last number in the array that you created above.


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


//7. Create a simple function that logs the date.

