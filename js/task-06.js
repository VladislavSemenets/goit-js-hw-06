const nameInput = document.getElementById('validation-input');

nameInput.addEventListener('blur', () => {
    const inputValue = nameInput.value;
    const datasetInput = nameInput.dataset;

    if (inputValue.length === parseInt(datasetInput.length)) {
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
} else {
nameInput.classList.remove('valid');
nameInput.classList.add('invalid');}
});
