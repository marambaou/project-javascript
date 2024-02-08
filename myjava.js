const add = document.getElementById('add');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
const btn = document.getElementById('count');
let count = 0;

add.addEventListener('click', function(){
    btn.innerHTML = count++;
});

reset.addEventListener('click', function(){
    count = 0;
    btn.innerHTML = `${count}`;
});

minus.addEventListener('click', function(){
    btn.innerHTML = count--;
})