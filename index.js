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
// const {total_person_error, bill_error, tip_error} = errors;
// const inputNum = document.getElementsByTagName(');

// const regExes = {
//     dot: /^\.$/g,
//     zero: /^0\d+/g,
//     num: /[^0-9\.]+/g,
//     people: /[^0-9]+/g,
//     letter: /[a-zA-Z,/<>\?;':""[\]\\{}\|`~!@#\$%\^&\*()_=\+]+/g,
//   };

//   const testExp = (reg, val) => new RegExp(reg).test(val)

// function showError() {
//     if (totalPersons.value < 1 || bill.value < 1 ) {
//         totalPersonError.textContent = 'Invalid'
//         billError.textContent = 'Invalid'
//         tipError.textContent = 'Invalid'
//     totalPersons.classList.add('invalid')
//     } 
    
//     // if (totalPersons.value === 0){
//     //     totalPersonError.textContent = 'cant be zero'
//     //     totalPersons.classList.add('error')
//     // }
//     else if (bill.value === '0' || totalPersons.value === '0' || tip.value === '0') {
//         billError.textContent = 'cant be zero'
//         tipError.textContent = 'cant be zero'
//         totalPersonError.textContent = 'cant be zero'
//     }
//     // else if (!errors) {
//     //     errors.classList.remove('error')
//     // }
//     else  {
//         totalPersonError.textContent = '';
//         // calc()
//         errors.classList.remove('error')
//     }

// }


// const validInput = (e) => {
//     const value = e.target.value;
//     if (value === 0){
//         totalPersonError.textContent = 'Invalid'
//         billError.textContent = 'Invalid'
//         tipError.textContent = 'Invalid'
//     }
// }
// const calc = () => {
//     if (warning.classList.contains('error')) {
//         warning.classList.remove('error')
//     }
// }
const displayError = function(e, msg) {
    e.target.classList.add('error')
  e.target.previousElementSibling.lastElementChild.textContent = msg;
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

const display = () => {
    const billInput = bill.value;
    const tipInput = tip.value;
    const totalPeople = totalPersons.value;
    const totalPerPerson = billInput + totalPeople
    const tipAmountPerPerson = '';
    totalAmount.textContent = totalPerPerson;
}

// const input = function(e) {
//     const value = e.target.value;
//     if (value === '0') {
//         errors.textContent = "cant be zero";
//     }
//     else if (value > 10 && e.target.name === 'bill') {
//         billError.textContent = 'lol'
//     }
// }
// function showError() {
//     if (bill.value === '0') {
//         billError.textContent = 'Can"t be zero'
//         bill.classList.add('error')
//     }
//     else if (isNaN(bill.value)) {
//         billError.textContent = 'Invalid'
//         bill.classList.add('error')
//     }
// }
// totalPersons.addEventListener('input',(e) => {
//     // showError();
//    input(e)
// })
// bill.addEventListener('input',(e) => 
//     // showError();
//     // input(e)
    

// )
// tip.addEventListener('input',(e) => {
//     // showError();
//     input(e);
// })
