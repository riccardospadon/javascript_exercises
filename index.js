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
console.log(`La somma tra i numeri ${a} e ${b} è uguale a ${somma1}`)