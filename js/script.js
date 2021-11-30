// faccio un ciclo che mostra 5 numeri casuali
randomNumberArray = []
// contatore
let counter = 0
// array numeri azzeccati dal utente
let userRightTry = []
// array utente
let userArray = []
for (let i = 0; i < 5; i++){
    let number = getRndInteger(1 , 100)
    randomNumberArray.push(number)
    alert(number)
}
console.log(randomNumberArray)
// comincia un coutdown di 30 secondi
const countdownContainer = document.getElementById('countdown');
let seconds = parseInt(countdownContainer.textContent);
console.log(seconds)
const countdown =setInterval(function(){
    
    seconds--;
    countdownContainer.innerHTML = seconds;
    if(seconds === 0){
        clearInterval(countdown)
        // alla fine del countdown l'utente deve inserire i 5 numeri che gli ho mostrato
        for (let i = 0; i < 5; i++){
            let userTry = parseInt(prompt('inscerisci un numero di quelli dati '))
            // verifica se i numeri dell'utente fanno parte di quelli dati all'inizio
            if(randomNumberArray.includes(userTry)){
                // contatore numeri giusti
                counter++
                // mettere da parte solamente i numeri giusti dati dall'utente
                userArray.push(userTry)
            }
            
            
        }
        
        // alert con il numero e quali numeri che l'utente ha azzeccato
        alert('hai indovinato ' + counter + ' numeri che sono ' + userArray + ' su ' + randomNumberArray)
    }
    
}, 1000);












// funzione numeri randomici
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}