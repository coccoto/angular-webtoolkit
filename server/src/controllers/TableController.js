const BaseController = require(ROOT + '/server/core/BaseController')
const TableService = require(ROOT + '/server/src/services/TableService')

module.exports = class extends BaseController {

    async getViewMenu() {
        const tableService = new TableService(this.dbManager)
        const result = await tableService.getViewMenu()
        return result
    }

    async main(tableName) {
        switch (tableName) {
            case 'view-menu':
                return await this.getViewMenu()
            default:
                throw new Error('ERROR: Invalid tableName.')
        }
    }
}
