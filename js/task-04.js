const btnEl = document.querySelector('button[data-action="decrement"]');
const btnEle = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const handleClick = () => {
counterValue -= 1;
value.textContent = counterValue;
};

btnEl.addEventListener('click', handleClick);

const removeClick = () => {
counterValue += 1;
value.textContent = counterValue;
};
btnEle.addEventListener('click', removeClick);