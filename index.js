import express from "express"
const app = express();
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from 'url';
import connectDb from "./db/connectDb.js";
import User from "./models/user.js"



// Asserts
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
// app.use(function(req,res,next){
//     res.locals.user = req.user
//     next()
// })


// View Engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Database Connection
const start = () => {
    try {
        connectDb("mongodb://localhost:27017/htmlForm")
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

start()

// Routes
app.get('/',(req,res) => {
    return res.render('home')
})
app.post('/',(req,res) => {
    const {fname,mname,lname,email,email1,email2,email3,email4,email5,number,number2,number3,number4,number5} = req.body;
    const user  = new User({
        name : {
            firstName : fname,
            middleName : mname,
            lastName : lname
        },
        email : {
            email1 : email,
            email2 : email2,
            email3 : email3,
            email4 : email4,
            email5 : email5,
        },
        number : {
            number1 : number,
            number2 : number2,
            number3 : number3,
            number4 : number4,
            number5 : number5,
        }
    })
    user.save()
    return res.redirect('user')
})
app.get('/user', async(req,res) => {
    const users = await User.find()
    res.render('user' ,{users})
})


// Port
const PORT  = 3000;
app.listen(PORT,() => console.log("Server Started"))