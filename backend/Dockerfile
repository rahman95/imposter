FROM node:14-alpine3.14

WORKDIR /app

COPY . .
COPY package.json .
COPY package-lock.json .

RUN apk upgrade --no-cache \
	&& apk add --no-cache --virtual deps-for-gyp python3 make g++ \
	&& npm i -g pm2 \
	&& npm ci --only=production \
	&& npm un npm -g \
	&& apk del deps-for-gyp \
	&& rm -f package* \
	&& rm -rf ~/.npm

CMD ["pm2-runtime", "index.js", "-i", "0"]
