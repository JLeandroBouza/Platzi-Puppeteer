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
        await page.goto('http://google.com', {waitUntil: 'networkidle0'})
    },10000)

    afterEach(async () => {
        await browser.close()
    })

    it('Captura de pantalla completa', async()=> {

        await page.screenshot({
            path: './capturaDePantalla.png',
            fullPage: true
        })
    })

    it('Captura de pantalla en un area especifica', async()=> {

        await page.screenshot({
            path: './capturaDePantallaAreaEspecifica.png',
            clip:{
                x:0,
                y:0,
                width: 500,
                height: 500
            }
        })
    })

    it('Captura de pantalla con un fondo transparente', async()=> {

        await page.evaluate (() => (document.body.style.background = 'transparent') )
        await page.screenshot({
            path: './capturaDePantallaconFondoTransparente.png',
            omitBackground: true
            
        })
    })

    it('Captura de pantalla solo a un Elemento', async()=> {

        const element = await page.waitForSelector('#hplogo')

        await element.screenshot({
            path: './capturaDePantallaElemento.png',
            
        })
    })

})
    

