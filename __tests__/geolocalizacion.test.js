const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
expect.extend ({toMatchImageSnapshot})


describe ('Geolocalización',() =>{

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

    it('Cambio de la geolocalizacion', async () =>{

        const context = browser.defaultBrowserContext()

        await context.overridePermissions('https://chercher.tech/practice/geo-location.html', ['geolocation'])

        await page.setGeolocation ({latitude: 90, longitude: 20})

        await page.goto('https://chercher.tech/practice/geo-location.html')

    },50000)


   
})