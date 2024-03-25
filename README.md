# Train Ticket Discount Counter

## Text of the exercise
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Logical Process

1. INPUT
    - [x] Ask the user, via prompt, for the number of Km he or she wants to travel.
    - [x] Ask the user, via prompt, for the passenger's age.

2. LOGICAL EXECUTION
    - [x] Calculate the entire price of the ticket without any discount.
    - [x] Calculate and apply 20% discount if user under 18yo
    - [x] Calculate and apply 40% discount if user over 65yo
    - [x] Launch Alert if younger than 12yo
    - [x] Approximate final price if needed

3. OUTPUT
    - [x] Print the right price for each age class with only two decimal numbers
