const puppeteer = require('puppeteer');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://real-state-alpha.vercel.app/');
  await page.screenshot({ path: 'public/screenshot.png' });
  await page.setViewport({width: 1400, height: 1024});
  await browser.close();
}

takeScreenshot();