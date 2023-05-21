const ulEl = document.querySelector('#categories');
let childEl = ulEl.children;
console.log(`Number of categories: ${childEl.length}`)
let arr = [...childEl];
[...childEl].forEach(a =>{   
    console.group(`Category: ${a.firstElementChild.textContent}`)
    console.log(`Elements: ${a.lastElementChild.children.length}`)
    console.groupEnd()   
})