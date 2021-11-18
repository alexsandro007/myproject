const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const port = 3000;
const db = new sqlite3.Database('./db');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts/:id', (req, res)=>{
    const id = Number.parseInt(req.params.id);
    if(id){
        db.get('select * from posts where id=?', id, (error, post)=>{
            if(error){
                return res.status(404).send(error)
            }
            return res.json(post)
        })
    } else {
        return res.status(404).send('Post not found')
    }
})

app.get('/category/:tag', (req, res)=>{

    const tag = req.params.tag;
    if(tag){
        db.all('select * from posts where tag=?', tag, (error, post)=>{
            if(error){
                return res.status(404).send(error)
            }
            console.log(post)
            return res.json(post)
        })
    } else {
        return res.status(404).send('Post not found')
    }
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})