const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
jest.setTimeout(35000);

describe ('Interactuando con los elementos',() =>{

    it('Debe de abrir y cerrar el navegador', async () =>{
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
    
    
    const page = await browser.newPage()
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

    //funcion listener para las alertas, asi acepta automaticamente.
    page.on('dialog', async (dialog) =>{
        await dialog.accept()
    })

    //click derecho

    await page.click('#authentication > span', {button: 'right', delay: 500})
    await page.evaluate(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
    });

    //doble click

    await page.click ('#authentication > button', {clickCount: 2, delay: 500 })
    await page.evaluate(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
    });

    // Ingresar valores en un input

    const page2 = await browser.newPage()
    await page2.goto('https://devexpress.github.io/testcafe/example/')
    await page2.type('#developer-name', 'Leandro', {delay: 100 })
    await page2.click(#remote-testing)
    await page2.click(#tried-test-cafe)
    await page2.click
    await page2.evaluate(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
    });

    

    await browser.close ()

    })

})