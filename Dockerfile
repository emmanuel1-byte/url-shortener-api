# Use the Node.js 18 Alpine image as the base
FROM node:18-alpine

# Install node-pre-gyp globally
RUN npm install -g node-pre-gyp

# Install rimraf globally
RUN npm install -g rimraf

# Create and set the working directory in the container
WORKDIR C:\Users\user\Desktop\project folder\BackendProjects\Url-shortener Backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the entire project to the working directory
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application (assuming the compiled JavaScript is in 'build' directory)
CMD ["npm", "start"]
