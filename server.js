const express = require('express')
const bodyParser = require('body-parser')
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const session = require('express-session')

let salt = bcrypt.genSaltSync(10)

const userList = [
    {
        userName: 'noy',
        password: '123'
    }
]

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.post('/register', function (req, res) {
    const { userName, email, password } = req.body
    if (!userList.find(user => {
        console.log(userName)
        console.log(user.userName)
        console.log(user.userName === userName)
        return user.userName === userName
    })) {
        userList.push({ userName, email, password, id: v4() })
        res.json('successful registration')
        console.log(userList)
    } else {
        res.status(400).json({
            message: 'Error: username already in use'
        })
    }
})

app.post('/login', function (req, res) {
    const { userID, password } = req.body
    const loggedUser = userList.find(user => (user.userName || user.email) === userID && user.password === password)
    if (!loggedUser) {
        res.status(400).json({
            message: "Something went wrong, please try again."
        })
    }
    else {
        res.status(200).json({
            message: "Successfully logged in"
        })
    }
})

let server = app.listen(8080, () => {
    console.log('server is listening on port 8080')
})