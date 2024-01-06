const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

module.exports = class {

    constructor() {
        this.db = null
    }

    async connect() {
        try {
            const env = dotenv.config().parsed

            if (env === undefined) {
                throw new Error('ERROR: Failed to load the .env file.')
            }

            const conn = await mysql.createConnection({
                host: env['HOST'],
                user: env['USER'],
                password: env['PASSWORD'],
                database: env['DATABASE'],
            })
            this.db = conn

        } catch (error) {
            console.error('ERROR: Failed to connect to database.')
            console.error(error.message)
            throw error
        }
    }

    async select(query) {
        try {
            if (this.db === null) {
                throw new Error('ERROR: Database connection is not established.')
            }
            const [rows] = await this.db.execute(query)
            return rows

        } catch (error) {
            console.error('ERROR: Failed to execute the SELECT.');
            console.error(error.message);
            throw error;
        }
    }
}
