const express = require('express')
const router = express.Router()


const { authorDao: dao } = require('../../daos/dao')

// localhost3005:/api/author
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})


router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/author/:author', (req, res)=> {
    dao.findBooksByAuthor(res, dao.table, req.params.author)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router