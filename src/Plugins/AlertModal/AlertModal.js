import AlertModalTemplate from '@/components/Commons/AlertModalTemplate';

export default {
  install(Vue) {
    const ModalConstructor = Vue.extend(AlertModalTemplate);
    let modalInstance = null;

    window.AlertModal = () => {
    };

    window.AlertModal.show = (title, message) => {
      if (modalInstance) {
        modalInstance.isShowModal = true;
        modalInstance.title = title;
        modalInstance.message = message;
        return;
      }

      modalInstance = new ModalConstructor({
        el: document.createElement('div'),
        data() {
          return {
            title: this.title,
            message: this.message,
          };
        },
      });
      modalInstance.isShowModal = true;
      document.body.appendChild(modalInstance.$el);
    };

    window.AlertModal.close = () => {
      if (modalInstance) {
        modalInstance.isShowModal = false;
        return null;
      }
      return null;
    };
  },
};
