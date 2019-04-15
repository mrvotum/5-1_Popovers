const dataHolder = document.querySelector('[data-holder=holder]');
const dataContent = document.querySelector('[data-content]'); // cама кнопка

const popoverContent = dataContent.getAttribute('data-content');
const popoverTitle = dataContent.title;

let clickCount = 0;

dataContent.addEventListener('click', (event) => {
  if (clickCount === 0){
    const popoperEl = document.createElement('div');
    popoperEl.className = 'popover';
  
    popoperEl.innerHTML = `
      <h3 class="popoverTitle">${popoverTitle}</h3>
      <div class="popoverContent">${popoverContent}</div>`;
  
    dataHolder.appendChild(popoperEl);
  
    // так как добавляется после кнпоки, то придётся полностью вычитать высоту кнопки из подсказки
    popoperEl.style.marginTop = `${-dataContent.offsetHeight - popoperEl.offsetHeight - 15}px`;
    clickCount++;
  } else {
    const childToRemove = dataContent.parentNode.lastChild;
    dataContent.parentNode.removeChild(childToRemove);
    clickCount--;
  }
});

function remove() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);
  }
};


