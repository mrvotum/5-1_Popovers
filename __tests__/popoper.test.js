import Popoper from '../src/js/class_popoper';

test('Popoper creating', () => {
  const inputPopoper = new Popoper();

  const expected = { // ожидает
    type: 'button',
    class: 'btn',
    button: 0,
  };

  const received = inputPopoper; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Creating title', () => {
  const inputPopoper = new Popoper();
  inputPopoper.popoperTitle = 'Popover title';

  const expected = 'Popover title'; // ожидает

  const received = inputPopoper.title; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Creating content(', () => {
  const inputPopoper = new Popoper();
  inputPopoper.popoperContent = 'Popover content';

  const expected = 'Popover content'; // ожидает

  const received = inputPopoper.data; // получает
  expect(received).toEqual(expected); // сравнивает
});
