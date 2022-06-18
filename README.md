# Introduction

Application to serve one or more webapps.

# Getting Started

## Prerequisites

### Install optional build tools

    $ sudo apt-get install -y build-essential

### Create dotenv file

    $ cp .env.sample .env

Edit this file as required. See below for environment variables.

## Development

    npm install
    npm start

This will run `parcel` and serve files with hot reloading. Point your browser to `localhost:<PORT>` where `PORT` is the port number in the `.env` file (e.g., [`http://localhost:8080`](http://localhost:8080))

## Production

    npm install
    npm run build

Using [NGINX](https://www.nginx.com/) or equivalent, serve files from `dist` (i.e., make this your document root).

# Environment Variables

You can use a `.env` file to set these.

- `PORT`: used by parcel during development
