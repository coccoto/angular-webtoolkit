const logger = require(ROOT + '/server/core/Logger')
const TableController = require(ROOT + '/server/src/controllers/TableController')

module.exports = (app) => {
    
    app.route(['/', '/base-converter']).get((req, res, next) => {
        res.sendFile(ROOT + '/client/dist/webtoolkit/browser/index.html')
        return
    })

    app.route('/api/get/table/:tableName').post(async (req, res, next) => {
        const params = req.params

        try {
            const tableController = new TableController()
            await tableController.init()

            const result = await tableController.main(params.tableName)
            res.json({ result: result })
            return

        } catch (error) {
            logger.error('Error in /api/get/table/' + params.tableName + ' route. Error: ' + error.message)
            return
        } 
    })
}
