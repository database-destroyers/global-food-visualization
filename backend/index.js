const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

try {
  oracledb.initOracleClient({libDir: process.env.ORACLE_CLIENT_DIR});
} catch (err) {
  console.error('could not find oracle client');
  console.error(err);
  process.exit(1);
}

const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => console.log("Backend Express API listening on port %s!", port));

app.get('/', (req, res) => {
  test(req, res);
});

async function test(req, res) {
  let connection;
  let data;
  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log("Successfully connected to Oracle Database!");

    data = await connection.execute(
        "select table_name from user_tables"
    );

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
    res.send(data.rows);
  }
}

