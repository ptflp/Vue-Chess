#!/bin/bash
git pull
docker build . -t chess
docker stop chess
docker run -p 80:8080 --rm --name chess chess