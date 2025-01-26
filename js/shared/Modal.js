const Modal = {
  render: (modal_id) => {
    let html = `
      <dialog id="${modal_id}">
        <div class="modal_close" onclick="Modal.closeModal('${modal_id}')">
          X
        </div>
        <div id="${modal_id}_content" class="modal_content"></div>
      </dialog>
    `;

    return html;
  },

  openModal: (modal_id, modal_content) => {
    let modal = document.getElementById(modal_id);

    if (modal) {
      console.log('Open modal: ' + modal_id);
      // inject content into modal
      let modal_content_id = modal_id + '_content';

      Utils.inject(modal_content_id, modal_content);

      modal.showModal();
    }
  },

  closeModal: (modal_id) => {
    let modal = document.getElementById(modal_id);

    if (modal) {
      console.log('Close modal: ' + modal_id);
      modal.close();
    }
  }
}