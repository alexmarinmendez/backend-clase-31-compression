    const express = require('express')
    const compression = require('compression')

    const app = express()
    app.use(compression({
        level: 6
    }))

    const server = app.listen(8080, () => console.log('Server Up'))

    app.get('/', (req, res) => {
        res.send('Hello Qatar!!!'.repeat(100000))
    })