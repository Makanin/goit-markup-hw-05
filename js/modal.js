// let modal = document.querySelector('#modal');
// let openBtn = document.querySelector('#modal-open');
// let closeBtn = document.querySelector('#modal-close');
// modal.addEventListener('close', () => elem.classList.remove('modal-open'));
// openBtn.addEventListener('click', () => {
//   modal.showModal();
//   setTimeout(() => modal.classList.add('modal-open'));
// });
// closeBtn.addEventListener('click', () => modal.close());

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