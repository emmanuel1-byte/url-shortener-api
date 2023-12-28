# Base Image
FROM node:18-alpine 

WORKDIR C:\Users\user\Desktop\project folder\BackendProjects\Url-shortener Backend

COPY package*.json ./

COPY . .

RUN npm install 

CMD ["node", "src/index.js"]

EXPOSE 5000