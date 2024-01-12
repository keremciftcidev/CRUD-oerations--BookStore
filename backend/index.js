import express, { json } from "express"
import mysql from "mysql"
import cors from "cors"


const app =express()


console.log('Before connection attempt');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Q532sc1gmb?",
    database: "test"
});
console.log('After connection attempt');

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.json("Hello this is the backend")
})

app.get("/books", (req,res)=>{
    const q ="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`)VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.listen(8800,()=>{
    console.log("Connected to backend!")
})