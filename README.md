# Train Ticket Discount Counter

## Text of the exercise
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
___

## Solution 

### Logical Process

#### INPUT
    - [x] Ask the user, via prompt, for the number of Km he or she wants to travel.
    - [x] Ask the user, via prompt, for the passenger's age.

#### LOGICAL EXECUTION
IF inserted Km is *number* AND inserted Age is *number*.
   - [x] Calculate the entire price of the ticket without any discount.
       ```
       (Number of Km * 0.21)
       ```
   - [ ] Define discount for each age category.
       ```
       IF insert age is under 18
           Define discount at 20.
       ELSE IF insert age is over 65
           Define discount at 40.
       ELSE IF insert age is under 12 AND over 0
           Launch Alert
       ELSE 
           Define discount at 0.
       ```
   - [ ] Calculate discounted price.
       ```
       (Entire price - (entire price * discount/100))
       ```
   
   #### OUTPUT
   - [ ] Approximate final price.
   - [ ] Print the right price with only two decimal numbers

ELSE
   - [ ] Data Error
