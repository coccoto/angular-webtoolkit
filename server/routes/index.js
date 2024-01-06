const TableController = require(ROOT + '/server/src/controllers/TableController')

module.exports = (app) => {
    app.route('*').get((req, res) => {
        res.sendFile(ROOT + '/client/dist/webtoolkit/browser/index.html')
        return
    })

    app.route('/api/get/table/:tableName').post(async (req, res) => {
        const params = req.params

        const tableController = new TableController()
        await tableController.init()
        const result = await tableController.main(params.tableName)

        res.json({ result: result })
        return
    })
}
