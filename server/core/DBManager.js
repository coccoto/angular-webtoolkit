const mysql = require('mysql2/promise')
const logger = require(ROOT + '/server/core/Logger')
const dotenv = require('dotenv')

module.exports = class {

    constructor() {
        this.db = null
    }

    async connect() {
        try {
            const env = dotenv.config()

            if (env.error) {
                throw new Error(env.error)
            }

            const conn = await mysql.createConnection({
                host: env.parsed['HOST'],
                user: env.parsed['USER'],
                password: env.parsed['PASSWORD'],
                database: env.parsed['DATABASE'],
            })
            this.db = conn

        } catch (error) {
            logger.error('Failed to connect to database. Error: ' + error.message)
            throw error
        }
    }

    async select(query) {
        try {
            if (this.db === null) {
                throw new Error('Database connection is not established.')
            }
            const [rows] = await this.db.execute(query)
            return rows

        } catch (error) {
            logger.error('Failed to execute the SELECT. Error: ' + error.message)
            throw error;
        }
    }
}
