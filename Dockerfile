# Build stage
# FROM node:22-alpine AS build
FROM --platform=linux/arm64 node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000
CMD ["npm", "start"]
