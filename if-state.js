let button = document.getElementById('btn');
let head = document.getElementById('h5');
let input = document.getElementById('input');
console.log(input);

function grade (){
    switch(input.value){
        case "a":
        head.innerHTML = 'You scored from 80 and above, Congratulaton'
        break;
        case "B":
        head.innerHTML = 'You scored from 70 to 79, Congratulation'
        break;
        case "C":
        head.innerHTML = 'You scored from 60 to 69, Congratulation'
        break;
        case "D":
        head.innerHTML = 'You scored from 50 to 59, Congratulation'
        break;
        default: head.innerHTML = 'You have not enterd anything'
    };
};

button.addEventListener('click', grade);

input.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        grade();
    }
})

