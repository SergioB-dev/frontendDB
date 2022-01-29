const { Client } = require('pg')

const client = new Client({ 
    host: 'localhost',
    user: 'shakur',
    port: 5432,
    password: 'rootUser',
    database: 'briar'
})

client.connect();

client.query('SELECT * FROM residents', (err, res) => { 
    if(!err) { 
        console.log(res.rows)
    } else { 
        console.log(err.message)
    }
    client.end;
});