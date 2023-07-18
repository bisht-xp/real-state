const puppeteer = require('puppeteer');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://real-state-alpha.vercel.app/');
  await page.screenshot({ path: 'public/screenshot.png' });
  await browser.close();
}

takeScreenshot();