const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl= document.querySelector('#ingredients');
let arr = []
ingredients.forEach(ingredient =>{
  let liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  arr.push(liEl)
})
ulEl.append(...arr);
