#!/bin/bash

echo
echo [.] Starting all services
echo

export LOCAL_USER_ID=$(id -u)
export LOCAL_GROUP_ID=$(id -g)
docker compose -f docker-compose.common.yaml -f docker-compose.dev.yaml up penpal-server

echo
echo "[.] Execute the following commands to attach to stdout the container(s)"
echo 
echo docker compose -f docker-compose.common.yaml logs -f penpal-server
echo
echo [.] To shutdown the containers, run the following command
echo
echo ./stop-dev.sh
echo
