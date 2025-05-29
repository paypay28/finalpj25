const con = require('../../config/dbconfig')

const daoCommon = {

    findAll: (res, table)=> {
        con.execute(
            `select * from ${table};`,
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

    findById: (res, table, id)=> {
        con.execute(
            `select * from ${table} where ${table}_id = ${id};`,
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
    countAll: (res, table)=> {
        con.execute(
            `select count(*) count from ${table};`,
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

    create: (req, res, table)=> {

        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {

            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `insert into ${table} set ${fields.join(' = , ')} = ;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log(`${table}Dao error:`, error)
                    }
                }
            )
        }
    },
    
    update: (req, res, table)=> {
        const id = req.params.id

        if (isNaN(id)) {
            res.json({
                "error": true,
                "message": ""
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "true": ""
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE ${table} SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                [...values, id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(`${table}Dao error: `, error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    }

}

module.exports = daoCommon