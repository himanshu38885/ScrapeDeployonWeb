const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const url = process.env.SCRAPE_URL ||'https://medium.com/';
	
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        const title = await page.title();
        const h1 = await page.$eval('h1', el => el.textContent.trim());

        const data = { url, title, h1 };
        fs.writeFileSync('/app/scraped_data.json', JSON.stringify(data));

        console.log('Scraping completed!');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
})();
