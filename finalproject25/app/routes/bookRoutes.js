const express = require('express')
const router = express.Router()

const { bookDao: dao } = require('../../daos/dao')

// localhost:3005/api/book
router.get('/', (req, res)=> {
    dao.findBooks(res, dao.table)
})



router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})


router.get('/binding/:binding', (req, res)=> {
    dao.findByBinding(res, dao.table, req.params.binding)
})



router.get('/language/:language', (req, res)=> {
    dao.findByLanguage(res, dao.table, req.params.language)
})



router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})


router.get('/:id', (req, res)=> {
    dao.findbookById(res, dao.table, req.params.id)
})


router.post('/post', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router