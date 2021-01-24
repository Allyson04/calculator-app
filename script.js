function addNumber(numberClicked){
    document.getElementById("calculator-screen").value += numberClicked
}

function addOperation(operationNeeded){
    document.getElementById("calculator-screen").value += operationNeeded
}

function eraseInput(){
    document.getElementById("calculator-screen").value = ""
}

action = {
    clear() {

        //defining a var with value from input
        var rawExpression = document.getElementById("calculator-screen").value

        //removing ONLY the last character added
        var cutExpression = rawExpression.slice(0, -1)

        //reseting string on input
        eraseInput()
        document.getElementById("calculator-screen").value = cutExpression
    },
    addPoint(){

        //adding point for float numbers
        document.getElementById("calculator-screen").value += "."
    },
    equals(){
        //first we transform "x" to "*", to prevent errors in application
        var rawExpression = document.getElementById("calculator-screen").value
        let properExpression = rawExpression.replace("x", "*")


        //then we use eval() to interpret var finalExpression as a javascript code
        let finalExpression = eval(properExpression)
        eraseInput()
        document.getElementById("calculator-screen").value = finalExpression
    }
}