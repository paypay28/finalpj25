const express = require('express')
const server = express()
const helmet = require('helmet')
const router = require('./routes/router')
const cors = require('cors')
const port = process.env.port || 3003

server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
})
)

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))

    server.get('/api', (req, res)=> {
        res.json({
            'Books': `http://localhost:${PORT}/api/book`,
            'Authors': `http://localhost:${PORT}/api/author`,
            'Publishers': `http://localhost:${PORT}/api/publisher`,
            'Genres': `http://localhost:${PORT}/api/genre`,
            'Formats': `http://localhost:${PORT}/api/format`
        })
    })
    
server.use('/', router)
server.listen(port,()=> console.log(`it's been more than 6 months...${PORT}`))