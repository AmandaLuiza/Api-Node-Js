// config inicial
const express = require("express")
const mongoose = require('mongoose')
const app = express()


// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


//rotas da API
const personRoutes = require('./routes.js/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar req

    res.json({message: 'Oi Express!'})

})

// senha 
// gCLl9JHPWpEdOQHa

// mongodb+srv://amanda:gCLl9JHPWpEdOQHa@apicluster.6yn21yd.mongodb.net/bancodaapi?retryWrites=true&w=majority

//entregar uma porta 
const DB_USER = 'amanda'
const DB_PASSWORD = encodeURIComponent('gCLl9JHPWpEdOQHa')

mongoose.
connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.6yn21yd.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
)

.then(() => {
    console.log("Conectando ao mongodb!")
    app.listen(3000)
})
.catch((err) => console.log(err))






