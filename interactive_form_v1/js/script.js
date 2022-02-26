//focuses input name text field on default//
const nameFocus = () => document.getElementById('name').focus();
nameFocus();

// hides 'other' job role section until user selcts other option//
const jobRole = document.getElementById('title');
const other = document.getElementById('other-job-role');
const value = jobRole.options[jobRole.selectedIndex].value;


const jobOption = () => {
    if (value !== 'other') {
            other.style.display = 'none';
    } else {
            other.style.display = 'initial ';
    }
}


jobRole.addEventListener('click', jobOption)






