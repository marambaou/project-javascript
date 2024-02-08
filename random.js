const one = document.getElementById('fst-choice');
const two = document.getElementById('scd');
const three = document.getElementById('thred');
const btn = document.getElementById('btn');

let x = "you won";
let z = "you lost";

btn.addEventListener('click', function(){
    let compmove = Math.floor(Math.random() * 3) + 1;
    if (compmove === 2){
        one.innerHTML = x;
    }else {
        two.innerHTML= z;
    }
});



