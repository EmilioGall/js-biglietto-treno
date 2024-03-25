// DATA COLLECTION

// Km Input

const userKm = prompt("Hello, please insert the number of Km you desire to travel."); // String

console.log(userKm, typeof userKm); // ShowInConsole KmInput

// Age Input

const userAge = prompt("Thank you. Now, please insert your age."); // String

console.log(userAge, typeof userAge); // ShowInConsole AgeInput


// ENTIRE PRICE GENERATOR

let generatedPrice = userKm * 0.21; // Number

console.log(generatedPrice, typeof generatedPrice); // ShowInConsole generatedPrice

// DISCOUNTS CALCULATOR

if (userAge < 18) {
    finalPrice = generatedPrice * (20/100 * generatedPrice)
} else if (userAge > 65) {
    finalPrice = generatedPrice * (20/100 * generatedPrice)
} else {
    finalPrice = generatedPrice
}

console.log(finalPrice, typeof finalPrice); // ShowInConsole finalPrice


// PRICE OUTPUT

document.getElementById("price").innerHTML = finalPrice;