# ims
Basic inventory management system API server for SWEN-789

## Dependencies
### Postgresql
Download and install version 10.x of [PostgreSQL](https://www.postgresql.org/download/)

### Node
Download and install version 6.x of [Node](https://nodejs.org/en/download/)

### Yarn
Download and install version 1.x of [Yarn](https://yarnpkg.com/en/docs/install)

## Setup
1. Initialize the Postgres database (coming soon)
2. Install the application dependencies: `yarn install`
3. Setup your local environment variables
    1. Create a `.env` in the root of the repo: `touch .env`
    2. Populate the file with the following key-value pairs:
    ```
    DB_HOST=localhost
    DB_USER=<YOUR_POSTGRES_USERNAME>
    DB_PASSWORD=<YOUR_POSTGRES_PASSWORD>
    ```
4. Verify that app runs: `NODE_ENV=local node .`
