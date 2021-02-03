# Step 1
## base image for Step 1: Node 10
FROM node:10 AS builder
WORKDIR /app
## Copy all files to WORKDIR(/app)
COPY . .
## Build Nest.js project
RUN npm install
RUN npm run build


# Step 2
## base image for Step 2: ubuntu
FROM ubuntu:20.04
WORKDIR /app
## Set up Ubuntu
RUN apt-get update && apt-get upgrade
RUN apt-get install python3-pip ffmpeg
RUN pip3 install ffmpeg opencv-python requests

## Copy the project built in builder
COPY --from=builder /app ./
## Start application
CMD ["npm", "run", "start"]
EXPOSE 3000