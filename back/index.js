const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const port = 3000
const db = new sqlite3.Database('./db');
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res)=>{
    const sql = `select * from posts`
    db.all(sql, (error, posts)=>{
        if(error){
            return res.status(404).send(error)
        }
            return res.json(posts)
        })
    })

app.post('/posts', (req, res)=>{
    const attribute = req.body;
    console.log(attribute);
    return res.json(attribute)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})