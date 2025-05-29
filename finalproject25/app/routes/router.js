const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3003

router.get('/api', (req, res)=> {
    res.json({
        'Books':`http://localhost:${port}/api/book`,
        'Author':`http://localhost:${port}/api/author`,
        'Publisher':`http://localhost:${port}/api/publisher`,
        'Genre':`http://localhost:${port}/api/genre`,
        'Format':`http://localhost:${port}/api/format`,
    })
})

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`,require(`./api/${endpoint}Routes`))
})

module.exports = router