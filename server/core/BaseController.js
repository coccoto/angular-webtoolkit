const DBManager = require(ROOT + '/server/core/DBManager')

module.exports = class {

    async init() {
        this.dbManager = await new DBManager()
        await this.dbManager.connect()
    }
}