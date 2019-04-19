import puppetteer from 'puppeteer';
import Popoper from '../src/js/Popoper';

// test('Popoper creating', () => {
//   const inputPopoper = new Popoper();
//   inputPopoper.popoperTitle = 'Popover title';
//   inputPopoper.popoperContent = 'Popover content';
//   // inputPopoper.create();

//   document.querySelector('[data-id=buttonWithPopover]').click();

//   const expected = document.querySelector('[data-id=popover]'); // ожидает

//   const received = 'kek'; // получает
//   expect(received).toEqual(expected); // сравнивает
// });

jest.setTimeout(30000); // default puppeteer timeout
describe('Click to button', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => { // открыть браузер
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  }); // открыть браузер
  afterAll(async () => { // закрыть браузер
    await browser.close();
  }); // закрыть браузер
  test('should add .valid class for valid inn', async () => {
    await page.goto(baseUrl);

    const inputPopoper = new Popoper();
    inputPopoper.popoperTitle = 'Popover title';
    inputPopoper.popoperContent = 'Popover content';
    inputPopoper.create();

    const btn = await page.$('[data-id=buttonWithPopover]');
    // const input = await form.$('[data-id=innogrn-input]');
    // await input.type('7715964180');
    // const submit = await form.$('[data-id=innogrn-submit]');
    btn.click();
    await page.waitForSelector('[data-id=popover]');
  });
});
