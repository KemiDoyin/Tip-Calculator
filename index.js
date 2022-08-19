const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const totalPersons = document.getElementById('total_persons');
const tipAmount = document.querySelector('.tip_amount');
const totalAmount = document.querySelector('.total_amount');
const tipButton = document.querySelectorAll('.tip_button');
const errors = document.querySelector('.error')
const totalPersonError = document.querySelector('.total_person_error')
const billError = document.querySelector('.bill_error')
const tipError = document.querySelector('.tip_error')
const warning = document.querySelector('.warning')
// const {total_person_error, bill_error, tip_error} = errors;
// const inputNum = document.getElementsByTagName(');

// const regExes = {
//     'dot': /^\.$/g,
//     zero: /^0\d+/g,
//     num: /[^0-9\.]+/g,
//     people: /[^0-9]+/g,
//     letter: /[a-zA-Z,/<>\?;':""[\]\\{}\|`~!@#\$%\^&\*()_=\+]+/g,
//   };

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
function showError() {
    if (bill.value === '0') {
        billError.textContent = 'Can"t be zero'
        bill.classList.add('error')
    }
    else if (isNaN(bill.value)) {
        billError.textContent = 'Invalid'
        bill.classList.add('error')
    }
}
totalPersons.addEventListener('change',(e) => {
    // showError();
   
})
bill.addEventListener('input',(e) => {
    showError();
    

})
tip.addEventListener('change',() => {
    showError();
})
