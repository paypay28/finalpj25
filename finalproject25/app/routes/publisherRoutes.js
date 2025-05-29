const express = require('express')
const router = express.Router()

const { publisherDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/publisher/:publisher', (req, res)=> {
    dao.findBooksByPublisher(res, dao.table, req.params.publisher)
})


router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router