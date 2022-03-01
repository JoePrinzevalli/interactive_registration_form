//focuses input name text field on default//
const nameFocus = () => document.getElementById('name').focus();
nameFocus();

// hides 'other' job role section until user selcts other option//
const jobRole = document.getElementById('title');
const other = document.getElementById('other-job-role');
other.style.display = 'none';

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other') {
           other.style.display = 'initial';
    } else {
           other.style.display = 'none';
        }
})

// changes display of text in color dropdown, depending on what desgin user selects //

const design = document.getElementById('design');
const colorDiv = document.getElementById('shirt-colors');
const colorSelect = document.getElementById('color');

colorDiv.style.display = 'none';

design.addEventListener('change', () => {   //figure out how to fix hidden and selected buttons, dont repeat this code //
        if (design.value === 'js puns') {
            colorDiv.style.display = 'initial';
            colorSelect.getElementsByTagName('option')[1].setAttribute('hidden', true)
            colorSelect.getElementsByTagName('option')[2].setAttribute('hidden', true)
            colorSelect.getElementsByTagName('option')[3].setAttribute('hidden', true)
            colorSelect.getElementsByTagName('option')[4].setAttribute('selected', true)
            colorSelect.getElementsByTagName('option')[5].setAttribute('selected', true)
            colorSelect.getElementsByTagName('option')[6].setAttribute('selected', true)
            
        } else if (design.value === 'heart js'){
            colorDiv.style.display = 'initial';
            colorSelect.getElementsByTagName('option')[1].setAttribute('selected', true)
            colorSelect.getElementsByTagName('option')[2].setAttribute('selected', true)
            colorSelect.getElementsByTagName('option')[3].setAttribute('selected', true)
            colorSelect.getElementsByTagName('option')[4].setAttribute('hidden', true)
            colorSelect.getElementsByTagName('option')[5].setAttribute('hidden', true)
            colorSelect.getElementsByTagName('option')[6].setAttribute('hidden', true)
        }
})



// updates the total cost which reflects the checked activities //

const totalElement = document.getElementById('activities-cost');
const fieldset = document.getElementById('activities');
// let checkbox = document.querySelectorAll('input[type=checkbox]') 
let total = 0;

fieldset.addEventListener('change', (e) => {
    if (e.target.checked) {
        total = total + +e.target.getAttribute('data-cost');
        totalElement.innerHTML = `Total: $${total}`;
    } else if (e.target.checked === false) {
        total = total - +e.target.getAttribute('data-cost');
        totalElement.innerHTML = `Total: $${total}`;
    }
});

// Changes the payment section based on what payment validation the user selected //

const payment = document.getElementById('payment');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
const creditCard = document.getElementById('credit-card');

// Sets intial payment screen for credit card //
payment.value = 'credit-card'
payPal.style.display = 'none';
bitCoin.style.display = 'none';


payment.addEventListener('change', (e) => {    //why wont this event listner change the display, seems to only run first if command //
    if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
        bitCoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (e.target.value === 'credit-card') {
        payPal.style.display = 'none';
        bitCoin.style.display = 'none';
        creditCard.style.display = 'block';
    } else if (e.target.value === 'bitcoin') {
        payPal.style.display = 'none';
        bitCoin.style.display = 'block';
        creditCard.style.display = 'none';
    }
    console.log(payment.value)
})


// Form Validation // ------ still working on this 
const form = document.querySelector('form');

// Name Function //
const nameFunction = () => {
    const nameInput = document.getElementById('name');
    console.log(nameInput)
    if (nameInput.value == '') {
        alert('please fill out the name field')
        // nameInput.style.border = 'red'
        console.log(nameInput.value)
    }
}



form.addEventListener('submit', (e) => {
    if (nameFunction) {
        e.preventDefault()
    }
});














