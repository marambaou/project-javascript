const sideBar = document.getElementById('side-bar');
function showSidebar(){
    
    console.log(sideBar);
    if(sideBar.style.display === 'none'){
        sideBar.style.display = 'flex';
    }
}
console.log(sideBar);