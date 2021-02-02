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

        let size = (getCalculator.value.length)-1
        let lastChar = getCalculator.value.charAt(size)

        //first we transform "x" to "*", to prevent errors in application
        let rawExpression = getCalculator.value
        let properExpression = rawExpression.replace("x", "*")

        switch(lastChar) {
            case "/":
            case "x":
            case "+":
            case "-":
                alert("There was a problem with your request! Please, check if the expression ends with a number, and not a operation symbol.")
            break

            case ".":
                alert("Your expression ends with a point, please, in case of your number being a integer, please add a zero after the point or remove the point.")
            break

            default:
                //we use eval() to interpret var finalExpression as a javascript code
                let finalExpression = eval(properExpression)
                eraseInput()
                getCalculator.value = finalExpression
            break
        }  
    },
    erase(){
        getCalculator.value = ""
    }
}