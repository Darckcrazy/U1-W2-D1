/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// 1. string: è come una collona di lettere per essempio "Ciao" o "123".
// 2. Number: è un valore numerico puo essere con la virgola o intero per esempio 10, 3.14, -5.
// 3. Boolean: è come un interruttore che può essere acceso o spento, vero o falso. Per esempio true o false.
// 4. Undefined: come una scatola vuota mai riempita.
// 5. Null: è come una scatola che è stata aperta ma non contiene nulla, è intenzionalmente vuota.
// Esempi:
let tipoStringa = "Ciao";
let tipoNumero = 42;
let tipoBooleano = true;
let tipoUndefined;
let tipoNull = null;

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Oleksnadr";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Kozelkivskyy";

//Dimostrazione del problema con const
const altroNome = "Oleksandr"; // Questo causerà un errore perché non possiamo riassegnare una variabile dichiarata con const

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log("Risultato della sottrazione:", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log("name1 è diverso da name2?", name1 !== name2); // true
// EXTRA
console.log(
  "Uguali se trasformati in minuscolo?",
  name1.toLowerCase() === name2.toLowerCase()
); // true
