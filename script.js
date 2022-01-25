let count = 0;
var value = document.getElementById("value");
var btnDecrease = document.getElementById("decrease");
var btnIncrease = document.getElementById("increase");
var btnReset = document.getElementById("reset");

btnDecrease.addEventListener("click",function(){
    count--;
    value.textContent = count;
    value.style.color = "red"
})

btnIncrease.addEventListener("click", function(){
    count++;
    value.textContent = count;
    value.style.color = "green"
})

btnReset.addEventListener("click", function(){
    count = 0
    value.textContent = count;
    value.style.color = "black"
})