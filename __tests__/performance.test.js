const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
expect.extend ({toMatchImageSnapshot})
const {AxePuppeteer} = require ('@axe-core/puppeteer')


describe ('Accesibilidad',() =>{

    let browser
    let page
    
    beforeAll(async () =>{
        browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        })

        page = await browser.newPage()
        
        
    },3500)

    afterAll(async() => {
        await browser.close()
    })


    it('Medir la performance de la automatización', async () =>{
        
        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
        const metrics = await page.metrics()
        console.log(metrics)
    
    },50000)

    it('Medir la performance de la pagina', async () =>{
        
        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
        const metrics2 = await page.evaluate(()=> JSON.stringify(window.performance))
        console.log(metrics)
    
    },50000)

    it('Medir la performance del page load', async () =>{
        
        await page.tracing.start({path: 'profile.json'})
        await page.goto('https://platzi.com')
        await page.tracing.stop()
    
    },50000)

    it('Medir la performance del page load con screenshots', async () =>{
        
        await page.tracing.start({path: 'profile.json', screenshot: true})
        await page.goto('https://platzi.com')
        await page.tracing.stop()
    
    },50000)

    it('Medir la performance del page load con screenshots', async () =>{
        
        await page.tracing.start({path: 'profile.json', screenshot: true})
        await page.goto('https://platzi.com')
        await page.tracing.stop()
        const tracing = JSON.parse(fs.readFileSync('./profile.json', 'utf8'))
        //Filtrar el JSON
        const traceScreenShots = tracing.traceEvents.filter(
            (x)=>
                x.cat === 'disabled-by-default-devtools.screenshot' &&
                x.name === 'Screenshot' &&
                typeof x.args !== 'undefined' &&
                typeof x.args.snapshot !== 'undefined'
        )
        ///Iterar sobre este arreglo para crear las imagenes

        traceScreenShots.forEach(function(snap,index){
            fs.writeFile(`trace-screenshot-${index}.png`, snap.args.snapshot, 'base64', function(err){
                if(err){
                    console.log('No pude crear el archivo', err)
                }
            })
        })
    
    },50000)

})