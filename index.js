// 1 Scrivi un programma che calcoli l'area di un rettangolo.
// Chiedi all'utente di inserire la lunghezza e la larghezza del rettangolo e quindi calcola e stampa l'area.
let lunghezza = 5 // prompt('Inserisci la lunghezza del rettangolo: ')
let larghezza = 6 // prompt('Inserisci la larghezza del rettangolo: ') 
let area = lunghezza * larghezza
console.log("L'area del rettangolo avendo lunghezza", lunghezza, "e larghezza", larghezza, "è:", area)
// L'area del rettangolo avendo lunghezza 5 e larghezza 6 è: 30


// 2 Scrivi una funzione chiamata isPalindrome che prenda una stringa come input e restituisca true se la stringa è un palindromo
// (cioè può essere letta allo stesso modo sia da sinistra a destra che da destra a sinistra), altrimenti restituisca false.
const isPalindrome = (string) => {
    return string === string.split('').reverse().join('')
}
console.log("La parola 'ciao' è palindroma?", isPalindrome('ciao')) // La parola 'ciao' è palindroma? false
console.log("La parola 'anna' è palindroma?", isPalindrome('anna')) // La parola 'anna' è palindroma? true


// 3 Scrivi una funzione chiamata findMax che prenda un array di numeri come input e restituisca il numero più grande nell'array
const array = [1, 2, 3, 4, 5, 65, 7, 8, 9, 10]
const findMax = (array) => {
    let max = array[0]
    for(i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
console.log(findMax(array)) // 65


// 4 Scrivi un programma che stampi i primi 10 numeri della sequenza di Fibonacci.
// La sequenza di Fibonacci è una serie di numeri in cui ogni numero è la somma dei due numeri precedenti
// (ad esempio, 0, 1, 1, 2, 3, 5, 8, 13, ...).
const fibonacci = (n) => {
    let sequenza = [0,1]
    for(let i = 2; i < n; i++){
        let nextNumber =  sequenza[i-1] + sequenza[i-2]
        sequenza.push(nextNumber)
    }
    return sequenza
}
const primiDieciFibonacci = fibonacci(10)
console.log(primiDieciFibonacci) // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]


// 5 Crea un oggetto che rappresenti un libro, con proprietà come titolo, autore, anno
// e un metodo per stampare tutte le informazioni del libro.
let libro = {
    titolo: "Harry Potter e la pietra filosofale",
    autore: "J.K. Rowling",
    anno: 1997
}

console.log(libro) // { titolo: 'Harry Potter e la pietra filosofale', autore: 'J.K. Rowling', anno: 1997 }


// 6 Scrivi un programma che cambi il colore di sfondo di una pagina web quando l'utente clicca su un pulsante
// let cambiaColoreSfondo = () => {
//     let coloreSfondo = '#543654'
//     document.body.style.backgroundColor = coloreSfondo
// }
// let cambiaColore = document.querySelector('#cambiaColore')
// cambiaColore = addEventListener('click', function() {
//     cambiaColoreSfondo()
// })


// 7 Scrivi una funzione chiamata reverseString che prenda una stringa come input e restituisca la stringa invertita.
// Ad esempio, se l'input è "ciao", la funzione dovrebbe restituire "oaic".
let reverseString = (string) => {
    return string.split('').reverse().join('');
}
console.log(reverseString("ciao")) // oaic


// 8 Scrivi una funzione chiamata removeDuplicates che prenda un array di numeri come input
// e restituisca un nuovo array con i duplicati rimossi.
const array1 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10]
const removeDuplicates = (array) => {
    let senzaDuplicati = []
    for (let i = 0; i < array.length; i++) {
        if(senzaDuplicati.indexOf(array[i]) === -1) {
            senzaDuplicati.push(array[i])
        }
    }
    return senzaDuplicati
}
console.log("array CON duplicati:", array1, "array SENZA duplicati:",removeDuplicates(array1))
// array CON duplicati: [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10] array SENZA duplicati: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 9 Crea un oggetto che rappresenti una persona, con proprietà come nome, età, sesso e un metodo che restituisca una stringa 
// con tutte le informazioni della persona
const persona = {
    nome: "Riccardo",
    età: "27",
    sesso: "uomo"
}
console.log(`${persona.nome} è un ${persona.sesso} di ${persona.età} anni.`)
// Riccardo è un uomo di 27 anni.


// 10 Crea una pagina HTML con un pulsante e un contatore. Ogni volta che l'utente clicca sul pulsante,
// il contatore dovrebbe incrementare di uno e il nuovo valore dovrebbe essere visualizzato nella pagina
// const counter = document.querySelector('.number')
// const increase = document.querySelector('#increaseButton')
// let count = 0
// increase.addEventListener('click', function () {
//     count++
//     counter.textContent = count
// })


// 11 Scrivi una funzione che simuli il caricamento di dati da un server remoto utilizzando una promessa.
// La funzione dovrebbe restituire una promessa che si risolve con dei dati fittizi dopo un certo intervallo di tempo
const simulaCaricamentoDati = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dati = [
                { id: 1, nome: 'Prodotto 1', prezzo: '10' },
                { id: 2, nome: 'Prodotto 2', prezzo: '20' },
                { id: 3, nome: 'Prodotto 3', prezzo: '30' },
            ]
            resolve(dati)
        }, 0)
    })
}
console.log('Inizio caricamento...')
simulaCaricamentoDati()
.then((dati) => {
    console.log('Dati caricati:', dati)
})
.catch((errore) => {
    console.error('Si è verificato un errore durante il caricamento...', errore)
})
//Inizio caricamento...
// Dati caricati: [
//    { id: 1, nome: 'Prodotto 1', prezzo: '10' },
//    { id: 2, nome: 'Prodotto 2', prezzo: '20' },
//    { id: 3, nome: 'Prodotto 3', prezzo: '30' }
//  ]


// 12 Scrivi una funzione chiamata flattenArray che prenda un array di array come input
// e restituisca un singolo array con tutti gli elementi degli array annidati.
const flattenArray = (arrays) => {
    return arrays.flat(Infinity)
}
const arrayDiArray = [[1, 2], [3, 4], [5, 6]]
console.log(flattenArray(arrayDiArray)) // [1, 2, 3, 4, 5, 6]


// 13 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20 e salvando il risultato in una variabile
let a = 12
let b = 20
let somma1 = a + b
console.log(`La somma tra i numeri ${a} e ${b} è uguale a ${somma1}`) // La somma tra i numeri 12 e 20 è uguale a 32


// 14 Crea una variabile di nome "x" e assegna ad essa il numero 12
const x = 12
console.log(x) // 12


// 15 Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa
let name = 'Riccardo'
console.log(name) // Riccardo


// 16 Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12)
const y = 4
let sottrazione = y - x
console.log(`La sottrazione tra i numeri ${y} e ${x} è uguale a ${sottrazione}`)
// la sottrazione tra i numeri 4 e 12 è uguale a -8


// 17 Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
const meStesso = {
    nome: 'Riccardo',
    cognome: 'Spadon',
    hobby: 'Programmare e pallavolo'
}
console.log(meStesso) // { 'nome': 'Riccardo', 'cognome': 'Spadon', 'hobby': 'Programmare e pallavolo' }


// 18 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
// Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa verificare che la loro uguaglianza sia falsa).
// Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
// NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log() e gli operatori logici. SUGGERIMENTO: usa .toLowerCase()
const name1 = {
    name: 'John'
}

const name2 = {
    name: 'john'
}

let verifyName = name1 === name2
console.log(verifyName) // false
verifyName = verifyName.toString()
console.log(typeof verifyName) // string
verifyName = name1.name.toLowerCase() === name2.name.toLowerCase()
console.log(verifyName) // true


// 19 Scrivi un algoritmo per trovare il più grande tra due numeri interi
let c = 10
let d = 10
if(c > d) {
    console.log(`Il numero c: ${c} è maggiore del numero d: ${d}`)
} else if(c < d) {
    console.log(`Il numero c: ${c} è minore del numero d: ${d}`)
} else if (c === d) {
    console.log(`Il numero c: ${c} è uguale al numero d: ${d}`)
}


// 20 Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione:
// num < 5 - "Tiny"; num < 10 - "Small"; num < 15 - "Medium"; num < 20 - "Large"; num >= 20 - "Huge"
let num = 23
if (num < 5){
    console.log('Tiny')
}
else if (num >= 5 && num < 10){
    console.log('Small')
}
else if (num >= 10 && num < 15){
    console.log('Medium')
}
else if (num >= 15 && num < 20){
    console.log('Large')
}
else if (num >= 20){
    console.log('Huge')
}


// 