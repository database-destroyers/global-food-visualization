const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

try {
  oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
} catch (err) {
  console.error('could not find oracle client');
  console.error(err);
  process.exit(1);
}

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("Backend Express API listening on port %s!", port));

app.get('/', (req, res) => {
  test(req, res);
});

//query 1
/*
How has the inflation rate developed for all commodities, 
selected commodity categories, or individual commodities over a 
given time period?
*/
app.post('/inflationRate', async (req, res) => {
  try {
    // Connect to the Oracle database
    console.log(req.body);
    const connection = await oracledb.getConnection(dbConfig);

    const startYear = req.body.startYear - 1;
    const endYear = req.body.endYear;

    let commodities = "";
    req.body.commodities.forEach((c, i) => {
      if (i === 0) {
        commodities = commodities.concat(`cm = '${c}'`);
      } else {
        commodities = commodities.concat(` OR cm = '${c}'`);
      }
    });

    // Construct SQL query
    const query = `SELECT cm AS "Commodity", c_year AS "Year", ROUND((c_price - p_price) / p_price * 100, 2) AS "Inflation (%)"
    FROM
        (
        SELECT cm, year AS c_year, AVG(price) AS c_price
        FROM GRICHARDS1.Commodity
        WHERE year <= ${endYear}
        AND year > ${startYear}
        AND (${commodities})
        GROUP BY year, cm
        ) JOIN (
        SELECT cm, year AS p_year, AVG(price) AS p_price
        FROM GRICHARDS1.Commodity
        WHERE year < ${endYear}
        AND year >= ${startYear}
        AND (${commodities})
        GROUP BY year, cm
        ) USING(cm)
    WHERE (c_year - p_year = 1)
    ORDER BY cm, c_year    
    `;

    // Execute the query
    const result = await connection.execute(query);

    // Retrieve results
    const rows = result.rows;

    // Send results as response
    res.json(rows);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//query 2
/*
How does the increase in price of a food commodity correlate with 
OVERALL food inflation in that country over a time period? Does it 
deviate from the general trend, and possibly indicate some sort of 
disruption?
*/
app.get('/priceInflationCorrelation', async (req, res) => {
  try {
    // Connect to the Oracle database
    const connection = await oracledb.getConnection(dbConfig);

    // Construct SQL query
    const query = `SELECT * FROM commodities WHERE countryName = Germany`;

    // Execute the query
    const result = await connection.execute(query);

    // Retrieve results
    const rows = result.rows;

    // Send results as response
    res.json(rows);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//query 3
/*
In country x, when was the crop yield of a selected commodity at its 
highest or lowest during years n-m? Can a trend pattern be detected when 
compared to commodity prices in the same time period? Can we observe 
common rises in food prices and changes in temperature, pesticide use, 
and rainfall? Do we see inverse relationships?
*/
app.get('/cropYield', async (req, res) => {
  try {
    // Connect to the Oracle database
    const connection = await oracledb.getConnection(dbConfig);

    // Construct SQL query
    const query = `SELECT * FROM commodities WHERE countryName = Germany`;

    // Execute the query
    const result = await connection.execute(query);

    // Retrieve results
    const rows = result.rows;

    // Send results as response
    res.json(rows);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//query 4
/*
How have increases in imports and exports for a food commodity x within 
a country y affected its price over a given time period? 
*/
app.get('/trade', async (req, res) => {
  try {
    // Connect to the Oracle database
    const connection = await oracledb.getConnection(dbConfig);

    // Construct SQL query
    const query = `SELECT * FROM commodities WHERE countryName = Germany`;

    // Execute the query
    const result = await connection.execute(query);

    // Retrieve results
    const rows = result.rows;

    // Send results as response
    res.json(rows);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//query 5
/*
How does factor x (crop production, government spending, etc.) correlate 
with the food price for a particular food item y, or basket of food items,
during a specific time interval n-m?
*/
app.get('/factorPriceCorrelation', async (req, res) => {
  try {
    // Connect to the Oracle database
    const connection = await oracledb.getConnection(dbConfig);

    // Construct SQL query
    const query = `SELECT * FROM commodities WHERE countryName = Germany`;

    // Execute the query
    const result = await connection.execute(query);

    // Retrieve results
    const rows = result.rows;

    // Send results as response
    res.json(rows);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
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

