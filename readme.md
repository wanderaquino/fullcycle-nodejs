# Fullcycle Rocks!

## Overview
Repository for nodeJs challenge for Fullcycle program.

## Project Overview
- In database folder, we have the first sql script that is executed on mysql process start;
- In nodeApp folder, we have the express javascript file and the package.json file.
- In webserver folder, we have the nginx.conf file that is switched when container start;

## Get Started
 - You'll need to use Docker in the latest version installed on your preferred operating system (Windows or Linux).
 - Clone this repository;
 
## Usage
```
docker compose up -d
```
The command above will show:
```
Running 3/3
Container wcruz_mysql healthy
Container wcruznodeapp  Started
Container wcruz_nginx   Started 

```
Then, access on your browser: 
```
localhost:8080
```
And then, will show:

```
FullCycle Rocks!!
```