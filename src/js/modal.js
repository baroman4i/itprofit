export default function setupModal() {
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.modal-button');
  const closeButton = document.querySelector('.modal-close');
  const modalContent = modal.querySelector('.modal-content');

  modalButton.addEventListener('click', () => {
    openModal();
  });

  closeButton.addEventListener('click', () => {
    closeModal();
  });

  function openModal() {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('open');
      modalContent.classList.add('open');
    }, 10);
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modalContent.classList.remove('open');
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  return {
    openModal,
    closeModal,
  };
}
