// use HTML/CSS to create basic calculator buttons and display
// refer to buttons and display in JS using query selector
// make it so that multiple digits can be inputted into the display at once
// make it so the display clears when an operator or clear is pressed
//make it so that the result is shown after equal is pressed. 




const display = document.querySelector(".display")
const nums = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
let userChoice
let a
let b
let c

function add(a,b) {
return a + b
}

function subtract(a,b) {
return a - b
}

function multiply(a,b) {
return a * b
}   

function divide (a,b) {
return a / b
}   

function Operate () {
for (const oper of operators) {
    oper.addEventListener("click", (e) =>{
    if (userChoice === undefined) {
        a = parseInt(display.textContent)
        display.textContent = ""
        userChoice = oper.textContent
    }
    else if (userChoice === "+"){
        b = parseInt(display.textContent)
        display.textContent = add(a,b)
        userChoice = oper.textContent
        a = parseInt(display.textContent)
        c = 1
        
    }
    else if (userChoice === "-"){
        b = parseInt(display.textContent)
        display.textContent = subtract(a,b)
        userChoice = oper.textContent
        a = parseInt(display.textContent)
        c = 1
    }
    else if (userChoice === "x"){
        b = parseInt(display.textContent)
       display.textContent = multiply(a,b)
       userChoice = oper.textContent
        a = parseInt(display.textContent)
        c = 1
    }
    else if (userChoice === "/"){
        b = parseInt(display.textContent)
        display.textContent = divide(a,b)
        userChoice = oper.textContent
        a = parseInt(display.textContent)
        c = 1
    }



    })
}
}


function displayInput() {
for (const num of nums){
    
        num.addEventListener("click", (e) =>{
            if (c === 1) {
            const numInput = num.textContent
            display.textContent = numInput
            c = 0
            }
            
            else {
            const numInput = num.textContent
            display.textContent += numInput
            }
        })




    }
}

function clearDisplay() {

    clear.addEventListener("click", (e) =>{
        display.textContent = ""
        userChoice = undefined
        a = undefined
        b = undefined
    })

}


clearDisplay()
Operate()
displayInput()