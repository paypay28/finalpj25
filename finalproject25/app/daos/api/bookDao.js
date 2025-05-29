const con = require('../../config/dbconfig')

const bookDao = {
    table: 'book',

    findBooks: (res, table)=> {
        con.execute(
            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages, b.cover_image
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
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
    },
    findbookById: (res, table, id)=> {
        let genres = []
        let formats = []

        con.execute(
            `select b.book_id, g.genre
            from book b
            join book_to_genre bg on b.book_id = bg.book_id
            join genre g on g.genre_id = bg.genre_id
            where b.book_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    Object.values(rows).forEach(obj => {
                        genres.push(obj.genre)
                    })

                    con.execute(
                `select b.book_id, f.format
            from book b
            JOIN book_to_format bf ON b.book_id = bf.book_id
            JOIN format f ON f.format_id = bf.format_id
            where b.book_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    Object.values(rows).forEach(obj => {
                        formats.push(obj.format)
                    })
                }
            }

                    )

                    con.execute(
                    `select b.book_id, b.title, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages, b.cover_image
                    from book b
                    join author a using (author_id)
                    join publisher p using (publisher_id)
                    where b.book_id = ${id};`,
                    (error, rows)=> {
                        rows.forEach(row => {
                            row.genres = genres
                            row.formats = formats
                        })
                        if (!error) {
                            if(rows.length === 1) {
                                res.json(...rows)
                            } else {
                                res.json(rows)
                            }
                        } else {
                            console.log(`Dao Error: ${table}`, error)
                        }
                    }
                    )
                } else {
                    console.log(error)
                }
            }
        )
    },
    findByBinding:(res, table, binding)=> {
        con.execute(
            `select ${table}.book_id, ${table}.title, a.author, p.publisher, ${table}.copyright_year, ${table}.edition, ${table}.edition_year, ${table}.binding, ${table}.rating, ${table}.language, ${table}.num_pages, ${table}.cover_image
            from ${table}
            join author a using (author_id)
            join publisher p using (publisher_id)
            where ${table}.binding = '${binding}'
            order by ${table}.book_id`,
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
    },
    findByLanguage:(res, table, language)=> {
        con.execute(
            `select ${table}.book_id, ${table}.title, a.author, p.publisher, ${table}.copyright_year, ${table}.edition, ${table}.edition_year, ${table}.binding, ${table}.rating, ${table}.language, ${table}.num_pages, ${table}.cover_image
            from ${table}
            join author a using (author_id)
            join publisher p using (publisher_id)
            where ${table}.language = '${language}'
            order by ${table}.book_id`,
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
    },
    sort: (res, table)=> {
        con.execute(
            `select ${table}.book_id, ${table}.title, a.author, p.publisher, ${table}.copyright_year, ${table}.edition, ${table}.edition_year, ${table}.binding, ${table}.rating, ${table}.language, ${table}.num_pages, ${table}.cover_image
            from ${table}
            join author a using (author_id)
            join publisher p using (publisher_id)
            order by a.author`,
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

module.exports = bookDao