// 1 Scrivi un programma che calcoli l'area di un rettangolo.
// Chiedi all'utente di inserire la lunghezza e la larghezza del rettangolo e quindi calcola e stampa l'area.
let lunghezza = prompt('Inserisci la lunghezza del rettangolo: ') // 5
let larghezza = prompt('Inserisci la larghezza del rettangolo: ') // 6
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

// 4