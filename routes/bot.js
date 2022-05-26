
const express = require("express")
const puppeteer = require("puppeteer")

const bot = express.Router()
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
} 

bot.get("/", async (req, res) =>{

    try{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto("https://web.whatsapp.com/");
        await page.setDefaultTimeout(0);
        await page.waitForSelector('[data-testid="search"]')
        .then(()=>  page.click('[data-testid="search"]', {
          delay: 3000
        }))
       await page.type("._13NKt", "Ashraf Labib");
        delay(2000)
        await page.keyboard.press("Enter")
        delay(2000)
    
        let messageAmount = 5;
    
        for(let i = 0; i<messageAmount; i++){
          delay(2000)
    
          await page.type(".p3_M1", "Test whatsapp sending message");
          delay(2000)
          await page.keyboard.press("Enter");
        }
        res.send("done")
      } catch (e) {
        console.error("error mine", e);
      }
    }
    
    )
module.exports = bot;
