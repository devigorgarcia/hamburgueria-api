FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

RUN npm install -g @prisma/cli

# Bundle app source
COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]
