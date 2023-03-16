const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

try {
    oracledb.initOracleClient({libDir: process.env.ORACLE_CLIENT_DIR});
} catch (err) {
    console.error('could not find oracle client');
    console.error(err);
    process.exit(1);
}

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("Successfully connected to Oracle Database!");

    const data = await connection.execute(
        "select table_name from user_tables"
    );
    console.log(data.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();