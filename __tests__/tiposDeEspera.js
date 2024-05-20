const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
jest.setTimeout(35000);

describe ('Tiempos de espera',() =>{

    it('mostrar todos los tipos de espera', async () =>{
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
    
    
    const page = await browser.newPage()
    await page.goto('https://platzi.com' , {waitUntil: 'networkidle2' })


    //Esoera explicita

    await new Promise(r => setTimeout(r, 3000))

    //Espera por un selector CSS

    await page.waitForSelector('body > main > header > div > figure > svg > g > path:nth-child(2)')

    //Espera por un xpath

    await page.waitforxPath('body > main > header > div > figure > svg > g > path:nth-child(2)')

    await browser.close()

})

})