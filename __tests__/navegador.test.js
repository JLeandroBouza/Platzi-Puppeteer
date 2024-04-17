const puppeteer = require('puppeteer');
jest.setTimeout(35000);

describe('Mi primer test en puppeteer', () => {

    test('Debe de abrir y cerrar el navegador', async function () {
        
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.goto('https://google.com.ar/');
        await page.evaluate(() => {
            return new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
        });
        await page.waitForSelector('img');

        //recargar la pagina
        await page.reload();
        await page.waitForSelector('img');

        //navegar a otro sitio
        await page.goto('https://platzi.com/');
        await page.waitForSelector('body > main > header > div > figure > svg > g > path:nth-child(2)');

        //navegar hacia atras
        await page.goBack()
        await page.goForward()

        //abrir otra pagina

        const page2= await browser.newPage();
        await page2.goto('https://www.netflix.com/')


        await browser.close();
    });


});