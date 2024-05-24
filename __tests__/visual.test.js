const { Dialog } = require('puppeteer');
const puppeteer = require('puppeteer');
const {getText,getCount} = require ('../Lib/helpers')
const { toMatchImageSnapshot} = require ('jest-image-snapshot')
expect.extend ({toMatchImageSnapshot})

//jest.setTimeout(35000);

describe ('Visual Testing',() =>{

    let browser
    let page
    
    beforeAll(async () =>{
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        page = await browser.newPage()
        await page.goto('http://platzi.com', {waitUntil: 'networkidle0'})
    },3500)

    afterAll(async() => {
        await browser.close()
    })

    it('Snapshot de toda la página', async () =>{

        await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot()

    },50000)

    it('Snapshot de solo un elemento', async () =>{

        const image = await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureTreshold: 0.05,
            failureThresholdType: 'percent'
        })
    },50000)

    it('Snapshot de un dispositivo movil', async () =>{

        const image = await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureTreshold: 0.05,
            failureThresholdType: 'percent'
        })
    },50000)
})