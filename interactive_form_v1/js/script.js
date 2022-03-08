//----This js file includes all the of the written javascript code for this validation form----//

//---Focuses input name text field on default---//
const nameFocus = () => document.getElementById('name').focus();
nameFocus();

//----Hides 'other' job role section until user selcts other option---//
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

//----Changes display of text in color dropdown, depending on what desgin user selects---//

const design = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colors = document.querySelectorAll('[data-theme]')

colorSelect.disabled = true;

design.addEventListener('change', (e) => {
    colorSelect.disabled = false;
    colors.forEach(color => {
        if (e.target.value === color.getAttribute('data-theme')) {
            color.style.display = 'block';
            colorSelect.value = '';
        } else {
          color.style.display = 'none';
        }
      });
})

//----Updates the total cost which reflects the checked activities----//

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

//----Changes the payment section based on what payment validation the user selected-----//

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
const checkbox = document.querySelectorAll('input[type=checkbox]');

const activityFunction = (e) => {
    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked) {
            return true
        }
    }
}

// Credit Card Function //

// Credit Card Regexs' //
const creditCardNumber = new RegExp('^([0-9]{13}|[0-9]{14}|[0-9]{15}|[0-9]{16})$');
const creditZipCode = new RegExp('^([0-9]{5})$');
const creditCVV = new RegExp('^([0-9]{3})$');

//Credit Card Input Values//
const creditCardInput = document.getElementById('cc-num');
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');


const creditCardFunction = () => {  
    if(creditCardInput.value.match(creditCardNumber)) {
        return true
    } else {
        return false
    }
}
const zipFunction = () => {
    if (zipInput.value.match(creditZipCode)) {
        return true 
    } else {
        return false
    }
}
const cvvFunction = () => {
    if (cvvInput.value.match(creditCVV)) {
        return true 
    } else {
        return false
    }
}



// Validtion Event Listener // ----- alot of repeated code see if you can DRY princciple---//
const nameValidation = document.getElementById('name').parentElement;
const activitiesValidation = document.getElementById('activities');
const emailValidation = document.getElementById('email').parentElement;
const creditValidation = document.querySelector('.credit-card-box')

const creditLabel = document.querySelector('.num-box').firstElementChild;
const zipLabel = document.querySelector('.zip-box').firstElementChild;
const cvvLabel = document.querySelector('.cvv-box').firstElementChild;
 
const cvvHint = cvvInput.nextElementSibling
const zipHint = zipInput.nextElementSibling;
const creditHint = creditCardInput.nextElementSibling;

form.addEventListener('submit', (e) => {
    if ( nameFunction() ) {
        nameValidation.classList.remove('not-valid');
        nameValidation.classList.add('valid');
        document.getElementById('name-hint').style.display = 'none';
    } else {
        nameValidation.classList.add('not-valid');
        nameValidation.classList.remove('valid');
        document.getElementById('name-hint').style.display = 'block';
        e.preventDefault();
    }
    if ( emailFunction() ) {
        emailValidation.classList.remove('not-valid');
        emailValidation.classList.add('valid');
        document.getElementById('email-hint').style.display = 'none'
    } else {
        const invalidCom = '.com'
        const invalidGmail = '@gmail'
        if(!emailInput.value.includes(invalidCom)) {
            document.getElementById('email-hint').innerHTML = 'Please include a ".com" in your email address.'
        };
        if(!emailInput.value.includes(invalidGmail)) {
            document.getElementById('email-hint').innerHTML = 'Please include a @gmail in your email address.'
        };
        emailValidation.classList.add('not-valid');
        emailValidation.classList.remove('valid');
        document.getElementById('email-hint').style.display = 'block';
        e.preventDefault()
    } 
    if ( activityFunction() ) {
        activitiesValidation.classList.remove('not-valid');
        activitiesValidation.classList.add('valid');
        document.getElementById('activities-hint').style.display = 'none';
    } else {  
        activitiesValidation.classList.remove('valid');
        activitiesValidation.classList.add('not-valid');
        document.getElementById('activities-hint').style.display = 'block';
        e.preventDefault()
    }
    if (payment.value === 'credit-card') {
        if ( creditCardFunction() ) {
        creditLabel.classList.remove('not-valid');
        creditLabel.classList.add('valid');
        creditHint.style.display = 'none'
        } else {
        creditLabel.classList.add('not-valid');
        creditLabel.classList.remove('valid');
        creditHint.style.display = 'block'
        e.preventDefault();
        }
        if ( zipFunction() ) {
        zipLabel.classList.remove('not-valid');
        zipLabel.classList.add('valid');
        zipHint.style.display = 'none'
        } else {
        zipLabel.classList.add('not-valid');
        zipLabel.classList.remove('valid');
        zipHint.style.display = 'block'
        e.preventDefault();
        }
        if ( cvvFunction() ) {
        cvvLabel.classList.remove('not-valid');
        cvvLabel.classList.add('valid');
        cvvHint.style.display = 'none'
        } else {
        cvvLabel.classList.add('not-valid');
        cvvLabel.classList.remove('valid');
        cvvHint.style.display = 'block';
        e.preventDefault();
        }
    }
});

// ---Accessibility Event Listeners---///
const dateAndTime = document.querySelectorAll('[data-day-and-time]');

for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus',(e) => {   
        e.target.parentElement.classList.add('focus');
    });
    checkbox[i].addEventListener('blur',(e) => {   
        e.target.parentElement.classList.remove('focus');
    });
}

//---Conflicting Activites Fucntion--//

activitiesValidation.addEventListener('change', (e) => {
    for(let i = 0; i < checkbox.length; i++)
        if (e.target.checked) {
            const checkboxTime = checkbox[i].getAttribute('data-day-and-time')
            if (e.target.getAttribute('data-day-and-time') === checkboxTime) {
                if (e.target.name !== checkbox[i].name){
                    checkbox[i].disabled = true;
                } 
            } 
        } else {
            checkbox[i].disabled = false;
        }
})

//----Real Time Error Message----// 

nameInput.addEventListener('keyup', () => {
    if ( nameFunction() ) {
        nameValidation.classList.remove('not-valid');
        nameValidation.classList.add('valid');
        document.getElementById('name-hint').style.display = 'none';
    } else {
        nameValidation.classList.add('not-valid');
        nameValidation.classList.remove('valid');
        document.getElementById('name-hint').style.display = 'block';
    }
})

emailInput.addEventListener('keyup', () => {
    if ( emailFunction() ) {
        emailValidation.classList.remove('not-valid');
        emailValidation.classList.add('valid');
        document.getElementById('email-hint').style.display = 'none'
    } else {
        emailValidation.classList.add('not-valid');
        emailValidation.classList.remove('valid');
        document.getElementById('email-hint').style.display = 'block';
    } 
})

const boxes = document.getElementById('activities-box') 
    boxes.addEventListener('change', () => {
        if ( activityFunction() ) {
            activitiesValidation.classList.remove('not-valid');
            activitiesValidation.classList.add('valid');
            document.getElementById('activities-hint').style.display = 'none';
        } else {  
            activitiesValidation.classList.remove('valid');
            activitiesValidation.classList.add('not-valid');
            document.getElementById('activities-hint').style.display = 'block';
        }
    });

creditCardInput.addEventListener('keyup', () => {
    if (payment.value = 'credit-card') {
        if ( creditCardFunction() ) {
        creditLabel.classList.remove('not-valid');
        creditLabel.classList.add('valid');
        creditHint.style.display = 'none'
        } else {
        creditLabel.classList.add('not-valid');
        creditLabel.classList.remove('valid');
        creditHint.style.display = 'block'
        }
    }
})

zipInput.addEventListener('keyup', () => {
    if (payment.value = 'credit-card') {
        if ( zipFunction() ) {
        zipLabel.classList.remove('not-valid');
        zipLabel.classList.add('valid');
        zipHint.style.display = 'none'
        } else {
        zipLabel.classList.add('not-valid');
        zipLabel.classList.remove('valid');
        zipHint.style.display = 'block'
        }
    }
})
cvvInput.addEventListener('keyup', () => {
    if (payment.value = 'credit-card') {
        if ( cvvFunction() ) {
        cvvLabel.classList.remove('not-valid');
        cvvLabel.classList.add('valid');
        cvvHint.style.display = 'none'
        } else {
        cvvLabel.classList.add('not-valid');
        cvvLabel.classList.remove('valid');
        cvvHint.style.display = 'block';
        }
    }
})
