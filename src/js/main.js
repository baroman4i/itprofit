import '../styles/main.scss';
import Inputmask from 'inputmask';
import validateForm from './validation';
import setupModal from './modal';
import sendForm from './ajax';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form))
        sendForm(form);
    });
  }

  setupModal();
});

Inputmask({
  mask: '+375 (99) 999-99-99',
  showMaskOnHover: false,
}).mask(document.querySelector('input[name="phone"]'));
