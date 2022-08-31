const express = require("express")
const app = express()
const hbs = require("express-handlebars")

const porta = process.env.porta || 3000

//configuração do handlebars
app.engine('hbs', hbs.engine({

    extname: 'hbs',
    defaultLayout: 'main'
})); app.set('view engine', 'hbs')


//criando rota principal

app.get("/", (req, res)=>{
    res.render('index')
})

app.listen(porta, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

