//In this document we are going to always call the element "calculator-screen"
//so why not creating a var for him, instead of writing all the caller everytime?
let getCalculator = document.getElementById("calculator-screen");

function addNumber(numberClicked){
    getCalculator.value += numberClicked
}

function addOperation(operationNeeded){
    getCalculator.value += operationNeeded
}

function eraseInput(){
    getCalculator.value = ""
}

action = {
    clear() {

        //defining a var with value from input
        var rawExpression = getCalculator.value

        //removing ONLY the last character added
        var cutExpression = rawExpression.slice(0, -1)

        //reseting string on input
        eraseInput()
        getCalculator.value = cutExpression
    },
    addPoint(){

        //adding point for float numbers
        getCalculator.value += "."
    },
    equals(){
        //first we transform "x" to "*", to prevent errors in application
        let rawExpression = getCalculator.value
        let properExpression = rawExpression.replace("x", "*")


        //then we use eval() to interpret var finalExpression as a javascript code
        let finalExpression = eval(properExpression)
        eraseInput()
        getCalculator.value = finalExpression
    }
}