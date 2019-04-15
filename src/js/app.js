const dataHolder = document.querySelector('[data-holder=holder]');
const dataContent = document.querySelector('[data-content]'); // cама кнопка

const popoverContent = dataContent.getAttribute('data-content');
const popoverTitle = dataContent.title;

dataContent.addEventListener('click', () => {
  const popoperEl = document.createElement('div');
  popoperEl.className = 'popover';

  popoperEl.innerHTML = `
    <h3 class="popoverTitle">${popoverTitle}</h3>
    <div class="popoverContent">${popoverContent}</div>`;

  dataHolder.appendChild(popoperEl);

  // так как добавляется после кнпоки, то придётся полностью вычитать высоту кнопки из подсказки
  const spaceUnderPopover = 15;
  popoperEl.style.marginTop = `${-dataContent.offsetHeight - popoperEl.offsetHeight - spaceUnderPopover}px`;
  popoperEl.style.marginLeft = `${(dataContent.offsetWidth - popoperEl.offsetWidth) / 2}px`;

  setTimeout(() => {
    const childToRemove = dataContent.parentNode.lastChild;
    dataContent.parentNode.removeChild(childToRemove);
  }, 1500);
});
