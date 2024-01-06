const ViewMenuModel = require(ROOT + '/server/src/models/ViewMenuModel')
const ViewMenu = require(ROOT + '/server/src/queries/viewMenu')

module.exports = class {

    constructor(dbManager) {
        this.dbManager = dbManager
    }

    async getViewMenu() {
        const result = await this.dbManager.select(ViewMenu.selectAll)
        const viewMenuModel = new ViewMenuModel(result[0])
        return viewMenuModel
    }
}
