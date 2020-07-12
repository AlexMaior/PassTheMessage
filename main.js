let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let msg = document.querySelector("#msg")
let form = document.querySelector("#form")
let errMsg = document.querySelector("#errMsg")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input.value == "") {
        showErr();
    }else{
        msg.textContent=input.value;
        msg.classList.add("cap")
        form.reset();
    }
})



function showErr() {
    errMsg.textContent="Please enter a value"
    setTimeout(function() {
        errMsg.textContent="";
    }, 2000)
}