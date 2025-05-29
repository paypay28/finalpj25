const daoCommon = require('./common/daoCommon')

const bookDao = {
    ...daoCommon,
    ...require('./api/bookDao')
}

const authorDao = {
    ...daoCommon,
    ...require('./api/authorDao')
}

const publisherDao = {
    ...daoCommon,
    ...require('./api/publisherDao')
}

const genreDao = {
    ...daoCommon,
    ...require('./api/genreDao')
}

const formatDao = {
    ...daoCommon,
    ...require('./api/formatDao')
}





module.exports = {
    bookDao,
    authorDao,
    publisherDao,
    genreDao,
    formatDao
}