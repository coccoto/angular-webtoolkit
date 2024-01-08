const winston = require('winston')
const dotenv = require('dotenv')

const env = dotenv.config()

if (env.error) {
    throw new Error(env.error)
}

const transports = () => {
    switch (env.parsed['ENVIRONMENT']) {
        case 'development':
            return [
                new winston.transports.Console(),
                new winston.transports.File({ filename: env.parsed['LOG_DIR'] + '/development.log' })
            ]
        case 'production':
            return [
                new winston.transports.File({ filename: env.parsed['LOG_DIR'] + '/production.log' })
            ]
        default:
            throw new Error("[ERROR] Invalid environment. env['ENVIRONMENT']: " + env.parsed['ENVIRONMENT']);
    }
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
    ),
    transports: transports()
})

module.exports = logger
