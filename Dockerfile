# Install node v14
FROM node:14

# Set the workdir /app
WORKDIR /app

# Copy the package.json to workdir
COPY package.json ./

# Run npm install - install the npm dependencies
RUN npm install --quiet

# Copy application source
COPY . .

# Expose application ports
EXPOSE 4200 9229

# Start the application
CMD ["npm", "run", "start-docker"]
