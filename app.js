var btnTransalate = document.querySelector("#btn-transalate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput)

function clickHandle() {
    outputDiv.innerText = "jajaja " + txtInput.value
}

btnTransalate.addEventListener("click",  clickHandle);