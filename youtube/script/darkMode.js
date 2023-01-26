var element = document.body;
var header = document.getElementById('header');
var wrapper = document.getElementById('wrapper');



function DarkMode(){

    console.log("dark");
    element.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    wrapper.classList.toggle("dark-mode");

}