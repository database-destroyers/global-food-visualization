# Global Food Economics Visualization Tool
This is the code repository for the final project made for CIS4301.

## Getting Started
As a prerequisite for all steps, you will need to install [Node.js](https://nodejs.org/en/download)

### React Frontend Setup
1. Navigate to the `frontend` folder

    `cd frontend`
    
2. Install all packages

    `npm install`
    
3. Run the client application

    `npm start`
    
### Node.js Server Setup
1. Navigate to the `backend` folder

    `cd backend`
    
2. Install all packages

    `npm install`
    
3. Install the [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client/macos-intel-x86-downloads.html)

4. Unzip the instant file folder somewhere and make note of the path
    
5. Create a `.env` file and insert the following code, replacing <> with the appropriate Oracle credentials/path:

    ```
       NODE_ORACLEDB_USERNAME="<username>"
       NODE_ORACLEDB_PASSWORD="<password>"
       NODE_ORACLEDB_CONNECTSTRING="//oracle.cise.ufl.edu/orcl"
       ORACLE_CLIENT_DIR="<path_to_oracle_instant_client>"
    ```
6. Run the web server and go to [http://localhost/5000](http://localhost/5000)

    `node index.js`
