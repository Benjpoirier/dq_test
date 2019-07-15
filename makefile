install: install-modules install-docker

install-docker:
	echo "Installing Docker images"
	docker-compose up -d --no-recreate

install-modules:
	@(MAKE)
	@$(MAKE) -C api install