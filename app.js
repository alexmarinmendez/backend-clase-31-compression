    const express = require('express')

    const app = express()
    const server = app.listen(8080, () => console.log('Server Up'))

    app.get('/', (req, res) => {
        res.send('Hello Qatar!!!'.repeat(100000))
    })