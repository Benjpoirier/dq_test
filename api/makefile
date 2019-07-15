PG_USER ?= postgres
PG_HOST ?= 127.0.0.1
PG_PORT ?= 5432

install: create-database

create-database:
	@echo "API - Create database"
	@createdb -U ${PG_USER} -h ${PG_HOST} -p ${PG_PORT}  dq_db || true

regenerate-database:
	@NODE_ENV=development $(MAKE) drop-database
	@NODE_ENV=development $(MAKE) create-database
	@NODE_ENV=development $(MAKE) migrate
	@NODE_ENV=development $(MAKE) database-seeds

drop-database:
	@echo "API - Drop database prod"
	@dropdb -U ${PG_USER} -h ${PG_HOST} -p ${PG_PORT} dq_db || true

migrate:
	@echo 'API - Running Migrations'
	@npx sequelize db:migrate \
		--models-path ./src/models/ \
		--migrations-path ./database/migrations/ \
		--config ./config/database.js

database-seeds: seeds-down seeds-up
	@echo 'Running seeds'

seeds-down:
	@npx sequelize db:seed:undo:all  \
	--seeders-path ./database/seeders/ \
	--config ./config/database.js

seeds-up:
	@npx sequelize db:seed:all \
	--seeders-path ./database/seeders/ \
	--config ./config/database.js

generate-seeder:
	@echo 'API - Creating the $(NAME) seeder'
	@npx sequelize seed:create --name $(NAME) \
		--seeders-path ./database/seeders/ \
		--config ./config/database.js

generate-migration:
	@echo 'API - Creating $(NAME) migration'
	@npx sequelize migration:create --name $(NAME) \
		--migrations-path ./database/migrations/ \
		--config ./config/database.js