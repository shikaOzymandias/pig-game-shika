'use strict';
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
let currentNum = 0;
let activePlayer = 0;
let points = [0 ,0];
let playing = true;
dice.classList.add('hidden');
score1.textContent= 0 ;
score0.textContent= 0 ;

const switchPlayer = function (){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentNum = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function (){
    if (playing){
        // Making a random num
        let randomDice = Math.trunc( Math.random() * 6 ) + 1;
        //removing hidden class from dice for showing
        dice.classList.remove('hidden');
        //changing src img by randomNum
        dice.src= `dice-${randomDice}.png`;
        //add dice value to current num
        if (randomDice !== 1 ){
            currentNum += randomDice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentNum;

        }else {
            //switching player
            // document.querySelector(`#current--${activePlayer}`).textContent = 0;
            // currentNum = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // player0el.classList.toggle('player--active');
            // player1el.classList.toggle('player--active');
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click',function () {
    if (playing) {
        points[activePlayer] += currentNum;
        console.log(points[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = points[activePlayer];
        if (points[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing=false;
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click',function () {
    //changing dice style while winning and not winning
    // document.querySelector('.player--0').classList.add('player--active');
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');

        currentNum = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = currentNum;
        points = [0 , 0];
        document.getElementById('score--0').textContent = points[0];
        document.getElementById('score--1').textContent = points[1];
        playing = true;
        activePlayer = 0;





})












