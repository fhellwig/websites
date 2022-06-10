# Introduction

Application to serve one or more webapps.

# Getting Started

## Prerequisites

### Install optional build tools

**Linux:**

    sudo apt-get install -y build-essential

### Create dotenv file

    cp .env.sample .env

## Development

    npm install
    npm run watch

## Production

    npm install
    npm run build
    npm start

# Environment Variables

You can use a `.env` file to set these.

- `PORT`: the server port number
