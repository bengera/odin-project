/*

//////// 99 BOTTLES OF BEER ON THE WALL ////////////////////////////////////

var word = "bottles";

var count = "99";

while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    
    console.log(count + " " + word + " of beer ");

    console.log("Take one down, pass it around,");

    count = count -1;

    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall");
    } else {
        console.log("No more " +  word + " of beer on the wall");
    }
}

*/

//////// TEST FOR JOKES CORRECTION ////////////////////////////////////
/*
var joke = "Javascript walked into a bar.....";
var toldJoke = false;
var punchline = "Better watch out for those semi-colons";

var percentage = 20;
var result;

if (toldJoke == true) {
    alert(punchline);
} else {
    alert(joke);
}

*/

/// FUNCTION CODE MAGNET

/*function whatShallIWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

whatShallIWear(80);
whatShallIWear(60);
whatShallIWear(50);

*/


//The Thing-A-Ma-Jig exercise
/*
function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num -1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(6);
console.log(clunkCounter);

*/
//DEBUGER

/*
function clunk (times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
        debugger;
    }
}

function thingamajig (size) {
    var facky = 1;
    clunkCounter = 0;
    debugger;
    if (size == 0) {
        display("clank");
        debugger;
    } else if (size == 1) {
        display("thunk");
        debugger;
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
            debugger;
        }
        clunk (facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
    debugger;
}

var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

*/



//Array
/*
var expenses = [250000, 420000];

var monday = expenses [0];
alert ("Expenses for Monday were " + monday);

var tuesday = expenses [1];
alert ("Expenses for Tuesday were " + tuesday);

var numExpenses = expenses.length;
console.log(numExpenses);

*/

///FRUITS FUNCTION
/*
function fruits(fruit) {
    console.log(fruit);
}

fruits("banana");
fruits("apple");
fruits("pear");
fruits("durian"); 

*/

//Return function
/*

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a*b;
    }
}

multiply(5, 10);

*/
/*
function checkDriverAge(age) {
  
   if (Number(age) < 18) {
       alert("Sorry, you are too young to drive. Power off");
   } else if (Number(age) > 18) {
       alert("Powering on. Enjoy the ride!");
   } else if (Number(age) === 18) {
       alert("Congratulations on your first year of driving. Enjoy the ride!");
   }
}


checkDriverAge(6);

*/

//Phrase 0-Matic
/*
function makePhrases() {  //define function that can be called later
    var words1 = ["Trinh", "meo", "meo meo", "Bap", "Korn"]; // 3 arrays that hold strings (words)
    var words2 = ["beautiful", "cute", "lovely", "positive", "social"];
    var words3 = ["cooks well", "speaks english well", "works hard", "makes a house a home", "full of life"];

    var rand1 = Math.floor(Math.random() * words1.length); //Math.random generates a number between 0-1 (not including 1)
    var rand2 = Math.floor(Math.random() * words2.length); // that random number is multiplied by the length of the array (3)
    var rand3 = Math.floor(Math.random() * words3.length); // MAth.floor rounds the number down to the nearest integer (whole number)

    var phrase = words1[rand1] + " is " + words2[rand2] + " and " + words3[rand3]; //take the randomly selected words to create a phrase
    alert(phrase); // show the phrase

}

makePhrases(); //call the function makePhrases
*/


/*

//Bubble-R-Us 

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


 
function printAndGetHighScore(scores) {
var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i]
    }
}
return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);



*/




/*
var genres = [];

genres.push("Rockabilly"); // creates a new item in the next available index
genres.push("Ambient");
genres.push("Synthwave");
genres[6] =("Dark-Synthwave");
console.log(genres[0]);
console.log(genres[1]);
console.log(genres[2]);
console.log(genres[3]);
console.log(genres[4]);
console.log(genres[5]);
console.log(genres[6]);
console.log(genres[7]); // 3,4,5,7 are sparse arrays



var size = genres.length;
console.log(size);
    
 */

/* 
 
//OBJECTS

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}

var cardi= {
    make: "Cadillac",
    mode: "GM",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    "on sale": true
}

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if (dog.weight > 20) {
    bark ="WOOF WOOF";
} else {
    bark = "woof woof";
}


var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

*/

/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

array.shift(); // remove banana

array.sort(); // put array in order

array.push("Kiwi"); // add kiwi

array.splice(0,1); // at position 0 remove 1 item

array.reverse(); //reverse order of elements

*/

// DATABASE ACCESS
/*
var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "Ben",
        password: "bengera"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tired from all that leanring",
        
    },
    {
        usename: "Sally",
        timeline: "Javascript is so cool!"
    }
];

var userNamePrompt = prompt ("What's your username?");
var passWordPrompt = prompt ("What's your password?");

function signIn(user, pass) {
    if (user == database[1].username &&
        pass == database[1].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passWordPrompt);

*/




// POKEMON DATABASE
/*
var database = [{
        name: "Bulbasaur",
        type: "plant"
    },

    {
        name: "Ivysaur",
        type: "plant"
    }


];

var pokemonNamePrompt = prompt("Enter a pokemon name");

function getPokemon(name, type) {
    if (name == database[0].name) {
        console.log(datbase);
    } else {
        alert("Please enter a correct name");
    }
}

getPokemon(pokemonNamePrompt);

*/

/*
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

function prequal (car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal (chevy);


if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on " + taxi.make + " " + taxi.model);
}

*/


/*
//POKEMON FUNCTIONS AND OBJECTS

var pikachu = {
    name: "Pikachu",
    type: "electric",
    evolved: true
}

var pichu = {
    name: "Pichu",
    type: "electric",
    evolved: false
}

var bulbasaur = {
    name: "bulbasaur",
    type: "grass",
    evolved: false
}

var golbat = {
    name: "golbat",
    type: "poison",
    evolved: true
}

var zubat = {
    name: "zubat",
    type: "poison",
    evolved: false
}

var geodude = {
    name: "geodude",
    type: "rock",
    evolved: false
}

var golem = {
    name: "golem",
    type: "rock",
    evolved: true
}



function findElectric(pokemon) {
    if (pokemon.type === "electric" && pokemon.evolved === true) {
        return true;
    } else if (pokemon.type == "electric" && pokemon.evolved === false) {
        return (console.log(pokemon.name + " " + "is electric but hasn't evolved"));

    }
}

function findPoison(pokemon) {
    if (pokemon.type === "poison" && pokemon.evolved === true) {
        return true;
    } else if (pokemon.type == "poison" && pokemon.evolved === false) {
        return (console.log(pokemon.name + " " + "is poison but hasn't evolved"));

    }
}

function findRock(pokemon) {
    if (pokemon.type === "rock" && pokemon.evolved === true) {
        return true;
    } else if (pokemon.type == "rock" && pokemon.evolved === false) {
        return (console.log(pokemon.name + " " + "is rock but hasn't evolved"));

    }
}

var pokemonCheck = findElectric(pikachu);

if (pokemonCheck) {
    console.log("This is an electric type pokemon and it has evolved");
} else {
    console.log("This is not what you are looking for");
}


var pokemonCheck = findPoison(golbat);


if (pokemonCheck) {
    console.log("This is a poison type pokemon and it has evolved");
} else {
    console.log("This is not what you are looking for");
}

var pokemonCheck = findRock(golem);


if (pokemonCheck) {
    console.log("This is a rock type pokemon and it has evoled");
} else {
    console.log("This is not what you are looking for");
}

*/


//SUPER SECRET SOMETHING
/*
function getSecret(file, secretPassword) {
    file.opened =  file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secrets for you.";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr Evel's next meeting is in Philadelphia");
secret = getSecret(superSecretFile, 2);
console.log(secret);

*/

/*
//MAKING CARS

function makeCar () {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };

    return car;
    
}

function displayCar (car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar (carToSell);

var carToSell = makeCar();
displayCar (carToSell);
*/

/*
// OBJECT METHODS
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    mileage: 88000,
    started: false,
    fuel: 0,

    start: function () { /// start stop and drive are object methods
        if (this.fuel == 0) {
            alert("The car is on empty, fill up before starting");
        } else {
            this.started = true;
            
        }
        
        
    },

    stop: function () {
        this.started = false;
        alert("The car has stopped.");
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert (this.make + this.model + " goes zoom zoom");
                this.fuel = this.fuel -1;
            } else {
                alert ("Uh oh, out of fuel.");
                this.stop
            }
        } else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }

  

};


fiat.addFuel(3);
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop();

*/  


/*
//PRACTICING WITH .this which refers to the current object followed by the property
var song = { 
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: true,

    play: function() {
        if (this.playing) {
           this.playing = true;
           console.log("Playing " + this.name + " by " + this.artist);
        }


    },

    pause: function () {
        if (this.playing) {
            this.playing = false;
            
        }
    }
};

song.play();
song.pause();

*/

/*
//MAGIC EIGHTBALL
var eightBall = {
    index: 0,
    advice: ['yes', 'no', "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    
    look: function () {
        return this.advice[this.index];
    }
    


};

var getArray = eightBall.advice[0];
console.log(getArray); // get index 0 of array inside object


for (var prop in eightBall) { // iterate though an objects properties (for in)
    console.log(prop + ":" +eightBall[prop]);
}

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

*/
/*
function init() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redText");

    var planetCheck = document.getElementById("greenplanet");
    var altText = planetCheck.getAttribute("alt");
    if (altText == null) {
        console.log("Oh, I guess there isn't an alt attribute.");

    } else {
        console.log("I can't see the image in the console,");
        console.log(" but I'm told it looks like " + altText);
    
    }

}
    
    window.onload = init;

*/
 //TESTING
 /*
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 ={"abcdef":123};
var test8 = ["abcdef", 123];
function test9() {return "abcdef"};
var test10 = null;

var test11 = 0/0;
console.log(typeof test11);

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (99 == "99") {
    console.log("a number equals a string!");

} else {
    console.log("No way a number equals a string");
}
   
if ("banana" < "apple") {
    console.log("this is true");
} else {
    console.log("this is false");
}

var a = 3 * "4"; // 12
var b = 3 + "4"; // 34
var c = 3 + 4; // 7
console.log(a);
console.log(b);
console.log(c);

var order = 3 + " bananas " + 2 + " apples";
console.log(order);

*/
// FIND PARKING SPOT
/*

function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}

var chevy = {
    make: "Chevy",
    model: "Bel Air"
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

var fiat1 = {
    make: "Fiat",
    model: "500"
};

var fiat2 = {
    make: "Fiat",
    model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);

console.log(loc1,loc2,loc3,loc4);

*/
 // Lie Detector for truthy and falsey practice
/*
 function lieDetectorTest () {
     var lies = 0;

     var stolenDiamond = { };
     if (stolenDiamond) {
         console.log("You stole the diamond");
         lies++;
     }

     var car = {
         keysInPocket: null
     };

     if(car.keysInPocket) {
         console.log("Uh oh, guess you stole the car!");
         lies++;
     }

     if (car.emptyGasTank) {
         console.log("You drive the car after you stole it!");
         lies++;
     }
     var foundYouAtTheCrimeScene= [ ];
     if (foundYouAtTheCrimeScene) {
         console.log("A sure sign of guilt");
         lies++;
     }

    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item! ");
        lies++;
    }

    var yourName = " ";
    if (yourName) {
        console.log(" Guess you lied about your name");
        lies++;
    }
    return lies;
 }

 var numberOfLies = lieDetectorTest(); 
 console.log(" You told " + numberOfLies + " lies!");
 if (numberOfLies >=3) {
     console.log("Guilty as charged");
 }

*/

/*

var a = NaN;
var b = NaN;

if (a=b) {
    console.log("a is equalto b");
} else {
    console.log("a is not equal to b");
}

// in this case NaN is not equal to itself

if (isNaN(myNum)) { // see if a variable myNum holds a NaN value
    myNum = 0;
}

var myNum
console.log(myNum);

var x = null; // null is an object
console.log(typeof x);

if (1 == "1") {
console.log("this is true");
} else {
    console.log("this is false")
}

if (0 == false) {
    console.log("this is also true")
} else {
    console.log("this is just false")
}

*/
/*

////////STRING METHODS////////////

-----------------------charAt-------------------------
var input = "jenny@wikedylysmart.com";
for(var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "m") {
        console.log("There's an m sign at index " + i);
    } else {
        console.log("index" +i); 
    }
}
*/
/*
/*-----------------------indexOf-------------------------

var phrase ="the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);
//cat is the argument

index = phrase.indexOf("the", 5); //add starting index for search
console.log("there's a the sitting at index " + index);
//taking 2 arguments

index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index);
//if the string cant be found. -1 is returned


/*-----------------------substring method--------------------

var data = "name|phone|address";
var val = data.substring(5,10);
console.log("substring is " + val);

var val = data.substring(5);
console.log("substring is " + val);

/*-----------------------split method--------------------

var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is ", vals);

*/
/*
function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);
*/
/*
function isEqual (x,y) {
    if (x==100 || y===100) {
        console.log("This is equal to 100")
        return true;
    } 
    else if (x+y===100) {
        console.log("Both numbers are equal to 100")
        return true;
    }
    else {
        console.log("Neither numbers are equal to 100")
        return false;
    }
}

function pageLoadHandler() {
    alert("Page is loaded!");
}

window.onload = pageLoadHandler;

console.log(isEqual(100,0));
console.log(isEqual(0,100));
console.log(isEqual(50,50));
console.log(isEqual(10,90));
console.log(isEqual(2,5));
console.log(isEqual(99,1));

*/

// console.log(5 + 5 + 5 + 5 + 5 + 5);



