import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://real-state-alpha.vercel.app/");
  await page.screenshot({ path: "public/screenshot.png" });
  await browser.close();
})();
