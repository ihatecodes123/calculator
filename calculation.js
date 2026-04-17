function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

let firstNumber="";
let operator=null;
let secondNumber="";

function operate(operator,a,b){
    if(operator==="+") return addition(a,b);
    if(operator==="-") return subtraction(a,b);
    if(operator==="*") return multiplication(a,b);
    if(operator==="/") return division(a,b);
}

const display=document.querySelector(".Display");
const digitButtons=document.querySelectorAll(".digit");
const operatorButtons=document.querySelectorAll(".operator");
const equalsButton=document.querySelector(".equals");
const clearButton=document.querySelector(".clear");



function updateDisplay(value){
    display.textContent=value||"0";
}

digitButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(operator===null){
            firstNumber+=button.textContent;
            updateDisplay(firstNumber);
        }else{
            secondNumber+=button.textContent;
            updateDisplay(secondNumber);
        }
    });
});

operatorButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(firstNumber==="") return;

        operator=button.textContent;
    });
});

equalsButton.addEventListener("click",()=>{
    if(firstNumber===""||secondNumber===""||!operator) return;

    const result=operate(operator,Number(firstNumber),Number(secondNumber));
    updateDisplay(result);

    firstNumber=result.toString();
    secondNumber="";
    operator=null;
});


clearButton.addEventListener("click",()=>{
    firstNumber="";
    secondNumber="";
    operator=null;

    updateDisplay('0');
});


document.addEventListener("keydown",(e)=>{
    console.log(e.key);
})
