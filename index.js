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


// 21 Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8
// (suggerimento: ripassa l'uso di "continue")
for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8){
        continue
    }
    console.log(i) // 1, 2, 4, 5, 6, 7, 9, 10
}


// 22 Scrivi un ciclo in Javascript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari
// o dispari. Suggerimento: ripassa operatore modulo
for (let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log(`${i} è un numero pari`) // 0 è un numero pari; 2 è un numero pari; ecc...
    } else {
        console.log(`${i} è un numero dispari`) // 1 è un numero dispari; 3 è un numero dispari; ecc...
    }
}


// 23 Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8
// oppure se la loro addizione/sottrazione sia uguale a 8
let e = 3
let f = 5
if(e === 8 && f === 8) {
    console.log('Entrambi i numeri inseriti sono uguale a 8!')
} else if(e === 8 || f === 8) {
    console.log('Uno dei due numeri inseriti è uguale a 8!')
} else if(e + f === 8 || f + e === 8) {
    console.log('La somma dei numeri inseriti è uguale a 8!')
} else if(e - f === 8 || f - e === 8) {
    console.log('La differenza tra i numeri inseriti è uguale a 8!')
}


// 24  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShopphingCart".
// C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita
// (altrimenti la spedizione ha un costo fisso pari a 10). Crea un algoritmo che determini l'ammontare
// totale che deve essere addebitato all'utente per il checkout.
let carrello = {
    prodotto1: 20,
    prodotto2: 10,
    prodotto3: 5
}
let spedizione = 0
carrello = carrello.prodotto1 + carrello.prodotto2 + carrello.prodotto3
let totalShopphingCart = carrello + spedizione
if(totalShopphingCart <= 50){
    spedizione = 10
    totalShopphingCart = totalShopphingCart + spedizione
}
console.log(totalShopphingCart) // (20+10+5)+10 = 35(< 50)+10 = 45


// 25  Oggi è il black friday e viene applicato il 20% su ogni prodotto. Modifica la risposta precedente includendo questa nuova promozione
//nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e calcolando il totale
let totaleSconto = carrello * 0.2
let blackFriday = carrello - totaleSconto
if(blackFriday <= 50){
    spedizione = 10
    blackFriday = blackFriday + spedizione
}
console.log(blackFriday) // (20+10+5) - (20+10+5)*0.2 = 35 - 7 = 28 (<50) + 10 = 38


// 26 Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
// La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
// Es.: se isMale è vero, il valore di gender deve essere "male"
let gender
let isMale = false
isMale ? (gender == "male") : (gender == "female")
console.log(isMale) // false


// 27 Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console.
// Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz".
// Se le condizioni si verificano entrambe, stampa "FizzBuzz"
for(let i = 1; i <= 100; i++){
    if(i % 3 && i % 5 == 0){
        console.log("FizzBuzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// 28  Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri. La funzione deve ritornare la somma di quei
// due valori, ma se il solo valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3
let g = 10
let h = 10
let crazySum = g + h
if(g === h){
    crazySum = crazySum * 3
}
console.log(crazySum) // 10 + 10 = 20*3 = 60 || 10 + 12 = 22


// 29 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso
// tra 20 e 100 o se è esattamente uguale a 400
let numberOfBoundary = 400
let boundary = () => {
    if ((numberOfBoundary >= 20 && numberOfBoundary <= 100) || (numberOfBoundary === 400)) {
        return true
    }
    return false
}
console.log(`Boundary true or false? ${numberOfBoundary}`, boundary())


// 30 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni
// lettera iniziale di ogni parola
const upperFirst = (string) => {
    let parole = string.split(' ')
    let frase = ""
    let parola = ""
    for (let i = 0; i < parole.length; i++) {
        parola = parole[i].split('')[0].toUpperCase() + parole[i].slice(1) + ' '
        frase = frase + parola
    }
    return frase
}
console.log(upperFirst("daje roma daje")) // Daje Roma Daje


// 31  Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
const l1 = 10
const l2 = 12
let areaRettangolo = l1 * l2
if(l1 === l2){
    console.log(`L'area del quadrato aventi i lati l1 uguale a ${l1} e l2 uguale a ${l2} è di ${areaRettangolo}`)
} else {
    console.log(`L'area del rettangolo aventi i lati l1 uguale a ${l1} e l2 uguale a ${l2} è di ${areaRettangolo}`)
}


// 32 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n
// e ritorna un array contenente n numeri random contenuti tra 0 e 10.
const giveMeRandom = (n) => {
    const numbers = []
    for(let i = 0; i < n; i++){
        const random = Math.floor(Math.random() * 11)
        numbers.push(random)
    }
    return numbers
}
console.log(giveMeRandom(6))


// 33 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
// Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
let crazyDiff = (n1, n2) => {
    n2 = 19
    let tot = Math.abs(n1 - n2)
    if (tot > 19){
        return tot * 3
    }
    return tot
}
console.log(crazyDiff(-1))


// 34 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro. La funzione deve aggiungere la parola "code" 
// all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code"
// allora deve ritornarla senza modifiche.
let codify = (string) => {
    let string2 = string + "code"
    if (string === "code") {
        return string2 = string
    }
    return string2
}
console.log(codify('ciao')) // ciaocode
console.log(codify('code')) // code


// 35 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
// La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
let check3and7 = (n) => {
    if(n % 3 === 0 || n % 7 === 0) {
        return true
    }
    return false
}
console.log(check3and7(21))


// 36 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
let cutString = (string) => {
    return string.slice(1, string.length -1)
}
console.log(cutString('Buonasera')) // uonaser


// 37 Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50
const sommaNumber = (number1, number2) => {
    if(number1 === 50 || number2 === 50 || number1 + number2 === 50){
        return true
    }
    return false
}
console.log(sommaNumber(10, 10))


// 38 Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata
const removeCharacter = (string, position) =>{
    let array = string.split('')
    array.splice(position, 1)
    return array.join('')
}
console.log(removeCharacter('Riccardo', 5)) // Riccado


// 39 Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
// Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'
let check = (a, b) => {
    if((a >= 40 && a <= 60) && (b >= 40 && b <= 60) || (a >= 70 && a <= 100) && (b >= 70 && b <= 100)) {
        return true
    }
    return false
}
console.log(check(40, 100))


// 40 Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con 'Los' o 'New',
// altrimenti ritorni 'false'
let checkCity = (string) => {
    if(string.startsWith('Los') || string.startsWith('New')){
        return string
    }
    return false
}
console.log(checkCity('New York')) // New York
console.log(checkCity('Latina')) //false
console.log(checkCity('Los Angeles')) // Los Angeles


// 41 Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro
const sommaElementi = (array) => {
    let parametro = 0
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i]
        parametro += elemento
    }
    return parametro
}
console.log(sommaElementi([10, 11, 12])) // 33


// 42 Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'
const not1or3 = (array) => {
    if(!array.includes(1) && !array.includes(3)){
        return true
    }
    return false
}
console.log(not1or3([3, 2, 7])); // false


// 43 Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro:
// Angolo acuto: meno di 90° => ritorna "acuto"
// Angolo ottuso: tra 90° e i 180° => ritorna "ottuso"
// Angolo retto: 90° => ritorna "retto"
// Angolo piatto: 180° => ritorna "piatto"
const angoli = (deg) => {
    if(deg < 90){
        return 'acuto'
    }
    if(deg > 90 && deg < 180){
        return 'ottuso'
    }
    if(deg == 90){
        return 'retto'
    }
    if(deg == 180){
        return 'piatto'
    }
}
console.log(angoli(50)) // acuto
console.log(angoli(100)) // ottuso
console.log(angoli(90)) // retto
console.log(angoli(180)) // piatto


// 44 Crea una funzione che crei un acronimo a partire da una frase. Es. 'Fabbrica Italiana Automobili Torino' deve ritornare 'FIAT'
let acronimo = (string) => {
    let array = string.split(' ')
    let x = ''
    for (let i = 0; i < array.length; i++) {
        let parola = array[i]
        x += parola.charAt(0)
    }
    return x.toUpperCase()
}
console.log(acronimo('senatus popolus quirities romani')) //SPQR


// 45 Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
let piuUsato = (string) => {
    const frequenza = {}
    for(let i = 0; i < string.length; i++) {
        let carattere = string[i]
        if(frequenza[carattere]){
            frequenza[carattere]++

        } else {
            frequenza[carattere] = 1
        }

        let carattereMassimo = ''
        let frequenzaMassima = 0
        for(let carattere in frequenza){
            if(frequenza[carattere] > frequenzaMassima){
                carattereMassimo = carattere
                frequenzaMassima = frequenza[carattere]
            }
        }
        return carattereMassimo
    }
}
console.log(piuUsato('aaoaaoaaaaajjjdrwc')) // a


// 46  Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
// Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo.
// Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.
const anagrammi = (string1, string2) => {
    const stringaPulita1 = string1.replace(/[^\w]/g, '').toLowerCase();
    const stringaPulita2 = string2.replace(/[^\w]/g, '').toLowerCase();
    if(stringaPulita1.length !== stringaPulita2.length){
        return false;
    }
    const arrayPulito1 = stringaPulita1.split('').sort().join('');
    const arrayPulito2 = stringaPulita2.split('').sort().join('');
    return arrayPulito1 === arrayPulito2;
}
console.log(anagrammi('notizia', 'tiziano')) // true


// 47 Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
// ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
const trovaAnagrammi = (parola, listaAnagrammi) => {
    const stringaPulita = (string) => {
        return string.replace(/[^\w]/g, '').toLowerCase();
    }
    
    const verificaAnagrammi = (string1, string2) => {
        const stringaPulita1 = stringaPulita(string1)
        const stringaPulita2 = stringaPulita(string2)
        if(stringaPulita1.length !== stringaPulita2.length){
            return false
        }

        const arrayPulito1 = stringaPulita1.split('').sort().join('')
        const arrayPulito2 = stringaPulita2.split('').sort().join('')
        return arrayPulito1 === arrayPulito2
    }

    const anagrammiGiusti = listaAnagrammi.filter(anagramma => verificaAnagrammi(parola, anagramma))
    return anagrammiGiusti
}

console.log(trovaAnagrammi('cartine', ['carenti', 'incerta', 'espatrio'])) // [ 'carenti', 'incerta' ]


// 48  Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
const palindroma2 = (stringa) => {
    return stringa.split('').reverse().join('') === stringa
}
console.log(palindroma2('yamamay')) // true


// 49 Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario.
const numeroInverso = (numero) => {
    return Number(String(numero).split('').reverse().join(''))
}
console.log(numeroInverso(1015)) // 5101