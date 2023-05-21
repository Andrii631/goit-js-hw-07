const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const spanEl = document.querySelector('#value');
btnDecEl.addEventListener('click',() => spanEl.textContent = counterValue -= 1);
btnIncEl.addEventListener('click',() => spanEl.textContent = counterValue += 1)
