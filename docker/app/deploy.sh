docker rmi -f $(docker images -q)
docker tag my-demo:latest my-demo:previous
docker compose up -d --build