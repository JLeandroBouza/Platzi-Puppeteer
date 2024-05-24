const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
const {getText,getCount} = require ('../Lib/helpers')
//jest.setTimeout(35000);

describe ('Extrayendo información',() =>{

    let browser
    let page
    
    beforeAll(async () =>{
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()
        await page.goto('http://platzi.com', {waitUntil: 'networkidle0'})
    },3500)

    afterAll(async() => {
        await browser.close()
    })

    it('Snapshot', async () =>{

        await page.waitForSelector('body > main > header > div > button')
        const nombreBoton = await getText(page,'body > main > header > div > button')
    
        console.log('nombreBoton', nombreBoton)

    

},50000)
})