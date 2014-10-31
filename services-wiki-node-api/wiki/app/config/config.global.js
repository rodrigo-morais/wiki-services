var config = module.exports = {};

config.env = 'development';
config.port = process.env.PORT || 3000;
config.hostname = 'localhost';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || 'localhost:27017';
config.mongo.db = 'wiki_services_dev';