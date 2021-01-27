# Deploy Starterkit to local k8s

1- kubectl create namespace hopper
2- kubectl config set-context --current --namespace=hopper
3- apply k8s/secret kubectl create -f k8s/secret/secret.yaml
4- apply k8s/taskapi
5- apply k8s/postapi
6- apply k8s/webapp
7- kubectl get all








## Getting Started

### Prerequisites
