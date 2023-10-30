
export default function sendForm(form) {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'error') {
          for (const field in response.fields) {
            const input = form.querySelector(`[name="${field}"]`);
            if (input) {
              const errorMessage = response.fields[field];
              showError(input, errorMessage);
            }
          }
        } else if (response.status === 'success') {
          form.reset();
          alert(response.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });


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


}
