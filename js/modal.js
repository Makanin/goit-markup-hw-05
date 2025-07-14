(() => {
  const refs = {
    modal: document.querySelector('#modal'),
    openBtn: document.querySelector('#modal-open'),
    closeBtn: document.querySelector('#modal-close'),
  };
  refs.modal.addEventListener('close', () =>
    refs.modal.classList.remove('modal-open')
  );
  refs.openBtn.addEventListener('click', () => {
    refs.modal.showModal();
    setTimeout(() => modal.classList.add('modal-open'));
  });
  refs.closeBtn.addEventListener('click', () => modal.close());
})();