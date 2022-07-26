const express = require('express');
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser =require ('body-parser')
const sequelize=require('./src/db/sequelize')
const app = express()
const port = 3900

app
.use(favicon(__dirname+'/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

sequelize.initDb()
//ici, nous placerons nos futurs points de terminaison
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePolemon')(app)
require('./src/routes/deletePokemon')(app)
app.use(({res}) =>{const message= 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL'
res.status(404).json({message})})

app.listen(port, () => console.log(`Notre application node est démarrée sur http://localhost:${port}`))
