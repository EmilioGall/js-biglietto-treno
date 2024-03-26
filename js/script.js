// DATA COLLECTION

// Km Input

let userKm = prompt('Hello, please insert the number of Km you desire to travel.'); // String

userKm = parseInt(userKm); // number

console.log(userKm, typeof userKm); // ShowInConsole kmInput

// Age Input

let userAge = prompt('Thank you. Now, please insert your age.'); // String

userAge = parseInt(userAge); // number

console.log(userAge, typeof userAge); // ShowInConsole ageInput


// CALCULATIONS

if (!isNaN(userKm) && !isNaN(userAge) && userKm > 0 && userAge > 0) {

    // Entire price calculator

    let generatedPrice = userKm * 0.21; // Number

    console.log(generatedPrice, typeof generatedPrice); // ShowInConsole generatedPrice

    // Discounts calculator

    let discount = 0;

    if ((userAge < 18) && (userAge > 12)) { // Boolean

        discount = 20; // Number

    } else if (userAge > 65) { // Boolean

        discount = 40; // Number

    } else if (userAge < 12) { // Boolean

        alert("You are too young to purchase a ticket, please ask your parents for support."); // String
        document.getElementById("price").innerHTML = ("Not allowed");

    };

    console.log("discount in %", discount, typeof discount); // ShowInConsole discount

    const finalDiscount = generatedPrice * (discount / 100); // number

    console.log("discount in €", finalDiscount, typeof finalDiscount); // ShowInConsole finalDiscount
  
    const finalPrice = generatedPrice - finalDiscount; // number

    console.log("final price", finalPrice, typeof finalPrice); // ShowInConsole finalPrice

    // PRICE OUTPUT

    // Price approximation

    let lastPrice = finalPrice.toFixed(2); // Approximation of finalPrice

    console.log(lastPrice, typeof lastPrice); // ShowInConsole lastPrice

    document.getElementById("price").innerHTML = lastPrice; // Print lastPrice

} else {

    alert("Wrong data input!"); // String

}