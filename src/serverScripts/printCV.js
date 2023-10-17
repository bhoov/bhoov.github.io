// const puppeteer = require('puppeteer')
import * as puppeteer from "puppeteer"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

(async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  const filename = `file://${__dirname}/../../build/cv.html`;
  const outFilename = `${__dirname}/../../static/cv-pdfs/cv.pdf`;
  await page.goto(filename);
  await page.pdf({
    path: outFilename,
    format: 'letter',
    margin: {
      top: "60px",
      left: "80px",
      right: "80px",
      bottom: "60px"
    }
  });
  await browser.close();
})();