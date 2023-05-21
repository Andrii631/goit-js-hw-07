const formEl = document.querySelector('.login-form')

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
  let dataForm = {email: email.value, password: password.value}

  console.dir(dataForm)
  event.currentTarget.reset();
}
