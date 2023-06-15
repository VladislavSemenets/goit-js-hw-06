const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        nameOutput.textContent = 'Anonymous'
    } 
    nameOutput.textContent = nameInput.value;
    
});