import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
loadForm();

function onInputData() {
formData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Заполните все поля.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  formData = {};
}

function loadForm() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}