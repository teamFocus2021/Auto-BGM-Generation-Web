## base image : ubuntu
FROM ubuntu:20.04
WORKDIR /app

## Set up ubuntu and settings
RUN apt-get -y update && apt-get -y dist-upgrade
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata
RUN apt-get -y install python3-pip ffmpeg curl git nodejs npm yarn
RUN pip3 install ffmpeg opencv-python requests gcloud --upgrade google-cloud-storage httplib2

## Copy all files to WORKDIR(/app)
COPY . .

## npm install and build
RUN npm install
RUN npm run build

## Start application
EXPOSE 3000
CMD ["npm", "run", "start"]
