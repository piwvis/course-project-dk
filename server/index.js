const express = require("express");
const path = require('path');
const db = require("../models");
const {user} = require("../models");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/register_user", async(req, res) => {
   const {email, password, userName} = req.body
   const newUser = await user.create({
        userName: userName,
        password: password,
        email: email,
        status: "active",
        permission_id: 2
    })
    try {
        res.send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/login_user',async(req,res)=>{
    const authorizedUser = await user.findOne({ where : {userName : req.body.name }});
    if(user){
        if(req.body.password === authorizedUser.password ){
            res.send(authorizedUser);
        } else {
            res.status(400).json({ error : "Password Incorrect" });
        }
    }else{
        res.status(404).json({ error : "User does not exist" });
    }
});

app.get("/select", (req, res) => {
    user.findAll().then((users) => {
        res.send(users)}).catch((err) => {
            console.log(err)})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
});
