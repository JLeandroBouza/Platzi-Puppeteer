module.exports = {
    
    click: async function (page,selector,opt={}) {
        try{
            await page.waiForSelector(selector)
            await page.click(selector)

        }catch (e) {
            throw new Error(`Error al dar click en el selector: ${selector}`)

        }
    },

    doubleClick : async function (page,selector) {
        try{
            await page.waiForSelector(selector)
            await page.click(selector, { clickCount: 2 })

        }catch (e) {
            throw new Error(`Error al dar doble click en el selector: ${selector}`)

        }
    },

    getText: async function (page,selector) {
        try{
            await page.waiForSelector(selector)
            return await page.$eval(selector, (elemento)=> elemento.textContent)

        }catch (e) {
            throw new Error(`Error al obtener el texto el selector: ${selector}`)

        }
    },

    type: async function (page,selector,text, opts={}) {
        try{
            await page.waiForSelector(selector)
            await page.type(selector,text, opts)

        }catch (e) {
            throw new Error(`Error al escribir texto en el selector: ${selector}`)

        }
    },

    getCount : async function (page,selector) {
        try{
            await page.waiForSelector(selector)
            return await page.$$eval(selector, (elementos)=> elementos.lenght)

        }catch (e) {
            throw new Error(`Error al obtener la cantidad de elementos en el selector: ${selector}`)

        }
    },
}