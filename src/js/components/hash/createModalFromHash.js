import Modal from "../modal/modal.controller";
import { createModalContent, MODAL_CONTENT } from "../modal/modalContent";

export function createModalFromHashUrl() {
  // эта функция вызывается в window.onload один раз

  window.addEventListener("hashchange", () => {
    if (!window.location.hash) return;

    const location = decodeURI(window.location.hash).substring(1);
    const project = MODAL_CONTENT.find((el) => el.name === location);

    if (!project) return;

    const modalContents = createModalContent(project);

    new Modal(
      {
        header: modalContents.header,
        body: modalContents.body,
        footer: modalContents.footer,
      },
      { onClose: onModalClose }
    );
  });

  if (window.location.hash) {
    const event = new Event("hashchange");
    window.dispatchEvent(event);
  }
}

function onModalClose() {
  window.history.replaceState({}, "", "/"); // prevents page from reloading
}
