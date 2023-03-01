import ModalView from "./modal.view.js";
import ModalModel from "./modal.model.js";

// TODO: запретить создавать новые инстансы, если они уже существуют

export default class Modal {
  constructor(content, options, targetNode = null) {
    this.view = new ModalView();
    this.model = new ModalModel();
    this.element = targetNode;

    this.defaultOptions = {
      onOpen: () => {},
      onClose: () => {},
    };
    this.defaultContent = {
      header: "",
      body: "",
      footer: "",
    };
    this.options = Object.assign(this.defaultOptions, options);
    this.content = Object.assign(this.defaultContent, content);

    this.handleModalCreate();

    // this.initEventListeners();
  }

  handleModalCreate = async () => {
    console.log(this.content);
    // await this.model.importStlyes();
    this.view.createMarkup(this.content);
    this.model.renderModal(this.view.modal, this.options);
  };

  // initEventListeners() {
  //   this.elements.forEach((el) => {
  //     el.addEventListener('click', this.handleModalCreate);
  //   });
  // }
}
