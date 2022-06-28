.PHONY: start stop install no_targets__ list

## Variables d'environnement
DOCKER 			= docker
DOCKER_COMPOSE 	= $(DOCKER) compose
DOCKER_RUN 		= $(DOCKER_COMPOSE) run --rm
NPM 			= npm


## Listes les commandes de make
no_targets__:
list:
	sh -c "$(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort"

## Build les images
build:
	@$(DOCKER_COMPOSE) build

## Démarre les containers
start:
	@$(DOCKER_COMPOSE) up -d

down:
	@$(DOCKER_COMPOSE) down --remove-orphans

## Arrete les containers
stop:
	@$(DOCKER_COMPOSE) stop

## Install les dépendances de l'application (npm)
npm-install:
	$(DOCKER_RUN) node $(NPM) install

## Webpack (npm) Encore
npm-watch:
	$(DOCKER_RUN) node $(NPM) run watch
npm-dev:
	$(DOCKER_RUN) node $(NPM) run dev
npm-build:
	$(DOCKER_RUN) node $(NPM) run build