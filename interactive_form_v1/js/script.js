//focuses input name text field on default//
const nameFocus = () => document.getElementById('name').focus();
nameFocus();

// hides 'other' job role section until user selcts other option//
const jobRole = document.getElementById('title');
const other = document.getElementById('other-job-role');
// const value = jobRole.options[jobRole.selectedIndex];
console.log(jobRole[6].text)

const jobOption = () => {
   for (let i = 0; i < jobRole.length; i++ )
      if (jobRole[i].text === 'Other') {
            other.style.display = 'initial';
    } else {
            other.style.display = 'none';
    }
}


jobRole.addEventListener('click',jobOption())







