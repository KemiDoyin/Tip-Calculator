const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const totalPersons = document.getElementById('total_persons');
const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');
const tipButton = document.querySelectorAll('.tip_button');
const errors = document.querySelectorAll('.error')
const inputS = document.querySelectorAll('.inputs_')
 const customs = document.querySelector('customs')
const reset = document.querySelector('.reset')
var tipy = 0;
const displayError = function(e, msg) {
    e.target.classList.add('error')
  e.target.previousElementSibling.lastElementChild.textContent = msg;
}
// // const customError = function (e, msg) {
// //     e.target.classList.add('error')
// // //   e.target.parentNode.firstChild.lastChild.textContent = msg;
// // // e.target.parentElement.previousSibling.textContent = msg; 
// // }
// // const removeCustomError = function (e) {
// //     e.target.classList.remove('error')
// //   e.target.parentElement.previousSibling.textContent ; 
// //   errors.forEach(err => {
// //     err.textContent = ''
// // })   
// }
const removeError = function (e) {
    e.target.classList.remove('error')
    e.target.previousElementSibling.lastElementChild.textContent = '';
    errors.forEach(err => {
        err.textContent = ''
    }) 
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
// const clear = function (e) {
//     // const value = e.target.value
//     if (isNaN(e)) {
//         totalAmount.textContent = `error`
//     }
// }
function Error() {
    const notValue = totalPersons.value
    const notValue2 = bill.value
    if(notValue.includes('.') || isNaN(notValue)) {
        totalAmount.textContent = `$0.00`;
        tipAmount.textContent = `$0.00`
    }
    else if (isNaN(notValue2)) {
        totalAmount.textContent = `$0.00`;
        tipAmount.textContent = `$0.00`
    }
}



const getCustomInput = function (e) {
    const value = e.target.value
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
        tipy = value;
        display()
        removeError(e)
    }
    
    
}
tip.addEventListener('input', getCustomInput)

tipButton.forEach(tipButton => {
    tipButton.addEventListener('click', (e) => {
        removeActive()
        e.target.classList.add('active')
        tip.value = ''
        tipy = e.target.value
        display()
    })
})

function removeActive() {
    tipButton.forEach(tipButton => {
        tipButton.classList.remove('active')
    })
}
const display = () => {
    const billInput = bill.value;
    const totalPeople = totalPersons.value;
     const totalTip = billInput * (tipy /100)
     const amount =  (billInput * ((tipy/100) +1))
    tipAmount.textContent = 
    `$${totalTip.toFixed(1)}`
    totalAmount.textContent =
    `$${amount.toFixed(1)}`;
    if (totalPeople > 1) {
        totalAmount.textContent = 
        `$${(amount / totalPeople).toFixed(2)}`
        tipAmount.textContent = 
        `$${(totalTip / totalPeople).toFixed(2)}`
    } 
    Error()
    
    
    
}
reset.addEventListener('click', (e) => {
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
    inputS.forEach((e) => {
        e.value = ''
    })
    tipButton.forEach(tipButton => {
        tipButton.classList.remove('active')
    })
    tipy = 0;
    tip.value = ''
    removeError(e)
    // removeCustomError(e)
    // errors.textContent = '';
})


