# Use the official Node.js 14 image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the Svelte project
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the Svelte app
CMD [ "npm", "run", "dev" ]