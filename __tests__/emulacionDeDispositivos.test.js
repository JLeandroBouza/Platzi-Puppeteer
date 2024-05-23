const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
import { KnownDevices } from 'puppeteer';
//jest.setTimeout(35000);

describe ('Extrayendo información',() =>{

    let browser
    let page
    //puede usarse beforeAll
    beforeEach(async () =>{
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()
        await page.goto('http://platzi.com', {waitUntil: 'networkidle0'})
    },10000)

    afterall(async () => {
        await browser.close()
    })

    it('Emulando dispositivos de forma manual', async()=> {

        await page.emulate({
            name: 'Mi Primer Dispositivo',
            viewport: {
                width: 375,
                height: 667,
                devicePixelFactor: 2,
                isMobile: true,
                hasTouch: true,
                isLandscape: false
            }
        })

    })

    it('Emulando un sitio de Escritorio', async()=> {

        await page.setViewport({
                width: 1280,
                height: 800,
            })
        
        await page.waitForTimeout(3000)

    },35000)

    it('Emulando un sitio en una tablet', async()=> {
        
        const tablet = KnownDevices['iPad Pro']
        await page.emulate(tablet)
        await page.waitForTimeout(3000)
        
    },35000)

    
})
