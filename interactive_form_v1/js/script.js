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

const dataThemePuns = document.querySelectorAll('[data-theme = "js puns"]')
const dataThemeHeart = document.querySelectorAll('[data-theme = "heart js"]')
const option = document.querySelector('[value= "cornflowerblue"]');



colorDiv.style.display = 'none';

design.addEventListener('change', (e) => {   //figure out how to fix hidden and selected buttons, dont repeat this code //
    colorDiv.style.display = 'initial';         /// for loops? /// e.target ??
    if (e.target === document.querySelector('[value = "js puns"]')) {
        option.setAttribute('hidden',true)
        console.log('this works')
    } else if (design.value === 'heart js') {
        option.setAttribute('hidden',false)
    }
})



// updates the total cost which reflects the checked activities //

const totalElement = document.getElementById('activities-cost');
const fieldset = document.getElementById('activities');
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


payment.addEventListener('change', (e) => {    
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


// ---- Form Validation ------ // 
const form = document.querySelector('form');

// Name Function //
const nameInput = document.getElementById('name');
const whiteSpace = new RegExp('^\s+$');

const nameFunction = () => {
    if (nameInput.value === '' || /\s/.test(nameInput.value)) {  // is this a valid way to interpret white sapce?//
        return false
    } else {
        return true
    }
}

// Email Function //
const emailInput = document.getElementById('email');
const validEmailString = new RegExp('[a-zA-Z0-9]+@+[a-zA-Z]+.com')

const emailFunction = () => {
    if (emailInput.value.match(validEmailString)) {
        return true
    } else {
        return false
    }
}

// Activites Function //
const checkbox = document.querySelectorAll('input[type=checkbox]') // only works for the first chekcbox//

const activityFunction = () => {
    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked) {
            return true
        } else {
            return false
        }
}
}


// Validtion Event Listener //
form.addEventListener('submit', (e) => {
    if ( nameFunction() ) {
        console.log('Name field filled out correctly. ');
        nameInput.style.border = '1px solid rgba(36, 28, 21, 0.2)';
    } else {
        e.preventDefault();
        nameInput.style.border = '3px solid red';
        console.log('Please fill out the name field.')
    }
    if ( emailFunction() ) {
        console.log('Email field filled out correctly.')
    } else {
        e.preventDefault()
        emailInput.style.border = '3px solid red'
        console.log('Please type a valid email address.')
    } 
    if ( activityFunction() ) {
        console.log('an activity has been picked');
    } else {
        e.preventDefault()
        const activityBorder = document.getElementById('activities').firstElementChild;
        activityBorder.style.border = '3px solid red';
        console.log('Please select at least one activity.')
    }
});














