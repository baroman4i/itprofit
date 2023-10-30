export default function validateForm(form) {
  const errorMessages = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
  };

  const showError = (input, message) => {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
    input.classList.add('error');
  };

  const removeError = (input) => {
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      input.parentNode.removeChild(errorElement);
    }
    input.classList.remove('error');
  };


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  let isValid = true;
  form.querySelectorAll('input, textarea').forEach((input) => {
    removeError(input);
    if (input.value.trim() === '') {
      isValid = false;
      showError(input, errorMessages.required);
    }
  });

  const emailInput = form.querySelector('input[name="email"]');
  if (emailInput.value.trim() !== '' && !validateEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput, errorMessages.email);
  }


  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', () => {
      removeError(input);
    });
  });

  return isValid;

}
