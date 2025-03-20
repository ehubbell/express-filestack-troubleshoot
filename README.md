# Overview
 An Express / Typescript base template for server-side apps.

# Requirements
- Node
- NPM
- Docker
- Mutagen
- Cert files
- Env file

# Quick start
- mutagen-compose up
- mutagen-compose up --build

# Features
- Docker
- Mutagen
- Lint
- Prettier
- Husky
- Express
- Typescript
- Jest
- License
- Readme

# Author
- Eric Hubbell
- [https://www.erichubbell.com](erichubbell.com)

# Notes


#### Troubleshooting
- npm install inside container


#### Certs
- brew install mkcert
- mkdir certs
- cd certs
- mkcert www.project.local localhost
- add www.project.local to your host file
- Update env file with path to cert


#### Docker



#### Docker compose
- docker-compose up
- docker-compose up -- build
- docker-compose build --no-cache
- docker-compose run service_name bash
- docker-compose images
- docker-compose ps
- docker-compose rm


#### Docker container
- docker container exec -it docker_container_name bash