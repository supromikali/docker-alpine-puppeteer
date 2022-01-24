# Simple config for puppeteer in docker-alpine

To build docker : `docker build -t docker-alpine/puppeteer .`

To run : `docker run -p 5000:3000 -d docker-alpine/puppeteer`

How to use : navigating to localhost:3000 in browser should print the title of the google.com page like on the screenshot below

![Screenshot from 2022-01-24 22-40-48](https://user-images.githubusercontent.com/22643362/150852791-6389c7dd-a329-4591-ac16-f9fd23f9b43d.png)
