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

    it('PDF de pantalla completa', async()=> {

       let pdfCSS = []
       pdfCSS.push('<style>')
       pdfCSS.push('h1 {font-size: 10px; margin-left:30px;}')
       pdfCSS.push('</style>')
        const css = pdfCSS.join('')

        await page.pdf({
            path: './google.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: css + '<h1>' + 'Mi Primer PDF con pupetter' + '</h1>',
            footerTemplate: css + '<h1> Page <span class= "pageNumber"></span> of <span class= "totalPages"></span></h1>',
            margin: {
                top: '100px',
                bottom: '200px',
                right: '30px',
                left: '30px'
            }
        })
    },350000)

    it('PDF de pantalla completa en modo landscape', async()=> {

        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 {font-size: 10px; margin-left:30px;}')
        pdfCSS.push('</style>')
         const css = pdfCSS.join('')
 
         await page.pdf({
             path: './googlelandscape.pdf',
             format: 'A4',
             printBackground: true,
             displayHeaderFooter: true,
             headerTemplate: css + '<h1>' + 'Mi Primer PDF con pupetter' + '</h1>',
             footerTemplate: css + '<h1> Page <span class= "pageNumber"></span> of <span class= "totalPages"></span></h1>',
             margin: {
                 top: '100px',
                 bottom: '200px',
                 right: '30px',
                 left: '30px'
             },
            landscape: true
         })
     },350000)

    

})
    

