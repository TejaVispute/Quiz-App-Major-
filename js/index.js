// collectiong elements that we need
const Enterbtn = document.querySelector('.btn-submit');
const title = document.querySelector('.title-bar');
const timer = document.querySelector('#timer');
const score = document.querySelector('#score');
const questioncount = document.querySelector('.qcount');
const Questions = document.querySelector('.Quetion');
const answer_options = document.querySelector('.answer-options');
const nextbtn = document.querySelector('.next-buttom');
const Exit = document.querySelector('.exit');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');


// for printing user input name on screen
printname = () => {
        const val = document.querySelector('.input-val').value;
        document.querySelector('#displayname').innerHTML = " Welcome" + val;;
}

// all HTML Elements are accessed here by thieir id and class name

// Timer section is started here for 300 seconds
// var timeLeft = 300;
// var elem = timer;
// var timerId = setInterval(countdown, 1000);

// function countdown() {
//         if (timeLeft == 0) {
//                 clearTimeout(timerId);
//                 doSomething();
//         } else {
//                 elem.innerHTML = timeLeft;
//                 timeLeft--;
//         }
// }
// window.onload = countdown();

// Timer section is Ends here


// for loading questions

showQuestions=()=>{
const question_txt=document.querySelector('Question');
let qu_insert= '<span>'+ PROBABILITY[0].question+'</span>';
};


