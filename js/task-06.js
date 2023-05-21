const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', classAudit)
function classAudit (event){   
   inputEl.classList.toggle('valid')
   inputEl.classList.toggle('invalid')
   inputEl.classList.add(+inputEl.getAttribute('data-length') === event.currentTarget.value.length ? 'valid': 'invalid')
}