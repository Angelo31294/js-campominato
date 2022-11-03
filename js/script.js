"use strict"
// creazione bombe

let score = 0;
let bombs = [];

for (let i = 0; i < 16; i++){
    let bombIn = true;
    while (bombIn){
        let randomBombs = parseInt (Math.floor(Math.random() * 100));
        if(bombs.includes(randomBombs)){
            bombIn = true;
        } else {
            bombs.push(randomBombs);
            bombIn = false;
        }
    }
}
console.log(bombs)

// creo la mia board
const boardContainer = document.querySelector(".board");
const playGame = document.querySelector(`.btn-play`);

boardContainer.innerHTML = "";

playGame.addEventListener("click", function () {
    boardContainer.classList.add("show");
});

function createGame(boardElement, nCell){
    
    for( let i = 1; i <= nCell; i++ ){
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-number");
        // aggiungo l'evento click
        boardCell.addEventListener("click", function(){
            let number = parseInt(boardCell.innerHTML);
            if(bombs.includes(number)){
                boardCell.classList.add("bomb");
                document.getElementById("punteggio").innerHTML = (
                    `
                    ${"Defeat"} ${"Score"} ${(score)}
                    `
                );
                alert("Hai perso! La pagina verrà ricaricta automaticamente");
                window.location.reload();
            } else {
                score += 1;
                boardCell.classList.add("select");
            }  if (score === (100 - 16)) {
                document.getElementById("punteggio").innerHTML = (
                    `
                    ${"Victory"} ${"Score"} ${(score)}
                    `
                );
                alert("Bravo hai Vinto! La pagina verrà ricaricta automaticamente");
                window.location.reload();
            }
            document.getElementById("punteggio").innerHTML = (
                `
                ${"Punteggio"} ${(score)}
                `
            );
        });
        boardElement.append(boardCell);
    };
    
    
};
createGame (boardContainer, 100);

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;