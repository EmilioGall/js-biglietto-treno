// DATA COLLECTION

// Km Input

let userKm = prompt("Hello, please insert the number of Km you desire to travel."); // String

userKm = parseInt(userKm); // number

console.log(userKm, typeof userKm); // ShowInConsole KmInput

// Age Input

let userAge = prompt("Thank you. Now, please insert your age."); // String

userAge = parseInt(userAge); // number

console.log(userAge, typeof userAge); // ShowInConsole AgeInput


// CALCULATIONS

// Entire price calculator

let generatedPrice = userKm * 0.21; // Number

console.log(generatedPrice, typeof generatedPrice); // ShowInConsole generatedPrice

// Discounts calculator

if ((userAge < 18) && (userAge > 12)) { // Boolean
    finalPrice = generatedPrice - (20/100 * generatedPrice) // Number
} else if (userAge > 65) { // Boolean
    finalPrice = generatedPrice - (20/100 * generatedPrice) // Number
} else if (userAge < 12) { // Boolean
    alert("You are too young to purchase a ticket, please ask your parents for support.") // String
    document.getElementById("price").innerHTML = ("Not allowed");
} else {
    finalPrice = generatedPrice // Number
};

console.log(finalPrice, typeof finalPrice); // ShowInConsole finalPrice

// Price approximation

let lastPrice = finalPrice.toFixed(2);

console.log(lastPrice, typeof lastPrice); // ShowInConsole finalPrice


// PRICE OUTPUT

document.getElementById("price").innerHTML = lastPrice;