const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
jest.setTimeout(35000);

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
    })

    //afterAll
    afterEach(async() => {
        await browser.close()
    })

    it('Extraer el titulo', async () =>{
        

    const page = await browser.newPage()
    await page.goto('https://platzi.com' , {waitUntil: 'networkidle0' })
    const titulo = await page.title()
    const url = await page.url()

// sirve para validar que el titulo o direccion sea la correcta al momento de probar. 
    console.log('titulo',titulo)
    console.log('url',url)

    await page.waitForSelector('body > main > header > div > button')
    const nombreBoton = await page.$eval('body > main > header > div > button', (button)=> button.textContent())
    
    console.log('nombreBoton', nombreBoton)

// para extrar info con xpath

    const [button] = await page.$x('/html/body/main/header/div/button')
    const propiedad = await button.getProperty('textContent')
    const texto = await propiedad.jsonValue()

    console.log ('texto', texto)

    // segunda forma para extraer con xpath

    const texto2= await page.evaluate((name)=> name.textContent, button)
    console.log('texto2',texto2)

// contar elementos en la web

    const images = await page.$$eval('img', ()=> imagenes.length)
    console.log('images',images)

    

})
})