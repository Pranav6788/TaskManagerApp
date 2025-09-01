# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --production

# Copy rest of backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "index.js"]



# FROM node:18-alpine

# # Create app directory
# WORKDIR /usr/src/app

# # Install dependencies
# COPY package*.json ./
# RUN npm install --production

# # Copy app source
# COPY . .

# # Expose backend port
# EXPOSE 5000

# CMD ["node", "index.js"]
