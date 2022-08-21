const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const totalPersons = document.getElementById('total_persons');
const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');
const tipButton = document.querySelectorAll('.tip_button');
const errors = document.querySelectorAll('.error')
const inputS = document.querySelectorAll('.inputs_')
const totalPersonError = document.querySelector('.total_person_error')
const billError = document.querySelector('.bill_error')
const tipError = document.querySelector('.tip_error')
const warning = document.querySelector('.warning')
 const customs = document.querySelector('customs')
const reset = document.querySelector('.reset')
var tipy = 0;
const displayError = function(e, msg) {
    e.target.classList.add('error')
  e.target.previousElementSibling.lastElementChild.textContent = msg;
}
const customError = function (e, msg) {
    e.target.classList.add('error')
//   e.target.parentNode.firstChild.lastChild.textContent = msg;
e.target.parentElement.previousSibling.textContent = msg; 
}
const removeCustomError = function (e) {
    e.target.classList.add('error')
  e.target.parentElement.previousSibling.textContent = '';   
}
const removeError = function (e) {
    e.target.classList.remove('error')
    e.target.previousElementSibling.lastElementChild.textContent = '';
}

inputS.forEach(inputs => {
    inputs.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value === '0') {
            displayError(e, "Can't be zero")
        }
        else if (isNaN(value)) {
            displayError(e, 'invalid')
        }
        else if (value < 0) {
            displayError(e, 'positive only')
        }
        else if (value.includes('.') && e.target.name === 'total_persons') {
            displayError(e, 'error')
        }
        else {
            removeError(e)
        }
        
        display()
    })
})

const getCustomInput = function (e) {
    const value = e.target.value
    if (value === '0') {
        customError(e, "Can't be zero")
        e.target.classList.add('error')
    }
    else if (isNaN(value)) {
        customError(e, 'invalid')
    }
    else if (value < 0) {
        customError(e, 'positive only')
    }
    else if (value.includes('.') && e.target.name === 'total_persons') {
        customError(e, 'error')
    }
    else {
        tipy = value;
    display()
        removeCustomError(e)
    }
    
    
}
tip.addEventListener('input', getCustomInput)

tipButton.forEach(tipButton => {
    tipButton.addEventListener('click', (e) => {
        tipy = e.target.value
        display()
    })
})

const display = () => {
    const billInput = bill.value;
    const totalPeople = totalPersons.value;
     const totalTip = billInput * (tipy /100)
     const amount =  (billInput * ((tipy/100) +1))
    tipAmount.textContent = 
    totalTip.toFixed(1)
    totalAmount.textContent =
    amount.toFixed(1);
    if (totalPeople > 1) {
        totalAmount.textContent = 
        (amount / totalPeople).toFixed(2)
        tipAmount.textContent = 
        (totalTip / totalPeople).toFixed(2)
    }
    
    
    
}
reset.addEventListener('click', () => {
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
    inputS.forEach((e) => {
        e.value = ''
    })
})


