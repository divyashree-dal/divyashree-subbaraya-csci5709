const express = require('express')

const app = express();

const userGetRoute = require('./api/routes/getUsers')

const userPostRoute = require('./api/routes/postUsers')

const userGetIdRoute = require('./api/routes/getUser')

const userPutRoute = require('./api/routes/putUsers')

const appRoute = '/api'

app.use(express.json());

app.use(express.static("public"))

app.use(appRoute + "/users", userGetRoute)

app.use(appRoute + "/users", userPostRoute)

app.use(appRoute + "/users", userGetIdRoute)

app.use(appRoute + "/users", userPutRoute)

module.exports = app;