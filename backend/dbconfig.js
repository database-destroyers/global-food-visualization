require('dotenv').config();
module.exports = {
    user: process.env.NODE_ORACLEDB_USERNAME,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTSTRING
};