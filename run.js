const puppeteer = require("puppeteer");
const express = require('express')

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--headless"
    ]
  });
  const [page] = await browser.pages();
  await page.goto("https://google.com");
  res.send(page.title());
  await page.close();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
