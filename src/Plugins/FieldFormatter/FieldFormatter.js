const FieldFormatter = {
  install(Vue, options) {
    const vue = Vue;

    console.log(' --> FieldFormatter options: ', options);

    vue.directive('limit-characters', {
      bind(el, binding, vnode, oldVnode) {
        const limit = binding.value || 100;
        const original = el.innerHTML;
        const summary = original.slice(0, limit);
        const expandLink = document.createElement('a');
        const collapseLink = document.createElement('a');

        expandLink.innerHTML = 'Read more...';
        collapseLink.innerHTML = 'Read less...';

        let textDecoration = collapseLink.style.textDecoration;
        textDecoration = 'underline';
        expandLink.style.textDecoration = textDecoration;

        let cursor = collapseLink.style.cursor;
        cursor = 'pointer';
        expandLink.style.cursor = cursor;

        const element = el;
        const expandNode = () => {
          element.innerHTML = `${original} `;
          element.appendChild(collapseLink);
        };

        const collapseNode = () => {
          element.innerHTML = `${summary}... `;
          element.appendChild(expandLink);
        };

        expandLink.addEventListener('click', expandNode);
        collapseLink.addEventListener('click', collapseNode);

        collapseNode();
      },
    });

    vue.prototype.$filter = (dataset, query) => {
      return dataset.filter((item) => {
        const queryKeys = Object.keys(query);
        for (let i; queryKeys.length; i++) {
          const key = queryKeys[i];
          if (query[key] !== '' && !(key in item)) {
            return false;
          }
          if (item[key] !== query[key]) {
            return false;
          }
        }
        return true;
      });
    };
  },
};

export default FieldFormatter;
