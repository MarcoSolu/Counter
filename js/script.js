class Counter {
    constructor(ResultSpan) {
        this.ResultSpan = ResultSpan
    }

    chooseOperation(operation) {
        this.operation = operation
        this.compute()
    }

    compute() {
        let computation
        this.result = parseFloat(this.ResultSpan.textContent)
        switch (this.operation) {
            case '+':
                let inputAdd = prompt("Type the number you want to increase")
                if (inputAdd == null || inputAdd == '') {
                    return
                }
                else if (isNaN(inputAdd)) {
                    alert('You have to type a number')
                    return
                }
                else {
                    computation = this.result + parseFloat(inputAdd)
                }
                break
            
            case '-':
                let inputRed = prompt("Type the number you want to decrease")
                if (inputRed == null || inputRed == '') {
                    return
                }
                else if (isNaN(inputRed)) {
                    alert('You have to type a number')
                    return
                }
                else {
                    computation = this.result - parseFloat(inputRed)
                }
                break

            case 'reset':
                computation = 0
                break
            
            default:
                return
        }
        this.ResultSpan.textContent = computation
    }
}

const body = document.getElementsByTagName('body')[0];
const mainDiv = document.body.childNodes[1];

const decreaseDiv = document.createElement('div')
decreaseDiv.className += 'decrease-div'

const increaseDiv = document.createElement('div')
increaseDiv.className += 'increase-div'

const decreaseHeader = document.createElement('h2')
decreaseHeader.textContent = 'Decrease'
decreaseHeader.className += 'decrease-header'

const increaseHeader = document.createElement('h2')
increaseHeader.textContent = 'Increase'
increaseHeader.className += 'increase-header'

const title = document.createElement('h1')
title.textContent = 'counter'

const DecreaseButton = document.createElement('button'); 
DecreaseButton.textContent = '-';

const ResultSpan = document.createElement('span'); 
ResultSpan.textContent = 0;

const IncreaseButton = document.createElement('button'); 
IncreaseButton.textContent = '+';

const emptyDiv = document.createElement('div')

const ResetButton = document.createElement('button')
ResetButton.textContent = 'reset'


body.insertBefore(title, mainDiv)
mainDiv.appendChild(decreaseDiv);
decreaseDiv.append(DecreaseButton, decreaseHeader)
mainDiv.appendChild(ResultSpan);
mainDiv.appendChild(increaseDiv);
increaseDiv.append(IncreaseButton, increaseHeader)
mainDiv.appendChild(emptyDiv)
mainDiv.appendChild(ResetButton)


const counter = new Counter (ResultSpan)

DecreaseButton.addEventListener('click', () => {
    counter.chooseOperation(DecreaseButton.textContent)
})

IncreaseButton.addEventListener('click', () => {
    counter.chooseOperation(IncreaseButton.textContent)
})

ResetButton.addEventListener('click', () => {
    counter.chooseOperation(ResetButton.textContent)
})