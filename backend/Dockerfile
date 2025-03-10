# Use an official Node.js image as a base (LTS version recommended)
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to optimize build cache)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5000 for incoming requests
EXPOSE 5000

# Start the application
CMD ["npm", "start"]