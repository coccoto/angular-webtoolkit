const BaseController = require(ROOT + '/server/core/BaseController')
const TableService = require(ROOT + '/server/src/services/TableService')

module.exports = class extends BaseController {

    async getViewMenu() {
        try {
            const tableService = new TableService(this.dbManager)
            const result = await tableService.getViewMenu()
            return result
        } catch (error) {
            this.logger.error('An exception occurred. Error: ' + error.message)
            throw error;
        }
    }

    async main(tableName) {
        try {
            switch (tableName) {
                case 'view-menu':
                    return await this.getViewMenu()
                default:
                    throw new Error('Invalid tableName.')
            }
        } catch (error) {
            this.logger.error('An exception occurred. Error: ' + error.message)
            throw error;
        }
        
    }
}
