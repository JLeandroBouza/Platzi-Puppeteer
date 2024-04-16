const puppeteer = require ('puppeteer')

describe ('Mi primer test en puppeteer', () =>{

    it('Debe de abrir y cerrar el navegador', async()=>{
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage ()
        await page.goto ('https://platzi.com/')
        await page.evaluate(() => {
            return new Promise((resolve) => {
            setTimeout(resolve, 1000);
            });
            });
        await browser.close()
    })

    
})