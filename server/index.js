const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static("publi"))
connect.use(bodyparser.urlencoded({ extended: true }))

let databaseconnection = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sudhar2206@",
    database: "travel"
})

connect.post('/tour', (request, response) => {
    let { fname, lname, phone, email, password } = request.body
    let sql = 'insert into tour(fname,lname,phone,email,username,password)values(?,?,?,?,?,?)'
    databaseconnection.query(sql, [fname, lname, phone, email, email, password, email], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.post('/login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from tour where username=?'
    databaseconnection.query(sql, [username], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let dusername = result[0].username
            let dpassword = result[0].password
            let id = result[0].id

            if (dusername === username && dpassword === password) {
                response.send({ "status": "success", "id": id })
            }
            else {
                response.send({ "status": "invalid_user" })
            }
        }
        else {
            response.send({ "status": "error" })
        }
    })
})
connect.post('/logform', (request, response) => {
    let { dname, vtype, vno, sdate, stime, edate, etime, ndays, open, close, total, tmile, cdetails, mobile, tdetails } = request.body
    let sql = 'insert into driverlog(dname,vtype,vno,sdate,stime,edate,etime,ndays,open,close,total,tmile,cdetails,mobile,tdetails)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [dname, vtype, vno, sdate, stime, edate, etime, ndays, open, close, total, tmile, cdetails, mobile, tdetails], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.get('/form/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from driverlog where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.post('/delete', (request, response) => {
    let id = request.body.id
    let sql = 'delete from driverlog where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let {dname, vtype, vno, sdate, stime, edate, etime, ndays, open, close, total, tmile, cdetails, mobile, tdetails}=request.body
    let sql='update driverlog set dname=?, vtype=?,vno=?,sdate=?,stime=?,edate=?,etime=?,ndays=?,open=?,close=?,total=?,tmile=?,cdetails=?,mobile=?,tdetails=? where id=?'
    databaseconnection.query(sql,[dname, vtype, vno, sdate, stime, edate, etime, ndays, open, close, total, tmile, cdetails, mobile, tdetails,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }    
        else{
            response.send({"status":"success"})
        }
    })
})
connect.listen(6868, () => {
    console.log("your server is running in a port number 6868")
})