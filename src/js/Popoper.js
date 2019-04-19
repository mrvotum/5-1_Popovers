export default class Popoper {
  constructor() {
    this.type = 'button';
    this.class = 'btn';
    this.button = null;
  }

  set popoperTitle(title) {
    this.title = title;
  }

  set popoperContent(data) {
    this.data = data;
  }

  create() {
    this.holder = document.querySelector('[data-id=holder]');
    this.button = document.querySelector('[data-id=buttonWithPopover]');
    this.button.setAttribute('data-content', this.data);

    this.addListenerButton();
  }

  addListenerButton() {
    this.button.addEventListener('click', () => {
      const popoperEl = document.createElement('div');
      popoperEl.className = 'popover';
      popoperEl.setAttribute('data-id', 'popover');

      popoperEl.innerHTML = `
        <h3 class="popoverTitle">${this.title}</h3>
        <div class="popoverContent">${this.data}</div>`;

      this.holder.appendChild(popoperEl);

      // так как добавляется после кнпоки, то придётся полностью вычитать высоту кнопки из подсказки
      const spaceUnderPopover = 15;
      popoperEl.style.marginTop = `${-this.button.offsetHeight - popoperEl.offsetHeight - spaceUnderPopover}px`;
      popoperEl.style.marginLeft = `${(this.button.offsetWidth - popoperEl.offsetWidth) / 2}px`;

      setTimeout(() => {
        this.button.parentElement.removeChild(popoperEl);
      }, 1000);
    });
  }
}
