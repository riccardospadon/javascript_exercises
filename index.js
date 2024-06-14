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
let cambiaColoreSfondo = () => {
    const coloreSfondo = '#543654'
    document.body.style.backgroundColor = coloreSfondo
}
const cambiaColore = document.querySelector('#cambiaColore')
cambiaColore = addEventListener('click', function(){
    cambiaColoreSfondo()
})