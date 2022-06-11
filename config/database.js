const { Sequelize, DataTypes } = require('sequelize');

// exports.bootstrap = async () => {
// 	let connectionString = helper.env('POSTGRES_URL', `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/payment`);
// 	const sequelize = new Sequelize(connectionString);

// 	try {
//         await sequelize.authenticate();
//         console.log(`Database connection has been established successfully.`);
// 	} catch (e) {
// 		throw new Error(`Could not connect with ${connectionString}`);
// 	}
// };

/**
 * Initializing the database connection returning the db object for further operations
 */
const connectionString = helper.env('POSTGRES_URL', `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/payment`);
const sequelize = new Sequelize(connectionString);

const db = {};
db.Sequelize = Sequelize;
db.DataTypes = DataTypes;
db.sequelize = sequelize;

db.Card = require('../app/models/cards')(sequelize, DataTypes);
module.exports = db;