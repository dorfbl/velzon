# Use official Node.js image as base
FROM node:18 AS builder

# Install Git
RUN apt-get update && apt-get install -y git

# Set working directory
WORKDIR /app


# Clone or pull your Angular project from GitHub
RUN git clone https://github.com/dorfbl/velzon.git .

# Copy package.json and package-lock.jsongit 
COPY package*.json ./

# Install dependencies
RUN npm install

# Build Angular app
RUN npm run build --prod
