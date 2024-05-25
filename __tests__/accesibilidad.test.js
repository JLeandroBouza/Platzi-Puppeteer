const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
expect.extend ({toMatchImageSnapshot})
const {AxePuppeteer} = require ('@axe-core/puppeteer')


describe ('Accesibilidad',() =>{

    let browser
    let page
    
    beforeAll(async () =>{
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()
        
    },3500)

    afterAll(async() => {
        await browser.close()
    })

    it('Pruebas de Accesibilidad', async () =>{


        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
        const snapshot = await page.accesibility.snapshot()
        console.log(snapshot)
        
        
    },50000)

    it('Pruebas de Accesibilidad con axe', async () =>{



        await page.setBypassCSP(true)
        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
       
        const result = await new AxePuppeteer(page).analyze()
        console.log(result.violations[0].nodes[0])
        
        
    },50000)


   
})