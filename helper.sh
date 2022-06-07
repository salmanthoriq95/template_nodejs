echo "usage : npm run [command]

Usage Commands : 

Deleting Directories
del:node_modules            deleting node_modules directory
del:mongo                   deleting mongoDb config, queries and mock,
del:mysql                   deleting mySql config, queries and mock,
del:knex                    deleting knex config, queries and mock,
del:redis                   deleting redis config, queries and mock,

Database Installation
db:install:mysql-only:      install mySql and delete all modules of db dependencies
db:install:mysql:           install mySql and redis then delete all modules of db dependencies
db:install:mongo-only:      install mongoDb and delete all modules of db dependencies
db:install:mongo:           install mySql and redis then delete all modules of db dependencies
db:install:knex-noredis:    install mySql and knex then delete all modules of db dependencies
db:install:knex:            install mySql, knex, and redis then delete all modules of db dependencies
db:install:redis-only:      install redis and delete all modules of db dependencies

Development Dependencies of DB installation
db:dev:uninstall:all        uninstall all DB modules in devDependencies,
db:dev:install:all          install all DB modules in devDependencies,

Development Mode
test:                       running unit test,
start:dev:win:              running app development mode in windows
start:dev:linux:            running app development mode in linux

Deploying
start:prod:win:             deploy app into windows OS
start:prod:linux:           deploy app into linux OS
"
