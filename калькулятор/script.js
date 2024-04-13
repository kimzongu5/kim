const operations = document.querySelectorAll('.bg-orange')
const numbers = document.querySelectorAll('.num')
let display = document.querySelector('.answer')
let firstNumber = ''
let secondNumber = ''
let operationType = ''
let operationClicked = false
let result = ''
const ac = document.querySelector('.ac')
console.log(numbers)

//добавление событий для кнопок операций
function operationsAddEvent() {
                    operations.forEach((button) => {
                                        button.addEventListener('click', setOperationEvent)
                    })
}


function setOperationEvent(button) {
                    let buttonName = button.target.textContent
                    if (buttonName === '=') {
                                        result = eval(firstNumber + operationType + secondNumber)
                                        display.innerText = result
                                        firstNumber = ''
                                        secondNumber = ''
                                        operationClicked = false
                    } else {
                                        if (buttonName === 'X') {
                                                            operationType = '*'
                                        }
                                        else {
                                                            operationType = buttonName
                                        }
                                        operationClicked = true
                    }
                    

}


function numbersAddEvent() {
                    numbers.forEach((number) => {
                                        number.addEventListener('click', setNumberEvent)
                    }) 
 
}


function setNumberEvent(number) {
                    let numberName = number.target.textContent
                    if (operationClicked) {
                                        if (secondNumber.length < 8) {
                                                            secondNumber += numberName
                                                            display.innerText = secondNumber
                                        }
                    } else {
                                        if (firstNumber.length < 8) {
                                                            firstNumber += numberName
                                                            display.innerText = firstNumber
                                        }
                                        
                    }
}


function acAddEvent() {
                    ac.addEventListener('click', setAcsEvent)
}


function setAcsEvent() {
                    firstNumber = ''
                    secondNumber = ''
                    display.innerText = 0
}


operationsAddEvent()
numbersAddEvent()
acAddEvent()
