# Dockerfile

# Use Node.js 20 base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start"]