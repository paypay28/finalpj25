const con = require('../../config/dbconfig')


const publisherDao = {
    table: 'publisher',

    findBooksByPublisher: (res, table, publisher) => {
        con.execute(
            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages, b.cover_image
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
            where p.publisher = '${publisher}'
            order by b.book_id;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR:', error)
                }
            }
        )
    }
}
