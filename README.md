# Simple config for puppeteer in docker-alpine

To build docker : `docker build -t docker-alpine/puppeteer .`

To run : `docker run -p 5000:3000 -d docker-alpine/puppeteer`

How to use : navigating to localhost:3000 in browser should print the title of the google.com page
