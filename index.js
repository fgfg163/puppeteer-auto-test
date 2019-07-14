const puppeteer = require('puppeteer-core');
const findChrome = require('carlo/lib/find_chrome');
const sleep = require('sleep-promise');

(async () => {
  const {executablePath} = await findChrome({});

  const browser = await puppeteer.launch({
    executablePath,
    pipe: true,
    defaultViewport: null,
    headless: false,
    userDataDir: '.runtime',
  });

  const page = await browser.newPage();
  await page.goto('https://www.bilibili.com/');
  await sleep(1000);
  await page.screenshot({path: 'example.png', fullPage: true});

  await browser.close();
})();
