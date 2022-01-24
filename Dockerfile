FROM node:14-alpine

RUN apk add --no-cache bash udev ttf-freefont chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN npm install puppeteer
RUN npm install express

COPY run.js run.js

CMD ["node", "run.js"]
