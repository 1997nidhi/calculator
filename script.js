let display = document.getElementById("display");

function appendValue(event){
    display.value += event.target.textContent;
}
function calculateResult(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error';
    }
}
function clear(){
    display.value = "";
}

let numberButtons = document.querySelectorAll(".number");
for(let i=0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click',appendValue);
}

//Arrow function
/* document.querySelectorAll(".number").forEach(number => {
    number.addEventListener('click',function() {
    display.value+= number.textContent;
    })
    })
*/

/*  document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => appendValue);
    });
*/
let operatorButtons = document.querySelectorAll(".operator");
for(let i=0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click',appendValue);
}
let equalButton = document.querySelector(".equals");
    equalButton.addEventListener('click',calculateResult);

let clearButton = document.querySelector(".clear");
    clearButton.addEventListener('click',clear);

let decimalButton = document.querySelector('.decimal');
    decimalButton.addEventListener('click', appendValue);
