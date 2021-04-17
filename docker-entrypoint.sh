#!/bin/sh

SLEEP 1M
echo 'Sleep off'

npx sequelize-cli db:create
echo 'Create DB'

npx sequelize-cli db:migrate
echo 'Migrate DB'

npm start