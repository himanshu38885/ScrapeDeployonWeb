FROM node:18-slim AS scraper

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV SCRAPE_URL=https://medium.com/}

RUN apt-get update && apt-get install -y  chromium fonts-liberation && apt-get clean

WORKDIR /app

COPY package.json .
RUN npm install

COPY scrape.js .
RUN node scrape.js || { echo "Scraping failed"; exit 1; } 

######stage2###
FROM python:3.10-slim AS host

WORKDIR /app
COPY --from=scraper /app/scraped_data.json .
COPY server.py .
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
CMD ["python", "server.py"]
