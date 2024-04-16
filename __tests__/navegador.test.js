const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async function () {
        const browser = await puppeteer.launch({
            headless: false,
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

        await browser.close();
    });


});