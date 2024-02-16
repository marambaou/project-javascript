const python = document.getElementById('python');
const java = document.getElementById('java');
const php = document.getElementById('php');
const javascript = document.getElementById('javascript');
const check = document.getElementById('check');
const button = document.getElementById('btn');

 function disablebtn(){
    if(check.checked){
     button.disabled = false
     button.style.background = 'blue';   

    }else {
     button.disabled = true;
     button.style.background = 'slategray';
    }
}

disablebtn();

check.addEventListener('change', disablebtn);


button.addEventListener('click', function(){
 
 if (python.checked){
    alert('Loading the next question');
 } else if (java.checked) {
    alert('Loading the next question'); 
 } else if (php.checked){
    alert('Loading the next question');
 }else if (javascript.checked){
    alert('Loading the next question');
 }else {
    alert('The ansewr must be provided');
 }
});