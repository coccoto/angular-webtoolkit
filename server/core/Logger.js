const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')
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
                new DailyRotateFile({
                    filename: env.parsed['LOG_DIR'] + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        case 'production':
            return [
                new DailyRotateFile({
                    filename: env.parsed['LOG_DIR'] + '/%DATE%.log',
                    datePattern: 'YYYY-MM',
                }),
            ]
        default:
            throw new Error("[ERROR] Invalid environment. env['ENVIRONMENT']: " + env.parsed['ENVIRONMENT']);
    }
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.printf(({ level, message, timestamp }) => {
            return JSON.stringify({timestamp: timestamp, level: level, message: message})
        }),
    ),
    transports: transports()
})

module.exports = logger
