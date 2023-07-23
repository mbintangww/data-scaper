const express = require('express')
const cheeerio = require('cheerio')
const axios = require('axios')

const app = express()

url = "https://www.sciencedirect.com/browse/journals-and-books?subject=computer-science"
const getData = async (url) => {
    const response = await axios(url)
    const html = await response.data
    console.log(html)
    //const $ = cheerio.load(html)

}

app.listen(4000, () => {
    getData(url)
    console.log("succsesss")


})